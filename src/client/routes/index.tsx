import type { RouteObject } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Blob,
  ShoppingCart,
  ProductDetail,
} from "@/client/views";
import { MainLayout } from "@/client/layouts";

export const clientRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blob /> },
      { path: "shopping-cart", element: <ShoppingCart /> },
      { path: "product/:slug", element: <ProductDetail /> },
    ],
  },
];
