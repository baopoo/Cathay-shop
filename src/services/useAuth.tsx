import { account } from "@/appwrite";
import type { ISignInPayload } from "@/interfaces/auth";
import { useState } from "react";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const signIn = async (payload: ISignInPayload) => {
    try {
      setLoading(true);
      await account.createEmailPasswordSession(payload.email, payload.password);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await account.deleteSession("current");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getInfoUser = async () => {
    try {
      setLoading(true);
      await account.get();
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signIn, signOut, getInfoUser };
};
