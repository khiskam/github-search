import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container min-h-screen py-8 grid">
      <main className="grid gap-12 min-h-full items-start content-start">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
