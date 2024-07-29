import {
  nk,
  iguana,
  uroki_magii,
  biodinamika,
  sila_totema,
  meta_hiling,
  pereroditelstvo,
  torpedo_terapia,
  formula_molitvy,
  gipn_progressiya,
  kvantovyi_gipnoz,
  denezhnaya_magia,
  gipn_modernizaciya,
  razm_tvoego_proshlogo,
  mgnovennaya_progressiya, neiro_cibernetika, psihonautika,
} from './constants'

export const tiles = [
  {
    title: `игуана`,
    link: iguana,
    subtitle: `Женская магическая практика, <br>невероятно сильная`
  },
  {
    title: `гипнотическая <br>прогрессия`,
    link: gipn_progressiya,
    subtitle: `Глубинные изменения за 3 сеанса`
  },
  {
    title: `квантовый <br>гипноз`,
    link: kvantovyi_gipnoz,
    subtitle: `Матричная энерготерапия`
  },
  {
    title: `Разминирование <br>твоего прошлого`,
    link: razm_tvoego_proshlogo,
    subtitle: `Отмена состояний, <br>связанных с больным прошлым`
  },
  {
    title: `торпедо-терапия`,
    link: torpedo_terapia,
    subtitle: `Гипнотическое кодирование <br>на эталонное состояние здоровье`
  },
  {
    title: `метахилинг`,
    link: meta_hiling,
    subtitle: `Вылeчись силой слова`
  },
  {
    title: `Нейрокорректоры`,
    link: nk,
    subtitle: `Прорыв 3-го тысячелетия`
  },
  {
    title: `Биодинамика`,
    link: biodinamika,
    subtitle: `8 биодинамических упражнений <br>с эффектом перезагрузки`
  },
  {
    title: `гипнотическая <br>модернизация`,
    link: gipn_modernizaciya,
    subtitle: `Дизайн человеческих ресурсов`
  },
  {
    title: `уроки магии`,
    link: uroki_magii,
    subtitle: `Обучение с последующей <br>инициацией в действительные маги`
  },
  {
    title: `мгновенная <br>прогрессия`,
    link: mgnovennaya_progressiya,
    subtitle: `В наилучшее состояние`
  },
  {
    title: `Переродительство`,
    link: pereroditelstvo,
    subtitle: `Исправление жизненного сценария`
  },
  {
    title: `сила тотема`,
    link: sila_totema,
    subtitle: `Сверхъестественный ресурс`
  },
  {
    title: `Формула молитвы`,
    link: formula_molitvy,
    subtitle: `9 прогрессивных инструментов <br>для новой жизни в новое время`
  },
  {
    title: `Денежная магия`,
    link: denezhnaya_magia,
    subtitle: `Курс мгновенной магии <br>на примере денег`
  },
  {
    title: `Психонавтика`,
    link: psihonautika,
    subtitle: `<ul class="spec-ul">
          <li>Шаманские путешествия</li>
          <li>Шаманские путешествия</li>
          <li>Экспедиции в Высшие миры</li>
        </ul>`
  },
  {
    title: `Нейрокибернетика`,
    link: neiro_cibernetika,
    subtitle: `Трансформация высшей степени <br>за 4 недели`
  },
].reverse()