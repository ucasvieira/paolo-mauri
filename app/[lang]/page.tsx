
import { getByLang } from "@/paolo-mauri/sanity.utils";
import SlugPage from "./[slug]/page";
import { SlugProps } from "../types";

export default async function Home({ params }: SlugProps) {
  const fetchedNavs = await getByLang(params?.lang as string, 'nav')

  return <SlugPage fetchedNavs={fetchedNavs as never}/>
}
