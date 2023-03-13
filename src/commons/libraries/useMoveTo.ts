import { useRouter } from "next/router";

export function useMoveTo() {
  const router = useRouter();

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  return {
    onClickMoveToPage,
  };
}
