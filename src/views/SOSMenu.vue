<template>
  <div class="page">
    <drop-nav/>

    <div class="instructions inner-page">
      <app-header :title="data['sos_programs'].title" :backgroungImg="'sos_programs'"/>

      <div class="sos-btns-wrapper">
        <div
            @click="onChangePage(obj)"
            v-for="(item, obj) in chapters"
            class="sos-btn">
          <div class="sos-btn-text">
            <p v-html="item.title"></p>
          </div>
          <div class="sos-btn-img">
            <div class="inner-sos-btn-img">
              <img alt="" :src="require(`@/assets/images/img-${obj}.png`)"/>
            </div>
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
  name: "SOSMenu",
  methods: {
    ...mapMutations(['toggleIsSOSPage']),
    onChangePage(obj){
      localStorage.setItem('obj', obj)
      this.data['sos_programs'].chapters[obj].seanses.forEach(item => item.isOpen = false)
      this.$router.push(`/${obj}`)
    }
  },
  computed: {
    ...mapState(['data']),
    chapters() {
      return this.data['sos_programs'].chapters
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.toggleIsSOSPage(true)
  },
  components: {
    AppHeader,
    DropNav
  }
}
</script>

