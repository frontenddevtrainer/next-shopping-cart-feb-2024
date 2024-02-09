export interface RelatedAlbumsProps {

}

const RelatedAlbums: React.FC<RelatedAlbumsProps> = () => {
  return (
    <div className="container mx-auto p-8 mt-4">
      <h2 className="text-2xl font-bold mb-4">Related Albums</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 rounded text-left">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Album"
              className="w-full rounded mb-2"
            />
            <div className="absolute bottom-0 right-0 p-2 flex space-x-2">
              <button className="bg-green-400 text-white rounded-full p-2 hover:bg-green-300 material-icons">
                library_add
              </button>
              <button className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 material-icons">
                add_shopping_cart
              </button>
            </div>
          </div>
          <p className="text-md font-bold">Album Name</p>
          <p className="text-sm text-gray-400">By Singer</p>
        </div>
      </div>
    </div>
  );
};


export default RelatedAlbums;