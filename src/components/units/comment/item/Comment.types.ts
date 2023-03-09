import { ChangeEvent } from "react";
import { IComments } from "../../../../commons/types/generated/types";

export interface ICommentProps {
  data?: IComments;
  isEdit?: boolean;
  comment?: string;
  onClickDelete?: (id: string) => () => void;
  onClickEdit?: (id: string) => () => void;
  onEditComment?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
