import { getByLang } from "@/paolo-mauri/sanity.utils";
import { useEffect, useState } from "react";
import { LanguageProps } from ".";

export const useLogic = ({language}: LanguageProps) => {
    const [footerdata, setFooterData] = useState<any>([])

    

    useEffect(() => {
        const handleFetch = async () => {
            const footer: any = await getByLang(language as string, 'footer', true) ?? []
            setFooterData(footer);
        }

        handleFetch()
    },[language])

    return {
        footerdata
    }
}