'use client'

import { Suspense } from "react";
import VideoComponent from '../../ui/video-component'
import { useLogic } from "./useLogic";
import { useLogic as headerUseLogic } from "../Header/useLogic";
import Button from "../Button";

export default function VideoHome() {
    const { videoUrl } = useLogic()
    const { currentWindow } = headerUseLogic()

    return (
        <div className="w-full relative">
            <Suspense fallback={<></>}>
                <VideoComponent fileName={videoUrl} className={undefined} style={undefined}/>
            </Suspense>

            <div className="flex flex-col gap-[33px] items-center justify-center text-justify w-full h-full font-bold px-[40px] mb-[240px]">
                <h1 className="max-w-[700px] mt-[-10%]" style={{
                    fontSize: currentWindow?.innerWidth < 1024 ? 24 : 48
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

                <h1 className="max-w-[820px] bg-[#236A67] bg-opacity-30 px-[5%] py-[5%] rounded-[24px] font-normal" style={{
                    fontSize: currentWindow?.innerWidth < 1024 ? 10 : 20,
                }}>
                    Paolo Mauri è un giornalista pubblicista milanese che si occupa di analisi nell’ambito delle Forze Armate, della Difesa, di politica estera e geopolitica. Nato a Milano nel 1978 scrive per 
                    InsideOver – ilGiornale.it ed è autore presso Rivista Aeronautica, il periodico ufficiale dell’Aeronautica Militare Italiana e anche per Rivista Marittima.  
                    Ha un diploma in previsione del rischio e analisi di scenario presso lo IAI, ha studiato geopolitica e sicurezza globale presso l’ISPI e intelligence, sicurezza nazionale e analisi OSINT presso l’università LUMSA. 
                </h1>
                <Button 
                    label="leggi di più" 
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
