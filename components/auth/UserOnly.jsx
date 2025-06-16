import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { Text } from "react-native";
import ThemedLoader from "../ThemedLoader";
const UserOnly = ({ children }) => {
  const { user, authchecked } = useUser();

  const router = useRouter();
  useEffect(() => {
    if (authchecked && user === null) {
      router.replace("/login");
    }
  }, [user, authchecked]);
  if (!authchecked || !user) {
    return <ThemedLoader />;
  }
  return children;
};

export default UserOnly;
