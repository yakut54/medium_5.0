<template>
  <div
      class="player-5-vue"
      @mouseenter="onMouseenterController"
      @mouseleave="onMouseleaveController">

    <div
        :class="['controller', isControllerView ? 'flex' : 'nonne']">
      <i class="fa fa-play-circle-o" @click="play" v-if="!isPlay"></i>
      <i class="fa fa-pause-circle-o" @click="pause" v-else></i>
    </div>

    <div class="scale-wrapper">
      <div class="scale-text">{{ setTime(current, duration) }}</div>
      <div class="scale-center">
        <div
            class="outer-scale"
            ref="scale"
            @mouseover="onMouseover"
            @mouseleave="onMouseleave"
            @mousemove="onMousemove($event)"
            @click="rewind($event)">
          <div class="inner-scale" :style="{ width: `${progress}%` }">
            <div class="fill-scale-info-block" :style="{ left: infoBlockLeft, display: infoBlockView }">
              <div class="scale-info-block">{{ passedInfo }}</div>
              <div class="scale-info-triangle"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="scale-text">{{ setTime(duration, duration) }}</div>
    </div>
  </div>
</template>

<script>
import {onBeforeMount, onBeforeUnmount, onMounted, ref} from 'vue'

export default {
  name: "Player",
  props: ['player', 'src'],
  setup(props) {
    let PLAYER = ref()
    const scale = ref()
    const volume = ref()
    const current = ref(0)
    const duration = ref(0)
    const progress = ref(0)
    const currentTime = ref(0)
    const volumePercent = ref(18)
    const tempVolumePercent = ref(18)
    const passedInfo = ref('')
    const infoBlockLeft = ref('')
    const infoBlockView = ref('none')
    const isPlay = ref(false)
    const isMuted = ref(false)
    const isMounted = ref(false)

    const isControllerView = ref(true)
    const timeController = ref(null)

    const play = () => {
      PLAYER.value?.play()
      isPlay.value = true
    }

    const pause = () => {
      PLAYER.value?.pause()
      isPlay.value = false
    }

    const progressUpdate = () => {
      if (PLAYER.value) {
        current.value = PLAYER.value.currentTime
        progress.value = 100 * current.value / duration.value
      }
    }

    const onClickVolume = (e) => {
      const width = parseInt(getComputedStyle(volume.value).width)
      const offsetX = e.offsetX
      const percent = (100 * offsetX) / width
      volumePercent.value = tempVolumePercent.value = (30 * percent) / 100
      if (PLAYER.value)
        PLAYER.value.volume = percent / 100

      if (isMuted.value && PLAYER.value) {
        PLAYER.value.muted = false
        isMuted.value = false
      }
    }

    const rewind = (e) => {
      const width = parseInt(getComputedStyle(scale.value).width)
      const passed = e.offsetX
      progress.value = 100 * passed / width
      if (PLAYER.value) {
        PLAYER.value.pause()
        PLAYER.value.currentTime = duration.value * (passed / width)
        if (isPlay.value) {
          PLAYER.value.play()
        }
      }
    }

    const onMouseover = () => {
      if (document.documentElement.clientWidth > 800) {
        infoBlockView.value = 'block'
      }
    }

    const onMouseenterController = () => {
      isControllerView.value = true
      clearTimeout(timeController.value)
    }
    const onMouseleaveController = () => {
      console.log(isPlay.value)
      if (isPlay.value) {
        timeController.value = setTimeout(() => {
          isControllerView.value = false
        }, 1000)
      }
    }

    const onMouseleave = () => {
      infoBlockView.value = 'none'
    }

    const onMousemove = (e) => {
      const width = parseInt(getComputedStyle(e.target).width)
      const passed = e.offsetX + 1
      const percent = 100 * passed / width
      const progress = duration.value / 100 * percent
      infoBlockLeft.value = `${e.offsetX - 20}px`
      passedInfo.value = setTime(progress, progress)
    }

    const mute = () => {
      isMuted.value = !isMuted.value
      if (isMuted.value) {
        volumePercent.value = 0
      } else {
        volumePercent.value = tempVolumePercent.value
      }
      if (PLAYER.value)
        PLAYER.value.muted = isMuted.value
    }

    const setTime = (t, d) => {
      const digit = (n) => (n < 10 ? `0${n}` : `${n}`)
      const sec = digit(Math.floor(t % 60))
      const min = digit(Math.floor((t / 60) % 60))
      const hr = digit(Math.floor(t / 3600) % 60)

      if (d < 3600) {
        return min + ':' + sec
      } else {
        return hr + ':' + min + ':' + sec
      }
    }

    onMounted(() => {

      PLAYER.value = props.player()
      // hanging events
      PLAYER.value.onloadeddata = () => {
        if (PLAYER.value) {
          duration.value = PLAYER.value.duration
          console.log(duration.value)
          isMounted.value = true
        }
      }
      PLAYER.value.onended = () => {
        progress.value = 0
        currentTime.value = 0
        isPlay.value = false
      }
      PLAYER.value.onplay = () => isPlay.value = true
      PLAYER.value.ontimeupdate = () => progressUpdate()
    })

    onBeforeMount(() => {
      if (PLAYER.value)
        PLAYER.value.ontimeupdate = null
    })

    onBeforeUnmount(() => {
      console.log('test');
      PLAYER.value?.pause()
      PLAYER = {}
    })

    return {
      onMouseleave, onMousemove, onMouseover, rewind,
      onMouseenterController, onMouseleaveController,
      play, pause, setTime, mute, onClickVolume, volume, scale,
      isMuted, isPlay, isMounted, current, duration, passedInfo,
      progress, volumePercent, infoBlockLeft, infoBlockView,
      isControllerView
    }
  }
}
</script>

