import { Route, Routes } from "react-router-dom";
import AdminRoutes from "@/admin/routes";
import AppClientRoutes from "@/client/routes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<AppClientRoutes />} />
      <Route path="/admin" element={<AdminRoutes />} />
    </Routes>
  );
}
