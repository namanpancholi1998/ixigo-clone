import React from "react";
import HomePage from "./HomePage/HomePage";
import FlightOffers from "./FlightOffers/FlightOffers";

export default function Flights() {
  return (
    <div className="mt-32 md:mt-[-20px]">
      <HomePage />
      <FlightOffers />
    </div>
  );
}
