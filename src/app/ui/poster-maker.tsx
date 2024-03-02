"use client";

import { useState } from "react";

import PosterOptions from "@/app/ui/poster-options";
import PosterPreview from "@/app/ui/poster-preview";

export default function PosterMaker() {
  const [tracksSize, setTracksSize] = useState<number>(1);
  const [artistFSize, setArtistFSize] = useState<number>(3);
  const [albumFSize, setAlbumFSize] = useState<number>(3.5);
  return (
    <div className="flex">
      <PosterOptions
        tracksSize={tracksSize}
        setTracksSize={setTracksSize}
        artistFSize={artistFSize}
        setArtistFSize={setArtistFSize}
        albumFSize={albumFSize}
        setAlbumFSize={setAlbumFSize}
      />
      <PosterPreview
        tracksSize={tracksSize}
        artistFSize={artistFSize}
        albumFSize={albumFSize}
      />
    </div>
  );
}
