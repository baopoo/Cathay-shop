import { type RouteObject } from "react-router-dom";

import { AdminLayout } from "../layouts";
import {
  CategoryPage,
  Home,
  LoginPage,
  OrderPage,
  ProductPage,
} from "../views";

export const adminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <CategoryPage /> },
      { path: "category", element: <CategoryPage /> },
      { path: "order", element: <OrderPage /> },
      { path: "product", element: <ProductPage /> },
    ],
  },
  {
    path: "/admin/log-in",
    element: <LoginPage />,
  },
];
