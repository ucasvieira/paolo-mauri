'use client'

import Image from "next/image";
import NorthAmerica from '@/public/assets/north-america.svg'
import NorthAmericaFocus from '@/public/assets/north-america-focus.svg'
import SouthAmerica from '@/public/assets/south-america.svg'
import SouthAmericaFocus from '@/public/assets/south-america-focus.svg'
import Europe from '@/public/assets/europe.svg'
import EuropeFocus from '@/public/assets/europe-focus.svg'
import Africa from '@/public/assets/africa.svg'
// import AfricaFocus from '@/public/assets/africa-focus.svg'
import Asia from '@/public/assets/asia.svg'
import AsiaFocus from '@/public/assets/asia-focus.svg'
import Oceania from '@/public/assets/oceania.svg'
// import OceaniaFocus from '@/public/assets/oceania-focus.svg'
import MapLoader from "../MapLoader";
import FocusPin from '@/public/assets/focus-pin.svg'
import BluePin from '@/public/assets/blue-pin.svg'
import { useLogic } from "./useLogic";
import { useLogic as headerUseLogic } from "@/app/components/Header/useLogic";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export default function Map() {
    const {showMap, openDrawer, toggleDrawer, handleChangeFocusClass} = useLogic()
    const { currentWindow } = headerUseLogic()

    return (
        showMap ? (
            <div className="relative w-[1892px] h-[1300px] bg-[#061E26]">
                <Image id="north" src={NorthAmerica} unoptimized className="absolute top-[0] left-[0] !w-[650px] !h-[711px] cursor-pointer" width={650} height={711} alt="north america map" onClick={() => {
                    handleChangeFocusClass('north');
                    toggleDrawer(true);
                }} />
                <Image id="north-focus" hidden src={NorthAmericaFocus} unoptimized className="absolute top-[0] left-[0] !w-[650px] !h-[711px] cursor-pointer" width={650} height={711} alt="north america map" onClick={() => {
                    handleChangeFocusClass('north');
                    toggleDrawer(false);
                }} />

                <Image id="south" src={SouthAmerica} unoptimized className="absolute top-[530px] left-[231px] !w-[250px] !h-[640px] cursor-pointer" width={250} height={640} alt="south america map" onClick={() => {
                    handleChangeFocusClass('south');
                    toggleDrawer(true);
                }} />
                <Image id="south-focus" hidden src={SouthAmericaFocus} unoptimized className="absolute top-[530px] left-[231px] !w-[250px] !h-[640px] cursor-pointer" width={250} height={640} alt="south america map" onClick={() => {
                    handleChangeFocusClass('south');
                    toggleDrawer(false);
                }} />

                <Image id="europe" src={Europe} unoptimized className="absolute top-[0] left-[600px] !w-[380.74px] !h-[600px] cursor-pointer z-[1]" width={380.74} height={476.77} alt="europe map" onClick={() => {
                    handleChangeFocusClass('europe');
                    toggleDrawer(true);
                }} />
                <Image id="europe-focus" hidden src={EuropeFocus} unoptimized className="absolute top-[0] left-[605px] !w-[414px] !h-[600px] cursor-pointer z-[1]" width={380.74} height={476.77} alt="europe map" onClick={() => {
                    handleChangeFocusClass('europe');
                    toggleDrawer(false);
                }} />

                <Image id="africa" src={Africa} unoptimized className="absolute top-[424px] left-[640px] !w-[380.74px] !h-[711px] cursor-pointer z-[1]" width={380.74} height={476.77} alt="africa map" />
                {/* <Image id="africa-focus" hidden src={Africa} unoptimized className="absolute top-[424px] left-[640px] !w-[380.74px] !h-[711px] cursor-pointer" width={380.74} height={476.77} alt="africa map" onClick={() => handleChangeFocusClass('africa')} /> */}

                <Image id="asia" src={Asia} unoptimized className="absolute top-[0] left-[740px] !w-[1150px] !h-[778px] cursor-pointer" width={1150} height={778} alt="asia map"/>
                <Image id="asia-focus" hidden src={AsiaFocus} unoptimized className="absolute top-[0] left-[740px] !w-[1150px] !h-[778px] cursor-pointer" width={1150} height={778} alt="asia map"/>

                <Image id="blue-pin" src={BluePin} unoptimized className="absolute top-[234px] left-[1382px] cursor-pointer z-[1]" width={36} height={36} alt="blue pin 1 icon" onClick={() => {
                    handleChangeFocusClass('blue-pin');
                    toggleDrawer(true);
                }} />
                <Image id="blue-pin-focus" hidden src={FocusPin} unoptimized className="absolute top-[174px] left-[1320px] cursor-pointer z-[1]" width={164} height={164} alt="focus pin 1 icon" onClick={() => {
                    handleChangeFocusClass('blue-pin');
                    toggleDrawer(false);
                }} />
                
                <Image id="blue-pin-2" src={BluePin} unoptimized className="absolute top-[380px] left-[1335px] cursor-pointer z-[1]" width={36} height={36} alt="blue pin 2 icon" onClick={() => {
                    handleChangeFocusClass('blue-pin-2');
                    toggleDrawer(true);
                }} />
                <Image id="blue-pin-2-focus" hidden src={FocusPin} unoptimized className="absolute top-[324px] left-[1268px] cursor-pointer z-[1]" width={164} height={164} alt="focus pin 2 icon" onClick={() => {
                    handleChangeFocusClass('blue-pin-2');
                    toggleDrawer(false);
                }}/>

                <Image id="oceania" src={Oceania} unoptimized className="absolute top-[700px] left-[1312px] !w-[423px] !h-[398px] cursor-pointer" width={423} height={398} alt="oceania map" />
                {/* <Image id="oceania-focus" hidden src={Oceania} unoptimized className="absolute top-[770px] left-[1312px] !w-[423px] !h-[398px] cursor-pointer" width={423} height={398} alt="oceania map" onClick={() => handleChangeFocusClass('oceania')} /> */}

                <SwipeableDrawer
                    anchor={currentWindow?.innerWidth > 1024 ? 'left' : 'bottom'}
                    open={openDrawer}
                    onClose={() => toggleDrawer(false)}
                    onOpen={() => toggleDrawer(true)}
                >
                    Teste
                </SwipeableDrawer>
            </div>
        )
            : <MapLoader/>
    )
}
