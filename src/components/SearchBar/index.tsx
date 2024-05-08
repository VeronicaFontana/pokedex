import React from "react";
import { Search } from "./search.styled";

export default function SearchBar({ setSearch }: { setSearch: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <Search
      type="text"
      id="searchInput"
      placeholder="Enter a name"
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}


