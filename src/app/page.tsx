const mockUrls = [
  "https://utfs.io/f/833b6733-e969-41bb-ac46-c70c7d014a5c-1g.jpg",
  "https://utfs.io/f/94a5b951-dbe3-4faa-bb2f-449c3bd52363-1d.jpg",
  "https://utfs.io/f/2480452f-8ec6-4eb9-9163-9c48499363e8-1f.jpg",
  "https://utfs.io/f/98168ded-4a3f-4e9b-9922-4f288bed96b4-1e.jpg",
];

const mockImage = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImage, ...mockImage, ...mockImage].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello World.{" "}
    </main>
  );
}
