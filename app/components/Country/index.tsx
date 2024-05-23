'use client'

import Image from "next/image";
import NorthAmerica from '@/public/assets/north-america.svg'
import SouthAmerica from '@/public/assets/south-america.svg'
import Europe from '@/public/assets/europe.svg'
import Africa from '@/public/assets/africa.svg'
import Asia from '@/public/assets/asia.svg'
import Oceania from '@/public/assets/oceania.svg'
import MapLoader from "../MapLoader";
import { useLogic } from "./useLogic";

export default function Country() {
    const {showMap} = useLogic()

    return (
        showMap ? (
            <div className="relative">
                <Image src={NorthAmerica} unoptimized className="absolute" width={650} height={711} alt="north america map"/>
                <Image src={SouthAmerica} unoptimized className="absolute top-[478px] left-[231px] !h-[640px]" width={250} height={0} alt="south america map" />
                <Image src={Europe} unoptimized className="absolute top-[17px] left-[660px]" width={380.74} height={476.77} alt="europe map" />
                <Image src={Africa} unoptimized className="absolute top-[477px] left-[660px]" width={380.74} height={476.77} alt="africa map" />
                <Image src={Asia} unoptimized className="absolute top-[24px] left-[850px] !h-[778px]" width={1004} height={0} alt="asia map" />
                <Image src={Oceania} unoptimized className="absolute top-[716px] left-[1342px] !h-[398px]" width={423} height={0} alt="oceania map" />
            </div>
        )
            : <MapLoader/>
    )
}
