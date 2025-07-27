import { account } from "@/appwrite";
import type { ISignInPayload } from "@/interfaces/auth";
import { notification } from "antd";
import { AppwriteException } from "appwrite";
import { useState } from "react";

export const useAuthService = () => {
  const [loading, setLoading] = useState(false);

  const signIn = async (payload: ISignInPayload) => {
    try {
      setLoading(true);
      return await account.createEmailPasswordSession(
        payload.email,
        payload.password
      );
    } catch (errors) {
      if (errors instanceof AppwriteException)
        notification.error({
          message: errors.type,
          description: errors.message,
        });
      throw errors;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      return await account.deleteSession("current");
    } catch (errors) {
      if (errors instanceof AppwriteException)
        notification.error({
          message: errors.type,
          description: errors.message,
        });
      throw errors;
    } finally {
      setLoading(false);
    }
  };

  const getInfoUser = async () => {
    try {
      setLoading(true);
      return await account.get();
    } catch (errors) {
      if (errors instanceof AppwriteException)
        notification.error({
          message: errors.type,
          description: errors.message,
        });
      throw errors;
    } finally {
      setLoading(false);
    }
  };

  return { loading, signIn, signOut, getInfoUser };
};
