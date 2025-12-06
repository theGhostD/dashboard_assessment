import { btnProps } from "@/services/utils/interfaces";
import Image from "next/image";
import React from "react";
import { ScaleLoader } from "react-spinners";

const CustomBtn = ({
  variant,
  icon,
  handleSubmit,
  text,
  disable,
  loading,
}: btnProps) => {
  return (
    <button
      className={`${
        variant === "filled" && !disable
          ? "bg-[#3C00FF] hover:bg-[#3c00ff76] w-full text-white cursor-pointer "
          : variant === "filled" && disable
          ? "bg-[#D8CCFF] cursor-not-allowed w-full text-[white]"
          : ""
      } rounded-[40px] flex justify-center items-center gap-2  px-10 py-4 text-nowrap! text-[15px] h-11 transition-colors duration-200 `}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit();
      }}
      disabled={disable}
    >
      {icon && <Image src={icon} alt="" />}

      {loading ? (
        <ScaleLoader color="#fff" height="15px" />
      ) : (
        <p className={`font-semibold!  text-[13px] leading-[18px]`}>{text}</p>
      )}
    </button>
  );
};

export default CustomBtn;
