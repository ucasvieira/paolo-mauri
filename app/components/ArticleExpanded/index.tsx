'use client'

import Image from 'next/image';
import headerblog from '@/public/assets/header-blog.png'
import share from '@/public/assets/share.svg'
import { useLogic as headerUseLogic } from '../Header/useLogic';
import { useLogic } from './useLogic';
// import { i18n } from '@/i18n.config';
import { urlFor } from '@/paolo-mauri/client';
import { useSearchParams } from 'next/navigation';



export interface ArticleProps {
    language?: string;
}
export interface ArticleId {
    id?: string;
}

export default function ArticleExpanded({ language}: ArticleProps) {
    const router = useSearchParams();
    const  id = router.get('id') as string;
    const articleId: ArticleId = { id };
    
    
    const { currentWindow } = headerUseLogic()
    const { articleInfo } = useLogic(articleId)

    return (
        <>
            <div className="flex flex-col w-full h-full relative bg-[#001116]">
                <div className="bg-gradient-to-b from-[#000] from-0% to-[#000] to-100% w-full h-[20%] opacity-50 mix-blend-color absolute top-0" />
                
                <div className="flex justify-center flex-col self-center max-w-full w-[873px] h-full relative mt-[-60px] mb-40">
                    <div className="md-w[100%] p-[59px]">
                        <div className="flex pt-12 gap-[13px] text-6xl font-bold tracking-tighter text-white mix-blend-difference leading-[64px] max-md:max-w-full max-md:text-4xl items-center justify-between">
                            <span className="w-full font-fonttitulo">{articleInfo?.title}</span>
                            
                            <div className="flex text-3xl space-x-8 ml-auto"></div>
                        </div>
                        <div className=" mt-10 text-1xl font-bold tracking-widest leading-7  text-justify text-red-50 max-md:max-w-full">
                            {articleInfo?.date}
                            <br />
                            <br />
                            
                            <br />
                            <br />
                            <div />
                            

                            <div className=" mt-10 text-1xl font-bold tracking-widest leading-7 justify-self-center text-justify text-red-50 max-md:max-w-full">
                                <br />
                                
                                <br />
                                <br />
                                
                                <br />
                                
                                <br />
                                
                                <br />
                                <br />
                                
                                <br />
                                <br />
                                
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}
