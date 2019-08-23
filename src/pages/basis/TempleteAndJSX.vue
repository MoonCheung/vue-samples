<template>
  <div>
    <div>Message：{{ msg }}</div>
    <br />
    <VNodes :vnodes="getJSXSpan()"></VNodes>
    <v-heading1 :level="1">hello js</v-heading1>
    <v-heading2 :level="2">hello jsx</v-heading2>
    <v-heading3 :level="3">hello template vue</v-heading3>
    <VNodes :vnodes="getvHeading4(4)" />
  </div>
</template>

<script>
import vHeading1 from '../../components/TempleteAndJSX/TempleteAndJSX.js'
import vHeading2 from '../../components/TempleteAndJSX/TempleteAndJSX.jsx'
import vHeading3 from '../../components/TempleteAndJSX/TempleteAndJSX.vue'

export default {
  components: {
    vHeading1,
    vHeading2,
    vHeading3,
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  data () {
    return {
      msg: 'hello Vue框架！'
    }
  },
  methods: {
    getJSXSpan () {
      return <span>VNodes Message：{this.msg}</span>
    },
    getvHeading4 (level) {
      const Tag = `h${level}`;
      return <Tag>Hello Vue VNodes</Tag>
    }
  }
}
</script>