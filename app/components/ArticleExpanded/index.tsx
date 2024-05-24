'use client'

import { useLogic } from './useLogic';
import headerblog from '@/public/assets/header-blog.png'
import { useLogic as headerUseLogic } from '../Header/useLogic';
import Image from 'next/image';
import share from '@/public/assets/share.svg'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
export interface ArticleProps {
    language?: string;
}

export default function ArticleExpanded({ language }: ArticleProps) {
    const { currentWindow } = headerUseLogic()
    const { articleInfo, handleShare } = useLogic({language})

    return (
        <>
            <ToastContainer  
                autoClose={1600}
                closeButton={false}
                hideProgressBar={true}
            />
            <div className="flex flex-col w-full h-full relative bg-[#001116] py-[0%]">
                <Image
                    src={headerblog}
                    unoptimized priority 
                    alt="Paolo Mauri"
                    layout="responsive"
                    style={{
                        minHeight: currentWindow?.innerWidth < 1024 ? 180 : '100%'
                    }}
                />
                <div className="flex justify-center flex-col self-center max-w-full w-[873px] h-full relative mt-[-60px] mb-40">
                    <div className="md-w[100%] p-[59px]">
                        <div className="cursor-pointer flex pt-12 gap-[13px] text-6xl font-bold tracking-tighter text-white mix-blend-difference leading-[64px] max-md:max-w-full max-md:text-4xl items-center justify-between">
                            <span className="w-full font-fonttitulo">{articleInfo?.title}</span>
                            <Image
                                src={share}
                                unoptimized priority 
                                alt="Paolo Mauri" 
                                onClick={handleShare}
                            />
                            <div className="flex text-3xl space-x-8 ml-auto"></div>
                        </div>
                        <div className=" mt-10 text-1xl font-bold tracking-widest leading-7  text-justify text-red-50 max-md:max-w-full">
                            {articleInfo?.date}
                            <br />
                            <br />
                            <br />
                                {articleInfo?.text?.[0]?.children?.[0].text}
                                <br />
                                <br />
                                {articleInfo?.text?.[0]?.children?.[1]?.text}
                                <br />
                                {articleInfo?.text?.[0]?.children?.[2]?.text}
                                <br />
                                {articleInfo?.text?.[0]?.children?.[3]?.text}
                                <br />
                                <br />
                                {articleInfo?.text?.[0]?.children?.[4]?.text}
                                <br />
                                <br />
                                {articleInfo?.text?.[0]?.children?.[5]?.text}
                            <br />
                            <div />
                            <div className=" mt-10 text-1xl font-bold tracking-widest leading-7 justify-self-center text-justify text-red-50 max-md:max-w-full">
                                <br />
                                <br />
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[0].text}
                                <br />
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[1]?.text}
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[2]?.text}
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[3]?.text}
                                <br />
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[4]?.text}
                                <br />
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[5]?.text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}