import { useEffect, useState } from "react"

export const useLogic = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [currentWindow, setCurrentWindow] = useState<any>()

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        setCurrentWindow(typeof window !== undefined ? window : '')
    },[])

    return {
        currentWindow,
        openMenu,
        handleOpenMenu
    }
}