<template>
  <div class="page">
    <drop-nav/>

    <div class="instructions inner-page">
      <app-header :title="'НОВИНКИ ЭТОГО МЕСЯЦА'" :backgroungImg="$route.name"/>
      <div class="wrap-news-btns">

        <template v-if="newSeanses.length">
          <div
              @click="onChangePage(item.chapter, item.id)"
              class="news-btn"
              v-for="item in newSeanses"
          >
            <div class="news-btn-left">
              <p v-html="item.title"></p>
            </div>
            <div class="news-btn-right">
              <img :alt="item.title.replace(regPattern, '')" :src="item.img"/>
            </div>
          </div>

          <!--          <div-->
          <!--              @click="onChangePageTemp('chapter-2', `${url}__medium__/tracks/focusing.mp3`)"-->
          <!--              class="news-btn"-->
          <!--          >-->
          <!--            <div class="news-btn-left">-->
          <!--              <p v-html="'ФОКУСИНГ'"></p>-->
          <!--            </div>-->
          <!--            <div class="news-btn-right">-->
          <!--              <img alt="" src="https://api.selcdn.ru/v1/SEL_53369/mng/__medium__/images/focusing.png"/>-->
          <!--            </div>-->
          <!--          </div>-->
        </template>

        <div v-else class="app-header-title">
          Список новинок пуст
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import DropNav from '@/components/DropNav'
import AppHeader from '@/components/AppHeader'
import {mapMutations, mapState} from 'vuex'
import {url} from '@/store/constants'

export default {
  name: 'NewMenu',
  data() {
    return {
      url,
    }
  },
  computed: {
    ...mapState(['data', 'regPattern']),
    newSeanses() {
      return Object.entries(this.data)
          .flatMap(([key, value]) => (value?.seanses || [])
              .filter(item => item.isNew)
              .map(item => ({
                        id: item.source,
                        chapter: key,
                        img: item.img,
                        title: item.title,
                      }
                  ),
              ),
          )
    },
  },
  methods: {
    ...mapMutations(['changePage', 'changeChapter', 'toggleIsNews', 'changeNewId', 'toggleIsSOSPage']),
    onChangePage(linkTo, newId) {
      this.changeNewId(newId)
      this.changePage(linkTo)
      this.changeChapter(linkTo)
    },
    onChangePageTemp(linkTo, newId) {
      this.changeNewId(newId)
      this.changePage(linkTo)
      this.changeChapter(linkTo)
      localStorage.setItem('obj', 'chapter-2')
    },
  },
  mounted() {
    this.toggleIsNews(true)
    localStorage.setItem('obj', '')
    window.scrollTo(0, 0)
  },
  components: {
    AppHeader,
    DropNav,
  },
}
</script>

