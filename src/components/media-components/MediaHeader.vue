<script>
export default {
  name: "MediaHeader"
}
</script>

<template>
  <div class="media-header">
    <div class="media-header-side">
      <back-button :theme="'light-arrow'"/>
    </div>
    <div class="media-header-center">
      <img alt="" src="@/assets/images/title_medium_light.png" class="media-title-img"/>
    </div>
    <div class="media-header-side"></div>
  </div>
</template>

