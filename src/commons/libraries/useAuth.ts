import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../store";
import { getAccessToken } from "./getAccessToken";

const useAuth = () => {
  const router = useRouter();
  const [token] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (!token) {
      void getAccessToken().then((newAccessToken) => {
        if (!newAccessToken) {
          Modal.warning({
            content: "로그인 후 이용 가능합니다.",
            onOk: () => {
              void router.push("/login");
            },
            onCancel: () => {
              void router.push("/login");
            },
          });
        }
      });
    }
  }, []);
};

export default useAuth;
