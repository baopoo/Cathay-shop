import { type RouteObject } from "react-router-dom";

import { AdminLayout } from "../layouts";
import { Home } from "../views";

export const adminRoutes: RouteObject = {
  path: "/admin",
  element: <AdminLayout />,
  children: [{ index: true, element: <Home /> }],
};
