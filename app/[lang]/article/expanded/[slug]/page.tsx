
import { i18n } from '@/i18n.config';
import Footer from '@/app/components/Footer';
import ArticleExpanded from '@/app/components/ArticleExpanded';
import { ArticleProps } from '../page';
import Header from '@/app/components/Header';
import Map from '@/app/components/Map';
import FooterMap from '@/app/components/FooterMap';

export default async function SlugExpandedSlugPageArticle({ params }: ArticleProps) {
  const translations: any = []
  i18n.languages.map<any[]>(((lang) => translations.push(lang?.id)));

  return (
    <>
      <Header translations={translations} />
      {params?.slug?.includes('storia') ?
        <>
          <ArticleExpanded language={params?.lang}  />
          <Footer language={params?.lang}/>
        </>
      : 
        <>
          <Map/>
          <FooterMap language={params?.lang} />
        </>
      }
    </>
  )
}
