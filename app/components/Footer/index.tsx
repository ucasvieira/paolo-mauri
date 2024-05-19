"use client";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from "@mantine/form";

export default function Footer() {
    const form = useRef();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (form.current) {
            emailjs
             .sendForm('paolo-mauri', 'template_f3g963q', form.current, {
                publicKey: '5awoUKFE1AJaRGIGh',
              })
             .then(
                () => {
                  console.log('SUCCESS!');
                  alert('Thank you for reaching contact!✅');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                  alert('Something went wrong, please try again later❌');
                },
              );
          }
        };

    return (
        <div className="flex flex-col justify-center bg-gradient-to-b from-[#0C2120] to-[#07252F]">
            <div className="flex flex-col items-center px-4 pb-8 rounded-[45px_45px_0px_0px] max-md:mr-1 max-md:max-w-full">
                <div className="mt-16 max-w-full w-[800px] max-md:mt-8">
                    <div className="flex gap-4 max-md:flex-col max-md:gap-2">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-xl text-red-50 max-md:mt-8 max-md:max-w-full">
                                <div className="font-fonttitulo -mr-px text-[#FDF4F1] text-5xl font-extrabold tracking-tighter text-left mix-blend-difference leading-[48px] max-md:max-w-full max-md:text-3xl">
                                    Parla con me
                                </div>
                                <div className="mt-5 text-white max-md:max-w-full">
                                    Se sei interessato a collaborazioni, interviste o
                                    semplicemente vuoi discutere argomenti rilevanti, sono aperto
                                    al dialogo. Utilizza il modulo sottostante per contattarci o
                                    connetterti tramite i social media.
                                    <br />
                                    Grazie!
                                </div>
                                <div className="self-start mt-12 max-md:hidden max-md:mt-8">
                                    Seguimi sui social
                                    <div className="flex space-x-6 text-2xl pt-3 ">
                                        <AiFillYoutube />
                                        <FaInstagram />
                                        <BsTwitterX />
                                        <FaFacebookF />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-4 w-6/12 max-md:ml-0 max-md:w-full">
                            <form className="flex flex-col grow text-xl font-bold tracking-wide text-red-50 max-md:mt-8 max-md:max-w-full" ref={form} onSubmit={sendEmail}>
                                <div className="flex gap-4 px-6 py-5 whitespace-nowrap rounded-2xl border border-teal-400 border-solid max-md:flex-wrap max-md:px-4">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0344c8d32177695bfeb2efa032781006fbd69545545b8431d5ab0bbb01638f8"
                                        className="shrink-0 self-start aspect-[0.9] w-[16px]"
                                    />
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Nome"
                                        className="flex-auto bg-transparent border-none outline-none text-white"
                                        
                                    />
                                </div>
                                <div className="flex gap-4 px-6 py-5 mt-3 whitespace-nowrap rounded-2xl border border-teal-400 border-solid max-md:flex-wrap max-md:px-4">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb7bc53cc0c94900f2fa348a13d8edf9707255db6b75df699a22224d120f9532"
                                        className="shrink-0 self-start w-4 aspect-[1.25]"
                                    />
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Email"
                                        className="flex-auto bg-transparent border-none outline-none text-white"
                                        
                                    />
                                </div>
                                <div className="flex gap-4 items-start px-6 pt-5 pb-16 mt-3 rounded-2xl border border-teal-400 border-solid max-md:flex-wrap max-md:px-4">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/937cd75b760a3e00ebfe91a498fd77c968f12ddba8fc5905f5f721bebc72126c"
                                        className="shrink-0 aspect-[1.59] w-[17px]"
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Lascia qui il tuo messaggio"
                                        className="flex-auto bg-transparent border-none outline-none text-white h-full"
                                       
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="mt-3 px-6 py-2 rounded-2xl bg-teal-400 text-white"
                                    value="Send"
                                >
                                    ENVIARE
                                </button>
                            </form>
                            <div className="self-center mt-12 md:hidden md:self-center justify-self-center text-center">
                                Seguimi sui social
                                <div className="flex justify-center space-x-6 text-2xl">
                                    <AiFillYoutube />
                                    <FaInstagram />
                                    <BsTwitterX />
                                    <FaFacebookF />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-xs font-bold text-[#F9DBD0] tracking-[1.8px] max-md:mt-8">
                    2024 &copy; &reg; PAOLO MAURI
                </div>
            </div>
        </div>


    );
}