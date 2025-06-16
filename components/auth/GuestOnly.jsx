import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import ThemedLoader from "../ThemedLoader";

const GuestOnly = ({ children }) => {
  const { user, authchecked } = useUser();

  const router = useRouter();
  useEffect(() => {
    if (authchecked && user !== null) {
      router.replace("/profile");
    }
  }, [user, authchecked]);
  if (!authchecked || user) {
    return <ThemedLoader />;
  }
  return children;
};

export default GuestOnly;
