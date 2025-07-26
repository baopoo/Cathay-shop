import { Route, Routes } from "react-router-dom";
import AdminRoutes from "@/admin/routes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminRoutes />} />
    </Routes>
  );
}
