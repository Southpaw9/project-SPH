//当前这个模块：API进行统一管理

import requests from './request';

import mockRequest from './mockAjax';

//发请求,axios发请求返回的结果是一个Promise对象
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList',method:'get'});

//获取banner(首页轮播图接口)
export const reqBannerList = () => mockRequest({url:'/banner',method:'get'})

//获取floor数据
export const reqFloorList = () => mockRequest.get('/floor')

//获取搜索接口
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})


//获取产品详情接口
export const reqGoodsInfo = (skuid) => requests({url:`/item/${skuid}`,method:'get'})

//将产品添加到购物车中(获取更新某一个产品数)

export const reqAddOrUpdateShopCart = (skuId,skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

//获取购物车列表的接口
export const reqCartList = ()=> requests({url:'/cart/cartList',method:'get'})

//通过ID删除购物车物品
export const reqDeleteCartById = (skuId)=> requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

//更新勾选框
export const reqUpdateCheckedById = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

//获取验证码
export const reqGetIdentifyingCode = (phone)=> requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

//注册
export const reqUserRegister = (data) => requests({url:'/user/passport/register',data:data,method:'post'})

//登录
export const reqUserLogin = (data) => requests({url:'/user/passport/login',data,method:'post'})

//获取用户信息
export const reqUserInfo = ()=> requests({url:'/user/passport/auth/getUserInfo',method:'get'})

//退出登录
export const reqUserLogout = ()=> requests({url:'/user/passport/logout',method:'get'})

//获取用户地址信息
export const reqAddressInfo = ()=> requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

//获取订单交易页信息
export const reqOrderInfo = ()=> requests({url:'/order/auth/trade',method:'get'})

//提交订单
export const reqSubmitOrder = (tradeNo,data) => requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

//获取订单支付信息
export const reqPayInfo = (orderId) => requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//获取订单支付状态
export const reqPayStatus = (orderId) => requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

//获取个人中心数据
export const reqMyOrderList = (page,limit) => requests({url:`/order/auth/${page}/${limit}`,method:'get'})