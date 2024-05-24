import { getByLang } from "@/paolo-mauri/sanity.utils";
import { useEffect, useState } from "react";
import { LanguageProps } from ".";
import { toast } from "react-toastify";

export const useLogic = ({language}: LanguageProps) => {
    const [blogData, setBlogData] = useState<any>([])

    const handleShare = () =>  {
        toast.success("Link copiado para a área de trabalho");
        return window.navigator.clipboard.writeText(window.location.href)
    }

    useEffect(() => {
        const handleFetch = async () => {
            const blog: any = await getByLang(language as string, 'blog', true) ?? []
            setBlogData(blog);
        }

        handleFetch()
    },[language])

    return {
        blogData,
        handleShare
    }
}