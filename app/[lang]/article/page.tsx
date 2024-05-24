
import SlugExpandedPageArticle from "./expanded/page";

export type ArticleProps = {
  params?: { lang: string; slug: string };
};

export default async function Article({ params }: ArticleProps) {
  return <SlugExpandedPageArticle params={params}/>
}
