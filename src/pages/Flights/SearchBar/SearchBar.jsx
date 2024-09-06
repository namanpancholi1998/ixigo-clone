import React from "react";
import ContentContainer from "../../../components/ContentContainer/ContentContainer";
import SearchInput from "./SearchInput";
import Navbar from "../../../components/Header/Navbar/Navbar";

export default function SearchBar() {
  return (
    <ContentContainer>
      <Navbar />
      <SearchInput />
    </ContentContainer>
  );
}
