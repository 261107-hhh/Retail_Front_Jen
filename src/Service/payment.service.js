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
       
        request.headers.common.Authorization=`Bearer ${token}`
      //  console.log("Token add to header"+token)

    }
    return request;
},error=>Promise.reject(error))



export function createOrder(price){
let f=new FormData();
f.append("price",price);
console.log(typeof(f.price))
return PrivateHttp.post(`/payment/create`,f).then(res=>res.data)
}

export function successPayment(info){

    let f=new FormData();
    f.append("razorpay_signature",info.razorpay_signature);
    f.append("razorpay_order_id",info.razorpay_order_id);
    f.append("razorpay_payment_id",info.razorpay_payment_id);
    f.append("user_order_id",info.user_order_id);

    return PrivateHttp.post(`/payment/success`,f).then(res=>res.data)

}

export function successPaymentDone(info){

    let f=new FormData();
    
    f.append("user_order_id",info);

    return PrivateHttp.post(`/payment/success/done`,f).then(res=>res.data)

}