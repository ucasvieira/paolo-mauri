'use client'

import Image from "next/image";
import NorthAmericaDefense from '@/public/assets/north-america-defense.svg'
import SouthAmericaDefense from '@/public/assets/south-america-defense.svg'
import EuropeDefense from '@/public/assets/europe-defense.svg'
import EuropeDefenseFocus from '@/public/assets/europe-defense-focus.svg'
import Africa from '@/public/assets/africa.svg'
import Asia from '@/public/assets/asia.svg'
import Oceania from '@/public/assets/oceania.svg'
import MapLoader from "../MapLoader";
import RedPin from '@/public/assets/red-pin.svg'
import RedFocusPin from '@/public/assets/red-pin-focus.svg'
import { useLogic } from "./useLogic";
import { useLogic as headerUseLogic } from "@/app/components/Header/useLogic";
import Drawer from '@mui/material/Drawer';

export default function DefenseMap() {
    const { showMap, openDrawer, toggleDrawer, handleChangeFocusClass } = useLogic()
    const { currentWindow } = headerUseLogic()

    return (
        showMap ? (
            <div className="relative w-[1892px] h-[1300px] bg-[#061E26]">
                <Image id="north-defense" src={NorthAmericaDefense} unoptimized priority  className="absolute top-[0] left-[0] !w-[650px] !h-[711px] cursor-pointer" width={650} height={711} alt="north america map" />

                <Image id="south-defense" src={SouthAmericaDefense} unoptimized priority  className="absolute top-[530px] left-[231px] !w-[250px] !h-[640px] cursor-pointer" width={250} height={640} alt="south america map" />

                <Image id="europe-defense" src={EuropeDefense} unoptimized priority  className="absolute top-[0] left-[600px] !w-[380.74px] !h-[600px] cursor-pointer z-[1]" width={380.74} height={476.77} alt="europe map" onClick={() => {
                    handleChangeFocusClass('europe-defense');
                    toggleDrawer(true);
                }} />
                <Image id="europe-defense-focus" hidden src={EuropeDefenseFocus} unoptimized priority  className="absolute top-[0] left-[600px] !w-[380.74px] !h-[600px] cursor-pointer z-[1]" width={380.74} height={476.77} alt="europe map" onClick={() => {
                    handleChangeFocusClass('europe-defense');
                    toggleDrawer(false);
                }} />
                
                <Image id="red-pin" src={RedPin} unoptimized priority  className="absolute top-[374px] left-[916px] cursor-pointer z-[1]" width={36} height={36} alt="red pin 1 icon" onClick={() => {
                    handleChangeFocusClass('red-pin');
                    toggleDrawer(true);
                }} />
                <Image id="red-pin-focus" hidden src={RedFocusPin} unoptimized priority  className="absolute top-[318px] left-[849px] cursor-pointer z-[1]" width={164} height={164} alt="focus pin 1 icon" onClick={() => {
                    handleChangeFocusClass('red-pin');
                    toggleDrawer(false);
                    //56 67
                }} />
                <Image id="red-pin-2" src={RedPin} unoptimized priority  className="absolute top-[369px] left-[827px] cursor-pointer z-[1]" width={36} height={36} alt="red pin 2 icon" onClick={() => {
                    handleChangeFocusClass('red-pin-2');
                    toggleDrawer(true);
                }} />
                <Image id="red-pin-2-focus" hidden src={RedFocusPin} unoptimized priority  className="absolute top-[313px] left-[760px] cursor-pointer z-[1]" width={164} height={164} alt="focus pin 2 icon" onClick={() => {
                    handleChangeFocusClass('red-pin-2');
                    toggleDrawer(false);
                }}/>
                <Image id="red-pin-3" src={RedPin} unoptimized priority  className="absolute top-[412px] left-[727px] cursor-pointer z-[2]" width={36} height={36} alt="red pin 3 icon" onClick={() => {
                    handleChangeFocusClass('red-pin-3');
                    toggleDrawer(true);
                }} />
                <Image id="red-pin-3-focus" hidden src={RedFocusPin} unoptimized priority  className="absolute top-[356px] left-[660px] cursor-pointer z-[2]" width={164} height={164} alt="focus pin 3 icon" onClick={() => {
                    handleChangeFocusClass('red-pin-3');
                    toggleDrawer(false);
                }}/>
                <Image id="red-pin-4" src={RedPin} unoptimized priority  className="absolute top-[472px] left-[800px] cursor-pointer z-[2]" width={36} height={36} alt="red pin 4 icon" onClick={() => {
                    handleChangeFocusClass('red-pin-4');
                    toggleDrawer(true);
                }} />
                <Image id="red-pin-4-focus" hidden src={RedFocusPin} unoptimized priority  className="absolute top-[416px] left-[733px] cursor-pointer z-[2]" width={164} height={164} alt="focus pin 4 icon" onClick={() => {
                    handleChangeFocusClass('red-pin-4');
                    toggleDrawer(false);
                }}/>

                <Image id="africa" src={Africa} unoptimized priority  className="absolute top-[424px] left-[640px] !w-[380.74px] !h-[711px] cursor-pointer z-[1]" width={380.74} height={476.77} alt="africa map" />

                <Image id="asia" src={Asia} unoptimized priority  className="absolute top-[72px] left-[740px] !w-[1150px] !h-[778px] cursor-pointer" width={1150} height={778} alt="asia map"/>

                <Image id="oceania" src={Oceania} unoptimized priority  className="absolute top-[770px] left-[1308px] !w-[423px] !h-[398px] cursor-pointer" width={423} height={398} alt="oceania map" />

                <Drawer
                    anchor={currentWindow?.outerWidth > 1024 ? 'left' : 'bottom'}
                    open={openDrawer}
                    onClose={() => toggleDrawer(false)}
                    SlideProps={{ unmountOnExit: true }}
                    typeof="persistent"
                    className="overflow-hidden"
                >
                    Teste
                </Drawer>
            </div>
        )
            : <MapLoader/>
    )
}
