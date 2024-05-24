import { getByLang } from "@/paolo-mauri/sanity.utils";
import { useEffect, useState } from "react";
import { LanguageProps } from ".";

export const infoLogic = ({language}: LanguageProps) => {
    const [infodata, setInfoData] = useState<any>([])


    useEffect(() => {
        const handleFetch = async () => {
            const infodata: any = await getByLang(language as string, 'homeinfo', true) ?? []
            setInfoData(infodata);
        }

        handleFetch()
    },[language])

    return {
        infodata
    }
}