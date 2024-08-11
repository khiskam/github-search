import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <div className="grid gap-12 my-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
