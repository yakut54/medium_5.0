import {createStore} from 'vuex'
import {btns} from "@/store/menu-btns"
import {data} from "@/store/data"
import router from "@/router"

export default createStore({
  state: {
    data,
    btns,
    isDrop: false,
    chapterName: ''
  },
  mutations: {
    changePage: (state, linkTo) => {
      if (linkTo !== 'hits'
        && linkTo !== 'support'
        && linkTo !== 'instructions'
        && linkTo !== 'new-menu') {
        localStorage.setItem('chapter-name', linkTo)
      }
      router.push(`/${linkTo}`)
    },
    toggleIsDrop: state => state.isDrop = !state.isDrop,
    changeChapter: (state, chapter) => state.chapterName = chapter,
  },
})

