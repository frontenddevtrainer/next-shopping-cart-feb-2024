interface AlbumPageProps {
  params: { id: string };
}

const AlbumPage:React.FC<AlbumPageProps> = ({ params }) => {
  const { id } = params


  return <div>AlbumPage {id}</div>;
};
export default AlbumPage;
