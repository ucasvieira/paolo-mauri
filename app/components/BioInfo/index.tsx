'use client'

import * as React from "react";
import Image from "next/image";
import paolocar from "@/public/assets/paolocar.png";
import paolomuro from "@/public/assets/paolomuro.png";
import { useLogic } from "@/app/components/Header/useLogic";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export default function BioInfo() {
  const { currentWindow } = useLogic()

  return (
    <div className="flex flex-col w-full h-full relative bg-[#001116]">
      <div className="bg-gradient-to-b from-[#000] from-0% to-[#000] to-100% w-full h-[20%] opacity-50 mix-blend-color absolute top-0" />
      <Image
        src={paolocar}
        unoptimized
        alt="Paolo Mauri"
        layout="responsive"
        style={{
          minHeight: currentWindow?.innerWidth < 1024 ? 180 : '100%'
        }}
      />
      <div className="flex flex-col self-center max-w-full w-[873px] h-full relative mt-[-60px] mb-40">
        <Image
          src={paolomuro}
          alt="Paolo Mauri"
          layout="responsive"
          className="w-full h-auto"
        />
        <div className="p-[59px]">
          <div className="flex flex-col gap-[13px] text-6xl font-bold tracking-tighter text-white mix-blend-difference leading-[64px] max-md:max-w-full max-md:text-4xl items-center justify-between">
            <span className="w-full font-fonttitulo">Paolo Mauri</span>
            <div className="flex text-3xl space-x-8 ml-auto">
              <AiFillYoutube />
              <FaInstagram />
              <BsTwitterX />
              <FaFacebookF />
            </div>
          </div>
          <div className="mt-10 text-1xl font-bold tracking-widest leading-7 text-justify text-red-50 max-md:max-w-full">
            È un giornalista pubblicista milanese che si occupa di analisi
            nell’ambito delle Forze Armate, della Difesa, di politica estera e
            geopolitica. Nato a Milano nel 1978 scrive per InsideOver –
            ilGiornale.it ed è autore presso Rivista Aeronautica, il periodico
            ufficiale dell’Aeronautica Militare Italiana e anche per Rivista
            Marittima.
            <br />
            <br />
            Ha un diploma in previsione del rischio e analisi di scenario presso
            lo IAI, ha studiato geopolitica e sicurezza globale presso l’ISPI e
            intelligence, sicurezza nazionale e analisi OSINT presso l’università
            LUMSA. Ha conseguito inoltre il diploma di fondamenti di Modelling and
            Simulation presso il NATO M&S Centre of Excellence.
            <br />
            <br />
            Grazie alla sua esperienza pluriennale è in grado di fornire una
            visione approfondita e dettagliata degli eventi che caratterizzano
            questi ambiti.
            <br />
            La sua attenzione per i dettagli e la sua capacità di analisi gli
            permettono di cogliere gli aspetti più rilevanti dei temi che tratta,
            offrendo al pubblico un punto di vista originale e interessante.
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
