import { Outlet } from "react-router-dom";
import LeftPanel from "@/components/sidebar/LeftPanel";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <LeftPanel />
      <main className="ml-[50vw] w-[50vw] min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
