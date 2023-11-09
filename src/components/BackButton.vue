<script>
export default {
  name: "BackButton"
}
</script>

<template>
  <img
      @click="$router.back()"
      src="@/assets/images/arrow.png"
      alt="" class="top-nav-back">
</template>
