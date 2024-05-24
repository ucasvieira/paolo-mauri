'use client'

import * as React from "react";
import Image from "next/image";
import paolocar from "@/public/assets/paolocar.png";
import paolomuro from "@/public/assets/paolomuro.png";
import { useLogic as headerUseLogic } from '../Header/useLogic';
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { useLogic } from './useLogic';

export interface LanguageProps {
  language?: string;
}

export default function BioInfo({ language }: LanguageProps) {
  const { currentWindow } = headerUseLogic()
  const {biodata} = useLogic({ language })

  return (
    <div className="flex flex-col w-full h-full relative bg-[#001116]">
      <div className="bg-gradient-to-b from-[#000] from-0% to-[#000] to-100% w-full h-[20%] opacity-50 mix-blend-color absolute top-0" />
      <Image
        src={paolocar}
        unoptimized priority 
        alt="Paolo Mauri"
        layout="responsive"
        style={{
          minHeight: currentWindow?.innerWidth < 1024 ? 180 : '100%'
        }}
      />
      <div className="flex flex-col self-center max-w-full w-[873px] h-full relative mt-[-60px] mb-40">
        <Image
          src={paolomuro}
          alt="Paolo Mauri"
          layout="responsive"
          className="w-full h-auto"
        />
        <div className="p-[59px]">
          <div className="flex flex-col gap-[13px] text-6xl font-bold tracking-tighter text-white mix-blend-difference leading-[64px] max-md:max-w-full max-md:text-4xl items-center justify-between">
            <span className="w-full font-fonttitulo">{biodata?.title}</span>
            <div className="flex text-3xl space-x-8 ml-auto">
              <AiFillYoutube />
              <FaInstagram />
              <BsTwitterX />
              <FaFacebookF />
            </div>
          </div>
          <div className="mt-10 text-1xl font-bold tracking-widest leading-7 text-justify text-red-50 max-md:max-w-full">
            {biodata?.text?.[0]?.children?.[0].text}
            <br />
            <br />
            {biodata?.text?.[1]?.children?.[0].text}
            <br />
            <br />
            {biodata?.text?.[2]?.children?.[0].text}
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
