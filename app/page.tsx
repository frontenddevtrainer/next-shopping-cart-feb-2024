import AlbumListing from "./components/album-listing/album-listing";
import Banner from "./components/banner/banner";

// header - HTML5
// Header - Component

export default function Home() {

  const topAlbumListingTitle = "Top Albums";
  const latestAlbumListingTitle = "Latest Albums";

  return (
    <main className="container mx-auto p-8">
      <Banner />
      <AlbumListing title={topAlbumListingTitle}/>
      <AlbumListing title={latestAlbumListingTitle}/>
    </main>
  );
}
