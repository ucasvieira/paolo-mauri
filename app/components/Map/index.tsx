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

export default function Map() {
    const {showMap} = useLogic()

    return (
        showMap ? (
            <div className="relative w-[1728px]">
                <Image src={NorthAmerica} unoptimized className="absolute top-[0] left-[0] !w-[650px] !h-[711px]" width={650} height={711} alt="north america map"/>
                <Image src={SouthAmerica} unoptimized className="absolute top-[530px] left-[231px] !w-[250px] !h-[640px]" width={250} height={640} alt="south america map" />
                <Image src={Europe} unoptimized className="absolute top-[0] left-[600px] !w-[380.74px] !h-[600px]" width={380.74} height={476.77} alt="europe map" />
                <Image src={Africa} unoptimized className="absolute top-[424px] left-[640px] !w-[380.74px] !h-[711px]" width={380.74} height={476.77} alt="africa map" />
                <Image src={Asia} unoptimized className="absolute top-[72px] left-[740px] !w-[1150px] !h-[778px]" width={1150} height={778} alt="asia map" />
                <Image src={Oceania} unoptimized className="absolute top-[770px] left-[1312px] !w-[423px] !h-[398px]" width={423} height={398} alt="oceania map" />
            </div>
        )
            : <MapLoader/>
    )
}
