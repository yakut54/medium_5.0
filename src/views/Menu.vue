<template>
  <div class="menu">
    <div class="header-menu">
      <img alt="" src="@/assets/images/title_medium.png" class="header-menu-img"/>
      <h6 class="header-menu-text ar">Пополняемая платформа <br>аудиосеансов и видеосессий</h6>
      <h5 class="header-menu-title">
        <span class="header-menu-title-text ael">Исключительно для женщин</span>
        <div class="green-skew-fon"></div>
      </h5>
    </div>
    <div class="menu-body">
      <div class="menu-grid">

        <button
            v-for="(btn, idx) in btns"
            :class="[`btn_${idx}`, 'menu-button']"
            @click="onChangePage(btn.linkTo)">
          <img
              v-if="idx < 13"
              :alt="btn.title"
              class="menu-button-img"
              :src="require(`@/assets/images/btn_${idx}.png`)"/>
          <div class="menu-button-text asb" v-html="btn.title"></div>
        </button>

      </div>
    </div>
  </div>
</template>

<script>

import {mapMutations, mapState} from "vuex";

export default {
  name: 'Menu',
  computed: {
    ...mapState(['btns'])
  },
  methods: {
    ...mapMutations(['changePage', 'changeChapter', 'toggleIsSOSPage']),
    onChangePage(linkTo) {
      this.changePage(linkTo)
      this.changeChapter(linkTo)
    },
  },
  mounted() {
    localStorage.clear()
    this.changeChapter('')
    this.toggleIsSOSPage(false)
    window.scrollTo(0, 0)
  },
}
</script>
