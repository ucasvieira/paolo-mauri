"use client";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import React, { useRef } from 'react';
import Image from "next/image";
import emailjs from '@emailjs/browser';
import ProfileIcon from '@/public/assets/profile-icon.svg'
import MailIcon from '@/public/assets/mail-icon.svg'
import TextareIcon from '@/public/assets/textare-icon.svg'
import { useLogic } from "../Header/useLogic";

export default function Footer() {
    const form = useRef();
    const { currentWindow } = useLogic()

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (form.current) {
            emailjs
             .sendForm('paolo-mauri', 'template_f3g963q', form.current, {
                publicKey: '5awoUKFE1AJaRGIGh',
              })
             .then(
                () => {
                  alert('Thank you for reaching contact!✅');
                },
                (error) => {
                  console.error('FAILED...', error.text);
                  alert('Something went wrong, please try again later❌');
                },
              );
          }
        };

    return (
        <div className="flex relative flex-col justify-end bg-gradient-to-b from-[#0C2120] to-[#07252F] h-full w-full
            before:content-[''] before:absolute before:bg-transparent before:bottom-[-82px] before:h-[82px]
            before:left-0 before:top-[-82px] before:w-[25px] before:rounded-bl-[41px] before:shadow-[0_20px_0_0_#0C2120]
            after:content-[''] after:absolute after:bg-transparent after:bottom-[-82px] after:h-[82px]
            after:right-0 after:top-[-82px] after:w-[25px] after:rounded-br-[41px] after:shadow-[0_20px_0_0_#0C2120]
        ">
            <div className="flex flex-col items-center px-4 pb-8 rounded-[45px_45px_0px_0px] max-md:px-[46px] max-md:max-w-full">
                <div className="mt-16 max-w-full w-[800px] max-md:mt-8">
                    <div className="flex gap-4 max-md:flex-col max-md:gap-2">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-xl text-red-50 max-md:mt-8 max-md:max-w-full">
                                <div className="font-fonttitulo -mr-px text-[#FDF4F1] text-5xl font-extrabold tracking-tighter 
                                    text-left mix-blend-difference leading-[48px] max-md:max-w-full max-md:text-3xl max-md:[text-align-last:center]">
                                    Parla con me
                                </div>
                                <div className="mt-5 text-[#FDF4F1] max-md:max-w-full">
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
                            <form className="flex flex-col grow text-xl font-bold tracking-wide text-red-50 max-md:mt-8 max-md:max-w-full" ref={form as any} onSubmit={sendEmail}>
                                <div className="flex gap-4 items-center px-6 py-5 whitespace-nowrap rounded-2xl border border-teal-400 border-solid max-md:px-4 shadow-[0_0_7px_-1px_#00FFB2]" style={{
                                    borderRadius: currentWindow?.innerWidth < 1024 ? '33px' : '20px'
                                }}>
                                    <Image
                                        src={ProfileIcon}
                                        width={10}
                                        height={10}
                                        alt="profile icon"
                                        className="shrink-0 aspect-[0.9] w-[16px]"
                                    />
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Nome"
                                        className="flex-auto bg-transparent border-none outline-none text-[#FDF4F1]"
                                        
                                    />
                                </div>
                                <div className="flex gap-4 items-center px-6 py-5 mt-3 whitespace-nowrap rounded-2xl border border-teal-400 border-solid max-md:px-4 shadow-[0_0_7px_-1px_#00FFB2]" style={{
                                    borderRadius: currentWindow?.innerWidth < 1024 ? '33px' : '20px'
                                }}>
                                    <Image
                                        src={MailIcon}
                                        width={9}
                                        height={9}
                                        alt="profile icon"
                                        className="shrink-0 w-4 aspect-[1.25]"
                                    />
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Email"
                                        className="flex-auto bg-transparent border-none outline-none text-[#FDF4F1]"
                                        
                                    />
                                </div>
                                <div className="flex gap-4 items-start px-6 pt-5 pb-16 mt-3 rounded-2xl border border-teal-400 border-solid max-md:px-4 shadow-[0_0_7px_-1px_#00FFB2]" style={{
                                    borderRadius: currentWindow?.innerWidth < 1024 ? '33px' : '20px'
                                }}>
                                    <Image
                                        src={TextareIcon}
                                        width={9}
                                        height={9}
                                        alt="profile icon"
                                        className="shrink-0 w-[17px] pt-[8px]"
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Lascia qui il tuo messaggio"
                                        className="flex-auto bg-transparent border-none outline-none text-[#FDF4F1] h-full resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="mt-3 px-6 py-2 rounded-2xl w-full flex justify-end text-[#FDF4F1]"
                                    value="Send"
                                >
                                    INVIARE
                                </button>
                            </form>
                            <div className="flex flex-col self-center mt-12 md:hidden md:self-center justify-self-center text-center gap-[16px]">
                                Seguimi sui social
                                <div className="flex justify-center space-x-6 text-2xl">
                                    <AiFillYoutube fontSize={24}/>
                                    <FaInstagram fontSize={24}/>
                                    <BsTwitterX fontSize={24}/>
                                    <FaFacebookF fontSize={24}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-xs font-bold text-[#F9DBD0] tracking-[1.8px] max-md:mt-8 opacity-[30%]">
                    2024 &copy; &reg; PAOLO MAURI
                </div>
            </div>
        </div>
    );
}