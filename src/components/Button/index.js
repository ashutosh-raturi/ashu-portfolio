import React from "react";
import './Button.css';

const Button = ({ text, onClick, type = "primary", isDisabled, children }) => {
  const btnClasses = `btn btn-${type}`;
  const handleOnClick = () => {
    onClick();
  };
  return (
    <button
      className={btnClasses}
      onClick={handleOnClick}
      disabled={isDisabled}
    >
      {text ? text : children}
    </button>
  );
};

export default Button;
