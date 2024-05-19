
import { getPostsByLang } from '@/paolo-mauri/sanity.utils'

type Props = {
  params: { lang: string; slug: string };
};

export default async function Page({ params }: Props) {
  const posts = await getPostsByLang(params.lang); 

  return (
    <ul>
      {posts.map((post: any) => {
        
        console.log(`${post.language}/${post.slug[post.language].current}`)

        return (
        <li key={post._id}>
          <a href={post?.slug}>{post?.title}</a>
        </li>
      )})}
    </ul>
  )
}