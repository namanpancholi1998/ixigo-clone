import React from "react";
import ContentContainer from "../../../components/ContentContainer/ContentContainer";
import Navbar from "../../../components/Header/Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";

export default function HomePage() {
  return (
    <div className="w-full  h-[300px] md:h-[400px]  flex items-center  ">
      <ContentContainer>
        <div className="homePage flex flex-col  justify-center relative max-w-screen-xl mx-auto">
          <SearchBar />
        </div>
      </ContentContainer>
    </div>
  );
}
