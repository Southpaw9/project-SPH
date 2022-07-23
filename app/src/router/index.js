//配置路由的地方
import Vue from "vue";
import VueRouter from 'vue-router';

import store from '@/store';
//使用插件
Vue.use(VueRouter)
import routes from '@/router/routes';
let router =  new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {y:0}
    }
})

router.beforeEach(async (to,from,next)=>{
    let name = store.state.user.userInfo.name
    if(store.state.user.token){
        if(to.path=='/login'){
            next('/')
        }else{
            if(name){
                next()
            }
            else{
                try{
                    await store.dispatch('getUserInfo')
                    next()
                }catch(error){
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    }else{
        let toPath = to.path
        if(toPath.indexOf('/center/myorder')!=-1||toPath.indexOf('shopcart')!=-1||toPath.indexOf('trade')!=-1){
            next('login?redirect='+toPath)
        }else{
            next()
        }
    }
})

export default router