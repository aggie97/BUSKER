import { UseFormRegister } from "react-hook-form";

export interface IFormData {
  email: string;
  password: string;
}

export interface ILoginPageWriteUI {
  formState: any;
  register: UseFormRegister<IFormData>;
  onClickSignUp: () => void;
  onClickRestorePassword: () => void;
  onClickLogin: (data: IFormData) => void;
  handleSubmit: any;
}
