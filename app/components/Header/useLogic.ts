import { useEffect, useState } from "react"

export const useLogic = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [hideHeader, setHideHeader] = useState(false)
    const [currentWindow, setCurrentWindow] = useState<any>()

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleHideHeader = () => {
        setHideHeader(!hideHeader)
    }

    useEffect(() => {
        setCurrentWindow(typeof window !== undefined ? window : '')
    },[])

    return {
        currentWindow,
        openMenu,
        hideHeader,
        handleOpenMenu,
        handleHideHeader,
    }
}