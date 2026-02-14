import { Outlet } from "react-router-dom";
import LeftPanel from "@/components/sidebar/LeftPanel";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <LeftPanel />
      <main className="ml-[34.4vw] w-[68vw] m-5 h-[calc(100vh-2.6rem)] bg-[#1A1A1A] rounded-2xl overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
