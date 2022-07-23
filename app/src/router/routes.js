export default [
    {
        path: '/center',
        name:'center',
        component: ()=>import ('@/pages/Center'),
        meta: {
            isShow: true
        },
        children:[
            {
                path:'myorder',
                component:()=>import ('@/pages/Center/myOrder'),
                meta: {
                    isShow: true
                }
            },
            {
                path:'grouporder',
                component:()=>import ('@/pages/Center/groupOrder'),
                meta: {
                    isShow: true
                }
            },{
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path: '/paysuccess',
        name:'paysuccess',
        component: ()=>import ('@/pages/PaySuccess'),
        meta: {
            isShow: true
        }
    },
    {
        path: '/pay',
        name:'pay',
        component: ()=>import ('@/pages/Pay'),
        meta: {
            isShow: true
        },
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/trade',
        name:'trade',
        component: ()=>import ('@/pages/Trade'),
        meta: {
            isShow: true
        },
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/shopcart',
        name:'shopcart',
        component: ()=>import ('@/pages/ShopCart'),
        meta: {
            isShow: true
        }
    },
    {
        path: '/addcartsuccess',
        name:'addcartsuccess',
        component: ()=>import ('@/pages/AddCartSuccess'),
        meta: {
            isShow: true
        }
    },
    {
        path: '/detail/:skuid',
        component: ()=>import ('@/pages/Detail'),
        meta: {
            isShow: true
        }
    },
    {
        path: '/home',
        component: ()=>import ('@/pages/Home'),
        meta: {
            isShow: true
        },
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: ()=>import ('@/pages/Search'),
        meta: {
            isShow: true
        },
    },
    {
        path: '/login',
        component: ()=>import ('@/pages/Login'),
        meta: {
            isShow: true
        },
    },
    {
        path: '/register',
        component: ()=>import ('@/pages/Register'),
        meta: {
            isShow: true
        },
    },
    {
        path: '*',
        redirect: '/home'
    }
]