import { getByLang, getOneByLang } from "@/paolo-mauri/sanity.utils";
import { getFileAsset } from "@sanity/asset-utils";
import { useEffect, useState } from "react";
import { LanguageProps } from ".";

export const blogLogic = ({language}: LanguageProps) => {
    const [BlogData, setBlogData] = useState<any>([])

    useEffect(() => {
        const handleFetch = async () => {
            const Blog: any = await getOneByLang(language as string, 'blog') ?? []
            const list: any[] = []

            setBlogData(Blog);
        }

        handleFetch()
    },[language])

    return {
        BlogData
    }
}