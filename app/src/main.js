import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router';
//引入三级联动组件---(全局组件)
import TypeNav from '@/components/TypeNav'
//引入仓库
import  store  from '@/store/index';

import Carousel from '@/components/Carousel';

import Pagination from '@/components/Pagination';
//引入mock
import '@/mock/mockServe';
Vue.config.productionTip = false

import 'swiper/css/swiper.css';
import Element from 'element-ui';
Vue.use(Element)

import cat from '@/assets/images/1.jpg';
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload,{
  loading:cat
})
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
//Vue.component(Button.name,Button)

import '@/plugins/validate';

import * as API from '@/api';
new Vue({
  render: h => h(App),
  router,   //注册路由，kv一致，省略v,此后组件实例身上会带有$route,$router属性
  store,    //注册仓库,此后组件实例身上会带有$store属性
  beforeCreate(){
  Vue.prototype.$bus = this
  Vue.prototype.$API = API
  }
}).$mount('#app')