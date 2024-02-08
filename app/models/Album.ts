import { Song } from "./Song";

export interface Album {
    thumbnail: string,
    name: string,
    price: number,
    singer: string[],
    songs: Song[],
    id: number
}