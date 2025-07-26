import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { clientRoutes } from "@/client/routes";

const router = createBrowserRouter([
  clientRoutes,
  {
    path: "*",
    element: <div>404 - Page not found</div>,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
