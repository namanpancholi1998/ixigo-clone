import React from "react";
import Navbar from "../Header/Navbar/Navbar.jsx";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="w-full bg-white h-20 fixed top-0">
      <div className="w-full h-full flex justify-between items-center max-w-[1280px] mx-auto px-[10px] max-sm:px-[20px]">
        <div className="h-full flex items-center">
          <NavLink to={"/"} className="mx-4 w-[115px] h-[40px] shrink-0">
            <img
              src="src\assets\navbar\ixigo-logo.webp"
              alt="ixigo-logo"
              className="flex justify-center items-center h-full"
            />
          </NavLink>
          <Navbar />
        </div>
        <div className="h-full flex items-center">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  );
}
