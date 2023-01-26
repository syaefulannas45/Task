import React from "react";
import { Navigate } from "react-router-dom";
import FormLogin from "../components/medium/FormLogin";

const Login = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to={"/dashboard"} replace={true} />;
  }

  return (
    <>
      <section id="signin" className="pt-[120px] w-full px-[226px]">
        <div className="flex bg-background-100 py-[45px] px-[50px]">
          <div className="w-2/4">
            <img src="/images/hero.svg" alt="hero" />
            <div className="flex space-x-[15px] px-[50px]">
              <img src="/images/appstore.svg" alt="appstore" />
              <img src="/images/gplay.svg" alt="gplay" />
            </div>
          </div>
          <div className="w-2/4">
            <p className="text-[30px] font-semibold text-button-100">Login</p>
            <div className="flex items-center space-x-[20px] pt-[30px]">
              <div className="flex space-x-[10px] bg-white py-[16px] px-[20px]">
                <img src="/images/google.svg" alt="google" /> <p>Goggle</p>
              </div>
              <div className="flex space-x-[10px] bg-[#304F8B] py-[16px] px-[20px]">
                <img src="/images/fb.svg" alt="google" /> <p className="text-white">Facebook</p>
              </div>
              <div className="flex space-x-[10px] bg-[#95BF46] py-[16px] px-[20px]">
                <img src="/images/shopy.svg" alt="google" /> <p className="text-white">Shopify</p>
              </div>
            </div>
            <p className="py-[30px] text-center text-[#666666]">Or</p>
            <FormLogin />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
