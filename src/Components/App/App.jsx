import React, { useState } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

import Spotify from "../../util/Spotify";

const App = () => {
  const [searchResults, setSearchResults] = useState([
    {
      id: "1",
      name: "Surf",
      artist: "Mac Miller",
      album: "Surf",
      uri: "https://google.com",
    },
    {
      id: "2",
      name: "Sel Care",
      artist: "Mac Miller",
      album: "Self Care",
      uri: "https://google.com",
    },
    {
      id: "3",
      name: "Nikes on My Feet",
      artist: "Mac Miller",
      album: "Blue Slide Park",
      uri: "https://google.com",
    },
  ]);

  const [playlistName, setPlaylistName] = useState("PlayList do Iord");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: "12",
      name: "Boogie Naipe",
      artist: "Mano Brown",
      album: "Boogie",
      uri: "https://google.com",
    },
    {
      id: "5",
      name: "Vida Loka Pt.1",
      artist: "Racionais Mc's",
      album: "VDL",
      uri: "https://google.com",
    },
    {
      id: "6",
      name: "A favela venceu",
      artist: "Djonga",
      album: "Favelado",
      uri: "https://google.com",
    },
  ]);

  const addTrack = (trackId) => {
    if (!playlistTracks.find((t) => t.id === trackId)) {
      const track = searchResults.find((result) => result.id === trackId);
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (trackId) => {
    if (playlistTracks.find((t) => t.id === trackId)) {
      setPlaylistTracks([...playlistTracks.filter((t) => t.id !== trackId)]);
    }
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
    //save
  };

  const search = async (searchTerm) => {
    const results = await Spotify.search(searchTerm);
    setSearchResults(results);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults results={searchResults} addTrack={addTrack} />
          <Playlist
            name={playlistName}
            tracks={playlistTracks}
            removeTrack={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
