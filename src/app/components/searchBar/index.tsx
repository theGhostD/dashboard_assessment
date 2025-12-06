import { images } from "@/theme";
import { Input } from "antd";
import Image from "next/image";
import React from "react";

const SearchBar = ({ isfilter,onChange }: { isfilter?: boolean, onChange? : React.ChangeEventHandler<HTMLInputElement> | undefined }) => {
  return (
    <Input
    onChange={onChange}
      className={`h-[38px]! ${
        isfilter ? "bg-[#F9FBFF]!" : " bg-[#FFFFFF]!"
      } rounded-xl! w-full! md:w-[216px]! border-none! outline-none! px-2! shadowX `}
      placeholder="Search"
      prefix={<Image src={images.searchIcon} alt="" width={24} height={24} />}
    />
  );
};

export default SearchBar;
