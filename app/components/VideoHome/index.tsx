'use client'

import { Suspense } from "react";
import VideoComponent from '../../ui/video-component'
import { useLogic } from "./useLogic";
import { useLogic as headerUseLogic } from "../Header/useLogic";
import Button from "../Button";
import { infoLogic } from "./infoLogic";
import { MdOutlineEmail } from "react-icons/md";
import { VscSend } from "react-icons/vsc";

export interface LanguageProps {
    language?: string;
}
export default function VideoHome({ language }: LanguageProps) {
    const { videoUrl } = useLogic()
    const { currentWindow } = headerUseLogic()
    const { infodata } = infoLogic({ language })

    return (
        <div className="flex flex-col items-center justify-center w-full h-full relative">
            <Suspense fallback={<></>}>
                <VideoComponent fileName={videoUrl} className={undefined} style={undefined} />
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
            <div className="flex flex-col px-8 py-8 mb-10 w-[60%] bg-[#0C2120] rounded-[33px] max-md:hidden justify-center">
                <div className="flex gap-5 ali ">
                    <div className="flex flex-col py-5 align-middle w-[34%]">
                        <div className="text-xl align-middle tracking-wide text-[#00FFB2] max-md:mt-10">
                            {infodata?.newsletter}
                        </div>
                    </div>
                    <div className="flex flex-col w-[66%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex gap-5 justify-between text-xl font-bold tracking-wide bg-zinc-300 bg-opacity-20 rounded-3xl max-md:flex-wrap max-md:mt-10">
                            <div className="flex py-5 pl-5 w-full gap-5 text-[#F9DBD0]">
                                <MdOutlineEmail size={30} className="h-auto" color="#D9D9D9" />
                                <input type="email" placeholder="E-mail" className="text-[#F9DBD0] bg-transparent w-full border-[#D9D9D9] focus:outline-none" />
                            </div>

                            <button id="botao" className="flex items-center bg-gradient-to-r from-[#CFF1E6] to-[#7A958D] rounded-r-3xl">
                                <VscSend size={35} color="#0C2120" className="shrink-0 w-20" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
