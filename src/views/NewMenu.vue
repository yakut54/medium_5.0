<template>
  <div class="page">
    <drop-nav/>

    <div class="instructions inner-page">
      <app-header :title="'НОВИНКИ ЭТОГО МЕСЯЦА'" :backgroungImg="$route.name"/>
      <div class="wrap-news-btns">

        <div
            @click="onChangePage(item.chapter)"
            class="news-btn"
            v-for="item in newSeanses">
          <div class="news-btn-left">
            <p v-html="item.title"></p>
          </div>
          <div class="news-btn-right">
            <img :alt="item.title.replace(regPattern, '')" :src="item.img"/>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import DropNav from "@/components/DropNav"
import AppHeader from "@/components/AppHeader"
import {mapMutations, mapState} from "vuex";

export default {
  name: "NewMenu",
  computed: {
    ...mapState(['data', 'regPattern']),
    newSeanses() {
      let b = []

      Object.entries(this.data).forEach(([key, value]) => {
        value.seanses.forEach(item => {
          if(item.isNew){
            b.push({
              chapter: key,
              img: item.img,
              title: item.title
            })
          }
        })
      })

      return b
    }
  },
  methods: {
    ...mapMutations(['changePage', 'changeChapter']),
    onChangePage(linkTo) {
      this.changePage(linkTo)
      this.changeChapter(linkTo)
    },
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  components: {
    AppHeader,
    DropNav
  }
}
</script>

