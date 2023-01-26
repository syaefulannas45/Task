import React from "react";

const CInput = ({ type, placeholder, value, name, onChange, className,id }) => {
  return <input type={type} placeholder={placeholder} value={value} name={name} onChange={onChange} className={className} id={id} />;
};

export default CInput;
