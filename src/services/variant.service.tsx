import { notification } from "antd";
import { AppwriteException, Query } from "appwrite";
import { databases } from "@/appwrite";

import { useVariantStore } from "@/stores";
import { VARIANTS_ID, DATABASE_ID } from "@/constants";

export const useVariantService = () => {
  const { setLoading } = useVariantStore();

  const getVariants = async (query = []) => {
    setLoading(true);
    try {
      return await databases.listDocuments(DATABASE_ID, VARIANTS_ID, query);
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

  const getVariantByProductId = async (productId: string) => {
    setLoading(true);
    try {
      return await databases.listDocuments(DATABASE_ID, VARIANTS_ID, [
        Query.equal("productId", productId),
      ]);
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

  const getVariant = async (id: string) => {
    setLoading(true);
    try {
      return await databases.getDocument(DATABASE_ID, VARIANTS_ID, id);
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

  const createVariant = async (payload: any) => {
    setLoading(true);
    try {
      return await databases.createDocument(
        DATABASE_ID,
        VARIANTS_ID,
        "unique()",
        payload
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

  const updateVariant = async (id: string, payload: any) => {
    setLoading(true);
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        VARIANTS_ID,
        id,
        payload
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

  const deleteVariant = async (id: string) => {
    setLoading(true);
    try {
      return await databases.deleteDocument(DATABASE_ID, VARIANTS_ID, id);
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

  return {
    getVariants,
    getVariant,
    getVariantByProductId,
    createVariant,
    updateVariant,
    deleteVariant,
  };
};
