import * as React from "react";
import Image from "next/image";
import paolocar from "/public/image/paolocar.png";
import Footer from '@/app/components/Footer/index';

export default function Bio() {
  return (
    <>
      <div className="flex flex-col">
        <Image
          src={paolocar} alt="Paolo Mauri"
          layout="responsive" // Adicione o layout desejado (intrinsic, fixed, responsive, fill)
        />
        <div className="flex flex-col self-center px-5 mt-20 max-w-full w-[873px] max-md:mt-10">
          <div className="text-6xl tracking-tighter text-white mix-blend-difference leading-[64px] max-md:max-w-full max-md:text-4xl">
            Paolo Mauri
          </div>
          <div className="mt-10 text-2xl tracking-widest leading-7 text-justify text-red-50 max-md:max-w-full">
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
      <Footer />
    </>
  );
}