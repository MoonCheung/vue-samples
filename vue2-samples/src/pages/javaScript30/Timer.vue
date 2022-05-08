<template>
  <div class="timer_bg">
    <div class="timer">
      <div class="timer__controls">
        <button class="timer__button"
                v-for="item in TimeArray"
                :key="item.id"
                :data-time="item.time">{{item.name}}</button>
        <form name="customForm"
              @submit="submitForm">
          <input type="text"
                 name="minutes"
                 v-model="timeVal"
                 placeholder="Enter Minutes">
        </form>
      </div>
      <div class="display">
        <h1 ref="leftTime"
            class="display__time-left"></h1>
        <p ref="endTime"
           class="display__end-time"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timers',
  data () {
    return {
      TimeArray: [
        { id: '1', time: '20', name: '20 Secs' },
        { id: '2', time: '300', name: 'Work 5' },
        { id: '3', time: '900', name: 'Quick 15' },
        { id: '4', time: '1200', name: 'Snack 20' },
        { id: '5', time: '3600', name: 'Lunch Break' },
      ],
      left: 0,
      end: 0,
      date: new Date(),
      timer: 0,
      timeVal: ''
    }
  },
  mounted () {
    let buttons = document.querySelectorAll('.timer__button');
    this.$refs.leftTime.innerHTML = this.left;
    let arr = Array.from(buttons);
    arr.map(item => {
      item.addEventListener('click', this.clickAction);
    });
  },
  methods: {
    //监听自定义输入
    submitForm: function (e) {
      // 阻止默认行为
      e.preventDefault();
      this.updateTime(this.timeVal * 60);
      this.updateTimer();
    },
    // 点击time方法
    clickAction: function (e) {
      let deltaTime = e.target.dataset.time;
      this.updateTime(deltaTime);
      //点击之后更新计时器
      this.updateTimer();
    },
    // 更新时间方法
    updateTime: function (delta) {
      this.left = this.left + parseInt(delta, 0);
      this.end = this.date.getTime() + this.left * 1000;
      this.$refs.leftTime.innerHTML = this.left;
      this.$refs.endTime.innerHTML = new Date(this.end).toLocaleTimeString();
    },
    // 每秒刷新时间
    updateTimer: function () {
      //清除以前timer
      if (this.timer) {
        clearInterval(this.timer)
      }
      // 设置新的timer
      this.timer = setInterval(() => {
        if (this.left === 0) {
          this.$refs.endTime.innerHTML = 'End';
          clearInterval(this.timer);
        } else {
          this.left -= 1;
          this.$refs.leftTime.innerHTML = this.left;
        }
      }, 1000)
    }
  }
}
</script>

<style>
.timer_bg {
  box-sizing: border-box;
  background: #8e24aa;
  background: linear-gradient(45deg, #42a5f5 0%, #478ed1 50%, #0d47a1 100%);
  margin: 0;
  text-align: center;
  font-family: "Inconsolata", monospace;
}
.display__time-left {
  font-weight: 100;
  font-size: 6rem;
  margin: 0;
  color: white;
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.05);
}

.timer {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.timer__controls {
  display: flex;
}

.timer__controls > * {
  flex: 1;
}

.timer__controls form {
  flex: 1;
  display: flex;
}

.timer__controls input {
  flex: 1;
  border: 0;
  padding: 2rem;
}

.timer__button {
  background: none;
  border: 0;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  font-family: "Inconsolata", monospace;
}

.timer__button:hover,
.timer__button:focus {
  background: rgba(0, 0, 0, 0.2);
  outline: 0;
}

.display {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.display__end-time {
  font-size: 4rem;
  color: white;
}
</style>
