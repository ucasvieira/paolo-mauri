import { groq } from 'next-sanity';
import { client } from './client';

export async function getPostsByLang(lang: string, type?: string): Promise<any[]> {
  const postQuery = groq`*[_type == "${type ?? 'post'}" && language == $lang] {
        _id,
        title,
        slug,
        language,
        description,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          slug,
        },
      }`;

  const posts = await client.fetch(postQuery, { lang });

  return posts;
}
export async function getPostByLang(lang: string, slug: string, type?: string): Promise<any> {
  const postQuery = groq`*[_type == "${type ?? 'post'}" && slug[$lang].current == $slug][0] {
        _id,
        title,
        slug,
        language,
        description,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          slug,
        },
      }`;

  const post = await client.fetch(postQuery, { lang, slug });

  return post;
}