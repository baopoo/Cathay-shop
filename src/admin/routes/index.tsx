import { type RouteObject } from "react-router-dom";

import { AdminLayout } from "../layouts";
import {
  CategoryPage,
  LoginPage,
  OrderPage,
  ProductAdd,
  ProductPage,
  VariantPage,
} from "../views";
import { PrivateRoute } from "../components";

export const adminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: <PrivateRoute element={<AdminLayout />}></PrivateRoute>,
    children: [
      {
        index: true,
        element: <CategoryPage />,
      },
      {
        path: "category",
        element: <PrivateRoute element={<CategoryPage />} />,
      },
      {
        path: "order",
        element: <PrivateRoute element={<OrderPage />} />,
      },
      {
        path: "product",
        element: <PrivateRoute element={<ProductPage />} />,
      },
      {
        path: "variant",
        element: <PrivateRoute element={<VariantPage />} />,
      },
    ],
  },
  {
    path: "/admin/log-in",
    element: <LoginPage />,
  },
];
