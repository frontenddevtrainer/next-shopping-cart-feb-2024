import { Album } from "@/app/models/Album";
import Link from "next/link";

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = (props) => {
  const { album } = props;
  const { name, price, singer, thumbnail, id } = album;

  return (
    <Link href={`/album/${id}`}>
      <div className="bg-gray-800 p-4 rounded relative">
        <div className="relative">
          <img src={thumbnail} alt="Album" className="w-full rounded mb-2" />
          <button className="absolute bottom-2 right-2 bg-green-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-300">
            <span className="material-icons text-white"> play_arrow </span>
          </button>
        </div>

        <div className="text-left">
          <h3 className="text-md font-bold mb-1">{name}</h3>
          <p className="text-sm mb-2 text-gray-400">By {singer.join(", ")}</p>
          <p className="text-sm mb-2 text-green-200">${price}</p>

          <button
            className="inline-flex items-center text-green-400 hover:text-green-300"
          >
            <span className="material-icons"> shopping_cart </span>
            <span className="ml-1">Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default AlbumCard;
