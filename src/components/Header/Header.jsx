import React from "react";
import Navbar from "../Header/Navbar/Navbar.jsx";
import { IxigoLogo } from "../../assets/navbar/navbar.js";
import { NavLink } from "react-router-dom";
import "./header.css";
import Profile from "./UserProfile/Profile.jsx";

export default function Header() {
  return (
    <header className="w-full bg-white h-20 fixed top-0 shadow">
      <div className="w-full h-full flex justify-between items-center max-w-[1280px] mx-auto px-[10px] max-sm:px-[20px]">
        <div className="h-full flex items-center">
          <NavLink to={"/"} className="mx-4 w-[115px] h-[40px] shrink-0">
            <img
              src={IxigoLogo}
              alt="ixigo-logo"
              className="flex justify-center items-center h-full"
            />
          </NavLink>
          <Navbar />
        </div>
        <div className="h-full flex items-center px-4">
          <Profile />
        </div>
      </div>
    </header>
  );
}
