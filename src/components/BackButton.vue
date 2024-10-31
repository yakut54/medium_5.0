<script>
import {mapMutations} from "vuex";

export default {
  name: "BackButton",
  props: ['theme'],
  methods: {
    ...mapMutations(['toggleIsDrop']),
    onToBack() {
      this.$router.back()
      this.toggleIsDrop(false)
    }
  }
}
</script>

<template>
  <img
      @click="onToBack"
      :src="require(`@/assets/images/${theme}.png`)"
      alt="" class="top-nav-back">
</template>
