"use client";
import { ChangeEvent, MouseEventHandler, useState } from "react";
//{ albumData }: { albumData: Album }
export default function SearchBar({ handleClick }: { handleClick: Function }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="w-full bg-white 
              rounded-l-lg pl-2 pr-2 text-black font-semibold outline-0"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type Album Name"
        id=""
      />
      <button
        type="button"
        onClick={() => handleClick(inputValue)}
        className="bg-blue-500 p-2 rounded-r-lg text-white font-semibold hover:bg-blue-800 transition-colors"
      >
        Search
      </button>
    </div>
  );
}
