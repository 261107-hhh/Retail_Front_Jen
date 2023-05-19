// import { PrivateHttp } from "./axios-helper";
import { getToken } from "../auth";
import axios from "axios";

export const Base_url='http://localhost:9004';

export const http=axios.create({
    baseURL:Base_url
});

export const PrivateHttp=axios.create({
    baseURL:Base_url
})

// add token in header

PrivateHttp.interceptors.request.use(request=>{
    //console.log("privateHttp interceptors")
    //change the request
    let token=getToken()
    if(token){
        
        console.log("this is console for order service PRivsteHttp  ")
        request.headers.common.Authorization=`Bearer ${token}`
      //  console.log("Token add to header"+token)

    }
    return request;
},error=>Promise.reject(error))

export const createOrder=(orderDetails)=>{
   console.log(orderDetails.cartID)
   console.log(orderDetails.address)
    return PrivateHttp.post(`/order/`,{
        "address":orderDetails.address,
        "cartID":orderDetails.cartID
    }).then(response => response.data)
}
export const getOrder=()=>{
    return PrivateHttp.get(`/order/`).then(response=>response.data)
}

export const getListOfOrder=()=>{
    return PrivateHttp.get(`/order/list`).then(res=>res.data)
}
export const updateOrder=(order,orderId)=>{
    return PrivateHttp.put(`order/${orderId}`,{
        "orderStatus":order.orderStatus,
        "paymentStatus":order.paymentStatus,
        "orderDelivered":order.orderDelivered
    }).then(res=>res.data)
}
export const deleteOrder=(orderId)=>{
    return PrivateHttp.delete(`order/${orderId}`).then(res=>res.data)
}