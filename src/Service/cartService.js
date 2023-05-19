// import { PrivateHttp } from "./axios-helper"
import axios from "axios";
import { getToken } from "../auth";

export const Base_url='http://localhost:9002';

export const http=axios.create({
    baseURL:Base_url
});

export const PrivateHttp=axios.create({
    baseURL:Base_url
})

PrivateHttp.interceptors.request.use(request=>{
    //console.log("privateHttp interceptors")
    //change the request
    let token=getToken()
    if(token){
       
        request.headers.common.Authorization=`Bearer ${token}`
      //  console.log("Token add to header"+token)

    }
    return request;
},error=>Promise.reject(error))

export const addItemToCart=(productId,quantity)=>{

    return PrivateHttp.post(`/cart/`,{
        productId:productId,
        quantity:quantity
    }).then(response=>response.data)

}

export const getCart=()=>{
console.log("")
return PrivateHttp.get(`/cart/`).then(res=>res.data)
}

export const removeItemFromCart=(productId)=>{
    return PrivateHttp.put(`/cart/${productId}`).then(res=>res.data)

}

