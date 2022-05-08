<template>
  <div class="container">
    <emit-child-a :Event="Event"></emit-child-a>
    <emit-child-b :Event="Event"></emit-child-b>
    <emit-child-c :Event="Event"></emit-child-c>
  </div>
</template>

<script>
import Vue from 'vue';
import EmitChildA from '@/components/EmitChildrens/EmitChildA'
import EmitChildB from '@/components/EmitChildrens/EmitChildB'
import EmitChildC from '@/components/EmitChildrens/EmitChildC'

const Event = new Vue();

export default {
  name: 'EmitAndOn',
  components: {
    EmitChildA,
    EmitChildB,
    EmitChildC
  },
  data () {
    return {
      Event: Event
    }
  }
}
</script>

<style>
</style>
