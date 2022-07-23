import { reqGetIdentifyingCode, reqUserInfo, reqUserLogin, reqUserLogout, reqUserRegister } from "@/api"
import {setToken} from '@/utils/token';

const state = {
    identifyingCode:'',
    token:sessionStorage.getItem('TOKEN'),
    userInfo:{},
}
const actions = {
    async getIdentifyingCode({commit},phone){
        let result = await reqGetIdentifyingCode(phone)
        if(result.code==200){
            commit('GETIDENTIFYINGCODE',result.data)
            return 'ok'
        }
        else{
            return Promise.reject(new Error('faile'))
        }
    },
    async userRegister({commit},userInfo){
        let result = await reqUserRegister(userInfo)
        if(result.code==200){
            console.log(result.data);
        }
        console.log(result);
    },
    async userLogin({commit},userInfo){
        let result = await reqUserLogin(userInfo)
        if(result.code==200){
            setToken(result.data.token)
            commit('USERLOGIN',result.data)
            return 'ok'
        }
        else{
            return Promise.reject(new Error('login failed'))
        }
    },
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        if(result.code==200){
            commit('GETUSERINFO',result.data)
            return 'ok'
        }

    },
    async userLogout({commit}){
        let result = await reqUserLogout()
        if(result.code==200){
            commit('USERLOGOUT')
        }
    }
}
const mutations = {
    GETIDENTIFYINGCODE(state,identifyingCode){
        state.identifyingCode = identifyingCode
    },
    USERLOGIN(state,data){
        state.token = data.token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    USERLOGOUT(state){
        state.userInfo={}
        state.token = ''
        sessionStorage.removeItem('TOKEN')
    }
}
const getters = {}

export default{
    state,
    actions,
    mutations,
    getters
}