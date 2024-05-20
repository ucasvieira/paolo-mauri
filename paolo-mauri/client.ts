import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';

const projectId = "i8xgwx5l"
const dataset = "production"
const apiVersion =  '2024-05-18'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);