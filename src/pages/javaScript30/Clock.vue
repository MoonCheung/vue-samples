<template>
  <div class="clock_bg">
    <div class="clock">
      <div class="clock-face">
        <div ref="hours"
             class="hand hour-hand"></div>
        <div ref="mins"
             class="hand min-hand"></div>
        <div ref="seconds"
             class="hand second-hand"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clocks',
  data () {
    return {
    }
  },
  created () {
    this.$nextTick(() => {
      // setInterval(this.setDate, 1000); //有报错：Cannot read property 'style' of undefined
      this.setDate();
    })
  },
  methods: {
    setDate: function () {
      let now = new Date();
      let seconds = now.getSeconds();
      let secondsDegrees = ((seconds / 60) * 360) + 90;
      this.$refs.seconds.style.transform = `rotate(${secondsDegrees}deg)`;
      let mins = now.getMinutes();
      let minsDegrees = ((mins / 60) * 360) + 90;
      this.$refs.mins.style.transform = `rotate(${minsDegrees}deg)`;
      let hours = now.getHours();
      let hoursDegrees = ((hours / 12) * 360) + 90;
      this.$refs.hours.style.transform = `rotate(${hoursDegrees}deg)`;
    }
  },
  destroyed () {
    clearInterval(this.setDate)
  }
}
</script>

<style>
.clock_bg {
  background: #018ded url(http://unsplash.it/1500/1000?image=881&blur=50);
  background-size: cover;
  font-family: "helvetica neue";
  text-align: center;
  font-size: 10px;
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
}
.clock {
  width: 30rem;
  height: 30rem;
  border: 20px solid white;
  border-radius: 50%;
  margin: 50px auto;
  position: relative;
  padding: 2rem;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
    inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
}

.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px);
  /* account for the height of the clock hands */
}

.hand {
  width: 50%;
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
</style>
