"use client";
import { images } from "@/theme";
import { Drawer, Input } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "../sidebar";
import SearchBar from "../searchBar";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="flex justify-between md:items-center md:flex-row flex-col-reverse gap-5">
      <p className="text-[#000000] text-[24px] font-normal ">Hello Evano 👋🏼,</p>
      <div className="flex justify-end items-center gap-4">
      <SearchBar />
        <div className="lg:hidden block ">
          <Image
            src={images.menu}
            alt=""
            width={24}
            height={24}
            onClick={() => setIsDrawerOpen(true)}
          />
        </div>
      </div>

      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}  closeIcon={null} width={270} placement="left">
        <Sidebar />
      </Drawer>
    </div>
  );
};

export default Header;
