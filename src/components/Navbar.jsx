import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";

const Navbar = () => {
  return (
    <div class="flex bg-inheri backdrop-blur-sm fixed w-full z-10 ">
      <div class="p-3 xsm:w-1/2">
        <Link to={"/"}>
          <img
            class="w-40 shadow-lg hover:shadow-yellow-600 xsm:m-auto xsm:w-32"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div class="w-full text-white xsm:w-1/2 xsm:flex xsm:justify-end">
        <ul class="flex justify-end p-10 xsm:flex-col xsm:p-1">
          <li class="m-3 hover:text-yellow-200 font-bold text-xl xsm:text-lg xsm:m-1 xsm:font-semibold  xsm:w-fit">
            <Link to={"/"}>Home</Link>
          </li>
          <li class="m-3 hover:text-yellow-200 font-bold text-xl xsm:text-lg xsm:m-1 xsm:font-semibold xsm:w-fit">
            <Link to={"/cookie"}>Memories</Link>
          </li>
          <li class="m-3 hover:text-yellow-200 font-bold text-xl xsm:text-lg xsm:m-1 xsm:font-semibold xsm:w-fit">
            <Link to={"/add-card"}>Add Memory</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
