import React, { useState } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

import Spotify from "../../util/Spotify";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

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

  const savePlaylist = async () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
    await Spotify.savePlaylist(playlistName, trackURIs);
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
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
