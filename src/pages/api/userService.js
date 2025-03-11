import { axiosInstance } from "./axiosInstance";

export const HomePageService=async()=>{
    try {
        const response=await axiosInstance.get('/')
        console.log('response in service section',response)
    } catch (error) {
        console.log('error in the user home page',error)
    }
}

export const ProductFetchingService=async()=>{
    try {
        const response=await axiosInstance.get('/products')
        // console.log('response in product get function in service section',response)
        return response.data
    } catch (error) {
        console.log('error in product fetching service function',error)
    }
}