
import ChangeLanguageButton from "@/app/components/ChangeLanguageButton";
import NavLinks from "@/app/components/NavLinks";
import { TranslationProps } from "../ChangeLanguageButton/useLogic";

export default function Header({translations}: TranslationProps) {
  return (
    <div className="flex gap-[81px]">
      <ChangeLanguageButton translations={translations}/>
      <NavLinks />
    </div>
  );
}
