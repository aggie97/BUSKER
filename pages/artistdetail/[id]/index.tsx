import { useRouter } from "next/router";
import ArtistDetail from "../../../src/components/units/artistDetail/ArtistDetail.container";

const ArtistDetailPage = () => {
  const router = useRouter();
  return <ArtistDetail artistId={String(router.query.id)} />;
};

export default ArtistDetailPage;
