'use client'

import { useLogic as headerUseLogic } from "@/app/components/Header/useLogic";
import * as React from "react";
import { useLogic } from "./useLogic";
import Image from "next/image";

export interface LanguageProps {
  language?: string;
}

export default function ArticlesList({ language }: LanguageProps) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const { articlesUrlList } = useLogic({language})
  const { currentWindow } = headerUseLogic()

  return (
    <div className="flex flex-col bg-[#001116] justify-center w-full gap-[5%]" style={{
      alignItems:  currentWindow?.innerWidth < 1524 ? 'center' : 'flex-start',
      paddingTop:  currentWindow?.innerWidth < 1524 ? '200px' : '270px',
      paddingBottom:  currentWindow?.innerWidth < 1524 ? '200px' : '270px',
      paddingLeft:  currentWindow?.innerWidth < 1524 ? '20px' : '319px',
      paddingRight:  currentWindow?.innerWidth < 1524 ? '0' : '319px',
    }}>
      <h1 className="font-extrabold" style={{
        fontSize:  currentWindow?.innerWidth < 1524 ? '32px' : '64px',
        textAlign:  currentWindow?.innerWidth < 1524 ? 'center' : 'right',
        maxWidth:  currentWindow?.innerWidth < 1524 ? '100%' : '38%',
        lineHeight: '51px'
      }}>
          
      </h1>
      <div className="w-full h-full relative pb-[87px] items-center" style={{
        display: 'grid',
        gridColumnGap: '159px',
        gridRowGap: currentWindow?.innerWidth < 1524 ? '0' : '159px',
        gridTemplateColumns: currentWindow?.innerWidth < 1524 ? '1fr' : 'repeat(2, 1fr)',
        gridTemplateRows: currentWindow?.innerWidth < 1524 ? '1fr' : 'repeat(5, 1fr)',
        paddingLeft: currentWindow?.innerWidth < 1524 ? '32px' : '0',
        paddingRight: currentWindow?.innerWidth < 1524 ? '32px' : '0',
      }}>
        {articlesUrlList?.map((article: any, index: number) => (
          <div onClick={article?._id} key={article._createdAt} className="max-w-[500px] max-h-[565px] object-cover rounded-[29px] z-0 relative" style={{
            marginTop: ((index + 1)%2 === 0 && currentWindow?.innerWidth >= 1524) ? '300px' : '0'
          }}>
            <div id="fade-background" className="flex items-end top-0" style={{
              width: currentWindow?.innerWidth < 1024 ? '300px' : '500px',
              height: currentWindow?.innerWidth < 1024 ? '191px' : '291px',
            }}>
              <Image src={article.url} fill alt="article image" style={{
                objectFit: 'contain'
              }}/>
              <p className="absolute z-10 px-[25px] font-extrabold" style={{
                bottom: currentWindow?.innerWidth < 1024 ? '184px' : '164px',
                fontSize: currentWindow?.innerWidth < 1024 ? '20px' : '24px',
                lineHeight: '28px',
                fontFamily: 'Codec Code Trial, sans-serif',
              }}>
                {article.title}
              </p>
              <div className="absolute bg-gradient-to-b from-[#000]/0 to-[#2B3D3C]/100 w-full h-[200px] left-0" style={{
                bottom: currentWindow?.innerWidth < 1024 ? '173px' : '124px'
              }}/>
            </div>
            <div className="bg-[#0F2B31] rounded-[29px]" style={{
                height: currentWindow?.innerWidth < 1024 ? '400px' : '491px',
              }}>
              <p className="absolute px-[25px] text-[20px]" style={{
                top: currentWindow?.innerWidth < 1024 ? '410px' : '491px',
                fontSize: currentWindow?.innerWidth < 1024 ? '16px' : '20px'
              }}>
                {article.description}
              </p>
              <p className="absolute top-[691px] px-[25px]" style={{
                top: currentWindow?.innerWidth < 1024 ? '550px' : '691px',
                fontSize: currentWindow?.innerWidth < 1024 ? '16px' : '20px'
              }}>
                {new Date(article._createdAt).getDay() + ' '} 
                {months[new Date(article._createdAt).getMonth()] + ' '} 
                {new Date(article._createdAt).getUTCFullYear()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}