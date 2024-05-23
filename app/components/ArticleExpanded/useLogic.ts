import { useEffect, useState } from "react";
import { LanguageProps } from ".";
import { urlFor } from "@/paolo-mauri/client";
import { getByID, getByLang } from "@/paolo-mauri/sanity.utils";

interface ArticleData {
    // Define the structure of your article data
    id: string;
    title: string;
    date: string;
    text: string;
    image: string;
    text2: string;
  }

export const useLogic = ({language}: LanguageProps,id:String)=>{
    const [articleInfo, setArticlesInfo] = useState<any>([]);

    useEffect(() => {
        const handleFetch = async () => {
            const data: any = await getByID(id as string) ?? []
            setArticlesInfo(data)
        }

        handleFetch()
    },[language])
    
    return {
        articleInfo
    }
}