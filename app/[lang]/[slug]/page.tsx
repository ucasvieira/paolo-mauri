
import { i18n } from '@/i18n.config';
import Header from '@/app/components/Header/index';
import Footer from '@/app/components/Footer/index';
import { SlugWithFetchProps } from '@/app/types';
import VideoHome from '@/app/components/VideoHome';

export default async function Slug({ fetchedNavs }: SlugWithFetchProps) {
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
