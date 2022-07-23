import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api"
import { update } from "lodash"

const state = {
    cartList:[]
}
const actions = {
    async getCartList({commit}){
        let result = await reqCartList()
        if(result.code==200){
            commit('GETCARTLIST',result.data)
        }
    },
    async deleteCartById({commit},skuId){
         let result = await reqDeleteCartById(skuId)
         if(result.code==200){
            return 'ok'
         }
         else{
            return Promise.reject(new Error('faile'))
         }
    },
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked)
        if(result.code==200){
            return 'ok'
        }
        else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    },
}
const getters = {
    cartList(state){
        return state.cartList[0]||{}
    },
}

export default{
    state,
    actions,
    mutations,
    getters
}