<template>
  <div class="checkBox_bg">
    <div ref="inboxs"
         class="inbox">
      <div class="item">
        <input type="checkbox">
        <p>This is an inbox layout.</p>
      </div>
      <div class="item">
        <input type="checkbox">
        <p>Check one item</p>
      </div>
      <div class="item">
        <input type="checkbox">
        <p>Hold down your Shift key</p>
      </div>
      <div class="item">
        <input type="checkbox">
        <p>Check a lower item</p>
      </div>
      <div class="item">
        <input type="checkbox">
        <p>Everything inbetween should also be set to checked</p>
      </div>
      <div class="item">
        <input type="checkbox">
        <p>Try do it with out any libraries</p>
      </div>
      <div class="item">
        <input type="checkbox">
        <p>Just regular JavaScript</p>
      </div>
      <div class="item">
        <input type="checkbox">
        <p>Good Luck!</p>
      </div>
      <div class="item">
        <input type="checkbox">
        <p>Don't forget to tweet your result!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckBoxs',
  mounted () {
    console.log('ref:', this.$refs.inboxs.childNodes.childNodes);
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
