import { Song } from "@/app/models/AlbumResponse";

export interface SonglistProps {
  list: Song[];
}

const Songlist: React.FC<SonglistProps> = ({ list }) => {
  return (
    <div className="container mx-auto p-8 mt-4">
      <h2 className="text-2xl font-bold">Songs</h2>
      <ul className="divide-y divide-gray-700">
        {list &&
          list.length > 0 &&
          list.map((song) => {
            return (
              <li key={song.title} className="py-2 flex justify-between items-center">
                <button className="material-icons text-green-400 hover:text-green-300 text-lg mx-1">
                  play_arrow
                </button>
                <div className="flex-grow text-left ml-4">
                  <span className="text-md">{song.title}</span>
                  <br />
                  <span className="text-xs text-gray-400">
                    By {song.singer.join(", ")}
                  </span>
                </div>
                <span className="text-xs text-gray-400">{song.duration}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Songlist;
