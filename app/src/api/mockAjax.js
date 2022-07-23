//对于Axios进行二次封装
import axios from 'axios';
import { isNull } from 'lodash';

import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

//1.利用axios对象的create方法，创建一个axios实例
const mockAjax = axios.create({
    //基础路径,发送请求的时候，路径中会带上/api
    baseURL:"/mock",
    //超时的时间为5秒
    timeout:5000,
})

//请求拦截器：在发请求之前，请求拦截器可以拦截到，在请求发出去之前做一些事情
mockAjax.interceptors.request.use((config)=>{
    //config:配置对象，对象里面有一个属性很重要，header请求头
    //进度条开始动
    nprogress.start();
    return config
})

//响应拦截器
mockAjax.interceptors.response.use((response)=>{
    //成功的回调函数：服务器返回对应的数据后，在这里可以对数据进行一些操作
    nprogress.done();
    return response.data
},(error)=>{
    return Promise.reject(new Error('failed'))
})

export default mockAjax