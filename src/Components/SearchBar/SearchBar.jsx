import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  const handleChangeTerm = ({ target }) => {
    setTerm(target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleChangeTerm}
      />
      <button className="SearchButton" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
