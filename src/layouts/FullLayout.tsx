import { Outlet } from "react-router-dom";

const FullLayout = () => {
  return (
    <div className="min-h-screen w-full">
      <Outlet />
    </div>
  );
};

export default FullLayout;
