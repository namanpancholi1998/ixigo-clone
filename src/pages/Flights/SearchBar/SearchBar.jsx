import React from "react";
import ContentContainer from "../../../components/ContentContainer/ContentContainer";
import SearchInput from "./SearchInput";

export default function SearchBar() {
  return (
    <div className="w-full">
      <ContentContainer>
        <SearchInput />
      </ContentContainer>
    </div>
  );
}
