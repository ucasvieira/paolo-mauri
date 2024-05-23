
'use client'

import ChangeLanguageButton from "@/app/components/ChangeLanguageButton";
import NavLinks from "@/app/components/NavLinks";
import LogoPaolo from '@/public/assets/paolo-mauri-logo.svg'
import SandwichMenu from '@/public/assets/sandwich-menu.svg'
import Image from "next/image";
import { TranslationProps } from "../ChangeLanguageButton/useLogic";
import { ModalProvider } from 'styled-react-modal'
import { usePathname, useRouter } from "next/navigation";
import { useLogic } from "./useLogic";
import { StyledModal } from "./styles";
import HideHeaderButton from "../HideHeaderButton";

export default function Header({translations, fetchedNavs, fetchedGeopoliticNavs}: TranslationProps) {
  const router = useRouter()
  const path = usePathname()
  const { currentWindow, openMenu, hideHeader, handleOpenMenu, handleHideHeader } = useLogic()

  const isMap = (path.includes('article') && !path?.split('/')[3]?.length || path.includes('defend'))

  return (
    <section 
      id='header'
      className="pt-[63px] pl-[61px] flex justify-between items-start z-10 fixed w-full"
      style={{
        maxHeight: hideHeader ? '20px' : 'none'
      }}
    >
      <div className="flex flex-col w-full" style={{
        visibility: hideHeader ? 'hidden' : 'initial'
      }}>
        <Image src={LogoPaolo} width={239} height={120} alt="Paolo Mauri Logo" className="cursor-pointer w-full 2xsmall:w-[45%] lg:w-[30%] pt-[12px]" onClick={() => router.push('/')}/>

        {fetchedGeopoliticNavs?.length && !path.includes('strategy') ? (
          <NavLinks isGeopoliticNav fetchedGeopoliticNavs={fetchedGeopoliticNavs as never} isMap={isMap}/>
        ): <></>}
      </div>

      {path.includes('article') && !path.includes('strategy') && <HideHeaderButton handleHideHeader={handleHideHeader} isHidden={hideHeader}/>}
      
      <div className="flex gap-[81px] w-full items-start justify-end pr-[69px]" style={{
        visibility: hideHeader ? 'hidden' : 'initial',
        maxHeight: hideHeader ? '20px' : 'none'
      }}>
        {currentWindow?.innerWidth < 1024 && !isMap ? (
            <Image src={SandwichMenu} width={45} height={45} alt="Sandwich Menu" className="cursor-pointer" onClick={handleOpenMenu}/>
        ) : (
          <>
            <ChangeLanguageButton translations={translations}/>
            <NavLinks fetchedNavs={fetchedNavs as never}/>
          </>
        )}
      </div>
      
      <ModalProvider>
        <StyledModal
          isOpen={openMenu}
          onBackgroundClick={handleOpenMenu}
          onEscapeKeydown={handleOpenMenu}>
            {path.includes('article') && <div className="mt-[50%]"/>}
            <ChangeLanguageButton translations={translations}/>
            <div className="mt-10" />
            <NavLinks fetchedNavs={fetchedNavs as never}/>
            {path.includes('article') && <NavLinks isGeopoliticNav fetchedGeopoliticNavs={fetchedGeopoliticNavs as never}/>}
        </StyledModal>
      </ModalProvider>
    </section>
  );
}
