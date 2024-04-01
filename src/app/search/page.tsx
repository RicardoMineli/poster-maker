"use client";
import { getPopularAlbums, searchAlbums } from "@/app/search/actions";

import SearchBar from "@/app/ui/search-bar";
import AlbumCard from "@/app/ui/album-card";
import { Album } from "../utils/artistTopAlbumType";
import { useEffect, useState } from "react";

export default function Search() {
  const [data, setData] = useState<Album[]>();
  //const data = await getPopularAlbums();
  //const data = await searchAlbums("Animals");

  const handleClick = async (album: string) => {
    if (!album) {
      return [];
    }
    const response = await searchAlbums(album);
    setData(response);
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getPopularAlbums();
      setData(response);
    }
    fetchData();
  }, []);

  const displayAlbums = data?.map((albumInfo: Album) => (
    <AlbumCard key={albumInfo.url} albumInfo={albumInfo} />
  ));

  return (
    <main className="pattern-squares min-h-screen flex flex-col items-center justify-center p-4">
      <div className="mt-5 mb-auto">
        <SearchBar handleClick={handleClick} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {displayAlbums}
      </div>
    </main>
  );
}
