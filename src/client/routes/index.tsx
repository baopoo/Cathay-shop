import type { RouteObject } from "react-router-dom";
import { Home, About } from "@/client/views";
import { MainLayout } from "@/client/layouts";

export const clientRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "/about", element: <About /> },
  ],
};
