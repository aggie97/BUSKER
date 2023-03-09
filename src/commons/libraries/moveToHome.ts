import { useRouter } from "next/router";

const MoveToHome = () => {
  const router = useRouter();
  void router.push("/map");
};

export default MoveToHome;
