/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Home() {
  return (
    <main className="pattern-squares flex flex-col justify-center items-center min-h-screen">
      <div className="m-0 mb-auto flex flex-col items-center">
        <p className="border-2 border-purple-900 bg-slate-800 p-5 m-5 text-center">
          This is a project for learning NextJs, React and Typescript.
          <br />
          It's far from complete.
          <br />
        </p>
        <Link
          className="border-2 border-purple-900 bg-slate-800 p-1 "
          href={"https://github.com/RicardoMineli/poster-maker"}
        >
          Check the GitHub!
        </Link>
      </div>
      <div className="mb-auto flex flex-col items-center">
        <h1 className="text-4xl pt-5 ">
          Search for music albums and create your own poster.
        </h1>
        <Link className="bg-slate-800 p-5 m-5" href={"/search"}>
          Search
        </Link>
      </div>
    </main>
  );
}
