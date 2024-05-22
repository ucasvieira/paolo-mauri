'use client'

// import { useLogic as headerUseLogic } from "@/app/components/Header/useLogic";
import * as React from "react";
import VideoComponent from "@/app/ui/video-component";
import { Suspense } from "react";
import { useLogic } from "./useLogic";

export interface LanguageProps {
  language?: string;
}

export default function PodcastsList({ language }: LanguageProps) {
  const { podcastsUrlList } = useLogic({language})
  // const { currentWindow } = headerUseLogic()

  return (
    <div className="flex flex-col w-full h-full items-center relative bg-[#001116] gap-[25px]">
      {podcastsUrlList?.map((podcast: any, index: number) => (
        <Suspense fallback={<></>} key={index}>
            <VideoComponent fileName={podcast} className="max-w-[660px] max-h-[372px] object-cover"/>
        </Suspense>
      ))}
    </div>
  );
}