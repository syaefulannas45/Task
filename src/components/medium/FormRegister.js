import CInput from "../low/Input";
import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const FormRegister = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    mobile: "",
    country: "",
    password_confirmation: "",
    mobile_code: "63",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const res = await axios.post("https://nimda.blazingwa.com/api/register/", { ...form });

      console.log(res.data);
      console.log(res.response.data);
    } catch (error) {
      console.log(error.response.data);
    }

   
  };

  return (
    <>
      <form className="pt-[10px]" onSubmit={handleSubmit}>
        <div className="mb-4 flex space-x-[20px]">
          <div>
            <label htmlFor="" className="text-[#666666]">
              First name
            </label>
            <CInput
              placeholder="Enter your firstname"
              type="text"
              className="w-full border bg-[#F5F6FA] py-[10px] px-[40px] placeholder:px-[50px]"
              name="firstname"
              value={form.firstname}
              onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="" className="text-[#666666]">
              Last name
            </label>
            <CInput
              placeholder="Enter your lastname"
              type="text"
              className="w-full border bg-[#F5F6FA] py-[10px] px-[40px] placeholder:px-[50px]"
              name="lastname"
              value={form.lastname}
              onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            />
          </div>
        </div>
        <label htmlFor="" className="text-[#666666]">
          Email
        </label>{" "}
        <br />
        <CInput
          placeholder="Enter your email"
          type="email"
          className="mb-4 w-[100%] border bg-[#F5F6FA] py-[10px] px-[40px] placeholder:px-[50px]"
          name="username"
          value={form.username}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        />{" "}
        <br />
        <label htmlFor="" className="text-[#666666]">
          Country
        </label>{" "}
        <br />
        <CInput
          placeholder="Enter your country"
          type="text"
          className="mb-4 w-[100%] border bg-[#F5F6FA] py-[10px] px-[40px] placeholder:px-[50px]"
          name="country"
          value={form.country}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        />{" "}
        <br />
        <label htmlFor="" className="text-[#666666]">
          Whatsapp number
        </label>{" "}
        <br />
        <div className="flex space-x-[15px]">
          <div className="flex h-[46px] items-center bg-[#F5F6FA]">
            <img src="/images/wa.svg" alt="wa" />
          </div>
          <CInput
            placeholder="Enter your phone number"
            type="text"
            className="mb-4 w-[100%] border bg-[#F5F6FA] py-[10px] px-[40px] placeholder:px-[50px]"
            name="mobile"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          />
        </div>
        <div className="mb-4 flex space-x-[20px]">
          <div className="w-2/4">
            <label htmlFor="" className="text-[#666666]">
              Password
            </label>
            <CInput
              placeholder="Enter your firstname"
              type="password"
              className="w-full border bg-[#F5F6FA] py-[10px] px-[40px] placeholder:px-[50px]"
              name="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="w-2/4">
            <label htmlFor="" className="text-[#666666]">
              Password Confirmation
            </label>
            <CInput
              placeholder="Confirm your password"
              type="password"
              className="w-full border bg-[#F5F6FA] py-[10px] px-[30px] placeholder:px-[50px]"
              name="password_confirmation"
              value={form.password_confirmation}
              onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            />
          </div>
        </div>
        <CInput type="checkbox" />{" "}
        <span>
          I agree to{" "}
          <a href="/" className="text-button-100">
            terms and conditions
          </a>{" "}
          and{" "}
          <a href="/" className="text-button-100">
            privacy policy
          </a>
        </span>{" "}
        <br />
        <button type="submit" className="mt-4 w-[100%] bg-[#E7E7E7] py-4 text-center">
          Create an account
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account ?{" "}
        <Link className="cursor-pointer text-button-100" to={"/"}>
          Login
        </Link>
      </p>
      <div className="mt-4 flex justify-center space-x-[15px]">
        <img src="/images/appstore.svg" alt="" />
        <img src="/images/gplay.svg" alt="" />
      </div>
    </>
  );
};

export default FormRegister;
