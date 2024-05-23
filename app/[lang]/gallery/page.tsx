import Header from '@/app/components/Header';
import { i18n } from '@/i18n.config';
import { getByLang} from '@/paolo-mauri/sanity.utils';
import GalleryImages from '@/app/components/GalleryImages'
import FooterCTA from '@/app/components/FooterCTA';

type Props = {
  params: { lang: string; slug: string };
};

export default async function Page({ params }: Props) {
  const fetchedNavs = await getByLang(params?.lang as string, 'nav')

  const translations: any = []
  i18n.languages.map<any[]>(((lang) => translations.push(lang?.id)));

  return (
    <>
      <Header translations={translations} fetchedNavs={fetchedNavs} />
      <GalleryImages language={params?.lang}/>
      <FooterCTA/>
    </>
  );

};
