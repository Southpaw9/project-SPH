import {v4 as uuidv4} from 'uuid';
export const getUUID = () =>{
    //先从本地存储获取uuid,看本地是不是已经有了
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    //如果没有,那么生成,并存储在本地
    if(!uuid_token){
        uuid_token = uuidv4()
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    return uuid_token
}