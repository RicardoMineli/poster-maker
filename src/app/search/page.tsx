async function getData() {
  const res = await fetch(
    `http://localhost:3000/api/search?method=album.getinfo&artist=Cher&album=Believe`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Search() {
  const data = await getData();

  return (
    <main className="flex min-h-screen items-center justify-between p-4">
      {data ? (
        <p>Welcome, you have Data! {data.album.name}</p>
      ) : (
        <p>No data.</p>
      )}
    </main>
  );
}
