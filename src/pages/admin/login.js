import LoginForm from "@/components/common/LoginForm";
import React from "react";
import { AdminLoginPost } from "../api/adminService";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const login = () => {
  const router=useRouter()
  const onSubmit = async (data) => {
    console.log("form data in component", data);
    try {
      const res = await AdminLoginPost(data);
      console.log('response in component',res)
      if (res?.success) {
        toast.success('Admin Logged In Successfully')
        router.push("/admin"); 
      } else {
        toast.error('Admin Login Failed')
        console.error("Login failed:", res?.message || "Unknown error");
      }
    } catch (error) {
        console.log('error in the login component',error)
        toast.error('Admin Login Failed')
    }
  };
  return (
    <>
        
    <div>
      <LoginForm formSubmit={onSubmit} />
    </div>
    </>
  );
};

export default login;
