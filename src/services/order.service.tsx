import { notification } from "antd";
import { AppwriteException, Query } from "appwrite";
import { databases } from "@/appwrite";

import { useOrderStore } from "@/stores";
import { ORDERS_ID, DATABASE_ID } from "@/constants";

export const useOrderService = () => {
  const { setLoading } = useOrderStore();

  const getOrders = async (query = []) => {
    setLoading(true);
    try {
      return await databases.listDocuments(DATABASE_ID, ORDERS_ID, query);
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

  const getOrder = async (id: string) => {
    setLoading(true);
    try {
      return await databases.getDocument(DATABASE_ID, ORDERS_ID, id);
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

  const createOrder = async (payload: any) => {
    setLoading(true);
    try {
      return await databases.createDocument(
        DATABASE_ID,
        ORDERS_ID,
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

  const updateOrder = async (id: string, payload: any) => {
    setLoading(true);
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        ORDERS_ID,
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

  return {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
  };
};
