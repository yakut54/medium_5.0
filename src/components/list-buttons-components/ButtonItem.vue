<template>
  <div class="list-button"
       :class="seans.isStandart ? 'list-button' : 'list-button no-standart'">
    <!--top-btn-->
    <div :id="`id_${idx}`"
         @click="toggleOpen(idx)"
         :class="seans.isOpen
           ? 'top-list-button active'
           : 'top-list-button'">
      <div class="left-button" v-if="seans.isNew">NEW</div>
      <div class="left-button" v-if="!seans.isStandart">
        <img
          :title="seans?.title.replace(regPattern, '')"
          :alt="seans?.title.replace(regPattern, '')"
          :src="seans?.img"/>
      </div>
      <div class="center-button">
        <p v-html="seans.title"></p>
      </div>
      <div class="right-button">
        <cross/>
      </div>
    </div>
    <!--bottom-btn-->
    <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
      <div
          class="bottom-list-button"
          v-if="!seans.isStandart"
          v-show="seans.isOpen"
          v-html="seans.content"></div>
      <bottom-btn
          v-else
          v-show="seans.isOpen"
          :seans="seans"/>
    </transition>

  </div>
</template>

<script>
import $ from 'jquery'
import Cross from "@/components/list-buttons-components/Cross";
import BottomBtn from "@/components/list-buttons-components/BottomBtn";
import {mapState} from "vuex";

export default {
  components: {BottomBtn, Cross},
  props: ['seans', 'idx'],
  emits: ['on-close-all-seans-btns'],
  name: "Button",
  computed: mapState(['regPattern']),
  methods: {
    enter(el) {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = 0
      getComputedStyle(el)
      setTimeout(() => el.style.height = height)
    },
    afterEnter(el) {
      el.style.height = 'auto'
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height;

      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    },
    toggleOpen(idx) {

      const elem = document.getElementById(`id_${idx}`)
      const isMiddlePhone = () => document.documentElement.clientWidth <= 500
      const isMiniPhone = () => document.documentElement.clientWidth <= 414
      const h = isMiniPhone() ? 50 : isMiddlePhone() ? 60 : 80

      setTimeout(() => {
        $('html, body').animate({scrollTop: $(elem).offset().top - h}, 300)
      }, 400)

      if (this.seans.isOpen) {
        this.seans.isOpen = false
      } else {
        this.$emit('on-close-all-seans-btns')
        this.seans.isOpen = !this.seans.isOpen
      }

    },
  }
}
</script>

<style>
.expand-enter-active,
.expand-leave-active {
  transition: height .3s ease-in-out;
  overflow: hidden;
}
</style>