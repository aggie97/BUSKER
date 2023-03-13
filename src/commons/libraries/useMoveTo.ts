import { useRouter } from "next/router";

const useMoveTo = async (path: string) => {
  const router = useRouter();
  return await router.push(path);
};

export default useMoveTo;
