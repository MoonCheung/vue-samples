<template>
  <div>
    <v-big-props
      :name="bigPropsName"
      :on-change="handleBigPropChange"
      :slot-default="getDefault()"
      :slot-title="getTitle()"
      :slot-scope-item="getScopeItem"
    />
  </div>
</template>

<script>
import VBigProps from '@/components/bigProps_cmpt';

export default {
  components: {
    VBigProps
  },
  data() {
    return {
      bigPropsName: 'Hello 父组件'
    };
  },
  methods: {
    handleBigPropChange(val) {
      this.bigPropsName = val;
    },
    getDefault() {
      return [this.$createElement('p', 'default slot')];
    },
    getTitle() {
      return [
        this.$createElement('div', 'default slot1'),
        this.$createElement('div', 'default slot2')
      ];
    },
    getScopeItem(props) {
      return [this.$createElement('p', `get item slot-scope ${JSON.stringify(props)}`)];
    }
  }
};
</script>

<style></style>
