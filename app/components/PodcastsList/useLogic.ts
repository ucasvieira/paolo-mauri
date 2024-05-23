
import { getByLang } from "@/paolo-mauri/sanity.utils";
import { getFileAsset } from "@sanity/asset-utils";
import { useEffect, useState } from "react";
import { LanguageProps } from ".";

export const useLogic = ({language}: LanguageProps) => {
    const [podcastsUrlList, setPodcastsUrlList] = useState<any>([])

    useEffect(() => {
        const handleFetch = async () => {
            const podcastList: any = await getByLang(language as string, 'podcast') ?? []
            const list: any[] = []

            podcastList?.sort((a: any, b: any) => a.name - b.name).forEach((podcast: any) => {
                const { url } = getFileAsset(podcast?.video?.asset?._ref, {
                    projectId: process?.env?.NEXT_PUBLIC_SANITY_PROJECT_ID,
                    dataset: 'production'
                })
                list.push({url, description: podcast.description});
            });
            setPodcastsUrlList(list);
        }

        handleFetch()
    },[language])
    
    return {
        podcastsUrlList
    }
}