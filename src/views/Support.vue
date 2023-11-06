<template>
  <div class="page">
    <drop-nav/>

    <div class="support inner-page">
      <app-header :title="'ПОДДЕРЖКА'" :backgroungImg="$route.name"/>

      <div class="support ph">
        <div class="inner-support">
          <p class="paragraph-18">
            При наличии вопросов в отношении этого приложения пиши в службу
            поддержки. Специалисты ответят в этот же день.
          </p>
          <br>
          <div class="blue-button">Задать вопрос</div>
          <div class="blue-button">Оставить отзыв</div>
          <div class="blue-button">Заказать обратный звонок</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropNav from "@/components/DropNav"
import AppHeader from "@/components/AppHeader"

export default {
  name: "Support",
  mounted() {
    window.scrollTo(0, 0)
  },
  components: {
    AppHeader,
    DropNav
  }
}
</script>

