<template>
  <div class="wrapper">
    <special-line/>
    <router-view/>
  </div>
</template>

<style>
@import url(@/assets/css/styles.css);
@import url(@/assets/css/media.css);
</style>

<script>
import SpecialLine from "@/components/SpecialLine.vue";

export default {
  components: {
    SpecialLine
  }
}
</script>