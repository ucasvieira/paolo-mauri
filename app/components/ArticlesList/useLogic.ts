
import { getByLang } from "@/paolo-mauri/sanity.utils";
import { useEffect, useState } from "react";
import { LanguageProps } from ".";
import { urlFor } from "@/paolo-mauri/client";

export const useLogic = ({language}: LanguageProps) => {
    const [articlesUrlList, setArticlesList] = useState<any>([])

    useEffect(() => {
        const handleFetch = async () => {
            const images: any = await getByLang(language as string, 'article') ?? []
            const list: any[] = []
            
            images?.sort((a: any, b: any) => a._createdAt - b._createdAt).forEach((article: any) => {
                const url = urlFor(article?.image[0]?.asset?._ref).url()
                list.push({url, title: article.title, description: `${article.text[0]?.children[0]?.text.substring(0, 176)}...`, _createdAt: article._createdAt});
            });
            setArticlesList(list)
        }

        handleFetch()
    },[language])
    
    return {
        articlesUrlList
    }
}