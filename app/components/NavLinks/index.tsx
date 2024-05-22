'use client'

import { usePathname, useRouter } from "next/navigation";
import { useLogic } from "./useLogic";
import { SlugWithFetchProps } from "@/app/types";

export default function NavLinks({ fetchedNavs }: SlugWithFetchProps) {
    const router = useRouter()
    const pathname = usePathname()
    const { navArray } = useLogic({fetchedNavs})

    return (
        <nav className="flex gap-[18px] items-end flex-col">
            {navArray?.sort((a, b) => a.position - b.position).map((nav) => (
                <div key={nav.title} onClick={() => router.push(`/${nav.href !== 'home' ? nav.href.toLowerCase() : ''}`)} 
                    className={`flex text-[#5CFAF7] font-extrabold w-max uppercase cursor-pointer transition-all ease-in-out duration-500
                        ${pathname.split('/')[2] === nav.href || !pathname.split('/')[2] && nav.href === 'home' ? 'opacity-30' : ''}`}>
                    {nav.title}
                </div>
            ))}
        </nav>
    );
}
