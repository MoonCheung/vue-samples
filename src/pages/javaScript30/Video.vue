<template>
  <div class="video_bg">
    <div class="wrap">
      <video ref="videos"
             class="flex"
             width="765"
             height="430"
             src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
             loop
             controls></video>
      <div ref="speed"
           class="speed"
           @click="changeSpeed">
        <div ref="speedBar"
             class="speed-bar">1×</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  data () {
    return {
      min: 0.5,
      max: 5
    }
  },
  methods: {
    changeSpeed: function (e) {
      let offsetHeight = this.$refs.speed.offsetHeight;
      let height = e.offsetY; //偏移位置Y
      let percentage = height / offsetHeight;
      let playbackRate = percentage * (this.max - this.min) + this.min;
      this.$refs.speedBar.style.height = Math.round(percentage * 100) + '%';
      this.$refs.speedBar.textContent = playbackRate.toFixed(2) + 'x';
      this.$refs.videos.playbackRate = playbackRate;
    }
  }
}
</script>

<style>
.video_bg {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #4c4c4c url("https://unsplash.it/1500/900?image=1021");
  background-size: cover;
  font-family: sans-serif;
}
.wrap {
  width: 850px;
  display: flex;
}

video {
  box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.1);
}

.speed {
  background: #efefef;
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin: 10px;
  border-radius: 50px;
  box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.speed-bar {
  width: 100%;
  background: linear-gradient(-170deg, #2376ae 0%, #c16ecf 100%);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  color: white;
  height: 16.3%;
}
</style>
