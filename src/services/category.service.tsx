import { useCategoryStore } from "@/stores";
import { databases } from "@/appwrite";
import { CATEGORIES_ID, DATABASE_ID } from "@/constants";
import { notification } from "antd";
import { AppwriteException } from "appwrite";

export const useCategoryService = () => {
  const { setLoading } = useCategoryStore();

  const getCategories = async (query = []) => {
    setLoading(true);
    try {
      return await databases.listDocuments(DATABASE_ID, CATEGORIES_ID, query);
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

  const getCategory = async (id: string) => {
    setLoading(true);
    try {
      return await databases.getDocument(DATABASE_ID, CATEGORIES_ID, id);
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

  const createCategory = async (payload: any) => {
    setLoading(true);
    try {
      return await databases.createDocument(
        DATABASE_ID,
        CATEGORIES_ID,
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

  const updateCategory = async (id: string, payload: any) => {
    setLoading(true);
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        CATEGORIES_ID,
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

  const deleteCategory = async (id: string) => {
    setLoading(true);
    try {
      return await databases.deleteDocument(DATABASE_ID, CATEGORIES_ID, id);
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
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};
