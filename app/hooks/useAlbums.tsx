"use client";
import { useEffect, useState } from "react";
import { AlbumResponse } from "@/app/models/AlbumResponse";

const useAlbums = (): AlbumResponse => {
  const [albums, setAlbums] = useState<AlbumResponse>();

  useEffect(() => {
    async function get() {
      try {
        const response = await fetch(
          "http://music-shop-base-48628374.s3-website.eu-west-2.amazonaws.com/albums.json",
          {
            next: { revalidate: 600 },
          }
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error: any) {}
    }
    get();
  }, []);

  return albums as AlbumResponse;
};

export default useAlbums;
