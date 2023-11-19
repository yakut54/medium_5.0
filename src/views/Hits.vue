<template>
  <div class="page">
    <drop-nav/>

    <div class="hits inner-page">
      <app-header :title="'ХИТЫ 2023 ГОДА'" :backgroungImg="$route.name"/>

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

export default {
  name: "Hits",
  data() {
    return {
      tiles: [
        {
          title: `игуана`,
          link: `https://marta-ng.com/2023/iguana/nt.html`,
          subtitle: `Женская магическая практика, <br>невероятно сильная`
        },
        {
          title: `гипнотическая <br>прогрессия`,
          link: `https://marta-ng.com/2023/gipn_progressiya_2023/nt.html`,
          subtitle: `Глубинные изменения за 3 сеанса`
        },
        {
          title: `квантовый <br>гипноз`,
          link: `https://marta-ng.com/2023/kvantovyi_gipnoz/nt.html`,
          subtitle: `Матричная энерготерапия`
        },
        {
          title: `Разминирование <br>твоего прошлого`,
          link: `https://marta-ng.com/2022/razm_tvoego_proshlogo/nt.html`,
          subtitle: `Отмена состояний, <br>связанных с больным прошлым`
        },
        {
          title: `торпедо-терапия`,
          link: `https://marta-ng.com/2022/torpedo-terapia/nt.html`,
          subtitle: `Гипнотическое кодирование <br>на эталонное состояние здоровье`
        },
        {
          title: `метахилинг`,
          link: `https://marta-ng.com/2022/meta_hiling/nt.html`,
          subtitle: `Вылeчись силой слова`
        },
        {
          title: `Нейрокорректоры`,
          link: `https://marta-ng.com/2022/nk-nt/`,
          subtitle: `Прорыв 3-го тысячелетия`
        },
        {
          title: `Биодинамика`,
          link: ``,
          subtitle: `8 биодинамических упражнений <br>с эффектом перезагрузки`
        },
        {
          title: `гипнотическая <br>модернизация`,
          link: `https://marta-ng.com/2022/gipn_modernizaciya/nt.html`,
          subtitle: `Дизайн человеческих ресурсов`
        },
        {
          title: `уроки магии`,
          link: ``,
          subtitle: `Обучение с последующей <br>инициацией в действительные маги`
        },
        {
          title: `мгновенная <br>прогрессия`,
          link: `https://marta-ng.com/2022/mgnovennaya_progressiya_nt/`,
          subtitle: `В наилучшее состояние`
        },
        {
          title: `Переродительство`,
          link: `https://marta-ng.com/2022/pereroditelstvo/nt.html`,
          subtitle: `Исправление жизненного сценария`
        },
        {
          title: `сила тотема`,
          link: `https://marta-ng.com/2023/sila_totema/next-nt.html`,
          subtitle: `Сверхъестественный ресурс`
        },
        {
          title: `Формула молитвы`,
          link: `https://marta-ng.com/2022/formula_molitvy/nt.html`,
          subtitle: `9 прогрессивных инструментов <br>для новой жизни в новое время`
        },
        {
          title: `Денежная магия`,
          link: `https://marta-ng.com/denezhnaya_magia/nt.html`,
          subtitle: `Курс мгновенной магии <br>на примере денег`
        },
      ].reverse()
    }
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

