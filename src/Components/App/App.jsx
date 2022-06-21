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

  const [playlistName, setPlaylistName] = useState("PlayList do Iord");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: "12",
      name: "Boogie Naipe",
      artist: "Mano Brown",
      album: "Boogie",
    },
    {
      id: "5",
      name: "Vida Loka Pt.1",
      artist: "Racionais Mc's",
      album: "VDL",
    },
    {
      id: "6",
      name: "A favela venceu",
      artist: "Djonga",
      album: "Favelado",
    },
  ]);

  const addTrack = (trackId) => {
    if (!playlistTracks.find((t) => t.id === trackId)) {
      const track = searchResults.find((result) => result.id === trackId);
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (trackId) => {
    console.log(trackId);
    if (playlistTracks.find((t) => t.id === trackId)) {
      setPlaylistTracks([...playlistTracks.filter((t) => t.id !== trackId)]);
    }
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults results={searchResults} addTrack={addTrack} />
          <Playlist
            name={playlistName}
            tracks={playlistTracks}
            removeTrack={removeTrack}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
