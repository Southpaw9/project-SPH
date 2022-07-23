import  Vue  from 'vue'
import  Vuex  from 'vuex'

import {reqGetSearchInfo} from '@/api';
Vue.use(Vuex)

const state = {
    searchList:{}
}
const actions = {
    async getSearchList({commit},params={}){
        let result = await reqGetSearchInfo(params);
        if(result.code==200){
            commit("GETSEARCHLIST",result.data)
        }
    },
}

const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    },
}

const getters = {
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    }
     
}
export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}