import React, { useState } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Loading from "../Loading/Loading";

import Spotify from "../../util/Spotify";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    await setIsLoading(true);
    const trackURIs = playlistTracks.map((track) => track.uri);
    await Spotify.savePlaylist(playlistName, trackURIs);
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
    await setIsLoading(false);
  };

  const search = async (searchTerm) => {
    await setIsLoading(true);
    const results = await Spotify.search(searchTerm);
    setSearchResults(results);
    await setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <Loading />}
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
