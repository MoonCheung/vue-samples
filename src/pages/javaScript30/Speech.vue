<template>
  <div class="speech_bg">
    <div class="voiceinator">
      <h1>听说 5000</h1>

      <select name="voice"
              ref="voices">
        <option value="">Select A Voice</option>
      </select>

      <label for="rate">Rate:</label>
      <input name="rate"
             type="range"
             min="0"
             max="3"
             value="1"
             step="0.1">

      <label for="pitch">Pitch:</label>
      <input name="pitch"
             type="range"
             min="0"
             max="2"
             step="0.1">
      <textarea name="text">Hello! I love JavaScript 👍</textarea>
      <button ref="stop">Stop!</button>
      <button ref="speak">Speak</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Speechs',
  data () {
    return {
      voices: [],
      synth: {},
      msg: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      //下次DOM更新
      this.synth = window.speechSynthesis;
      this.msg = new SpeechSynthesisUtterance();
      this.getSupportVoice();
      this.msg.text = '你能说中文吗?';
    });
    const options = document.querySelectorAll('[type="range"],[name="text"]');
    options.forEach(opt => opt.addEventListener('change', this.paramChange))
    this.$refs.speak.addEventListener('click', this.speak)
    this.$refs.stop.addEventListener('click', this.stopSpeak)
  },
  methods: {
    getSupportVoice: function () {
      this.voices = this.synth.getVoices();
      for (let i = 0; i < this.voices.length; i++) {
        let option = document.createElement('option');
        option.textContent = this.voices[i].name + ' (' + this.voices[i].lang + ') ';

        //默认语言
        if (this.voices[i].default) {
          option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-name', this.voices[i].name);
        option.setAttribute('data-lang', this.voices[i].lang);
        this.$refs.voices.appendChild(option)
      }
    },
    // 点击speak按钮时阅读文字
    speak: function () {
      console.log('speak:', this.$refs.voices.value);
      this.synth.speak(this.msg)
    },
    // 停止阅读
    stopSpeak: function () {
      this.synth.cancel();
    },
    // 阅读参数发生变化
    paramChange: function (e) {
      this.msg[e.path[0].name] = e.path[0].value;
      console.log(`name || value:`, e.path[0].name, e.path[0].value)
    }
  }
}
</script>

<style>
.speech_bg {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #3bc1ac;
  display: flex;
  min-height: 100vh;
  align-items: center;

  background-image: radial-gradient(
      circle at 100% 150%,
      #3bc1ac 24%,
      #42d2bb 25%,
      #42d2bb 28%,
      #3bc1ac 29%,
      #3bc1ac 36%,
      #42d2bb 36%,
      #42d2bb 40%,
      transparent 40%,
      transparent
    ),
    radial-gradient(
      circle at 0 150%,
      #3bc1ac 24%,
      #42d2bb 25%,
      #42d2bb 28%,
      #3bc1ac 29%,
      #3bc1ac 36%,
      #42d2bb 36%,
      #42d2bb 40%,
      transparent 40%,
      transparent
    ),
    radial-gradient(
      circle at 50% 100%,
      #42d2bb 10%,
      #3bc1ac 11%,
      #3bc1ac 23%,
      #42d2bb 24%,
      #42d2bb 30%,
      #3bc1ac 31%,
      #3bc1ac 43%,
      #42d2bb 44%,
      #42d2bb 50%,
      #3bc1ac 51%,
      #3bc1ac 63%,
      #42d2bb 64%,
      #42d2bb 71%,
      transparent 71%,
      transparent
    ),
    radial-gradient(
      circle at 100% 50%,
      #42d2bb 5%,
      #3bc1ac 6%,
      #3bc1ac 15%,
      #42d2bb 16%,
      #42d2bb 20%,
      #3bc1ac 21%,
      #3bc1ac 30%,
      #42d2bb 31%,
      #42d2bb 35%,
      #3bc1ac 36%,
      #3bc1ac 45%,
      #42d2bb 46%,
      #42d2bb 49%,
      transparent 50%,
      transparent
    ),
    radial-gradient(
      circle at 0 50%,
      #42d2bb 5%,
      #3bc1ac 6%,
      #3bc1ac 15%,
      #42d2bb 16%,
      #42d2bb 20%,
      #3bc1ac 21%,
      #3bc1ac 30%,
      #42d2bb 31%,
      #42d2bb 35%,
      #3bc1ac 36%,
      #3bc1ac 45%,
      #42d2bb 46%,
      #42d2bb 49%,
      transparent 50%,
      transparent
    );
  background-size: 100px 50px;
}

.voiceinator {
  padding: 2rem;
  width: 50rem;
  margin: 0 auto;
  border-radius: 1rem;
  position: relative;
  background: white;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  width: calc(100% + 4rem);
  margin: -2rem 0 2rem -2rem;
  padding: 0.5rem;
  background: #ffc600;
  border-bottom: 5px solid #f3c010;
  text-align: center;
  font-weight: 100;
  font-family: "Pacifico", cursive;
  text-shadow: 3px 3px 0 #f3c010;
}

.voiceinator input,
.voiceinator button,
.voiceinator select,
.voiceinator textarea {
  width: 100%;
  display: block;
  margin: 10px 0;
  padding: 10px;
  border: 0;
  background: #353535;
  color: white;
  outline: 0;
}

textarea {
  height: 20rem;
}

input[type="select"] {
}

.voiceinator button {
  background: #ffc600;
  border: 0;
  width: 49%;
  float: left;
  font-family: "Pacifico", cursive;
  margin-bottom: 0;
  border-bottom: 5px solid #f3c010;
  cursor: pointer;
  position: relative;
}

.voiceinator button:active {
  top: 2px;
}

.voiceinator button:nth-of-type(1) {
  margin-right: 2%;
}
</style>
