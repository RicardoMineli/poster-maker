import Image from "next/image";
import Earth2AlbumCover from "@/../public/Example/Earth2AlbumCover.jpg";

export default function PosterPreview({
  tracksSize,
  artistFSize,
  albumFSize,
}: {
  tracksSize: number;
  artistFSize: number;
  albumFSize: number;
}) {
  return (
    <div
      className={
        "text-black bg-white h-[900px] w-[900px] flex justify-center pt-10"
      }
    >
      <div id="posterContent">
        <Image
          id="albumCover"
          className="border-4 border-black"
          src={Earth2AlbumCover}
          alt={"Test image"}
          height={500}
          width={500}
        ></Image>

        <div className="grid grid-cols-3 mt-2">
          <div
            id="artistName"
            className="col-start-1 col-span-2"
            style={{ container: "tracks / inline-size" }}
          >
            <p
              className="leading-none font-bold text-left"
              style={{ fontSize: `${artistFSize}rem` }}
            >
              Earth
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
              Earth 2
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

        <div className="flex items-center pt-2 pb-2">
          <div className="flex-1 border-t-2 border-black"></div>
        </div>

        <div
          id="albumTracks"
          className="flex flex-col text-pretty "
          style={{ container: "tracks / inline-size" }}
        >
          <div className={`mb-1`} style={{ fontSize: `${tracksSize}rem` }}>
            1 Seven Angels
          </div>
          <div className="mb-1" style={{ fontSize: `${tracksSize}rem` }}>
            2 Theeth Of Lions Rule The Divine
          </div>
          <div className="mb-1" style={{ fontSize: `${tracksSize}rem` }}>
            3 Like Gold And Faceted
          </div>
        </div>
      </div>
    </div>
  );
}

//style={{ fontSize: "10cqw" }}
