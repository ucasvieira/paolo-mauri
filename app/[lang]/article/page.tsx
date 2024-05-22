
import Header from '@/app/components/Header';
import Map from '@/app/components/Map';
import { urlFor } from '@/paolo-mauri/client';
import { i18n } from '@/i18n.config';
import { getByLang } from '@/paolo-mauri/sanity.utils';
import Image from 'next/image';

type Props = {
  params: { lang: string; slug: string };
};

export default async function Page({ params }: Props) {
  const articles = await getByLang(params.lang, 'article');
  const fetchedNavs = await getByLang(params?.lang as string, 'nav')

  console.log(articles[0].image) // Imagem do artigo
    
  const translations: any = []
  i18n.languages.map<any[]>(((lang) => translations.push(lang?.id)));

  return (
    <div className='h-[1300px] w-[1900px] relative bg-[#061E26]'>
      <Header translations={translations} fetchedNavs={fetchedNavs}/>
      <Map/>

       <ul>
        {articles?.map((article: any) => 
          <li key={article._id}>
            <Image unoptimized src={urlFor(article.image[0]).width(200).url()} width={300} height={300} alt='' />
            <a>{article?.title?.current}</a>
          </li>
        )}
      </ul> 
        
    </div>
  )
}