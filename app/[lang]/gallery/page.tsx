import Header from '@/app/components/Header';
import { i18n } from '@/i18n.config';
import { getByLang, getObjects} from '@/paolo-mauri/sanity.utils';
import Galleryimg from '@/app/components/GalleryImages/index'

type Props = {
  params: { lang: string; slug: string };
};

export default async function Page({ params }: Props) {
  var exibition = "full";
  
  const fetchedNavs = await getByLang(params?.lang as string, 'nav')

  

  const translations: any = []
  i18n.languages.map<any[]>(((lang) => translations.push(lang?.id)));
  
        return (
          <><Header translations={translations} fetchedNavs={fetchedNavs} />
          <Galleryimg/>
          </>);
        
};
