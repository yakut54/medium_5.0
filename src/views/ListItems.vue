<template>
  <div class="page">
    <drop-nav/>

    <div class="instructions inner-page">
      <app-header
          :title="data[chapterName]?.title"
          :backgroungImg="background"/>


    </div>
  </div>
</template>

<script>

import DropNav from "@/components/DropNav"
import AppHeader from "@/components/AppHeader"
import {mapMutations, mapState} from "vuex";

export default {
  name: "ListItems",
  data() {
    return {
      title: '',
      defaultChapterName: 'best_start_day'
    }
  },
  methods: {
    ...mapMutations(['changeChapter'])
  },
  computed: {
    ...mapState(['data', 'chapterName']),
    background() {
      if (this.chapterName === '')
        return this.defaultChapterName
      else
        return this.chapterName
    }
  },
  mounted() {
    if (this.chapterName === '') {
      const chapter = localStorage.getItem('chapter-name')
          ?? this.defaultChapterName
      this.changeChapter(chapter)
    }
    this.title = this.data[this.chapterName].title

    window.scrollTo(0, 0)
  },
  components: {
    AppHeader,
    DropNav
  }
}
</script>

