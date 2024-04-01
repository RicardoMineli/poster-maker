"use server";

import { Album } from "../utils/artistTopAlbumType";

export async function getPopularAlbums() {
  "use server";
  const lastfmKEY = process.env.LAST_FM_KEY;
  const limit = 10;

  const artistRes = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${lastfmKEY}&limit=${limit}&format=json`
  );

  const artistData = await artistRes.json();

  if (!artistRes.ok) {
    throw new Error(`Failed to fetch data! Error: ${artistData}`);
  }

  var albums: Album[] = [];

  for (let i = 0; i < limit; i++) {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&api_key=${lastfmKEY}&artist=${artistData.artists.artist[i].name}&limit=1&format=json`
    );

    const resData = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to fetch data! Error: ${resData}`);
    }

    var temp: Album = {
      name: resData.topalbums.album[0].name,
      url: resData.topalbums.album[0].url,
      artist: resData.topalbums.album[0].artist.name,
      image: resData.topalbums.album[0].image,
    };

    albums.push(temp);
  }

  return albums;
}

export async function searchAlbums(album: String) {
  "use server";
  const lastfmKEY = process.env.LAST_FM_KEY;
  const limit = 10;

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=album.search&api_key=${lastfmKEY}&album=${album}&limit=${limit}&format=json`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data! Error: ${res}`);
  }

  const resData = await res.json();
  console.log();
  return resData.results.albummatches.album;
}
