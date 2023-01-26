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
      <section id="signin" className="w-full px-4 pt-[100px] lg:px-[226px]">
        <div className="bg-background-100 py-[45px] px-4 lg:flex lg:px-[50px]">
          <div className="w-full lg:w-2/4">
            <img src="/images/hero.svg" alt="hero" />
            <div className="hidden space-x-[15px] lg:flex lg:px-[50px]">
              <img src="/images/appstore.svg" alt="appstore" className="w-[45%]" />
              <img src="/images/gplay.svg" alt="gplay" className="w-2/4" />
            </div>
          </div>
          <div className="w-full lg:w-2/4">
            <div className="flex items-center justify-between">
              <p className="text-[30px] font-semibold text-button-100 lg:pt-0">Login</p>
              <div className="flex items-center bg-background-100 px-[5px] lg:hidden">
                <img src="/images/flag.svg" alt="flag" className="pr-[23px] " />
                <p className="pr-[45px]">English</p>
                <img src="/images/arrow.svg" alt="arrow" />
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center justify-evenly space-x-1 space-y-1 pt-[30px] lg:flex-nowrap lg:space-y-0 lg:space-x-[20px]">
              <div className="flex w-[30%] justify-center space-x-[10px] rounded-lg bg-white py-[16px] px-[20px]">
                <img src="/images/google.svg" alt="google" /> <p className="hidden lg:block">Goggle</p>
              </div>
              <div className="flex w-[30%] justify-center space-x-[10px] rounded-lg bg-[#304F8B] py-[16px] px-[20px]">
                <img src="/images/fb.svg" alt="google" /> <p className="hidden text-white lg:block">Facebook</p>
              </div>
              <div className="flex w-[30%] justify-center space-x-[10px] rounded-lg bg-[#95BF46] py-[16px] px-[20px]">
                <img src="/images/shopy.svg" alt="google" /> <p className="hidden text-white lg:block">Shopify</p>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <hr className="h-1 w-[40%] bg-[#d6d6d6]" />
              <p className="py-[30px] text-center text-[#666666]">Or</p> <hr className="h-1 w-[40%] bg-[#d6d6d6]" />
            </div>
            <FormLogin />
            <div className="flex space-x-[15px] lg:hidden lg:px-[50px] mt-4">
              <img src="/images/appstore.svg" alt="appstore" className="w-[45%]" />
              <img src="/images/gplay.svg" alt="gplay" className="w-2/4" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
