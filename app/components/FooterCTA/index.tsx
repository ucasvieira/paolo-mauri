'use client'

import React from 'react';
import { useLogic } from '../Header/useLogic';

export default function FooterCTA() {
    const { currentWindow } = useLogic()

    return (
        <div className="flex w-full items-center justify-center bg-[#061E26] flex-wrap pb-[82px] gap-[4px] font-['Helvetica'] text-justify px-[39px]" style={{
            display: currentWindow?.innerWidth < 1024 ? 'block' : 'flex'
        }}>
            <span> Per acquistare una foto dalla nostra gallery, contattaci tramite </span>
            <span className="text-[#00FFB2] font-['Helvetica']">WhatsApp</span>
            <span> o </span> 
            <span className="text-[#00FFB2] font-['Helvetica']">e-mail</span>
        </div>
    );
}