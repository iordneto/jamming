import { useImperativeHandle } from "react";

let accessToken;
const CLIENT_ID = "c24db6a6bcd74093838ab5704575123c";
const REDIRECT_URI = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) return [];
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },

  async savePlaylist(name, tracks) {
    if (!name || !tracks || tracks.length === 0) return;

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };

    //get User Id
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: headers,
    });

    const user = await response.json();

    //post a new playlist with name to the current Spotify account
    const postPlaylist = await fetch(
      `https://api.spotify.com/v1/users/${user.id}/playlists`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({
          name: name,
        }),
      }
    );

    const playlist = await postPlaylist.json();
    const postTracksToPlaylist = await fetch(
      `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ uris: tracks }),
      }
    );
  },
};

export default Spotify;
