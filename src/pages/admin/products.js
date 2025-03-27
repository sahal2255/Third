import React,{useEffect} from 'react'
import { GetCategories, GetProducts } from '../api/adminService';
const products = () => {

  useEffect(() => {
    const productList=async()=>{
      try {
        const pro=await GetProducts()

      } catch (error) {
        console.log('error in the fetching product ',error)
      }
    }
    productList()
  }, []);
  
  return (
    <div>
      <h1>Products Listing page</h1>
    </div>
  )
}

export default products
