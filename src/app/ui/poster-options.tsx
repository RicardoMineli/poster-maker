export default function PosterOptions({
  tracksSize,
  setTracksSize,
  artistFSize,
  setArtistFSize,
  albumFSize,
  setAlbumFSize,
}: {
  tracksSize: number;
  setTracksSize: React.Dispatch<React.SetStateAction<number>>;
  artistFSize: number;
  setArtistFSize: React.Dispatch<React.SetStateAction<number>>;
  albumFSize: number;
  setAlbumFSize: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <div className="h-[900px] w-[600px]">
        <div className="pattern-squares flex flex-col">
          <span>tracksSize {tracksSize}</span>

          <input
            type="range"
            min="1"
            max="3"
            step={0.1}
            value={tracksSize}
            onChange={(e) => setTracksSize(+e.target.value)}
          />

          <span>artistFSize {artistFSize}</span>
          <input
            type="range"
            min="1"
            max="7"
            step={0.1}
            value={artistFSize}
            onChange={(e) => setArtistFSize(+e.target.value)}
          />

          <span>albumFSize {albumFSize}</span>
          <input
            type="range"
            min="1"
            max="8"
            step={0.1}
            value={albumFSize}
            onChange={(e) => setAlbumFSize(+e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
