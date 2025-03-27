import LoginForm from "@/components/common/LoginForm";
import React from "react";
import useAdminAuthStore from "@/store/useAdminAuth";
import { useRouter } from "next/router";

const Login = () => {
  const router=useRouter()
  const { adminLogin } = useAdminAuthStore();
  const onSubmit = async (data) => {
    await adminLogin(data,router);
  };

  return (
    <div>
      <LoginForm formSubmit={onSubmit} />
    </div>
  );
};

export default Login;
