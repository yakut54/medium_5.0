<template>
  <div class="wrapper">
    <special-line/>
    <router-view/>
  </div>
<!--  <logger />-->
</template>

<style>
@import url(@/assets/css/styles.css);
@import url(@/assets/css/media.css);
</style>

<script>
import SpecialLine from "@/components/SpecialLine.vue";
// import Logger from "@/components/Logger.vue";

export default {
  components: {
    // Logger,
    SpecialLine
  }
}
</script>