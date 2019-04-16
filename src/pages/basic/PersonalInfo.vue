<template>
  <div>
    <!-- 双向数据绑定
      .sync修饰符在vue文档查询到对应详细 -->
    <personal-info v-model="phoneInfo"
                   :zip-code.sync="zipCode" />
    <!-- 单向数据绑定使用props属性 -->
    <personal-info :phone-info="phoneInfo"
                   :zip-code="zipCode"
                   @change="val => (phoneInfo = val)"
                   @update:zipCode="val => (zipCode = val)" /><br />
    phoneInfo: {{ phoneInfo }}
    <br />
    zipCode: {{ zipCode }}
  </div>
</template>

<script>
import PersonalInfo from "@/components/PersonalInfo_cmpt";

export default {
  components: {
    PersonalInfo
  },
  data() {
    return {
      phoneInfo: {
        areaCode: "+86",
        phone: ""
      },
      zipCode: ""
    };
  }
};
</script>

<style>
</style>
