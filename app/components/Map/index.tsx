'use client';

import Image from "next/image";
import NorthAmerica from '@/public/assets/north-america.svg';
import NorthAmericaFocus from '@/public/assets/north-america-focus.svg';
import SouthAmerica from '@/public/assets/south-america.svg';
import SouthAmericaFocus from '@/public/assets/south-america-focus.svg';
import Europe from '@/public/assets/europe.svg';
import EuropeFocus from '@/public/assets/europe-focus.svg';
import Africa from '@/public/assets/africa.svg';
import Asia from '@/public/assets/asia.svg';
import AsiaFocus from '@/public/assets/asia-focus.svg';
import Oceania from '@/public/assets/oceania.svg';
import MapLoader from "../MapLoader";
import FocusPin from '@/public/assets/focus-pin.svg';
import BluePin from '@/public/assets/blue-pin.svg';
import { useLogic } from "./useLogic";
import { useLogic as headerUseLogic } from "@/app/components/Header/useLogic";
import Drawer from '@mui/material/Drawer';
import { MyPaper } from "./styles";

function MyComponent() {
    return (
        <div className="flex flex-col pt-6 pb-20 pl-4 rounded-none bg-zinc-300 max-w-[671px]">
            <div className="flex gap-5 justify-between self-center w-full text-xs font-medium tracking-wide whitespace-nowrap max-w-[607px] text-teal-950 max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-2 self-start px-1.5 py-1.5 mt-4 bg-gray-200 rounded-2xl shadow-sm">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/068b150c7470c939bbff490fd9bd570ab357527c6075266ede408f9f64b32b29?"
                        className="shrink-0 aspect-square w-[11px]"
                    />
                    <div className="my-auto">GEOPOLITICA</div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fb30626289a65435ead9ca57f6748e462f753c1ed43d43d19502e34674cc661?"
                    className="shrink-0 w-10 aspect-square"
                />
            </div>
            <div className="self-start mt-3.5 ml-4 text-4xl font-bold leading-10 text-stone-950 max-md:ml-2.5">
                Europa
            </div>
            <div className="flex gap-2.5 self-start mt-1.5 ml-5 text-xl leading-10 whitespace-nowrap text-stone-950 max-md:ml-2.5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a06f1715e2a348db30a19bf7baf1fcaa1222ca0f02ecc88a24bd6126d41fd8e?"
                    className="shrink-0 aspect-square fill-gray-600 fill-opacity-60 w-[18px]"
                />
                <div className="my-auto">Ucrania</div>
            </div>
            <div className="flex gap-3 self-center mt-7 -ml-8 font-medium max-md:flex-wrap">
            <div className="flex flex-col justify-center text-neutral-900">
                    <div className="flex gap-2 px-2 py-0.5  border-2 border-black border-solid rounded-[50px]">
                        <div className="justify-center p-0.5  text-sm  leading-4  border-2 border-black  rounded-full">
                            1
                        </div>
                        <div className="my-auto text-sm justify-center tracking-wide leading-3">
                            Europa
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-neutral-900">
                    <div className="flex gap-2 px-2 py-0.5  border-2 border-black border-solid rounded-[50px]">
                        <div className="justify-center p-0.5  text-sm  leading-4  border-2 border-black  rounded-full">
                            2
                        </div>
                        <div className="my-auto text-sm justify-center tracking-wide leading-3">
                            Asia
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-neutral-900">
                    <div className="flex gap-2 px-2 py-0.5  border-2 border-black border-solid rounded-[50px]">
                        <div className="justify-center p-0.5  text-sm  leading-4  border-2 border-black  rounded-full">
                            3
                        </div>
                        <div className="my-auto text-sm justify-center tracking-wide leading-3">
                            Mondo
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-neutral-900">
                    <div className="flex gap-2 px-2 py-0.5  border-2 border-black border-solid rounded-[50px]">
                        <div className="justify-center p-0.5  text-sm  leading-4  border-2 border-black  rounded-full">
                            4
                        </div>
                        <div className="my-auto text-sm justify-center tracking-wide leading-3">
                            Sud America
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-neutral-900">
                    <div className="flex gap-2 px-0.5 py-0.5   border-2 border-black border-solid rounded-[50px]">
                        <div className="justify-center  px-  text-sm  leading-4  border-2 border-black rounded-full">
                            5
                        </div>
                        <div className="my-auto text-sm justify-center tracking-wide leading-3">
                            Nord America
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 mt-16 text-sm max-md:flex-wrap max-md:mt-10 max-md:mr-0.5">
                <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <div className="shrink-0 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10 max-md:max-w-full" />
                    <div className="flex flex-col mt-11 max-md:mt-10 max-md:max-w-full">
                        <div className="text-teal-950 tracking-[4.2px] max-md:max-w-full">
                            GUERRA
                        </div>
                        <div className="mt-5 text-3xl font-bold leading-7 text-stone-950 max-md:max-w-full">
                            Ucraina una guerra frutto di 30 anni di errori e fraintendimenti
                            tra russia e occidente
                        </div>
                        <div className="mt-6 font-medium tracking-wide text-teal-950 text-opacity-50 max-md:max-w-full">
                            20 de Aprile de 2023
                        </div>
                        <img
                            loading="lazy"
                            srcSet="..."
                            className="self-center mt-7 w-full border border-solid shadow-2xl aspect-[2.22] border-black border-opacity-20 max-w-[596px] max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className="shrink-0 self-start w-2.5 rounded-2xl bg-teal-950 h-[191px]" />
            </div>
        </div>
    );
}

