import { IQuery } from "../../../commons/types/generated/types";

export interface IArtistDetailProps {
  data?: Pick<IQuery, "fetchArtistWithoutAuth">;
  artistId?: string;
  onClickLikeArtist: (state: boolean) => () => void;
  onClickMoveToEdit: () => void;
  onClickGoBack: () => void;
  artistData?: Pick<IQuery, "fetchArtist">;
  fetchRecentBoards?: Pick<IQuery, "fetchRecentBoards">;
  memberData?: Pick<IQuery, "fetchMembers">;
  likeCount?: Pick<IQuery, "fetchArtistCount">;
  onClickMoveToRecent: (id: string) => () => void;
  userData?: Pick<IQuery, "fetchUser">;
}
