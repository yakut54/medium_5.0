<script>
import {mapState} from 'vuex'
export default {
  name: "Logger",
  computed: mapState(['isSOSPage', 'chapterName'])
}
</script>

<template>
  <Teleport to="body">
    <div class="logger">
      <p class="paragraph-18">chapterName: {{chapterName}}</p>
      <p class="paragraph-18">isSOSPage: {{isSOSPage}}</p>
    </div>
  </Teleport>
</template>

<style scoped>
.logger{
  position: fixed;
  min-width: 300px;
  padding: 15px;
  top: 21px;
  right: 0;
  background: #fff;
  border: 1px dotted #636363;
}
</style>