import * as yup from "yup";

export const PasswordChangeYup = yup.object({
  password: yup
    .string()
    .max(20, "비밀번호는 최대 20자리입니다!")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
      "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함한 6자리 이상 20자리 미만으로 입력해주세요"
    )
    .required("비밀번호를 입력해주세요"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다"),
});
