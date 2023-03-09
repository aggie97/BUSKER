import Button02 from "../../../common/buttons/02";
import * as S from "./NewComment.styles";
import { INewCommentProps } from "./NewComment.types";

const NewCommentUI = (props: INewCommentProps) => {
  return (
    <S.Wrapper>
      <S.NewCommentInput
        placeholder="후기는 100자 이내로 작성해주세요."
        minLength={1}
        maxLength={100}
        value={props.comment}
        onChange={props.onChangeInput}
      ></S.NewCommentInput>
      <S.NewCommentButton>
        <Button02 onClick={props.onClickCreateComment}>코멘트 남기기</Button02>
      </S.NewCommentButton>
    </S.Wrapper>
  );
};

export default NewCommentUI;
