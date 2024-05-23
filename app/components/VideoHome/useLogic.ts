
import { getObject } from "@/paolo-mauri/sanity.utils";
import { getFileAsset } from "@sanity/asset-utils";
import { useEffect, useState } from "react";

export const useLogic = () => {
    const [videoUrl, setVideoUrl] = useState<any>({})

    useEffect(() => {
        const handleFetch = async () => {
            const { video }: any = await getObject('videoBanner')
            const { url } = getFileAsset(video?.asset?._ref, {
                projectId: process?.env?.NEXT_PUBLIC_SANITY_PROJECT_ID,
                dataset: 'production'
            })
            setVideoUrl(url);
        }

        handleFetch()
    },[])

    return {
        videoUrl
    }
}