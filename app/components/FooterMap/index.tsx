
'use client'

import Image from "next/image";
import WorldBlueIcon from '@/public/assets/world-blue-icon.svg';
import ShieldIcon from '@/public/assets/shield-icon.svg';
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";
import { useLogic as headerUseLoigc } from "@/app/components/Header/useLogic";
import { LanguageProps } from "../ArticlesList";
import { usePathname, useRouter } from "next/navigation";
import { useLogic } from "./useLogic";

export default function FooterMap({ language }: LanguageProps) {
  console.log(language)

  const router = useRouter()
  const path = usePathname()
  const { currentWindow } = headerUseLoigc()
  const { handleZoom } = useLogic()

  const isDefense = path?.includes('defense')

  return (
    <section 
      id='footer'
      className="flex items-center z-10 fixed w-full bottom-0 h-[120px]"
      style={{
        justifyContent: currentWindow?.innerWidth < 1024 ? 'center' : 'space-between',
      }}
    >
      {currentWindow?.innerWidth >= 1024 ? (
        <small className="w-[188px] opacity-[50%] text-[#F9DBD0] p-[64px] font-semibold" style={{
          fontFamily: "'Helvetica Nue 55', sans-serif",
          lineHeight: 1.1
        }}>
          © 2024
          All Rights
          Reserved
        </small>
      ): <></>}
      <div className="flex w-[400px] items-center rounded-[14px] my-[10%] relative" style={{
        height: currentWindow?.innerWidth < 1024 ? '63px' : '78px',
        width: currentWindow?.innerWidth < 1024 ? '336px' : '411px',
      }}>
        <div className="flex w-full h-full bg-[#D9D9D9] opacity-[10%] rounded-[14px] absolute z-0" style={{
          height: currentWindow?.innerWidth < 1024 ? '63px' : '78px',
          width: currentWindow?.innerWidth < 1024 ? '336px' : '411px',
        }}/>
        {isDefense
         ?
          <div className="flex w-full h-full bg-[#D9D9D9] opacity-[16%] rounded-[11px] absolute z-1 right-[8px]" style={{
            height: currentWindow?.innerWidth < 1024 ? '51px' : '64px',
            width: currentWindow?.innerWidth < 1024 ? '140px' : '180px',
          }}/>
          :
          <div className="flex w-full h-full bg-[#D9D9D9] opacity-[16%] rounded-[11px] absolute z-1 left-[8px]" style={{
            height: currentWindow?.innerWidth < 1024 ? '51px' : '64px',
            width: currentWindow?.innerWidth < 1024 ? '181px' : '216px',
          }}/>
        }
        <p className="flex left-0 items-center absolute z-[2] text-[#96FFFD] uppercase pl-[28px] gap-[17px] font-bold cursor-pointer" onClick={() => {
          router.push('/article/geopolitic');
        }}> <Image src={WorldBlueIcon} unoptimized priority  width={30} height={30} alt="world icon"/> GEOPOLITICA</p>
        <p className="flex items-center absolute z-[2] text-[#CD6200] uppercase pr-[64px] gap-[17px] font-bold cursor-pointer" onClick={() => {
          router.push('/article/defense');
        }} style={{ right: currentWindow?.innerWidth < 1024 ? '-24px' : '0'}}> <Image src={ShieldIcon} unoptimized priority  width={30} height={30} alt="shield icon"/> DIFESA</p>
      </div>

      <div></div>
      {/* {currentWindow?.innerWidth >= 1024 ? (
        <div className="flex w-[183px] items-center justify-between rounded-[14px] relative mr-[64px] h-[63px]">
          <div className="flex w-full h-full bg-[#D9D9D9] opacity-[10%] rounded-[14px] absolute z-0" style={{
            height: currentWindow?.innerWidth < 1024 ? '63px' : '78px',
            width: currentWindow?.innerWidth < 1024 ? '183px' : '183px',
          }}/>
          <p id="zoomIn" className="flex left-0 items-center absolute z-50 uppercase pl-[28px] gap-[17px] font-bold cursor-pointer" onClick={handleZoom}> <HiOutlinePlus color="#CD6200" fontSize={48}/> </p>
          <p id="zoomOut" className="flex right-0 items-center absolute z-50 uppercase pr-[28px] gap-[17px] font-bold cursor-pointer"> <HiOutlineMinus color="#CD6200" fontSize={48}/> </p>
        </div>
      ) : <></>} */}
    </section>
  );
}
