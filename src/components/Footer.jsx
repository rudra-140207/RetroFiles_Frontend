import React from "react";
import myPic from "../assets/myPic.jpg";

const Footer = () => {
  return (
    <div className="flex border-white border-t-2 h-36 bg-black
    xsm:flex-col xsm:h-60">
      <div className="w-1/2 p-8 xsm:p-4 xsm:w-full">
        <h1 className="font-bold text-lg text-white">
          Crafted with Care and Passion
        </h1>
        <h1 className="font-bold text-lg text-white">
          Email : rudra.010402@gmail.com
        </h1>
      </div>
      <div className="w-1/2 p-8 xsm:p-4 xsm:w-full">
        <img className="h-24 ml-auto  rounded-full xsm:m-auto" src={myPic} alt="" />
      </div>
    </div>
  );
};

export default Footer;
