import { useParams } from "next/navigation";
import { useState } from "react";

export type TranslationProps = {
  translations?: any[]
  fetchedNavs?: any[]
  fetchedGeopoliticNavs?: any[]
}

export const useLogic = () => {
  const [showTranslations, setShowTranslations] = useState(false);
  const params = useParams();

  const handleShowAvailableTranslations = () => {
    setShowTranslations(!showTranslations)
  }
  
  return {
      params,
      showTranslations,
      handleShowAvailableTranslations
  }
}