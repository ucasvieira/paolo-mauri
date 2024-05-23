import { getByLang } from "@/paolo-mauri/sanity.utils"
import { useEffect, useState } from "react"
import { LanguageProps } from "../PodcastsList"
import { urlFor } from "@/paolo-mauri/client"

export const useLogic = ({language}: LanguageProps) => {
    const [galleryImages, setGalleryImages] = useState<any[]>([])
    const [layoutType, setLayoutType] = useState('grid')
    const [openZoom, setOpenZoom] = useState(false)
    const [photoZoom, setPhotoZoom] = useState('')

    const handleLayout = (type: string) => {
        setLayoutType(type)
    }

    const handleOpenZoom = (photo: string) => {
        setPhotoZoom(photo)
        setOpenZoom(!openZoom)
    }

    useEffect(() => {
        const handleGalleryImages = async () => {
            const images: any = await getByLang(language as string, 'gallery') ?? []
            const list: any[] = []
            
            images?.sort((a: any, b: any) => a._createdAt - b._createdAt).forEach((gallery: any) => {
                const url = urlFor(gallery?.image[0]?.asset?._ref).url()
                list.push({url, description: gallery.description});
            });
            setGalleryImages(list)
        }

        handleGalleryImages()
    },[language])

    return {
        galleryImages,
        layoutType,
        openZoom,
        photoZoom,
        handleOpenZoom,
        handleLayout
    }
}