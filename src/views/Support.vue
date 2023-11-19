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
<!--          <div class="blue-button" @click="test2">Задать вопрос</div>-->
<!--          <div class="blue-button">Оставить отзыв</div>-->
<!--          <div class="blue-button">Заказать обратный звонок</div>-->
          <a :href="refLink" class="blue-button">НАПИСАТЬ В ПОДДЕРЖКУ</a>
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
  data(){
    return {
      isHover: false
    }
  },
  computed: {
    refLink(){
      return `https://marta-ng.ru/help2/?ref=${window.location.href}`
    }
  },
  methods: {
    test(){
      jivo_api.open({start : 'call'});
    },
    test2(){
      // jivo_api.showProactiveInvitation("How can I help you?");
      // jivo_api.open();
      console.log('Widget fully loaded', jivo_api);
    },
    onTouchstart(){
      this.isHover = true
    },
    huj(){
      jivo_onOpen()
    }
  },
  mounted() {
    window.scrollTo(0, 0)

  },
  components: {
    AppHeader,
    DropNav
  }
}
</script>

