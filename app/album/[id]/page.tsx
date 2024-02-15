"use client"
import AddAlbumCart from "@/app/components/add-album-cart/add-album-cart";
import RelatedAlbums from "@/app/components/related-albums/related-albums";
import Songlist from "@/app/components/song-list/song-list";
import useAlbums from "@/app/hooks/useAlbums";
import { AlbumResponse } from "@/app/models/AlbumResponse";

interface AlbumPageProps {
  params: { id: string };
}

const AlbumPage: React.FC<AlbumPageProps> = ({ params }) => {
  const { id } = params;
  const albums = useAlbums();

  // try {
  //   const response = await fetch(
  //     "http://music-shop-base-48628374.s3-website.eu-west-2.amazonaws.com/albums.json"
  //   , {
  //     next: { revalidate : 600 }
  //   });
  //   data = await response.json();
  // } catch (error: any) {}

  return (
    <>
      <div className="relative">
        <img
          src="https://via.placeholder.com/1920x500"
          alt="Album"
          className="w-full"
        />
        <div className="absolute top-4 left-4">
          <h1 className="text-4xl font-bold text-white">Album Name</h1>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center space-x-4">
          <AddAlbumCart album={albums} />
          <button className="material-icons text-green-400 hover:text-green-300 text-3xl">
            play_arrow
          </button>
        </div>
      </div>
      {albums?.songs && <Songlist list={albums?.songs} />}
      <RelatedAlbums />
    </>
  );
};
export default AlbumPage;
