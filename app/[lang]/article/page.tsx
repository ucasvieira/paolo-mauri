
import SlugPageArticle from "./[slug]/page";

export type ArticleProps = {
  params?: { lang: string; slug: string };
};

export default async function Article({ params }: ArticleProps) {
  return <SlugPageArticle params={params}/>
}
