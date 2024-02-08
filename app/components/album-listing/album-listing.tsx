import { Album } from "@/app/models/Album";
import AlbumCard from "./album-card";

export interface AlbumListingProps {
  title: string;
  list?: Album[];
}

const AlbumListing: React.FC<AlbumListingProps> = (props) => {
  const { title, list } = props;

  return (
    <section className="mb-12">
      <h2 className="text-3xl text-green-400 mb-4">{title}</h2>

      {!list && <div>No albums in this category</div>}

      {list && list.length > 0 && (
        <div className="grid grid-cols-5 gap-4">
          {list.map((album) => {
            return <AlbumCard key={album.id} album={album} />;
          })}
        </div>
      )}
    </section>
  );
};

export default AlbumListing;
