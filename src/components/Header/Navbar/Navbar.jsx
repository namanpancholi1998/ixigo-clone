import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-8 relative h-full font-semibold text-slate-600 mx-5 max-lg:gap-0 max-lg:fixed max-lg:top-16 max-lg:mx-0 max-lg:justify-between z-10 max-lg:left-0 max-lg:h-16 max-lg:w-full ">
      <NavLink to={"/flights"} className="nav-link">
        <img
          src="src\assets\navbar\flight.svg"
          alt="flight-logo"
          className="nav-logo"
        />
        <span>Flights</span>
      </NavLink>
      <NavLink to={"/trains"} className="nav-link">
        <img
          src="src\assets\navbar\train.svg"
          alt="tain-logo"
          className="nav-logo"
        />
        <span>Trains</span>
      </NavLink>
      <NavLink to={"/hotels"} className="nav-link">
        <img
          src="src\assets\navbar\hotel.svg"
          alt="hotel-logo"
          className="nav-logo"
        />
        <span>Hotels</span>
      </NavLink>
      <NavLink to={"/buses"} className="nav-link">
        <img
          src="src\assets\navbar\bus.svg"
          alt="bus-logo"
          className="nav-logo"
        />
        <span>Buses</span>
      </NavLink>
    </nav>
  );
}
