import React from "react";

const Navbar = () => {
  return (
    <>
      <section id="navbar" className="fixed flex w-full justify-between px-[42px] py-[10px]">
        <div>
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="flex items-center bg-background-100 px-[10px]">
          <img src="/images/flag.svg" alt="flag" className="pr-[23px] " />
          <p className="pr-[45px]">English</p>
          <img src="/images/arrow.svg" alt="arrow" />
        </div>
      </section>
    </>
  );
};

export default Navbar;
