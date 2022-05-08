<template>
  <div>
    {{ fullName }}
    <div>firstName: <input v-model="firstName" /></div>
    <div>lastName: <input v-model="lastName" /></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullName: "Foo Bar",
      firstName: "Foo",
      lastName: "Bar"
    };
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + " " + val;
    }
  }
};
</script>

<style>
</style>
