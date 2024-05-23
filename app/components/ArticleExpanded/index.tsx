'use client'

import Image from 'next/image';
import headerblog from '@/public/assets/header-blog.png'
import share from '@/public/assets/share.svg'
import { useLogic as headerUseLogic } from '../Header/useLogic';
import { useLogic } from './useLogic';
// import { i18n } from '@/i18n.config';
import { urlFor } from '@/paolo-mauri/client';

export interface LanguageProps {
    language?: string;
}

export default function ArticleExpanded({ language }: LanguageProps,id: string) {
    const { currentWindow } = headerUseLogic()
    const { articleInfo } = useLogic({ language }, id)

    return (
        <>
            <div className="flex flex-col w-full h-full relative bg-[#001116]">
                <div className="bg-gradient-to-b from-[#000] from-0% to-[#000] to-100% w-full h-[20%] opacity-50 mix-blend-color absolute top-0" />
                <Image
                    src={urlFor(articleInfo?.banner?.[0]).url()}
                    unoptimized
                    alt="Paolo Mauri"
                    layout="responsive"
                    style={{
                        minHeight: currentWindow?.innerWidth < 1024 ? 180 : '100%'
                    }}
                />
                <div className="flex justify-center flex-col self-center max-w-full w-[873px] h-full relative mt-[-60px] mb-40">
                    <div className="md-w[100%] p-[59px]">
                        <div className="flex pt-12 gap-[13px] text-6xl font-bold tracking-tighter text-white mix-blend-difference leading-[64px] max-md:max-w-full max-md:text-4xl items-center justify-between">
                            <span className="w-full font-fonttitulo">{articleInfo?.title}</span>
                            <Image
                                src={share}
                                unoptimized
                                alt="Paolo Mauri" 
                            />
                            <div className="flex text-3xl space-x-8 ml-auto"></div>
                        </div>
                        <div className=" mt-10 text-1xl font-bold tracking-widest leading-7  text-justify text-red-50 max-md:max-w-full">
                            {articleInfo?.date}
                            <br />
                            <br />
                            {articleInfo?.text?.[0]?.children?.[0]?.text}
                            <br />
                            <br />
                            <div />
                            {articleInfo?.image?.[0] && (
                                <Image unoptimized src={urlFor(articleInfo?.image?.[0]).url()} width={1080} height={594} alt='' style={{
                                    minHeight: currentWindow?.innerWidth < 1024 ? 180 : '100%'
                                }} />
                            )}

                            <div className=" mt-10 text-1xl font-bold tracking-widest leading-7 justify-self-center text-justify text-red-50 max-md:max-w-full">
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[0].text}
                                <br />
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[1].text}
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[2].text}
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[3].text}
                                <br />
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[4].text}
                                <br />
                                <br />
                                {articleInfo?.text2?.[0]?.children?.[5].text}
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}
