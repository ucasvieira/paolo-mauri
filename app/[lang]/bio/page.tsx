import * as React from "react";
import Footer from '@/app/components/Footer/index';
import Header from "@/app/components/Header";
import { i18n } from '@/i18n.config';
import { getByLang } from "@/paolo-mauri/sanity.utils";
import { SlugProps } from "@/app/types";
import BioInfo from "@/app/components/BioInfo";

export default async function Page({params}: SlugProps) {
  const fetchedNavs = await getByLang(params?.lang as string, 'nav')
  
  const translations: any = []
  i18n.languages.map<any[]>(((lang) => translations.push(lang?.id)));

  return (
    <>
      <Header translations={translations} fetchedNavs={fetchedNavs}/>
      <BioInfo />
      <Footer />
    </>
  );
}
