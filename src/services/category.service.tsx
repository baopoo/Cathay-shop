import { databases } from "@/appwrite";
import { CATEGORIES_ID, DATABASE_ID } from "@/constants";
import { notification } from "antd";
import { AppwriteException } from "appwrite";
import { useState } from "react";

export const useCategoryService = () => {
  const [loading, setLoading] = useState(false);

  const getCategories = (query = []) => {
    try {
      setLoading(true);
      return databases.listDocuments(DATABASE_ID, CATEGORIES_ID, query);
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

  const getCategory = (id: string) => {
    try {
      setLoading(true);
      return databases.getDocument(DATABASE_ID, CATEGORIES_ID, id);
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

  return { loading, getCategories, getCategory };
};
