<template>
  <div class="page">
    <drop-nav/>

    <div class="instructions inner-page">
      <app-header :title="'ИНСТРУКЦИИ'" :backgroungImg="$route.name"/>
      <slider-carousel/>
      <instructions-descriptions/>
    </div>
  </div>
</template>

<script>
import DropNav from "@/components/DropNav"
import AppHeader from "@/components/AppHeader"
import SliderCarousel from "@/components/instructions-components/SliderCarousel"
import InstructionsDescriptions from "@/components/instructions-components/InstructionsDescriptions"

export default {
  name: "Instructions",
  mounted() {
    window.scrollTo(0, 0)
  },
  components: {
    InstructionsDescriptions,
    SliderCarousel,
    AppHeader,
    DropNav
  }
}
</script>

