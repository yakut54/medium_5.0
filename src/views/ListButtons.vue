<template>
  <div class="page">
    <drop-nav/>

    <div class="instructions inner-page">
      <app-header
          :title="data[chapterName]?.title"
          :backgroungImg="background"/>

      <div class="buttons-wrapper">

        <ButtonItem
          @on-close-all-seans-btns="toClose"
          v-for="(seans, idx) in seanses"
          :seans="seans"
          :idx="idx" />

      </div>
    </div>
  </div>
</template>

<script>

import DropNav from "@/components/DropNav"
import AppHeader from "@/components/AppHeader"
import ButtonItem from "@/components/list-buttons-components/ButtonItem"
import {mapMutations, mapState} from "vuex"

export default {
  name: "ListItems",
  methods: {
    ...mapMutations(['changeChapter']),
    toClose(){
      this.seanses.forEach(item => item.isOpen = false)
    }
  },
  computed: {
    data() {
      return data
    },
    ...mapState(['data', 'chapterName', 'defaultChapterName']),
    background() {
      return this.chapterName === ''
          ? this.defaultChapterName
          : this.chapterName
    },
    seanses() {
      return this.chapterName === ''
          ? this.data[this.defaultChapterName].seanses
          : this.data[this.chapterName].seanses
    }
  },
  mounted() {
    if (this.chapterName === '') {
      const chapter = localStorage.getItem('chapter-name') ?? this.defaultChapterName
      this.changeChapter(chapter)

      console.log('this.chapterName >>>', this.chapterName)
    }

    window.scrollTo(0, 0)
  },
  beforeUnmount() {
    this.seanses.forEach(item => item.isOpen = false)
  },
  components: {
    AppHeader,
    DropNav,
    ButtonItem
  }
}
</script>

