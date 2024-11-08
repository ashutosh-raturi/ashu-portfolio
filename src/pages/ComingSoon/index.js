import React from "react";
import "./coming-soon.css";
import comingSoon from "../../assets/comingSoon.svg";

const ComingSoon = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-8">
      <div className="md:w-[24rem] w-[14rem] md:h-[24rem] h-[14rem]">
        <img src={comingSoon} height="100%" width="100%" />
      </div>
      <h2 className="text-[var(--text-dark)] text-3xl italic mt-10 md:mt-2 mb-8">
        Coming soon
        <span class="dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </h2>
    </div>
  );
};

export default ComingSoon;
