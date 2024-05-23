
import Header from '@/app/components/Header/index';
import Footer from '@/app/components/Footer/index';
import VideoHome from '@/app/components/VideoHome';
import { i18n } from '@/i18n.config';
import { getByLang } from '@/paolo-mauri/sanity.utils';
import { SlugProps } from '@/app/types';

export default async function Slug({params}: SlugProps) {
  const fetchedNavs = await getByLang(params?.lang as string, 'nav')

  const translations: any = []
  i18n.languages.map<any[]>(((lang) => translations.push(lang?.id)));

  return (
    <main className='relative'>
      <Header translations={translations} fetchedNavs={fetchedNavs as any}/>
      <VideoHome />
      <Footer/>
    </main>
  );
}
