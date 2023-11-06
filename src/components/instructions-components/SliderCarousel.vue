<template>
  <div class="wrap-padding-slider">
    <div class="slider-carousel">
      <div class="top-slider-carousel">

        <!--1-->
        <transition :name="transitionName">
          <div class="slide-item" v-if="currentSlide === 0" @touchstart="touchstart($event)" @touchend="touchend($event)">
            <div class="instructions-content">
              <div class="carousel-title">‍Добро пожаловать!</div>

              <div class="paragraph-18">
                <br>
                У тебя в руках бесплатный пополняемый каталог <br>
                «Медитации с проводником». Это уникальный инструмент, <br>
                при помощи которого ты можешь достигать наилучшего <br>
                состояния в основных сферах жизни. Мы постарались <br>
                сделать этот инструмент максимально удобным и практичным. <br>
                Посмотри, как им пользоваться →
              </div>
            </div>

          </div>
        </transition>
        <!--2-->
        <transition :name="transitionName">
          <div class="slide-item" v-if="currentSlide === 1" @touchstart="touchstart($event)" @touchend="touchend($event)">
            <div class="instructions-row row">
              <div class="instructions-content">
                <div class="carousel-row-title abold">ПОДБОР СЕАНСОВ</div>
                <div class="paragraph-18">
                  В главном меню расположены тематические <br>
                  иконки. Обращаясь к ним, выбери тему,  <br>
                  наиболее подходящую для текущей обстановки  <br>
                  и отвечающую твоим текущим задачам.  <br>
                  Обращения к иконкам открывают тематические <br>
                  разделы, где можно выбрать тот сеанс, <br>
                  который нужен тебе в данный момент
                </div>
              </div>
              <div class="instructions-img">
                <img alt="" src="../../assets/images/sl_1.png"/>
              </div>
            </div>
          </div>
        </transition>
        <!--3-->
        <transition :name="transitionName">
          <div class="slide-item" v-if="currentSlide === 2" @touchstart="touchstart($event)" @touchend="touchend($event)">
            <div class="instructions-row row">
              <div class="instructions-content">
                <div class="carousel-row-title abold">ПОЗИЦИЯ</div>
                <div class="paragraph-18">
                  Принимая сеансы, находись в том положении, <br>
                  в каком тебе удобно и привычно отдыхать. <br>
                  Ум и тело неразделимы, поэтому удобство  <br>
                  одного обеспечивает комфорт другого, <br>
                  и это залог состояния потока, самого  <br>
                  продуктивного состояния из всех возможных
                </div>
              </div>
              <div class="instructions-img ph">
                <img alt="" src="@/assets/images/sl_2.png"/>
              </div>
            </div>
          </div>
        </transition>
        <!--4-->
        <transition :name="transitionName">
          <div class="slide-item" v-if="currentSlide === 3" @touchstart="touchstart($event)" @touchend="touchend($event)">
            <div class="instructions-row row">
              <div class="instructions-content">
                <div class="carousel-row-title abold">ГЛАЗА</div>
                <div class="paragraph-18">
                  ‍Многие считают, что нужного состояния <br>
                  можно достичь только с закрытыми глазами.  <br>
                  Необязательно. Поэтому на некоторых сеансах  <br>
                  передаются инструкции быть с открытыми  <br>
                  глазами, что позволяет поддерживать  <br>
                  оптимальную степень  осознанности. Следуй <br>
                  этим инструкциям, и у тебя  станет всё <br>
                  лучше получаться удерживать одновременный <br>
                  контакт с 2-мя мирами: внешним и внутренним
                </div>
              </div>
              <div class="instructions-img ph">
                <img alt="" src="@/assets/images/sl_3.png"/>
              </div>
            </div>
          </div>
        </transition>
        <!--5-->
        <transition :name="transitionName">
          <div class="slide-item" v-if="currentSlide === 4" @touchstart="touchstart($event)" @touchend="touchend($event)">
            <div class="instructions-row row">
              <div class="instructions-content">
                <div class="carousel-row-title abold">КОНЦЕНТРАЦИЯ</div>
                <div class="paragraph-18">
                  Концентрация внимания, обеспечиваемая <br>
                  на сеансах, является одним из основных  <br>
                  факторов получения заявленных эффектов.  <br>
                  Таким образом, твое внимание является  <br>
                  инициатором преобразующих процессов, <br>
                  а проводит их и доводит до результата  <br>
                  исполнительская сила: ваше подсознание
                </div>
              </div>
              <div class="instructions-img ph">
                <img alt="" src="@/assets/images/sl_4.png"/>
              </div>
            </div>
          </div>
        </transition>
        <!--6-->
        <transition :name="transitionName">
          <div class="slide-item" v-if="currentSlide === 5" @touchstart="touchstart($event)" @touchend="touchend($event)">
            <div class="instructions-row row">
              <div class="instructions-content">
                <div class="carousel-row-title abold">ДЫХАНИЕ</div>
                <div class="paragraph-18">
                  ‍Наблюдение за дыханием – лучший способ <br>
                  осознания себя в настоящий момент. <br>
                  Не стоит управлять дыханием, лучше <br>
                  позволять своему дыханию самостоятельно  <br>
                  выбирать ритм и глубину, ориентируясь <br>
                  на процессы в разуме и в теле
                </div>
              </div>
              <div class="instructions-img ph">
                <img alt="" src="@/assets/images/sl_5.png"/>
              </div>
            </div>
          </div>
        </transition>
        <!--7-->
        <transition :name="transitionName">
          <div class="slide-item" v-if="currentSlide === 6" @touchstart="touchstart($event)" @touchend="touchend($event)">
            <div class="instructions-row row">
              <div class="instructions-content">
                <div class="carousel-row-title abold">МЫСЛИ</div>
                <div class="paragraph-18">
                  ‍Не пытайся остановить поток мыслей, <br>
                  это только увеличивает их количество <br>
                  и интенсивность. Сознание само очищается <br>
                  от мыслей, когда вступает во взаимодействие <br>
                  с бессознательным – и наступает режим  <br>
                  безмыслия: когда разум не мыслит, а просто  <br>
                  открывается невербальному знанию
                </div>
              </div>
              <div class="instructions-img ph">
                <img alt="" src="@/assets/images/sl_6.png"/>
              </div>
            </div>
          </div>
        </transition>
        <!--8-->
        <transition :name="transitionName">
          <div class="slide-item" v-if="currentSlide === 7" @touchstart="touchstart($event)" @touchend="touchend($event)">
            <div class="instructions-row row">
              <div class="instructions-content">
                <div class="carousel-row-title abold">ЭМОЦИИ</div>
                <div class="paragraph-18">
                  ‍В контакте со своей сердцевиной становится <br>
                  ясно, что эмоции – это сигналы души.  <br>
                  Положительными эмоциями душа хвалит:  <br>
                  «Молодец, так держать!»; отрицательными  <br>
                  душа сигналит: «Остановись, ты гребёшь  <br>
                  не туда!». Когда эмоциональный фон ровный,  <br>
                  нейтральный, это значит, что ты находишься <br>
                  на пути, который одобряет твоя душа.
                </div>
              </div>
              <div class="instructions-img ph">
                <img alt="" src="@/assets/images/sl_7.png"/>
              </div>
            </div>
          </div>
        </transition>
        <!--9-->
        <transition :name="transitionName">
          <div class="slide-item" v-if="currentSlide === 8" @touchstart="touchstart($event)" @touchend="touchend($event)">
            <div class="instructions-row row">
              <div class="instructions-content">
                <div class="carousel-row-title abold">УДОВОЛЬСТВИЕ</div>
                <div class="paragraph-18">
                  ‍Это естественное состояние, пока разум <br>
                  спокоен и сбалансирован. Когда ты получаешь  <br>
                  удовольствие, ты находишься в неуязвимом  <br>
                  состоянии.
                </div>
              </div>
              <div class="instructions-img ph">
                <img alt="" src="@/assets/images/sl_8.png"/>
              </div>
            </div>
          </div>
        </transition>
        <!--10-->
        <transition :name="transitionName">
          <div class="slide-item" v-if="currentSlide === 9" @touchstart="touchstart($event)" @touchend="touchend($event)">
            <div class="instructions-row row">
              <div class="instructions-content">
                <div class="carousel-row-title abold">ОПТИМАЛЬНЫЙ РЕЖИМ</div>
                <div class="paragraph-18">
                  ‍Рекомендуется включить практику обращения <br>
                  к этой программе в свой привычный уклад, <br>
                  отводя этому время не реже 3-х раз в неделю, <br>
                  а лучше каждый день. Такой режим является  <br>
                  оптимальным для гарантии получения <br>
                  результатов, заявленных в каждом сеансе
                </div>
              </div>
              <div class="instructions-img ph">
                <img alt="" src="@/assets/images/sl_9.png"/>
              </div>
            </div>
          </div>
        </transition>

      </div>
      <div class="bottom-slider-carousel">
        <div class="left-bottom-slider-carousel" @click="dPrev" :class="{'not-visible': !krasnayaStrelka2}"></div>
        <div class="center-bottom-slider-carousel">
          <div
              @click="btnDot(idx)"
              v-for="(item, idx) in slData"
              :class="dotActive(idx)"
              class="dot">
            {{ idx + 1 }}
          </div>
        </div>
        <div class="right-bottom-slider-carousel" @click="dNext" :class="{'not-visible': !krasnayaStrelka}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderCarousel",
  data() {
    return {
      slData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentSlide: 0,
      isClick: true,
      transitionName: 'next',
      t: 700,
      touchStartPx: 0,
      touchEndPx: 0
    }
  },
  methods: {
    btnDot(idx) {
      idx > this.currentSlide ? this.transitionName = 'next' : this.transitionName = 'prev';
      if (this.isClick) {
        this.isClick = false;
        this.currentSlide = idx;
        setTimeout(() => this.isClick = true, this.t);
      }
    },
    dNext() {
      if (this.isClick) {
        this.transitionName = 'next';
        this.isClick = false;
        if (this.currentSlide === this.slData.length - 1) {
          this.currentSlide = this.slData.length - 1;
        } else {
          this.currentSlide++;
        }
        setTimeout(() => this.isClick = true, this.t);
      }
    },
    dPrev() {
      if (this.isClick) {
        this.transitionName = 'prev';
        this.isClick = false;
        if (this.currentSlide === 0) {
          this.currentSlide = 0;
        } else {
          this.currentSlide--;
        }
        setTimeout(() => this.isClick = true, this.t);
      }
    },
    dotActive(idx) {
      return idx === this.currentSlide ? 'active' : '';
    },
    touchstart(e) {
      this.touchStartPx = e.changedTouches[0].clientX;
    },
    touchend(e) {
      this.touchEndPx = e.changedTouches[0].clientX;

      if (this.touchEndPx > this.touchStartPx + 30)
        this.dPrev();
      if (this.touchEndPx < this.touchStartPx - 30)
        this.dNext();
    }
  },
  computed: {
    krasnayaStrelka2() {
      return this.currentSlide !== 0;
    },
    krasnayaStrelka() {
      return this.currentSlide !== this.slData.length - 1;
    }
  }
}
</script>

<style>
.next-enter-active,
.next-leave-active {
  transition: all .7s ease-in-out;
}
.next-enter-from {
  opacity: 0;
  transform: rotateX(90deg);
}
.next-leave-to {
  opacity: 0;
  transform: rotateX(-90deg);
}

.prev-enter-active,
.prev-leave-active {
  transition: all .7s ease;
}
.prev-enter-from {
  opacity: 1;
  transform: rotateX(-90deg);
}
.prev-leave-to {
  opacity: 0;
  transform: rotateX(90deg);
}
@media(max-width: 801px){
  .next-enter-from {
    transform: translateX(100%);
  }
  .next-leave-to {
    transform: translateX(-100%);
  }

  .prev-enter-from {
    transform: translateX(-100%);
  }
  .prev-leave-to {
    transform: translateX(100%);
  }
}
</style>