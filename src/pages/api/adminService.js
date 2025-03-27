import { axiosInstance } from "./axiosInstance";


export const AdminLoginPost=async(data)=>{
    try {
        const response=await axiosInstance.post('/admin/login',data)
        // console.log('response in the sevice',response)
        return response.data
    } catch (error) {
        console.log('error in the login service',error)
    }
}

export const checkAdminAuth=async()=>{
    try {
        const res=await axiosInstance.get('/admin/checkauth',
            {withCredentials:true}
        )
        console.log('admin auth checking service',res)
        return res.data
    } catch (error) {
        console.log('error in admin checkauth service',error)
    }
}

export const adminLogout=async()=>{
    try {
        const res=await axiosInstance.post('/admin/logout')
        // console.log('response in adminlogout service ',res)
        return res.data
    } catch (error) {
        console.log('error in admin logout service',error)
    }
}

export const GetCategories=async()=>{
    console.log('req enter the service section')
    try {
        const res=await axiosInstance.get('/admin/categories')
        console.log(res)
        return res.data
    } catch (error) {
        console.log('error in the get categories service',error)
    }
}

export const GetProducts=async()=>{
    console.log('enter get product service')
    try {
        const response=await axiosInstance.get('/admin/getproducts')
        console.log(response)
    } catch (error) {
        console.log('error in the fetching product service',error)
    }
}