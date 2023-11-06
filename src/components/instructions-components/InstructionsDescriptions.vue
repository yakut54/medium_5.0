<template>
  <div class="instructions-descriptions ph">

    <div class="instructions-descriptions-item" v-for="(desc, idx) in descriptions">
      <div class="instructions-descriptions-row row">
        <div class="instructions-descriptions-img">
          <img alt="" :src="require(`@/assets/images/instuctions-title-img-${idx + 1}.png`)"/>
        </div>
        <div class="instructions-descriptions-title">
          <div class="carousel-row-title abold" v-html="desc.title"></div>
        </div>
      </div>
      <div class="instructions-descriptions-text">
        <p class="paragraph-18" v-html="desc.text"></p>
      </div>
    </div>

  </div>
</template>

<script>
import {descriptions} from "@/components/instructions-components/descriptions";
export default {
  name: "InstructionsDescriptions",
  data(){
    return {descriptions}
  }
}
</script>