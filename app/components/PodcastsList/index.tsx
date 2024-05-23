'use client'

import { useLogic as headerUseLogic } from "@/app/components/Header/useLogic";
import * as React from "react";
import VideoComponent from "@/app/ui/video-component";
import PlayButton from '@/public/assets/play-video-icon.svg'
import { Suspense } from "react";
import { useLogic } from "./useLogic";
import Image from "next/image";

export interface LanguageProps {
  language?: string;
}

export default function PodcastsList({ language }: LanguageProps) {
  const { podcastsUrlList } = useLogic({language})
  const { currentWindow } = headerUseLogic()

  return (
    <div className="flex bg-[#001116] items-start justify-center w-full gap-[5%]" style={{
      flexDirection: currentWindow?.innerWidth < 1024 ? 'column' : 'row',
      paddingTop: currentWindow?.innerWidth < 1024 ? '200px' : '270px'
    }}>
      <div className="flex flex-col gap-[44px]" style={{
        alignItems: currentWindow?.innerWidth < 1024 ? 'center' : 'flex-end',
        width: currentWindow?.innerWidth < 1024 ? '100%' : '40%',
      }}>
        <h1 className="font-extrabold" style={{
          fontSize: currentWindow?.innerWidth < 1024 ? '32px' : '64px',
          textAlign: currentWindow?.innerWidth < 1024 ? 'center' : 'right',
          maxWidth: currentWindow?.innerWidth < 1024 ? '100%' : '37%',
          overflowWrap: 'break-word',
          lineHeight: '51px'
        }}>
          PodCasts
        </h1>
        <span className="max-w-[60%]" style={{
          textAlign: currentWindow?.innerWidth < 1024 ? 'justify' : 'right',
          paddingBottom: currentWindow?.innerWidth < 1024 ? '87px' : '0'
        }}>
          Ascolta i nostri podcasts per discussioni approfondite sulla geopolitica, difesa e politica estera. La nostra trasmissione 
          fornisce approfondimenti e analisi uniche sui temi più importanti del nostro tempo. 
          Vi proponiamo interviste esclusive con i principali attori del mondo della geopolitica, della difesa e della politica estera.
        </span>
      </div>
      <div className="flex flex-col w-full h-full items-start relative gap-[25px] pb-[87px]" style={{
        gap: currentWindow?.innerWidth < 1024 ? '87px' : '25px',
        paddingLeft: currentWindow?.innerWidth < 1024 ? '32px' : '0',
        paddingRight: currentWindow?.innerWidth < 1024 ? '32px' : '0',
      }}>
        {podcastsUrlList?.map((podcast: any, index: number) => (
          <Suspense fallback={<></>} key={index}>
            <VideoComponent fileName={podcast.url} className="max-w-[660px] max-h-[372px] object-cover rounded-[29px] z-50 relative w-full">
              <div id="fade-background" className="max-w-[660px] max-h-[372px] flex items-end absolute bottom-0 z-50 px-[36px] py-[12px] w-full" style={{
                paddingLeft: currentWindow?.innerWidth < 1024 ? '16px' : '32px',
                paddingRight: currentWindow?.innerWidth < 1024 ? '16px' : '32px',
              }}>
                <div className="absolute bg-gradient-to-b from-[#000]/0 to-[#000]/100 h-full w-full left-0 bottom-0 rounded-[29px] z-[-1]"/>
                <div className="flex justify-between w-full items-center">
                  <p className="flex font-extrabold text-[20px]" style={{
                    fontSize: currentWindow?.innerWidth < 1024 ? '16px' : '20px',
                  }}>{podcast.description}</p>
                  <Image src={PlayButton} width={60} height={60} alt='play button icon' style={{
                    width: currentWindow?.innerWidth < 1024 ? '30px' : '60px',
                    height: currentWindow?.innerWidth < 1024 ? '30px' : '60px',
                  }}/>
                </div>
              </div>
            </VideoComponent>
          </Suspense>
        ))}
      </div>
    </div>
  );
}