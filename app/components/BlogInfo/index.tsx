'use client'


import { getByLang, getObjects } from '@/paolo-mauri/sanity.utils';
import { useState } from 'react';
import Image from 'next/image';
import check from '@/public/assets/Check Square.png'
import list from '@/public/assets/List 3.png'
import grid from '@/public/assets/Grid.png'
import headerblog from '@/public/assets/HeaderBlog.png'
import share from '@/public/assets/share.svg'
import { useLogic } from '../Header/useLogic';
import { blogLogic } from './useLogic';
import { i18n } from '@/i18n.config';
import { urlFor } from '@/paolo-mauri/client';

export interface LanguageProps {
    language?: string;
}

export default function BlogInfo({ language }: LanguageProps) {
    const { currentWindow } = useLogic()
    const { BlogData } = blogLogic({ language })
    const allTexts = BlogData?.text2?.map((block: any) => {
        // Para cada bloco, mapeie sobre os elementos children
        return block.children?.map((child: any) => {
            // Retorne o texto de cada child
            return child.text;
        });
    });

    return (
        <>
            <div className="flex flex-col w-full h-full relative bg-[#001116]">
                <div className="bg-gradient-to-b from-[#000] from-0% to-[#000] to-100% w-full h-[20%] opacity-50 mix-blend-color absolute top-0" />
                <Image
                    src={headerblog}
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
                            <span className="w-full font-fonttitulo">{BlogData?.title}</span>
                            <Image
                                    src={share}
                                    unoptimized
                                    alt="Paolo Mauri" 
                                />
                            <div className="flex text-3xl space-x-8 ml-auto"></div>
                        </div>
                        <div className=" mt-10 text-1xl font-bold tracking-widest leading-7  text-justify text-red-50 max-md:max-w-full">
                            {BlogData?.date}
                            <br />
                            <br />
                            {BlogData?.text?.[0]?.children?.[0]?.text}
                            <br />
                            <br />
                            <div />
                            {BlogData?.image?.[0] && (
                                <Image unoptimized src={urlFor(BlogData?.image?.[0]).url()} width={1080} height={594} alt='' style={{
                                    minHeight: currentWindow?.innerWidth < 1024 ? 180 : '100%'
                                }} />
                            )}

                            <div className=" mt-10 text-1xl font-bold tracking-widest leading-7 justify-self-center text-justify text-red-50 max-md:max-w-full">
                                <br />
                                {BlogData?.text2?.[0]?.children?.[0].text}
                                <br />
                                <br />
                                {BlogData?.text2?.[0]?.children?.[1].text}
                                <br />
                                {BlogData?.text2?.[0]?.children?.[2].text}
                                <br />
                                {BlogData?.text2?.[0]?.children?.[3].text}
                                <br />
                                <br />
                                {BlogData?.text2?.[0]?.children?.[4].text}
                                <br />
                                
                                <br />
                                {BlogData?.text2?.[0]?.children?.[5].text}

                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}