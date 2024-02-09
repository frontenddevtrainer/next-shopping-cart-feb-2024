"use client";
import RelatedAlbums from "@/app/components/related-albums/related-albums";
import Songlist from "@/app/components/song-list/song-list";
import { AlbumResponse } from "@/app/models/AlbumResponse";
import { useEffect, useState } from "react";

interface AlbumPageProps {
  params: { id: string };
}

const AlbumPage: React.FC<AlbumPageProps> = ({ params }) => {
  const { id } = params;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AlbumResponse | null>(null);
  const [error, setError] = useState<any>(null);

  // Component Did Mount
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://music-shop-base-48628374.s3-website.eu-west-2.amazonaws.com/albums.json"
        );
        const data:AlbumResponse = await response.json();
        setData(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  //   <></> = react fragment
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
          <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300">
            Add to Cart
          </button>
          <button className="material-icons text-green-400 hover:text-green-300 text-3xl">
            play_arrow
          </button>
        </div>
      </div>
      {!data?.songs && <p>Loading songs...</p>}
      {data?.songs && <Songlist list={data?.songs}/>}
      <RelatedAlbums />
    </>
  );
};
export default AlbumPage;
