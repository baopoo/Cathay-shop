import type { ISignInPayload } from "@/interfaces";
import { useAuthService } from "@/services";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";

export const useAuth = () => {
  const navigate = useNavigate();
  const { loading, signIn, getInfoUser, signOut } = useAuthService();
  const {
    isAuthenticated,
    isAuthChecked,
    username,
    setAuthState,
    setIsAuthenticated,
    setIsAuthChecked,
  } = useAuthStore();

  const onFinish = async (payload: ISignInPayload) => {
    await signIn(payload);
    await checkInfoUser();

    navigate("/admin");
  };

  const checkInfoUser = async () => {
    try {
      const res = await getInfoUser();
      setAuthState({
        isAuthenticated: true,
        isAuthChecked: false,
        username: res.name,
      });
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsAuthChecked(true);
    }
  };

  const onSignOut = async () => {
    await signOut();
    setIsAuthenticated(false);
    navigate("/admin/log-in");
  };

  return {
    isAuthenticated,
    isAuthChecked,
    loading,
    username,
    checkInfoUser,
    onFinish,
    onSignOut,
  };
};
