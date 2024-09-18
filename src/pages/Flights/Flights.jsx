import React from "react";
import HomePage from "./HomePage/HomePage";
import FlightOffers from "./FlightOffers/FlightOffers";
import SearchBar from "./SearchBar/SearchBar";

export default function Flights() {
  return (
    <div className="mt-32 md:mt-[-20px]">
      <HomePage />
      {/* <SearchBar /> */}
      <FlightOffers />
    </div>
  );
}
