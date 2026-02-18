import { Outlet } from "react-router-dom";
import LeftPanel from "@/components/sidebar/LeftPanel";
import MobileNavbar from "@/components/navbar/MobileNavbar";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Desktop Left Panel */}
      <div className="hidden lg:block">
        <LeftPanel />
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar />

      {/* Main Content */}
      <main className="lg:ml-[34.4vw] lg:w-[68vw] lg:m-5 lg:h-[calc(100vh-2.6rem)] lg:bg-[#131416] lg:rounded-2xl w-full h-full pt-16 lg:pt-0 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
