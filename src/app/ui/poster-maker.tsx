"use client";

import { useState } from "react";

import PosterOptions from "@/app/ui/poster-options";
import PosterPreview from "@/app/ui/poster-preview";

import { Album } from "@/app/utils/albumType";

export default function PosterMaker({ albumData }: { albumData: Album }) {
  const [tracksSize, setTracksSize] = useState<number>(1);
  const [artistFSize, setArtistFSize] = useState<number>(3);
  const [albumFSize, setAlbumFSize] = useState<number>(3.5);
  return (
    <div className="flex">
      <div className="w-1/3">
        <PosterOptions
          tracksSize={tracksSize}
          setTracksSize={setTracksSize}
          artistFSize={artistFSize}
          setArtistFSize={setArtistFSize}
          albumFSize={albumFSize}
          setAlbumFSize={setAlbumFSize}
        />
      </div>

      <div className="w-2/3 flex flex-col justify-center items-center">
        <div className="w-1/2 ">
          <PosterPreview
            albumData={albumData}
            tracksSize={tracksSize}
            artistFSize={artistFSize}
            albumFSize={albumFSize}
          />
        </div>
      </div>
    </div>
  );
}
