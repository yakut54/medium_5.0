<template>
  <div class="page">
    <drop-nav/>

    <div class="instructions inner-page">
      <app-header
          :title="!isSOSPage ? data[chapterName]?.title : 'SOS-ПРОГРАММЫ'"
          :backgroungImg="background"/>

      <div class="buttons-wrapper">

        <ButtonItem
            @on-close-all-seans-btns="toClose"
            v-for="(seans, idx) in seanses"
            :seans="seans"
            :idx="idx"/>

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
    toClose() {
      this.seanses.forEach(item => item.isOpen = false)
    }
  },
  data() {
    return {
      obj: ''
    }
  },
  computed: {
    data() {
      return this.data
    },
    ...mapState(['data', 'chapterName', 'defaultChapterName', 'isSOSPage']),
    background() {
      if (!this.isSOSPage) {
        return this.chapterName === ''
            ? this.defaultChapterName
            : this.chapterName
      } else {
        if (this.obj === '') {
          return 'chapter-0'
        } else {
          return this.obj
        }
      }
    },
    seanses() {
      if (!this.isSOSPage) {
        return this.chapterName === ''
            ? this.data[this.defaultChapterName].seanses
            : this.data[this.chapterName].seanses
      } else {
          if (this.obj === ''){
            return this.data['sos_programs'].chapters['chapter-0'].seanses
          } else {
            return this.data['sos_programs'].chapters[this.obj].seanses
          }
      }
    }
  },
  beforeMount() {
    if (!this.isSOSPage) {
      if (this.chapterName === '') {
        const chapter = localStorage.getItem('chapter-name') ?? this.defaultChapterName
        this.changeChapter(chapter)
      }
    } else {
      this.obj = localStorage.getItem('obj') ?? 'chapter-0'
    }

    window.scrollTo(0, 0)
  },
  // beforeUnmount() {
  //   if (this?.seanses) {
  //     console.log('this?.seanses in', this?.seanses)
  //   }
  // },
  components: {
    AppHeader,
    DropNav,
    ButtonItem
  }
}
</script>

