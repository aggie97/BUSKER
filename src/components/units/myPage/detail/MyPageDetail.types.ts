import { ChangeEvent, MouseEvent, RefObject } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyPageProps {
  nickname: string | undefined;
  artistData?: Pick<IQuery, "fetchArtist">;
  userImageURL: string | undefined;
  imageRef: RefObject<HTMLInputElement>;
  onClickEditPassword: () => void;
  onClickEditName: () => void;
  onClickEditProfileImage: () => void;
  onClickTab: (event: MouseEvent<HTMLButtonElement>) => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUser">;
  onClickPickedArtist: (
    id: string
  ) => (event: MouseEvent<HTMLLIElement>) => void;
  onClickPickOff: (
    id: string
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
  isEditMode: boolean;
  onToggleEditMode: (mode: string) => () => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToDetail: (id: string) => () => void;
}
