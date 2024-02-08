import AlbumListing from "./components/album-listing/album-listing";
import Banner from "./components/banner/banner";
import { Album } from "./models/Album";

// header - HTML5
// Header - Component

export default function Home() {
  const topAlbumListingTitle = "Top Albums";
  const latestAlbumListingTitle = "Latest Albums";

  const topAlbumList: Album[] = [
    {
      id: 1,
      name: "Album 1",
      price: 34.44,
      singer: ["Singer 1"],
      songs: [
        {
          name: "Song 1",
          length: 532,
          singer: ["Singer 1"],
        },
      ],
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Album 2",
      price: 34.44,
      singer: ["Singer 2", "Singer 3"],
      songs: [
        {
          name: "Song 2",
          length: 886,
          singer: ["Singer 2"],
        },
      ],
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Album 3",
      price: 1.44,
      singer: ["Singer 1", "Singer 4"],
      songs: [
        {
          name: "Song 2",
          length: 886,
          singer: ["Singer 1"],
        },
      ],
      thumbnail: "https://via.placeholder.com/150",
    },
  ];

  return (
    <main className="container mx-auto p-8">
      <Banner />
      <AlbumListing list={topAlbumList} title={topAlbumListingTitle} />
      <AlbumListing title={latestAlbumListingTitle} />
    </main>
  );
}
