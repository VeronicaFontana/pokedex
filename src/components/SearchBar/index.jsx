import { Search } from "../SearchBar/search.styled.js";

export default function SearchBar({ setSearch }) {
  return (
    <Search
      type="text"
      id="searchInput"
      placeholder="Enter a name"
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}
