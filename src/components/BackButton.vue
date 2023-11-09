<script>
export default {
  name: "BackButton",
  props: ['theme']
}
</script>

<template>
  <img
      @click="$router.back()"
      :src="require(`@/assets/images/${theme}.png`)"
      alt="" class="top-nav-back">
</template>
