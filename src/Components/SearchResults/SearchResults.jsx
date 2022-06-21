import React from "React";
import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

const SearchResults = ({ results }) => (
  <div className="SearchResults">
    <h2>Results</h2>
    <TrackList list={results} />
  </div>
);

export default SearchResults;
