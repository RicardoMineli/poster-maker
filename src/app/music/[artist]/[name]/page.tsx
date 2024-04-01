import { notFound } from "next/navigation";

import PosterMaker from "@/app/ui/poster-maker";

import { Album } from "@/app/utils/albumType";

async function getAlbumInfo(artist: string, album: string) {
  const lastfmKEY = process.env.LAST_FM_KEY;
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${lastfmKEY}&artist=${artist}&album=${album}&format=json`
  );

  return res.json();
}

export default async function Page({
  params,
}: {
  params: { artist: string; name: string };
}) {
  //url comes encoded so "+" becomes "%2B"
  params.artist = params.artist.replaceAll("%2B", " ");
  params.name = params.name.replaceAll("%2B", " ");

  const data = await getAlbumInfo(params.artist, params.name);
  const albumData: Album = data.album;

  if (Object.hasOwn(data, "error")) {
    notFound();
  }
  return <PosterMaker albumData={albumData} />;
}
