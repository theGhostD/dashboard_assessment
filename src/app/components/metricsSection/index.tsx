import { avatarList } from "@/app/helpers";
import { MetricsSectionProps } from "@/services/utils/interfaces";
import { images } from "@/theme";
import Image from "next/image";
import React from "react";

const MetricsSection = ({
  firstCardCopy,
  firstCardValue,
  secondCardCopy,
  secondCardValue,
  thirdCardCopy,
  thirdCardValue,
}: MetricsSectionProps) => {
  return (
    <div className="2xl:px-[50px] md:px-6 xl:px-8 md:py-8 p-6 bg-white rounded-[30px] mt-8 md:flex md:h-[151px] grid  gap-5 shadowX ">
      <div className="flex justify-start items-center gap-3  2xl:gap-5 p-4 text-nowrap! border-b border-[#F0F0F0] md:border-none  w-full 2xl:pr-14 xl:pr-8 md:pr-6">
        <Image
          src={images.totalCustomer}
          alt=""
          width={84}
          height={84}
          className="2xl:w-[84px] 2xl:h-[84px] xl:w-[58px] xl:h-[58px] w-12 h-12"
        />
        <div>
          <p className="text-[#ACACAC] text-[14px] font-normal ">
            {firstCardCopy}
          </p>
          <p className="text-[#333333] text-[24px] lg:text-[28px] 2xl:text-[32px] font-semibold pt-1 pb-1.5 tracking-[-1%] leading-[100%]  ">
            {firstCardValue}
          </p>
          <div className="flex justify-start items-center gap-[3px]">
            <Image src={images.arrowup} alt="" width={20} height={20} />
            <p className="text-[#292D32] text-[12px] font-normal  ">
              <span className="text-[#00AC4F] font-bold">16%</span> this month
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center gap-3  2xl:gap-5 p-4 text-nowrap! border-b  md:border-b-0  md:border-l border-[#F0F0F0] w-full 2xl:px-14 xl:px-8 md:px-6 ">
        <Image
          src={images.member}
          alt=""
          width={84}
          height={84}
          className="2xl:w-[84px] 2xl:h-[84px] xl:w-[58px] xl:h-[58px] w-12 h-12"
        />
        <div>
          <p className="text-[#ACACAC] text-[14px] font-normal ">
            {secondCardCopy}
          </p>
          <p className="text-[#333333] text-[24px] lg:text-[28px] 2xl:text-[32px] font-semibold pt-1 pb-1.5 tracking-[-1%] leading-[100%]  ">
            {secondCardValue}
          </p>
          <div className="flex justify-start items-center gap-[3px]">
            <Image src={images.arrowdown} alt="" width={20} height={20} />
            <p className="text-[#292D32] text-[12px] font-normal  ">
              <span className="text-[#D0004B] font-bold">1%</span> this month
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center gap-3  2xl:gap-5 p-4 text-nowrap!   md:border-l border-[#F0F0F0] w-full 2xl:pl-14 xl:pl-8 md:pl-6">
        <Image
          src={images.activeNow}
          alt=""
          width={84}
          height={84}
          className="2xl:w-[84px] 2xl:h-[84px] xl:w-[58px] xl:h-[58px] w-12 h-12"
        />
        <div>
          <p className="text-[#ACACAC] text-[14px] font-normal ">
            {thirdCardCopy}
          </p>
          <p className="text-[#333333] text-[24px] lg:text-[28px] 2xl:text-[32px] font-semibold pt-1 pb-1.5 tracking-[-1%] leading-[100%]  ">
            {thirdCardValue}
          </p>
          <div className="flex items-center -space-x-2 rtl:space-x-reverse">
            {avatarList.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  className="rounded-full bg-[#f2f2f2]  object-cover"
                  src={image}
                  alt="user 1"
                  width={26}
                  height={26}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsSection;
