import { reqAddressInfo ,reqOrderInfo} from "@/api"

const state = {
    addressInfoList:[],
    orderInfoList:[]
}
const actions = {
    async getAddressInfo({commit}){
        try{
            let result = await reqAddressInfo()
            if(result.code==200){
                commit('GETADDRESSINFO',result.data)
                return 'ok'
            }
        }catch(error){
            
            return Promise.reject(new Error('faile'))
        }
    },
    async getOrderInfo({commit}){
        try{
            let result = await reqOrderInfo()
            if(result.code==200){
                commit('GETORDERINFO',result.data)
                return 'ok'
            }
        }catch(error){
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations = {
    GETADDRESSINFO(state,addressInfoList){
        state.addressInfoList = addressInfoList
    },
    GETORDERINFO(state,orderInfoList){
        state.orderInfoList = orderInfoList
    }
}
const getters = {}

export default{
    state,
    actions,
    mutations,
    getters
}