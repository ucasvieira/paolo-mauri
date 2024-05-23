
import { useEffect, useState } from "react";

export type TranslationProps = {
  translations?: any[]
}

export const useLogic = () => {
  const [showMap, setShowMap] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  

  const handleChangeFocusClass = (country: string) => {

    const listOfElementsFocused = [
      'blue-pin-focus',
      'blue-pin-2-focus',
      'north-focus',
      'south-focus',
      'asia-focus',
      'europe-focus'
    ]
    const listOfElements = [
      'blue-pin',
      'blue-pin-2',
      'north',
      'south',
      'asia',
      'europe'
    ]

    listOfElementsFocused.forEach((item) => !document.getElementById(item)?.hasAttribute('hidden') && document.getElementById(item)?.toggleAttribute('hidden'))
    listOfElements.forEach((item) => document.getElementById(item)?.hasAttribute('hidden') && document.getElementById(item)?.toggleAttribute('hidden'))

    //limpa todos os países primeiramente

    document.getElementById(country)?.toggleAttribute('hidden')
    document.getElementById(`${country}-focus`)?.toggleAttribute('hidden')

    if(country.includes('blue-pin') && document.getElementById('blue-pin-focus')?.hasAttribute('hidden') || 
      country.includes('blue-pin') && document.getElementById('blue-pin-2-focus')?.hasAttribute('hidden')
    ) {
      return document.getElementById(`asia-focus`)?.toggleAttribute('hidden')
    }
  }
  
  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };

  useEffect(() => {
    const header = document.getElementById('header');
    header?.classList.add('hidden');
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('mapLoader');
      if (loader) {
        setTimeout(() => {
          setShowMap(true)
          header?.classList.remove('hidden');
        }, 2500);
      }
    }
  },[])
  
  return {
      showMap, 
      openDrawer, 
      toggleDrawer, 
      handleChangeFocusClass
  }
}