export default function Map() {
    const { showMap, openDrawer, toggleDrawer, handleChangeFocusClass } = useLogic();
    const { currentWindow } = headerUseLogic();

    return (
        showMap ? (
            <div className="relative w-[1892px] h-[1300px] bg-[#061E26]">
                <Image id="north" src={NorthAmerica} unoptimized priority className="absolute top-[0] left-[0] !w-[650px] !h-[711px] cursor-pointer" width={650} height={711} alt="north america map" onClick={() => {
                    handleChangeFocusClass('north');
                    toggleDrawer(true);
                }} />
                <Image id="north-focus" hidden src={NorthAmericaFocus} unoptimized priority className="absolute top-[0] left-[0] !w-[650px] !h-[711px] cursor-pointer" width={650} height={711} alt="north america map" onClick={() => {
                    handleChangeFocusClass('north');
                    toggleDrawer(false);
                }} />

                <Image id="south" src={SouthAmerica} unoptimized priority className="absolute top-[530px] left-[231px] !w-[250px] !h-[640px] cursor-pointer" width={250} height={640} alt="south america map" onClick={() => {
                    handleChangeFocusClass('south');
                    toggleDrawer(true);
                }} />
                <Image id="south-focus" hidden src={SouthAmericaFocus} unoptimized priority className="absolute top-[530px] left-[231px] !w-[250px] !h-[640px] cursor-pointer" width={250} height={640} alt="south america map" onClick={() => {
                    handleChangeFocusClass('south');
                    toggleDrawer(false);
                }} />

                <Image id="europe" src={Europe} unoptimized priority className="absolute top-[0] left-[600px] !w-[380.74px] !h-[600px] cursor-pointer z-[1]" width={380.74} height={476.77} alt="europe map" onClick={() => {
                    handleChangeFocusClass('europe');
                    toggleDrawer(true);
                }} />
                <Image id="europe-focus" hidden src={EuropeFocus} unoptimized priority className="absolute top-[0] left-[605px] !w-[414px] !h-[600px] cursor-pointer z-[1]" width={380.74} height={476.77} alt="europe map" onClick={() => {
                    handleChangeFocusClass('europe');
                    toggleDrawer(false);
                }} />

                <Image id="africa" src={Africa} unoptimized priority className="absolute top-[424px] left-[640px] !w-[380.74px] !h-[711px] cursor-pointer z-[1]" width={380.74} height={476.77} alt="africa map" />
                {/* <Image id="africa-focus" hidden src={Africa} unoptimized priority className="absolute top-[424px] left-[640px] !w-[380.74px] !h-[711px] cursor-pointer" width={380.74} height={476.77} alt="africa map" onClick={() => handleChangeFocusClass('africa')} /> */}

                <Image id="asia" src={Asia} unoptimized priority className="absolute top-[72px] left-[740px] !w-[1150px] !h-[778px] cursor-pointer" width={1150} height={778} alt="asia map"/>
                <Image id="asia-focus" hidden src={AsiaFocus} unoptimized priority className="absolute top-[72px] left-[740px] !w-[1150px] !h-[778px] cursor-pointer" width={1150} height={778} alt="asia map"/>

                <Image id="blue-pin" src={BluePin} unoptimized priority className="absolute top-[234px] left-[1382px] cursor-pointer z-[1]" width={36} height={36} alt="blue pin 1 icon" onClick={() => {
                    handleChangeFocusClass('blue-pin');
                    toggleDrawer(true);
                }} />
                <Image id="blue-pin-focus" hidden src={FocusPin} unoptimized priority className="absolute top-[174px] left-[1320px] cursor-pointer z-[1]" width={164} height={164} alt="focus pin 1 icon" onClick={() => {
                    handleChangeFocusClass('blue-pin');
                    toggleDrawer(false);
                }} />
                <Image id="blue-pin-2" src={BluePin} unoptimized priority className="absolute top-[380px] left-[1335px] cursor-pointer z-[1]" width={36} height={36} alt="blue pin 2 icon" onClick={() => {
                    handleChangeFocusClass('blue-pin-2');
                    toggleDrawer(true);
                }} />
                <Image id="blue-pin-2-focus" hidden src={FocusPin} unoptimized priority className="absolute top-[324px] left-[1268px] cursor-pointer z-[1]" width={164} height={164} alt="focus pin 2 icon" onClick={() => {
                    handleChangeFocusClass('blue-pin-2');
                    toggleDrawer(false);
                }}/>

                <Image id="oceania" src={Oceania} unoptimized priority className="absolute top-[770px] left-[1308px] !w-[423px] !h-[398px] cursor-pointer" width={423} height={398} alt="oceania map" />

                <Drawer
                    anchor={currentWindow?.outerWidth > 1024 ? 'left' : 'bottom'}
                    open={openDrawer}
                    PaperProps={{ component: MyPaper }}
                    onClose={() => toggleDrawer(false)}
                    SlideProps={{ unmountOnExit: true }}
                    typeof="persistent"
                    className="overflow-hidden"
                >
                    <MyComponent />
                </Drawer>
            </div>
        )
            : <MapLoader/>
    );
}
