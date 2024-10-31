<template>
  <div class="page">
    <drop-nav/>

    <div class="support inner-page">
      <app-header :title="'ПОДДЕРЖКА'" :backgroungImg="$route.name"/>

      <div class="support ph">
        <div class="inner-support">
          <p class="paragraph-18">
            При наличии вопросов в отношении <br class="br">
            этого приложения пиши в службу поддержки. <br class="br">
            Специалисты ответят в этот же день.
          </p>
          <br>
          <div class="blue-button" @click="openJivo('call')">
            <i class="fa fa-phone"></i>&nbsp;&nbsp;<span>Заказать обратный звонок</span>
          </div>
          <div class="blue-button" @click="openJivo('chat')">
            <i class="fa fa-comment"></i>&nbsp;&nbsp;<span>Задать вопрос в чате</span>
          </div>
          <a :href="refLink" class="blue-button">
            <i class="fa fa-support"></i>&nbsp;&nbsp;<span>НАПИСАТЬ В ПОДДЕРЖКУ</span>
          </a>
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
    openJivo(arg){
      let params = {start: arg};
      let apiResult = jivo_api.open(params);

      if (apiResult.result === 'fail') {
        console.log('Widget failed to open');
      } else {
        console.log('Widget open successfully');
        $jdiv.style.visibility = 'visible'
        jivo_api.setWidgetColor('#016c74', '#016c74');
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0)

    if(document.documentElement.querySelector('[class^="closeIcon_"]')){
      const $jclose = document.documentElement.querySelector('[class^="closeIcon_"]')
      $jclose.onclick = () => {
        setTimeout(() => {
          $jdiv.style.visibility = 'hidden'
        }, 300)
      }
    }
  },
  components: {
    AppHeader,
    DropNav
  }
}
</script>

