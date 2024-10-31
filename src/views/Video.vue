<template>
  <div class="media">
    <media-header/>

    <div class="media-scene">

      <div class="media-title" v-html="seans.title"></div>
      <div class="recommendations paragraph-18">Сеанс принимай в наушниках. Это важно</div>

      <div class="video-wrapper">
        <video
          ref="video"
          :poster="seans.poster"
          :src="seans.source"></video>

        <div :class="['video-controller']">
          <a :href="seans.source" target="_blank" class="save-link-btn" title="Скачать">
            <i class="fa fa-download" aria-hidden="true"></i>
          </a>
          <div @click="fullscreenVideo" class="fullscreen" title="На весь экран">
            <i class="fa fa-arrows-alt" aria-hidden="true"></i>
          </div>

          <player :player="player" :src="seans.source"/>
        </div>
      </div>

    </div>

    <a :href="seans.outLink" class="dop-link-btn asb" v-html="seans.outLinkText"></a>
    <div class="under-text asb" v-html="seans.outUnderText"></div>
  </div>
</template>

<script>
import MediaHeader from "@/components/media-components/MediaHeader"
import Player from "@/components/media-components/Player"
import {mapMutations, mapState} from "vuex"
import {ref} from 'vue'

export default {
  setup() {
    const video = ref(null)
    const player = () => video.value

    const fullscreenVideo = () => {
      if (video.value) {
        video.value.requestFullscreen()
      }
    }

    return { video, player, fullscreenVideo }
  },
  data() {
    return {
      index: 0
    }
  },
  name: "Video",
  components: {Player, MediaHeader},
  computed: {
    ...mapState(['chapterName', 'data', 'defaultChapterName', 'isPlay']),
    seanses() {
      return this.chapterName === ''
          ? this.data[this.defaultChapterName].seanses
          : this.data[this.chapterName].seanses
    },
    seans() {
      return this.seanses[this.index]
    }
  },
  methods: {
    ...mapMutations(['changeChapter']),
  },
  mounted() {
    if (this.chapterName === '') {
      const chapter = localStorage.getItem('chapter-name') ?? this.defaultChapterName
      this.changeChapter(chapter)
    }

    this.index = localStorage.getItem('index') ?? 0

  }
}
</script>