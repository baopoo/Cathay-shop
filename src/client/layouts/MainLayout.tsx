import { Outlet } from "react-router-dom";
import { Header } from "@/client/components";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-10 py-6 bg-white mx-[265px]">
        <Outlet />
      </main>
    </div>
  );
}
