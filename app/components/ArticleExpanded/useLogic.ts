import { useEffect, useState } from "react";
import { ArticleProps } from ".";
import { getByLang } from "@/paolo-mauri/sanity.utils";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify"

export const useLogic = ({language}: ArticleProps)=>{
    const [articleInfo, setArticleInfo] = useState<any>([]);
    const path = usePathname()

    const handleShare = () =>  {
        toast.success("Link copiado para a área de trabalho");
        return window.navigator.clipboard.writeText(window.location.href)
    }

    useEffect(() => {
        const handleFetch = async () => {
            const id = localStorage.getItem('article-id') ?? path?.split('/')[4]
            const dataList: any = await getByLang(language as string, 'article') ?? []
            const getItem = dataList.find((data: any) => data._id === id)

            setArticleInfo(getItem)
        }

        handleFetch()
    },[language, path])
    
    return {
        articleInfo,
        handleShare
    }
}