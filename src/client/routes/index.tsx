import { Routes, Route } from "react-router-dom";
import { Home } from "@/client/views";

export default function AppClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
    </Routes>
  );
}
