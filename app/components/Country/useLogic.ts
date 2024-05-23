
import { useEffect, useState } from "react";

export type TranslationProps = {
  translations?: any[]
}

export const useLogic = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mapLoader');
          if (loader) {
            setTimeout(() => {
              setShowMap(true)
            }, 2500);
          }
      }
  },[])
  
  return {
      showMap,
  }
}