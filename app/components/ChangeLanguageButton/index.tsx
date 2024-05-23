'use client'

import Image from "next/image";
import WorldIcon from '@/public/assets/world-icon.svg'
import ArrowDownIcon from '@/public/assets/arrow-down.svg'
import { TranslationProps, useLogic } from "./useLogic";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChangeLanguageButton({translations}: TranslationProps) {
    const pathname = usePathname()
    const {
        params,
        showTranslations,
        handleShowAvailableTranslations
    } = useLogic()

    return (
        <button className="flex flex-col w-[62px] h-[50%] p-[10px] bg-gradient-to-b from-[#202D31] from-0% via-[#273439] via-59% top-0 to-[#1B292E] to-100%
            border-[1px] border-[#5CFAF7] rounded-[8px] transition-all ease-in-out duration-500" onClick={handleShowAvailableTranslations}>
            <div className="flex gap-[7px]">
                <Image src={WorldIcon} width={20} height={20} alt="World Icon" />
                <Image src={ArrowDownIcon} width={20} height={20} alt="Arrow Down Icon" />
            </div>
            {showTranslations && translations?.map((version, index) => {
                return (
                    <Link
                        key={version}
                        href={
                            pathname.split('/').length === 3 ? 
                                `/${version}/${pathname?.split('/')[2]}` 
                                : pathname.split('/').length === 4 ? 
                                `/${version}/${pathname?.split('/')[2]}/${pathname?.split('/')[3]}` 
                                :
                                `/${version}`
                        }
                        locale={version}
                        className={`flex gap-4 ${index + 1 === translations.length ? 'mt-0' : 'mt-5'} transition-all h-10 w-8 items-center justify-center rounded uppercase ${
                        params?.lang == version
                            ? 'bg-white text-black'
                            : 'bg-black text-white'
                        }`}
                    >
                        {version}
                    </Link>
                )
            })}
        </button>
    );
}
