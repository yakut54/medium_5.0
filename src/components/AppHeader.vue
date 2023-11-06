<template>
  <header
      ref="header"
      :class="[backgroungImg === 'best_end_day'
        ? 'best_end_day app-header'
        : 'app-header']"
      v-if="$route.name !== 'menu'"
      :style="{
        backgroundImage: `url(${require(`@/assets/images/${backgroungImg}.png`)}),
        radial-gradient(circle at 100%, rgba(255, 255, 255, .53), rgba(0, 0, 0, 0))`
      }">
    <div
        class="app-header-wrap-title"
        :style="{left}">
      <div class="app-header-title" v-html="title"></div>

    </div>
    <div v-if="backgroungImg === 'best_end_day'"
         class="app-header-title-mini asb"
         v-html="'МЕДИТАЦИИ ПЕРЕД СНОМ'"></div>
    <p v-if="backgroungImg === 'best_end_day'"
       class="paragraph-18 paragraph-18-1lh">Быстрое засыпание<br class="br">Глубокий сон всю ночь</p>
  </header>
</template>

<script>
import {mapState} from "vuex";

export default {
  props: ['backgroungImg', 'title'],
  data() {
    return {
      elem: null,
    }
  },
  computed: {
    ...mapState(['chapterName']),
    left() {
      let paddingLeft
      if (this.elem) {
        let pl = getComputedStyle(this.elem)['padding-left']
        paddingLeft = +pl.replace(/px/, '')
      }
      return `-${paddingLeft}px`
    }
  },
  mounted() {
    this.elem = this.$refs.header
  }
}
</script>

