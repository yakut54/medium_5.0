<template>
  <div class="page">
    <drop-nav/>

    <div class="hits inner-page">
      <app-header :title="'Хиты этого года'" :backgroungImg="$route.name"/>

      <div class="tiles">
        <tile-item v-for="(tile, idx) in tiles" :tile="tile" :idx="idx"/>
      </div>
    </div>
  </div>
</template>

<script>
import DropNav from "@/components/DropNav"
import AppHeader from "@/components/AppHeader"
import TileItem from "@/components/hits-components/tileItem.vue";
import {tiles} from "@/store/tiles";

export default {
  name: "Hits",
  data() {
    return { tiles }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  components: {
    TileItem,
    AppHeader,
    DropNav
  }
}
</script>

