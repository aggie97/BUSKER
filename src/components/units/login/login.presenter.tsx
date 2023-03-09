import Input01 from "../../common/inputs/01";
import * as S from "./login.styles";
import { ILoginPageWriteUI } from "./login.types";

const LoginPageWriteUI = ({
  register,
  formState,
  onClickSignUp,
  onClickRestorePassword,
  onClickLogin,
  handleSubmit,
}: ILoginPageWriteUI) => {
  return (
    <>
      <div>
        <S.MainWrapper>
          <S.LoginMainWrapper onSubmit={handleSubmit(onClickLogin)}>
            <S.LoginTopWrapper>
              <S.LogoStyle>로그인</S.LogoStyle>
              <S.LoginInputWrapper>
                <Input01
                  style={{ textAlign: "center" }}
                  type="text"
                  placeholder="이메일을 입력해 주세요"
                  register={register("email")}
                />
                <S.ErrorStyle>{formState.errors.email?.message}</S.ErrorStyle>
                <Input01
                  style={{ textAlign: "center" }}
                  type="password"
                  placeholder="비밀번호를 입력해 주세요"
                  register={register("password")}
                />
                <S.ErrorStyle>
                  {formState.errors.password?.message}
                </S.ErrorStyle>
                <S.LoginBtnStyle>로그인</S.LoginBtnStyle>
              </S.LoginInputWrapper>
              <S.LoginOptionWrapper>
                <S.LoginOptionStyle onClick={onClickRestorePassword}>
                  비밀번호 찾기
                </S.LoginOptionStyle>
                <div>|</div>
                <S.LoginOptionStyle onClick={onClickSignUp}>
                  회원가입
                </S.LoginOptionStyle>
              </S.LoginOptionWrapper>
            </S.LoginTopWrapper>
          </S.LoginMainWrapper>
        </S.MainWrapper>
      </div>
    </>
  );
};

export default LoginPageWriteUI;
