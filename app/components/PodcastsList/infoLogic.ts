import { getByLang } from "@/paolo-mauri/sanity.utils";
import { useEffect, useState } from "react";
import { LanguageProps } from ".";

export const podLogic = ({language}: LanguageProps) => {
    const [podcastinfo, setPodcastInfo] = useState<any>([])

    

    useEffect(() => {
        const handleFetch = async () => {
            const podcast: any = await getByLang(language as string, 'podinfo', true) ?? []
            setPodcastInfo(podcast);
        }

        handleFetch()
    },[language])

    return {
        podcastinfo
    }
}