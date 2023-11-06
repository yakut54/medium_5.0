<template>
  <div class="drop-menu">
    <div class="top-nav">
      <div class="left-top-nav">
        <img
            @click="$router.back()"
            src="@/assets/images/arrow.png"
            alt="" class="top-nav-back">
      </div>
      <div class="center-top-nav">
        <img alt="" src="@/assets/images/title_medium.png" class="top-nav-title-medium"/>
      </div>
      <div class="right-top-nav">
        <i :class="['fa', isDrop ? 'fa-times' : 'fa-bars']" @click="toggleIsDrop"></i>
      </div>
    </div>
    <div :class="[isDrop ? 'drop-nav drop' : 'drop-nav']">

      <div
        class="nav-item"
        v-for="btn in dropBtn"
        @click="onChangePage(btn.linkTo)">{{ btn.title.replace(pattern, '') }}</div>

    </div>
  </div>

</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: "DropNav",
  data(){
    return {
      pattern: /<br class="show_\d{3}">/
    }
  },
  watch:{
    $route (to, from){
      if(this.$route.name === 'list-items'){
        this.changeChapter(this.$route.params.chapter)
      }
    }
  },
  methods: {
    ...mapMutations(['toggleIsDrop', 'changePage', 'changeChapter']),
    onChangePage(linkTo){
      this.changePage(linkTo)
      this.changeChapter(linkTo)
      this.toggleIsDrop()
    }
  },
  computed: {
    ...mapState(['isDrop', 'btns', 'chapterName']),
    dropBtn(){
      return this.btns.filter((item, idx) => {
        if (idx < 11) return item
      })
    }
  }
}
</script>
