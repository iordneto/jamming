import React, { useState, useEffect } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const App = (props) => {
  const [searchResults, setSearchResults] = useState([
    {
      id: "1",
      name: "Surf",
      artist: "Mac Miller",
      album: "Surf",
    },
    {
      id: "2",
      name: "Sel Care",
      artist: "Mac Miller",
      album: "Self Care",
    },
    {
      id: "3",
      name: "Nikes on My Feet",
      artist: "Mac Miller",
      album: "Blue Slide Park",
    },
  ]);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults results={searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default App;
