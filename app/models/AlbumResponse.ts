export interface AlbumResponse {
    album:         Album;
    songs:         Song[];
    relatedAlbums: RelatedAlbum[];
}

export interface Album {
    name:  string;
    image: string;
}

export interface RelatedAlbum {
    name:   string;
    singer: string[];
    image:  string;
}

export interface Song {
    title:    string;
    singer:   string[];
    duration: string;
}
