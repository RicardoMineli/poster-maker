export interface Root {
  topalbums: Topalbums;
}

export interface Topalbums {
  album: Album[];
  "@attr": Attr;
}

export interface Album {
  name: string;
  url: string;
  artist: string;
  image: Image[];
}

export interface Image {
  "#text": string;
  size: string;
}

export interface Attr {
  artist: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}
