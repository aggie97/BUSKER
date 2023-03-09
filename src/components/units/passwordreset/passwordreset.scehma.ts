import * as yup from "yup";

export const PasswordResetYup = yup.object({
  email: yup
    .string()
    .email("이메일에는 @가 필수입니다")
    .required("이메일을 적어주세요"),
});
