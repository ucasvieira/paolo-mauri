'use client'

import { usePathname, useRouter } from "next/navigation";
import { useLogic } from "./useLogic";
import { useLogic as headerUseLogic } from "@/app/components/Header/useLogic";
import { SlugWithFetchProps } from "@/app/types";

export default function NavLinks({ fetchedNavs, fetchedGeopoliticNavs, isGeopoliticNav, newClassName = '', isMap }: SlugWithFetchProps) {
    const router = useRouter()
    const path = usePathname()
    const { currentWindow } = headerUseLogic()
    const { navArray } = useLogic({fetchedNavs, fetchedGeopoliticNavs, isGeopoliticNav})

    return (
        <nav className={`${newClassName} flex gap-[18px] flex-col z-[51]`}
            style={{
                alignItems: isGeopoliticNav ? 'flex-start' : 'flex-end',
                marginTop: (isGeopoliticNav && currentWindow?.innerWidth >= 1024) || isMap ? '144px' : '0',
                minHeight: isGeopoliticNav && currentWindow?.innerWidth < 1024 ? '252px' : '300px'
            }}
        >
            {navArray?.sort((a, b) => a.position - b.position).map((nav) => (
                <div key={nav.title} onClick={() => router.push(`/${nav.href !== 'home' ? nav.href.toLowerCase() : ''}`)} 
                    className={
                        `flex text-[#5CFAF7] font-extrabold w-max uppercase cursor-pointer transition-all ease-in-out duration-500
                        ${
                            path.split('/')[2]?.includes(nav.href) || 
                            !path.split('/')[2] && nav.href.includes('home') ||
                            nav.href.includes(path.split('/')[3]) ? 'opacity-30' : ''
                        }`
                    }>
                    {nav.title}
                </div>
            ))}
        </nav>
    );
}
