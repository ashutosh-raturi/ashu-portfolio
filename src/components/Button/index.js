import React from "react";
import './Button.css';

const Button = ({ text, onClick, type = "primary", isDisabled, className, children }) => {
  const btnClasses = `btn btn-${type} `.concat(className ? className : '');
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
