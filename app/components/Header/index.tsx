
'use client'

import ChangeLanguageButton from "@/app/components/ChangeLanguageButton";
import NavLinks from "@/app/components/NavLinks";
import LogoPaolo from '@/public/assets/logo-home.svg'
import SandwichMenu from '@/public/assets/sandwich-menu.svg'
import Image from "next/image";
import { TranslationProps } from "../ChangeLanguageButton/useLogic";
import Modal, { ModalProvider } from 'styled-react-modal'
import { useRouter } from "next/navigation";
import { useLogic } from "./useLogic";
import { StyledModal } from "./styles";

export default function Header({translations, fetchedNavs}: TranslationProps) {
  const router = useRouter()
  const { currentWindow, openMenu, handleOpenMenu } = useLogic()

  return (
    <section 
      className="pt-[63px] pl-[61px] flex justify-between items-start z-10 fixed w-full"
    >
      <Image src={LogoPaolo} width={239} height={120} alt="Paolo Mauri Logo" className="cursor-pointer 2xsmall:w-[20%] pt-[12px]" onClick={() => router.push('/')}/>
      <div className="flex gap-[81px] min-h-[300px] w-full items-start justify-end pr-[69px]">
        {currentWindow?.innerWidth < 1024 ? (
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
            <NavLinks fetchedNavs={fetchedNavs as never}/>
        </StyledModal>
      </ModalProvider>
    </section>
  );
}
