import { Route, Routes } from "react-router-dom";

import { AdminLayout } from "../layouts";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route index element={<AdminLayout />} />
    </Routes>
  );
}
