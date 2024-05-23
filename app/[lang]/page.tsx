
import { SlugProps } from "../types";
import SlugPage from "./[slug]/page";

export default async function Home({params}: SlugProps) {

  return <SlugPage params={params}/>
}
