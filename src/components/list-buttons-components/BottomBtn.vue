<template>
  <div class="bottom-list-button">
    <div class="embed-bottom" @click="test">
      <img
          class="list-bottom-img"
          :title="seans.title.replace(regPattern, '')"
          :alt="seans.title.replace(regPattern, '')"
          :src="seans.img"/>
      <div class="embed-description" v-html="seans.text"></div>

      <div class="list-bottom-footer">
        <div class="bottom-footer-side">
          <div class="inner-side">
            <img alt="" src="@/assets/images/uhi.png"/>
          </div>
        </div>
        <div class="bottom-footer-center">
          <p class="paragraph-20 center">{{seans.duration}}</p>
        </div>
        <div class="bottom-footer-side">
          <div class="inner-side">
            <img alt="" src="@/assets/images/play.png"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  props: ['seans'],
  name: "BottomBtn",
  computed: mapState(['regPattern', 'data', 'chapterName']),
  methods: {
    ...mapMutations(['openMediaView']),
    test() {
      const index = this.data[this.chapterName]?.seanses.indexOf(this.seans)
      this.openMediaView(index)
      localStorage.setItem('index', `${index}`)
    }
  }
}
</script>


