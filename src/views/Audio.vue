<template>
  <div class="media">
    <media-header/>

    <div class="media-scene">

      <div class="img-box">
        <img
            :title="seans.title.replace(regPattern, '')"
            :alt="seans.title.replace(regPattern, '')"
            :src="seans.img" class="img-box-main-img"/>
        <a :href="seans.source" class="img-box-save" target="_blank"></a>
      </div>

      <div class="media-title" v-html="seans.title"></div>
      <div class="recommendations paragraph-18">Сеанс принимай в наушниках. Это важно</div>

      <audio :src="seans.source" ref="audio"></audio>
      <player :player="player" :src="seans.source"/>

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
    const audio = ref(null)
    const player = () => audio.value
    return {audio, player}
  },
  data() {
    return {
      index: 0
    }
  },
  name: "Audio",
  components: {Player, MediaHeader},
  computed: {
    ...mapState(['chapterName', 'data', 'defaultChapterName', 'regPattern']),
    seanses() {
      return this.chapterName === ''
          ? this.data[this.defaultChapterName].seanses
          : this.data[this.chapterName].seanses
    },
    seans() {
      return this.seanses[this.index]
    }
  },
  methods: mapMutations(['changeChapter']),
  mounted() {
    if (this.chapterName === '') {
      const chapter = localStorage.getItem('chapter-name') ?? this.defaultChapterName
      this.changeChapter(chapter)
    }

    this.index = localStorage.getItem('index') ?? 0
  }
}
</script>