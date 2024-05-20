import { getPostsByLang } from '@/paolo-mauri/sanity.utils'
import { i18n } from '@/i18n.config';
import Image from "next/image";
import LogoPaolo from '@/public/assets/logo-home.svg'
import Header from '@/app/components/Header/index';
import Footer from '@/app/components/Footer/index';

export type SlugProps = {
  params: { lang: string; slug: string };
};

export default async function Page({ params }: SlugProps) {
  const post = await getPostsByLang(params.lang, 'article'); //captura os artigos, fazer uma req dessa com type para cada um dos conteudos da home (Artigos, Blog, etc)

  //PODEMOS UTILIZAR DEPOIS ENTAO DEIXEI COMENTADO
  // const postTranslationSlugs: { [key: string]: { current: string } }[] =
  //   post?.map((item: any) => {
  //     const newItem: { [key: string]: { current: string } } = {};

  //     for (const key in item.slug) {
  //       if (key !== '_type') {
  //         newItem[key] = { current: item.slug[key].current };
  //       }
  //     }
  //     return newItem;
  //   });

  const translations: any = []
  i18n.languages.map<any[]>(((lang) => translations.push(lang?.id)));

  return (
    <><section className="pt-[63px] pl-[61px] flex justify-between items-start">
      <Image src={LogoPaolo} width={239} height={120} alt="Paolo Mauri Logo" />
      <Header translations={translations} />

    </section>
    <Footer></Footer>
    </>
    
    
  );
}
