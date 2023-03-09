import { IMemberFetchWriteUI } from "./MemberFetch.types";
import * as S from "./MemberFetch.styles";

const MemberFetchWriteUI = (props: IMemberFetchWriteUI) => {
  return (
    <>
      {props.isOpen && (
        <S.EventModal
          open={true}
          onOk={props.onClickDelete}
          onCancel={props.onClickCancel}
        >
          <div>삭제하시겠습니까?</div>
        </S.EventModal>
      )}
      <S.AddTeamInputWrapper>
        <>
          <S.MemberImgBtn
            style={{
              backgroundImage: `url(https://storage.googleapis.com/busker-storage/${String(
                props.el.memberImageURL
              )})`,
              backgroundColor: "#fff",
              backgroundSize: "cover",
            }}
          ></S.MemberImgBtn>
        </>
        <S.MemberTextStyle>{props.el.name}</S.MemberTextStyle>
        <S.MemberTextStyle>{props.el.role}</S.MemberTextStyle>
        <S.EventBtn type="button" id={props.el.id} onClick={props.onClickGetId}>
          수정
        </S.EventBtn>
        <S.EventBtn type="button" id={props.el.id} onClick={props.onClickId}>
          삭제
        </S.EventBtn>
      </S.AddTeamInputWrapper>
    </>
  );
};

export default MemberFetchWriteUI;
