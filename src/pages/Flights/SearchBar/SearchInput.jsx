import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../../components/Common/Input";
import SwapButton from "../../../components/Common/Buttons/SwapButton";
// import { useFlightsContext } from "../../../context/FLightDetailsProvider";

export default function SearchInput() {
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");

  //   const { flightsDetails, dispatchFlightsDetails } = useFlightsContext();
  //   console.log(useFlightsContext());

  //   const {
  //     source_location,
  //     destination_location,
  //     one_way,
  //     travel_details,
  //     date_of_journey,
  //   } = flightsDetails;

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const handleSearch = (e) => {
    // console.log("clicked");
    const { adult, child, infant } = travel_details?.numbers;
    if (source_location == "") {
      errorToast("Please Enter Source Location");
      return;
    }
    if (destination_location == "") {
      errorToast("Please Enter Destination Location");
      return;
    }

    if (source_location == destination_location) {
      errorToast(
        "Both airports are the same, Please Select Different Airports"
      );
      return;
    }
    const encodedPath = btoa(
      `${source_location}-${destination_location}--${date_of_journey}--${adult}-${child}-${infant}`
    );
    console.log(source_location, destination_location);
    if (pathname.includes("flight")) {
      navigate(`air-${encodedPath}`);
    } else {
      navigate(`flight/air-${encodedPath}`);
    }
  };

  return (
    <div className="px-8 md:px-5 md:my-[-10px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-white border  border-slate-200 shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.2)]   my-2 mx-auto
    flex flex-col"
      >
        <div className="border-none px-6 pt-6 md:p-[20px] gap-2 md:gap-10 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-2 md:gap-5 flex-col md:flex-row justify-center items-center">
            <Input
              type="text"
              placeholder="Enter city or airport"
              label="From"
              id="from_location"
              inputValue={inputFromValue}
              setInputValue={setInputFromValue}
              className="w-full"
              //   selectedValue={source_location}
              handleValue={(value) => {
                dispatchFlightsDetails({
                  type: "set_source_location",
                  payload: { value },
                });
              }}
            />
            <SwapButton
              handleSwap={(e) => {
                e.preventDefault();
                const temp = inputFromValue;
                setInputFromValue(inputToValue);
                setInputToValue(temp);
                dispatchFlightsDetails({ type: "swap_location" });
              }}
              className="self-center swap-button flex items-center justify-center bg-white cursor-pointer  z-[1] rounded-xl border shadow-md w-9 h-9 m-[-20px] "
            />
            <Input
              type="text"
              placeholder="Enter city or airport"
              label="To"
              id="to_location"
              inputValue={inputToValue}
              setInputValue={setInputToValue}
              className="w-full"
              //   selectedValue={destination_location}
              handleValue={(value) => {
                dispatchFlightsDetails({
                  type: "set_destination_location",
                  payload: { value },
                });
              }}
            />
          </div>
          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <button
              type="submit"
              onClick={handleSearch}
              className="bg-orange-500 mx-10  md:mx-0  text-xs md:text-lg py-2 px-8 md:py-2 hover:bg-orange-600 text-white rounded-lg hover:shadow-md"
            >
              SEARCH
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
