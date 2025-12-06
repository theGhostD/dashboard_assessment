import { SidebarTilesProps } from '@/services/utils/interfaces'
import { images } from '@/theme'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SidebarTiles = ({ name, path, icon, isActive }: SidebarTilesProps) => {
  return (
    <Link href={path || ''}
      className={`p-[11px] rounded-lg  flex justify-between items-center ${
        isActive ? "bg-[#5932EA]!" : "bg-none!"
      } 
      ${
        !path ? "cursor-not-allowed!" : "cursor-pointer!"
      } 
      
      `}
    >
      <div
        className={`justify-start flex items-center gap-3.5 ${
          isActive ? "text-white font-medium" : "text-[#9197B3] font-normal"
        }   `}
      >
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
          style={{
            filter: isActive
              ? "brightness(0) invert(1)" 
              : "brightness(0) saturate(100%) invert(67%) sepia(12%) saturate(800%) hue-rotate(190deg) brightness(96%) contrast(90%)",
            transition: "filter 200ms ease",
          }}
        />
        <p className=" text-[14px]  ">{name}</p>
      </div>

      <Image
        src={images.rightCaret}
        alt=""
        width={16}
        height={16}
        style={{
            filter: isActive
              ? "brightness(0) invert(1)" 
              : "brightness(0) saturate(100%) invert(67%) sepia(12%) saturate(800%) hue-rotate(190deg) brightness(96%) contrast(90%)",
            transition: "filter 200ms ease",
          }}
      />
    </Link>
  )
}

export default SidebarTiles
