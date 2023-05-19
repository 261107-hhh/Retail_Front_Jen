// import { http,PrivateHttp} from "./axios-helper";
import axios from "axios";
import { getToken } from "../auth";
// import { PrivateHttp } from "./axios-helper";
// import axios from "axios";
// const BASE_URL="http://localhost:9003"


export const Base_url='http://localhost:9003';

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


// export const PrivateHttp=axios.create({
//     baseURL:Base_url
// })
export const loadCategories=()=>{
    return http.get(`/cat/`).then((response)=>response.data)
}

export const createCategory=(title)=>{
return PrivateHttp.post(`/cat/`,{
  "title":title
}
).then(res=>res.data)
}

export const deleteCategory=(categoryId)=>{

return PrivateHttp.delete(`/cat/${categoryId}`).then(res=>res.data)
}

