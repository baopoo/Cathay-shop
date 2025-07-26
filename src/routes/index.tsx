import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { clientRoutes } from "@/client/routes";
import { PageNotFound } from "@/components";
import { adminRoutes } from "@/admin/routes";

const router = createBrowserRouter([
  clientRoutes,
  adminRoutes,
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
