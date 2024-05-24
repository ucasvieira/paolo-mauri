
import { useEffect, useState } from "react";

export type TranslationProps = {
  translations?: any[]
}

export const useLogic = () => {
  const [showMap, setShowMap] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChangeFocusClass = (country: string) => {

    const listOfElementsFocused = [
      'red-pin-focus',
      'red-pin-2-focus',
      'red-pin-3-focus',
      'red-pin-4-focus',
      'europe-defense-focus'
    ]
    const listOfElements = [
      'red-pin',
      'red-pin-2',
      'red-pin-3',
      'red-pin-4',
      'europe-defense'
    ]

    listOfElementsFocused.forEach((item) => !document.getElementById(item)?.hasAttribute('hidden') && document.getElementById(item)?.toggleAttribute('hidden'))
    listOfElements.forEach((item) => document.getElementById(item)?.hasAttribute('hidden') && document.getElementById(item)?.toggleAttribute('hidden'))

    if(document.getElementById('europe-defense-focus')?.hasAttribute('hidden')) {
      document.getElementById('europe-defense-focus')?.toggleAttribute('hidden')
      document.getElementById('europe-defense')?.toggleAttribute('hidden')
    }

    document.getElementById(country)?.toggleAttribute('hidden')
    document.getElementById(`${country}-focus`)?.toggleAttribute('hidden')
  }
  
  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };

  useEffect(() => {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    header?.classList.add('hidden');
    footer?.classList.add('hidden');
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('mapLoader');
      if (loader) {
        setTimeout(() => {
          setShowMap(true)
          header?.classList.remove('hidden');
          footer?.classList.remove('hidden');
        }, 2500);
      }
    }
  },[])
  
  return {
      showMap, 
      openDrawer, 
      toggleDrawer, 
      handleChangeFocusClass,
  }
}