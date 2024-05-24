'use client'

import Image from "next/image";
import MapLoaderSVG from '@/public/assets/map-loader.svg'

export default function MapLoader() {

    return (
        <div id="mapLoader" className="bg-[#061E26] w-full h-[100vh]">
            <Image unoptimized priority  src={MapLoaderSVG} fill alt="loader map" />
        </div>
    )
}
