// import { http, PrivateHttp } from "./axios-helper";

// import { PrivateHttp } from "./axios-helper";
import axios from "axios";
import { getToken } from "../auth";
// const BASE_URL="http://localhost:9003"


export const Base_url = 'http://localhost:9003';

export const http = axios.create({
  baseURL: Base_url
});

export const PrivateHttp = axios.create({
  baseURL: Base_url
})

// add token in header

PrivateHttp.interceptors.request.use(request => {
  //console.log("privateHttp interceptors")
  //change the request
  let token = getToken()
  if (token) {

    request.headers.common.Authorization = `Bearer ${token}`
    //  console.log("Token add to header"+token)

  }
  return request;
}, error => Promise.reject(error))



export const loadProducts = (pageNumber = "0", pageSize = "3", sortBy = "productId", sortDir = "desc") => {
  return http.get(`/product/?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`).then(response => response.data)
}

export const loadProductByCategory = (
  categoryId,
  pageNumber = "0",
  pageSize = "9"
) => {
  return http
    .get(`/category/${categoryId}/product?pageSize=${pageSize}&pageNumber=${pageNumber}`)
    .then(response => response.data)

  // /category/1/product?pageSize=1&PageNumbe=2
};

export const loadSingleProduct = (productId) => {
  return http.get(`/product/${productId}`).then(response => response.data)
};

export const addproduct = (product) => {

  return PrivateHttp.post(`/categories/${product.productCategory}/product/`, product).then(res => res.data)

}
export const uploadProductImage = (images, productId) => {
  const formData = new FormData();
  formData.append("product_image", images);
  return PrivateHttp.post(`/products/images/${productId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
  }).then(res => res.data)

}

export const deleteProduct = (productId) => {
  return PrivateHttp.delete(`/product/${productId}`).then(res => res.data)

}

export const update = (product, productId) => {
  return PrivateHttp.put(`/product/${productId}`, {

    "productName": product.productName,
    "productDesc": product.productDesc,
    "productPrize": product.productPrize,
    "stock": product.stock,
    "productQuantity": product.productQuantity,
    "live": product.live,
  }

  ).then(res => res.data)

}

export const searchProduct = (search) => {
 
  console.log(search+" : hii")
  if(search !== ''){
    return PrivateHttp.get(`/product/search/${search}`
    ).then(res => res.data);
  }

}


