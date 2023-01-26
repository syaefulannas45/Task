import { Link } from "react-router-dom";

import FormRegister from "../components/medium/FormRegister";

const Signup = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to={"/dashboard"} replace={true} />;
  }
  return (
    <>
      <section id="register" className="">
        <div className="flex w-full">
          <div className="w-2/4 bg-[#E8EAF2] py-[100px] px-[40px]">
            <p className="text-[32px] font-bold">What does your free trial include?</p>
            <p className="mt-[30px] text-[20px] font-bold">For 7 days, you get access to BLAZINGWA’s Sandbox Account.</p>
            <p className="mt-[15px] text-[17px]">This means that you can use any active WhatsApp number to learn all about BLAZINGWA’s exciting features like:</p>
            <ul className="mt-[40px]">
              <li className="flex space-x-[15px]">
                <img src="/images/ceklis.svg" alt="ceklis" /> <p>Multi-Agent Inbox & Support Dashboard overview</p>
              </li>
              <li className="flex space-x-[15px]">
                <img src="/images/ceklis.svg" alt="ceklis" /> <p>WhatsApp Broadcast (to your own number)</p>
              </li>
              <li className="flex space-x-[15px]">
                <img src="/images/ceklis.svg" alt="ceklis" /> <p>CRM & Contact Management tour</p>
              </li>
              <li className="flex space-x-[15px]">
                <img src="/images/ceklis.svg" alt="ceklis" /> <p>Third Party Integrations with tools like Shopify, Google Sheets, etc.</p>
              </li>
            </ul>
            <p className="mt-[35px] text-[17px] font-bold">Our free trial is not a customer facing product.</p>
            <p className="mt-[25px] text-[17px] font-bold">You WILL NOT be able to</p>
            <ul className="mt-[25px]">
              <li className="flex space-x-[15px]">
                <img src="/images/wrong.svg" alt="wrong" /> <p>Build Chatbot or Automation Flows</p>
              </li>
              <li className="flex space-x-[15px]">
                <img src="/images/wrong.svg" alt="wrong" /> <p>Create New Templates</p>
              </li>
              <li className="flex space-x-[15px]">
                <img src="/images/wrong.svg" alt="wrong" /> <p>Set up your own WhatsApp number</p>
              </li>
              <li className="flex space-x-[15px]">
                <img src="/images/wrong.svg" alt="wrong" /> <p>Send messages to your customers</p>
              </li>
            </ul>
            <p className="mt-[35px] text-[17px] font-semibold">To use our free trial version, you do not need Facebook Verification or WhatsApp API registration.</p>
          </div>
          <div className="w-2/4 py-[100px] px-[65px]">
            <h1 className="pb-6 text-4xl text-button-100">Start your free trial</h1>
            <Link to={"/"} className="text-sky-500">
              {"<"} Back
            </Link>
            <FormRegister />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
