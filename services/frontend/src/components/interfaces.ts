export interface AlbumOrPlaylist {
  cover_url: string;
  album_name: string;
  album_artist: string;
}

export interface Song {
  name: string;
  artist: string;
  url: string;
}

export interface DownloadProgress {
  [key: number]: number;
}
