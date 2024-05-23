import { getByLang } from "@/paolo-mauri/sanity.utils";
import { useEffect, useState } from "react";
import { LanguageProps } from ".";

export const useLogic = ({language}: LanguageProps) => {
    const [blogData, setBlogData] = useState<any>([])

    useEffect(() => {
        const handleFetch = async () => {
            const blog: any = await getByLang(language as string, 'blog', true) ?? []
            setBlogData(blog);
        }

        handleFetch()
    },[language])

    return {
        blogData
    }
}