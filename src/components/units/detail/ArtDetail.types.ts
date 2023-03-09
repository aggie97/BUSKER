import { IQuery } from "../../../commons/types/generated/types";

export interface IArtDetailProps {
  data?: Pick<IQuery, "fetchBoard">;
  routerId: string | string[] | undefined;
  date?: string[];
  isArtist: boolean;
  onClickDelete: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToArtistDetail: (id: string) => () => void;
}
