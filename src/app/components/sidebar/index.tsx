"use client";
import { routes } from "@/services/utils/routes";
import { images } from "@/theme";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SidebarTiles from "./SidebarTiles";
import { logoutHandler } from "@/services/utils/auth";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="xl:w-[306px] w-[270px] h-screen  2xl:px-7 px-5  bg-[#FFFFFF] flex justify-between flex-col shadowX">
      <div>
        <div className="mt-9 flex justify-start items-end  gap-1">
          <Image src={images.logo} alt="logo" width={159} height={39} />
          <p className="text-[#838383] text-[10px] font-normal tracking-[-1%] ">
            v.01
          </p>
        </div>

        <div className="xl:mt-[54px] md:mt-8 mt-5 grid gap-4 ">
          {routes.map(({ name, path, icon }, index) => (
            <SidebarTiles
              key={index}
              name={name}
              path={path}
              icon={icon}
              isActive={path !== null && pathname === path}
            />
          ))}
        </div>
      </div>

      <div className="lg:mb-20 mb-8 grid gap-5 xl:gap-10">
        <div
          className="xl:w-[250px] w-full h-[150px] rounded-[20px]  flex flex-col justify-center items-center gap-5 px-5   "
          style={{
            background:
              "linear-gradient(107.91deg, #EAABF0 7.37%, #4623E9 95.19%)",
          }}
        >
          <p className="text-[#FFFFFF] text-[14px] text-center font-semibold ">
            Upgrade to PRO to get <br /> access all Features!
          </p>

          <button className="text-[#4925E9] text-[14px] text-center h-10 xl:w-[203px] w-full flex justify-center items-center rounded-[20px] bg-white cursor-pointer  ">
            Get Pro Now!
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-3">
            <Image src={images.avatar} alt="" width={42} height={42} />
            <div className="flex justify-start items-start  flex-col">
              <p className="text-[#000000] text-[14px] font-normal ">Evano</p>
              <p className="text-[#757575] text-[12px] font-normal ">
                Project Manager
              </p>
            </div>
          </div>
          <div onClick={() => logoutHandler()} className="cursor-pointer">
            <Image src={images.signOut} alt="" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
