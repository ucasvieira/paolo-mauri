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

    const handleZoom = () => {
        const mapElement = document.getElementById("map")
        var zoom = 1;
        var zoomStep = 0.2;

        zoom += zoomStep;
        if(mapElement)
            mapElement.style.transform = "scale(" + zoom + ")";
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
        handleZoom
    }
}