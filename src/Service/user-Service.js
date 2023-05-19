// using axios for Connection React and Spring Boot
import { PrivateHttp } from "./axios-helper";
import axios from "axios";

// const BASE_URL="http://localhost:9122"


const BASE_URL="http://localhost:9001"


export const Base_url='http://localhost:9001';

export const http=axios.create({
    baseURL:Base_url
});

// export const PrivateHttp=axios.create({
//     baseURL:Base_url
// })

export const createUser=(data)=>{
    return axios.post(`${BASE_URL}/users/`,data).then(response=>response.data)
}

export const generateToken=(loginData)=>{
    return axios.post(`${BASE_URL}/auth/login`,loginData).then((response)=>response.data)
}

export const getAllUser=()=>{
    return PrivateHttp.get(`/users/`).then(res=>res.data)
}

export const deleteUser=(userId)=>{
    return PrivateHttp.delete(`/users/${userId}`).then(res=>res.data)
}
