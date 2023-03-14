import * as S from "./MyPageDetail.styles";
import "antd/dist/antd.css";
import { IMyPageProps } from "./MyPageDetail.types";
import Image from "next/image";
import { useState } from "react";

const MyPageDetailUI = (props: IMyPageProps) => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <S.Wrapper>
      <S.Left>
        <S.ImageBox>
          {isLoaded ? (
            <Image
              onError={() => setIsLoaded(false)}
              width={300}
              height={300}
              layout="responsive"
              src={
                props.userImageURL ||
                `https://storage.googleapis.com/${String(
                  props.data?.fetchUser.userImageURL
                )}`
              }
            />
          ) : props.userImageURL.length > 0 ? (
            <Image width={300} height={300} src={props.userImageURL} />
          ) : (
            <span>이미지 로드에 실패했습니다.</span>
          )}
        </S.ImageBox>
        <S.ChangeImageButton>
          <a onClick={props.onClickEditProfileImage}>이미지 변경하기</a>
          <input
            onChange={props.onChangeImage}
            ref={props.imageRef}
            style={{ width: "0" }}
            type="file"
          />
        </S.ChangeImageButton>
      </S.Left>
      <S.Right></S.Right>
    </S.Wrapper>
  );
};

export default MyPageDetailUI;
