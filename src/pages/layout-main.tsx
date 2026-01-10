import { Outlet } from "react-router";
import Logo from "../assets/images/logo.svg?react";

export default function LayoutMain() {
  return (
    <>
      <main className="relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto">
        <div className="py-3 px-5 bg-gray-600 rounded-br-xl absolute top-0 left-0">
          <Logo />
        </div>

        <aside className="p-20 bg-gray-700 rounded-xl max-w-124.5 w-full flex flex-col gap-6 overflow-visible"></aside>

        <div className=" w-full px-28 py-20">
          <Outlet />
        </div>
      </main>
    </>
  );
}
