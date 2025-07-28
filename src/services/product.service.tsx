import { useProductStore } from "@/stores";
import { databases } from "@/appwrite";
import { PRODUCTS_ID, DATABASE_ID } from "@/constants";
import { notification } from "antd";
import { AppwriteException } from "appwrite";

export const useProductService = () => {
  const { setLoading } = useProductStore();

  const getProducts = async (query = []) => {
    setLoading(true);
    try {
      return await databases.listDocuments(DATABASE_ID, PRODUCTS_ID, query);
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

  const getProduct = async (id: string) => {
    setLoading(true);
    try {
      return await databases.getDocument(DATABASE_ID, PRODUCTS_ID, id);
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

  const createProduct = async (payload: any) => {
    setLoading(true);
    try {
      return await databases.createDocument(
        DATABASE_ID,
        PRODUCTS_ID,
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

  const updateProduct = async (id: string, payload: any) => {
    setLoading(true);
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        PRODUCTS_ID,
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

  const deleteProduct = async (id: string) => {
    setLoading(true);
    try {
      return await databases.deleteDocument(DATABASE_ID, PRODUCTS_ID, id);
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
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};
