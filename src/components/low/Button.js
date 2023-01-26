import React from "react";

const CButton = ({ className, type, children }) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

export default CButton;
