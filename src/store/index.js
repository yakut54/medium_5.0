import {createStore} from 'vuex'
import {btns} from "@/router/menu-btns"
import {data} from "@/store/data"
import router from "@/router"

export default createStore({
  state: {
    data,
    btns,
    isSOSPage: false,
    isDrop: false,
    isPlay: false,
    defaultChapterName: 'best_start_day',
    chapterName: '',
    regPattern: /<br( class="show_\d{3}")*>/
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
    openMediaView: (state, index) => {
      localStorage.setItem('index', `${index}`)
      const obj = localStorage.getItem('obj') || 'chapter-0'
      if(!state.isSOSPage){
        router.push(`/${state.chapterName}/${state.data[state.chapterName].seanses[index].type}`)
      } else {
        router.push(`/${state.chapterName}/${state.data['sos_programs'].chapters[obj].seanses[index].type}`)
      }

    },
    toggleIsDrop: (state, bool) => state.isDrop = bool,
    toggleIsSOSPage: (state, bool) => state.isSOSPage = bool,
    toggleIsPlay: (state, bool) => state.isPlay = bool,
    changeChapter: (state, chapter) => state.chapterName = chapter,
  },
})

