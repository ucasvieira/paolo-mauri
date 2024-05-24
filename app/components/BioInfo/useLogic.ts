import { getByLang } from "@/paolo-mauri/sanity.utils";
import { useEffect, useState } from "react";
import { LanguageProps } from ".";

export const useLogic = ({language}: LanguageProps) => {
    const [biodata, setBioData] = useState<any>([])

    

    useEffect(() => {
        const handleFetch = async () => {
            const bio: any = await getByLang(language as string, 'bio', true) ?? []
            setBioData(bio);
        }

        handleFetch()
    },[language])

    return {
        biodata
    }
}