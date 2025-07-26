import { Route, Routes } from "react-router-dom";

import { AdminLayout } from "../layouts";
import { Home } from "../views";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
