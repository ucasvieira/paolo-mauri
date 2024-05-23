import { groq } from 'next-sanity';
import { client } from './client';

export async function getByLang(lang: string, type?: string, onlyOne?: boolean): Promise<any[]> {
  const postQuery = groq`*[_type == '${type}' && language == $lang]`;

  const posts = await client.fetch(postQuery, { lang });

  return onlyOne ? posts[0] : posts;
}

export async function getObject(type?: string): Promise<any[]> {
  const postQuery = groq`*[_type == '${type}']`;

  const object = await client.fetch(postQuery, { });

  return object ? object[0] : object;
}

export async function getObjects(type?: string): Promise<any[]> {
  const postQuery = groq`*[_type == '${type}']`;

  const object = await client.fetch(postQuery, { });

  return object;
}

export async function getByID( id?: string): Promise<any[]> {
  const postQuery = groq`*[_id == '${id}'][0]`;

  const posts = await client.fetch(postQuery);

  return posts;
}