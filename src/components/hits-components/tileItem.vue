<template>
  <a :href="tile.link" class="tile-item">
    <div class="tile-item-row row">
      <div class="tile-item-text">
        <div class="tile-item-title" v-html="tile.title"></div>
        <div class="tile-item-subtitle" v-html="tile.subtitle"></div>
      </div>
      <div class="tile-item-img">
        <img alt="" :src="require(`@/assets/images/tile_${idx}.png`)"/>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['tile', 'idx'],
}
</script>
