import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/topbar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={` flex h-screen bg-[#FAFBFF] overflow-hidden `}
    >
      <div className="hidden lg:grid">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto xl:pl-[71px] xl:pr-[95px] lg:px-8 md:py-10 p-4 ">
        <Header />
        <div className=" ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
