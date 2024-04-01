import Image from "next/image";
import { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

import { Album } from "@/app/utils/albumType";

export default function PosterPreview({
  albumData,
  tracksSize,
  artistFSize,
  albumFSize,
}: {
  albumData: Album;
  tracksSize: number;
  artistFSize: number;
  albumFSize: number;
}) {
  const displayTracks = albumData.tracks.track.map((track, order) => (
    <div
      key={order + 1}
      className={`mb-1`}
      style={{ fontSize: `${tracksSize}rem` }}
    >
      {order + 1} {track.name}
    </div>
  ));

  const [reveal, setReveal] = useState(false);
  const visibility = reveal ? "visible" : "hidden";
  const loader = reveal ? "none" : "inline-block";

  return (
    <div
      id="poster-preview"
      className={
        "text-black bg-white flex flex-col justify-center items-center "
      }
    >
      <div id="imageDiv" className="">
        <Image
          id="albumCover"
          className={"block w-4/5 mx-auto my-[5%] border-black border-4"}
          style={{ visibility }}
          src={albumData.image[0]["#text"].replace("34s", "arg0")}
          alt={"Test image"}
          height={1500}
          width={1500}
          onError={() => setReveal(true)}
          onLoad={() => setReveal(true)}
        ></Image>
        {/* <Skeleton
          className="relative"
          style={{
            display: loader,
          }}
          height={500}
          width={500}
        /> */}
      </div>
      <div className="grid grid-cols-3 w-4/5 mx-auto my-[3%]">
        <div id="artistName" className="col-start-1 col-span-2">
          <p
            className="leading-none font-bold text-left"
            style={{ fontSize: `${artistFSize}rem` }}
          >
            {albumData.artist}
          </p>
        </div>
        <div
          id="albumName"
          className="col-start-1 col-span-2"
          style={{ container: "tracks / inline-size" }}
        >
          <p
            className="leading-none font-bold text-left"
            style={{ fontSize: `${albumFSize}rem` }}
          >
            {albumData.name}
          </p>
        </div>
        <div
          id="lineDetail"
          className="w-full h-7 rounded-lg border-2 col-start-3 row-start-1
          bg-gradient-to-r from-blue-600 to-green-600"
        />
        <div id="albumDetails" className="">
          <p className="text-xl font-medium text-right">
            <span className="text-base">Length</span> 1h 13min
          </p>
          <p className="text-2xl font-medium text-right">
            <span className="text-base">Released</span> 1993
          </p>
        </div>
      </div>

      <div className="flex items-center pt-2 pb-2 w-4/5 mx-auto">
        <div className="flex-1 border-t-2 border-black"></div>
      </div>

      <div
        id="albumTracks"
        className="grid grid-cols-2 text-pretty w-4/5 mx-auto "
        style={{ container: "tracks / inline-size" }}
      >
        {displayTracks}
      </div>
    </div>
  );
}

//style={{ fontSize: "10cqw" }}
