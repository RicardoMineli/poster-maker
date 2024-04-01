"use client";
import Image from "next/image";
import Link from "next/link";

import { Album } from "@/app/utils/artistTopAlbumType";

export default function AlbumCard({ albumInfo }: { albumInfo: Album }) {
  return (
    <Link
      className="mt-12 max-w-[300px] min-w-[236px] rounded-sm shadow-lg bg-gray-200 text-gray-700 p-4 w-full"
      href={`music/${encodeURIComponent(
        albumInfo.artist.replaceAll(" ", "+")
      )}/${encodeURIComponent(albumInfo.name.replaceAll(" ", "+"))}`}
    >
      <div className="relative pl-4 pr-4 -mt-12">
        <Image
          className="w-full h-auto border-black border-4"
          src={albumInfo.image[3]["#text"]}
          alt={"Album photo"}
          width={300}
          height={300}
        ></Image>
      </div>
      <div className="pt-3 pl-5 pr-5">
        <h5 className="mb-1 text-xl font-semibold">{albumInfo.name}</h5>
        <h4 className="mb-2 text-xl">{albumInfo.artist}</h4>
      </div>
    </Link>
  );
}
