import SlugPage, { SlugProps } from "./[slug]/page";

export default function Home({params}: SlugProps) {
  return <SlugPage params={params}/>
}
