<template>
  <div>
    <a-row>
      <a-col :span="24">
        <p>验证动态表单</p>
      </a-col>
    </a-row>
    <ValidationObserver ref="observer"
                        v-slot="{ passes }">
      <a-form :layout="formLayout">
        <ValidationProvider name="名称"
                            rules="required|nameLength:3,8"
                            v-slot="slotProps">
          <a-form-item label="名称"
                       hasFeedback
                       :validateStatus="resolveState(slotProps)"
                       :help="slotProps.errors[0]"
                       :labelCol="{ span: 4 }"
                       :wrapperCol="{ span: 18 }">
            <a-input type="text"
                     placeholder="请输入名称"
                     v-model="name" />
          </a-form-item>
        </ValidationProvider>

        <ValidationProvider name="公司名称"
                            rules="required|coNameLength:3,15"
                            v-slot="slotProps">
          <a-form-item label="公司名称"
                       hasFeedback
                       :validateStatus="resolveState(slotProps)"
                       :help="slotProps.errors[0]"
                       :labelCol="{ span: 4 }"
                       :wrapperCol="{ span: 18 }">
            <a-input type="text"
                     placeholder="请输入公司名称"
                     v-model="co_name" />
          </a-form-item>
        </ValidationProvider>

        <ValidationProvider name="手机"
                            rules="required|digits:11"
                            v-slot="slotProps">
          <a-form-item label="手机"
                       hasFeedback
                       :validateStatus="resolveState(slotProps)"
                       :help="slotProps.errors[0]"
                       :labelCol="{ span: 4 }"
                       :wrapperCol="{ span: 18 }">
            <a-input type="number"
                     placeholder="请输入手机号码"
                     v-model="phone" />
          </a-form-item>
        </ValidationProvider>

        <ValidationProvider name="邮箱"
                            rules="required|email"
                            v-slot="slotProps">
          <a-form-item label="邮箱"
                       hasFeedback
                       :validateStatus="resolveState(slotProps)"
                       :help="slotProps.errors[0]"
                       :labelCol="{ span: 4 }"
                       :wrapperCol="{ span: 18 }">
            <a-input type="email"
                     placeholder="请输入邮件"
                     v-model="email" />
          </a-form-item>
        </ValidationProvider>

        <ValidationProvider name="密码"
                            rules="required"
                            vid="pwd"
                            v-slot="slotProps">
          <a-form-item label="密码"
                       hasFeedback
                       :validateStatus="resolveState(slotProps)"
                       :help="slotProps.errors[0]"
                       :labelCol="{ span: 4 }"
                       :wrapperCol="{ span: 18 }">
            <a-input type="password"
                     placeholder="请输入密码"
                     v-model="password" />
          </a-form-item>
        </ValidationProvider>

        <ValidationProvider name="密码"
                            rules="required|confirmed:pwd"
                            v-slot="slotProps">
          <a-form-item label="确认密码"
                       hasFeedback
                       :validateStatus="resolveState(slotProps)"
                       :help="slotProps.errors[0]"
                       :labelCol="{ span: 4 }"
                       :wrapperCol="{ span: 18 }">
            <a-input type="password"
                     placeholder="请再次输入密码"
                     v-model="confirmation" />
          </a-form-item>
        </ValidationProvider>

        <a-row>
          <a-col :span="24">
            <a-button type="primary"
                      @click="passes(onSubmit)">Submit</a-button>
            <a-button @click="resetForm()">Clear</a-button>
          </a-col>
        </a-row>
      </a-form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email, confirmed, digits } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '该{_field_}必填，不得空'
});

extend('nameLength', {
  computesRequired: true,
  message: '该{_field_} 长度必须介于 {min} 和 {max}',
  //TODO: params类型的值是定义规则,当输出undefined时，需参数里面一些规则冒号(:)后面是自定义规则
  params: ['min', 'max'],
  validate: (value, { min, max }) => {
    const length = value && value.length;
    return length >= min && length <= max;
  }
})

extend('coNameLength', {
  computesRequired: true,
  message: '该{_field_} 长度必须介于 {min} 和 {max}',
  //TODO: params类型的值是定义规则,当输出undefined时，需参数里面一些规则冒号(:)后面是自定义规则
  params: ['min', 'max'],
  validate: (value, { min, max }) => {
    const length = value && value.length;
    return length >= min && length <= max;
  }
})

extend('email', {
  ...email,
  message: '该输入是邮箱，不是别的类型'
})

extend('confirmed', {
  ...confirmed,
  message: '当您输入二次密码不一致!'
})

extend('digits', {
  ...digits,
  message: '该输入手机号码不得少于11位'
})

export default {
  name: 'Form',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      formLayout: 'horizontal',
      name: "",
      co_name: "",
      phone: "",
      email: "",
      password: "",
      confirmation: ""
    }
  },
  methods: {
    resolveState ({ errors, pending, valid }) {
      if (errors[0]) {
        return "error";
      }

      if (pending) {
        return "validating";
      }

      if (valid) {
        return "success";
      }

      return "";
    },
    onSubmit () {
      // Do stuff here, this will only be called
      // if the form is valid
    },
    resetForm () {
      this.name = "";
      this.co_name = "";
      this.phone = "";
      this.email = "";
      this.password = "";
      this.confirmation = "";
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }
  }
}
</script>

<style>
</style>
