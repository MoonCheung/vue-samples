<template>
  <div class="checkBox_bg">
    <div ref="inboxs"
         class="inbox">
      <div class="item"
           v-for="item in arrays"
           :key="item.id">
        <input ref="checkboxes"
               type="checkbox">
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckBoxs',
  data () {
    return {
      arrays: [
        { id: '0', name: 'This is an inbox layout.' },
        { id: '1', name: 'Check one item' },
        { id: '2', name: 'Hold down your Shift key' },
        { id: '3', name: 'Check a lower item' },
        { id: '4', name: 'Everything inbetween should also be set to checked' },
        { id: '5', name: 'Try do it with out any libraries' },
        { id: '6', name: 'Just regular JavaScript' },
        { id: '7', name: 'Good Luck!' },
        { id: '8', name: "Don't forget to tweet your result!" }
      ],
      checkeds: true
    }
  },
  mounted () {
    this.$refs.checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', this.handleCheck)
    })
  },
  methods: {
    handleCheck (e) {
      let inBetween = false;
      let lastChecked; //undefined
      if (e.shiftKey && this.checkeds) {
        this.$refs.checkboxes.forEach(checkbox => {
          if (checkbox === this || checkbox === lastChecked) {
            console.log('在两者之间进行检查！');
            inBetween = !inBetween;
          }

          if (inBetween) {
            checkbox.checked = true;
          }
        });
      }
      lastChecked = this;
    }
  }
}
</script>

<style>
.checkBox_bg {
  font-family: sans-serif;
  background: #ffc600;
  height: 100%;
  padding: 10px 0;
}
.inbox {
  max-width: 600px;
  margin: 50px auto;
  background: white;
  border-radius: 5px;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
}

.item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}

.item:last-child {
  border-bottom: 0;
}

input:checked + p {
  background: #f9f9f9;
  text-decoration: line-through;
}

input[type="checkbox"] {
  margin: 20px;
}

p {
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  flex: 1;
  font-family: "helvetica neue";
  font-size: 20px;
  font-weight: 200;
  border-left: 1px solid #d1e2ff;
}

.details {
  text-align: center;
  font-size: 15px;
}
</style>
