'use client'

import Image from "next/image";
import WorldIcon from '@/public/assets/world-icon.svg'
import ArrowDownIcon from '@/public/assets/arrow-down.svg'
import { TranslationProps, useLogic } from "./useLogic";
import Link from "next/link";

export default function ChangeLanguageButton({translations}: TranslationProps) {
    const {
        params,
        showTranslations,
        handleShowAvailableTranslations
    } = useLogic()

    return (
        <button className="flex w-[55px] h-[39px] p-[10px] gap-[7px] bg-gradient-to-b from-[#202D31] from-0% via-[#273439] via-59% to-[#1B292E] to-100%
            border-[1px] border-[#5CFAF7] rounded-[8px]" onClick={handleShowAvailableTranslations}>
            <Image src={WorldIcon} width={20} height={20} alt="World Icon" />
            <Image src={ArrowDownIcon} width={20} height={20} alt="Arrow Down Icon" />
            {showTranslations && translations?.map((version) => (
                <Link
                    key={version}
                    href={`/${version}`}
                    locale={version}
                    className={`flex h-8 w-8 items-center justify-center rounded uppercase ${
                    params?.lang == version
                        ? 'bg-white text-black'
                        : 'bg-black text-white'
                    }`}
                >
                    {version}
                </Link>
            ))}
        </button>
    );
}
