import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const method = searchParams.get("method");

  switch (method) {
    case "album.getinfo":
      const artist = searchParams.get("artist");
      const album = searchParams.get("album");
      const lastfmKEY = process.env.LAST_FM_KEY;

      const res = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${lastfmKEY}&artist=${artist}&album=${album}&format=json`
      );

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data.");
      }

      return res;

    default:
      return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
