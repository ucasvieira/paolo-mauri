
import Header from '@/app/components/Header';
import Map from '@/app/components/Map';
import { i18n } from '@/i18n.config';
import { getByLang } from '@/paolo-mauri/sanity.utils';
import { ArticleProps } from '../page';
import ArticlesList from '@/app/components/ArticlesList';
import Footer from '@/app/components/Footer';

export default async function SlugPageArticle({ params }: ArticleProps) {
  const fetchedNavs = await getByLang(params?.lang as string, 'nav');
  const fetchedGeopoliticNavs = await getByLang(params?.lang as string, 'geopoliticNav');
    
  const translations: any = []
  i18n.languages.map<any[]>(((lang) => translations.push(lang?.id)));

  return (
    <>
      <Header translations={translations} fetchedNavs={fetchedNavs} fetchedGeopoliticNavs={fetchedGeopoliticNavs}/>

      {params?.slug?.includes('strategy') ?
        <>
          <ArticlesList language={params?.lang} />
          <Footer />
        </>
      : params?.slug?.includes('expanded') ?
        <>
          {/* <ExpandedArticle /> */}
          <Footer />
        </>
      :
        <Map/>
      }
    </>
  )
}