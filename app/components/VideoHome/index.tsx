'use client'

import { Suspense } from "react";
import VideoComponent from '../../ui/video-component'
import { useLogic } from "./useLogic";
import { useLogic as headerUseLogic } from "../Header/useLogic";
import Button from "../Button";
import { infoLogic } from "./infoLogic";

export interface LanguageProps {
    language?: string;
  }
export default function VideoHome({ language }: LanguageProps) {
    const { videoUrl } = useLogic()
    const { currentWindow } = headerUseLogic()
    const { infodata } = infoLogic({language})

    return (
        <div className="w-full relative">
            <Suspense fallback={<></>}>
                <VideoComponent fileName={videoUrl} className={undefined} style={undefined}/>
            </Suspense>

            <div className="flex flex-col gap-[33px] items-center justify-center text-justify w-full h-full font-bold px-[40px] mb-[240px]">
                <h1 className="max-w-[700px] mt-[-10%]" style={{
                    fontSize: currentWindow?.innerWidth < 1024 ? 24 : 48
                }}>{infodata?.title}</h1>

                <h1 className="max-w-[820px] bg-[#236A67] bg-opacity-30 px-[5%] py-[5%] rounded-[24px] font-normal" style={{
                    fontSize: currentWindow?.innerWidth < 1024 ? 10 : 20,
                }}>{infodata?.text?.[0]?.children?.[0]?.text}</h1>
                <Button 
                    label={infodata?.button} 
                    paddingTop={currentWindow?.innerWidth < 1024 ? '12px' : '24px'}
                    paddingBottom={currentWindow?.innerWidth < 1024 ? '12px' : '24px'}
                    paddingLeft='8%'
                    paddingRight='8%'
                    href="/bio" 
                    color={"#FFFFFF"} 
                    background={'linear-gradient(to right, #202D31 0%, #273439 59%, #1B292E 100%)'}
                    radius={16}
                />
            </div>
        </div>
    );
}
