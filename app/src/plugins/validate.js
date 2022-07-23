import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate)
import zh_CN from 'vee-validate/dist/locale/zh_CN';
VeeValidate.Validator.localize('zh_CN',{
    messages:{
        ...zh_CN.messages,
        is:(field) => `${field}必须与密码相同`
    },
    attributes:{
        phone:'手机号',
        code:'验证码',
        password:'密码',
        password1:'确认密码',
        isCheck:'协议',
        agree:'同意'
    }
})

VeeValidate.Validator.extend('tongyi',{
    validate:(value) =>{
        return value
    },
    getMessage:(field) => field + '阅读并同意协议后才可以注册'
})