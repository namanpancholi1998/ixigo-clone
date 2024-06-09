import React from "react";
import { NavLink } from "react-router-dom";
import {
  FlightLogo,
  TrainLogo,
  HotelLogo,
  BusLogo,
} from "../../../assets/navbar/navbar.js";

export default function Navbar() {
  return (
    <nav className="nav-links bg-white relative flex h-full items-center gap-6 font-semibold text-slate-500 mx-5 max-lg:gap-0 max-lg:fixed max-lg:bottom-0 max-lg:h-16 max-lg:w-full max-lg:left-0 max-lg:mx-0 max-lg:px-5  max-lg:justify-between max-lg:shadowup z-10">
      <NavLink to={"/flights"} className="nav-item ">
        <img src={FlightLogo} alt="flight-logo" className="nav-service-logo" />
        <span>Flights</span>
      </NavLink>
      <NavLink to={"/trains"} className="nav-item">
        <img src={TrainLogo} alt="tain-logo" className="nav-service-logo" />
        <span>Trains</span>
      </NavLink>
      <NavLink to={"/hotels"} className="nav-item">
        <img src={HotelLogo} alt="hotel-logo" className="nav-service-logo" />
        <span>Hotels</span>
      </NavLink>
      <NavLink to={"/buses"} className="nav-item">
        <img src={BusLogo} alt="bus-logo" className="nav-service-logo" />
        <span>Buses</span>
      </NavLink>
    </nav>
  );
}
