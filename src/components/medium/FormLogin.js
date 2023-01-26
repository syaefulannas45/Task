import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CButton from "../low/Button";
import CInput from "../low/Input";

const FormLogin = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

 
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validation = () => {
    if (!form.username.includes("@") && form.password.length < 5) {
      setNameError("Harap masukan email yang benar");
      setPasswordError("Password Terlalu lemah");
    } else if (!form.username.includes("@")) {
      setNameError("Harap masukan email yang benar");
    } else if (form.password.length < 5) {
      setPasswordError("Password Terlalu lemah");
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://nimda.blazingwa.com/api/login-type", { ...form, type: "password" });

      console.log(res.data.data.access_token);
      localStorage.setItem("token", res.data.data.access_token);
      navigate("/dashboard");
    } catch (err) {
      setPasswordError();
      setNameError();
      if (validation()) {
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="text-[15px] font-semibold text-[#666666]">
          Email
        </label>
        <br />
        <div className="relative pb-[30px]">
          <CInput placeholder="Enter your email" type="text" className="w-full py-[10px] px-[60px]" name="username" value={form.username} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
          <img src="/images/email.svg" alt="email" className="absolute top-[10%]" />
        </div>{" "}
        <p className="text-red-500">{nameError}</p> <br />
        <label htmlFor="" className="text-[15px] font-semibold text-[#666666]">
          Password
        </label>
        <br />
        <div className="relative">
          <CInput placeholder="Enter your password" type="password" className="w-full py-[10px] px-[60px]" name="password" value={form.password} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
          <img src="/images/key.svg" alt="password" className="absolute top-[10%]" /> <br />
          <p className="text-red-500">{passwordError}</p>
        </div>
        <div className="flex justify-between pt-[30px]">
          <p className="text-[#666666]">
            <CInput type="checkbox" className="" /> Remember me
          </p>
          <a href="/" className="text-[#666666]">
            Forgot password ?
          </a>
        </div>
        <CButton type="submit" className="mt-[30px] w-full bg-button-100 py-[17px] text-center text-white">
          Login
        </CButton>
        <p className="mt-[20px] text-center">
          Do not have a account ?{" "}
          <Link to={"/signup"} className="cursor-pointer text-button-100">
            Signup
          </Link>
        </p>
      </form>
    </>
  );
};

export default FormLogin;
