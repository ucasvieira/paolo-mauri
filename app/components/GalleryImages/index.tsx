import { urlFor } from '@/paolo-mauri/client';
import { getByLang, getObjects } from '@/paolo-mauri/sanity.utils';
import { useState } from 'react';
import Image from 'next/image';
import check from '@/public/assets/Check Square.png'
import list from '@/public/assets/List 3.png'
import grid from '@/public/assets/Grid.png'


  
export default async function GalleryImages(){
    const gallery = await getObjects('gallery');
    
    return (
        <>
        <button>
            <Image src={check} alt={'Full'}></Image>
        </button>
        <button>
            <Image src={list} alt={'Full'}></Image>
        </button>
        <button>
            <Image src={grid} alt={'Full'}></Image>
        </button>
        <ul className='space-y-4'>
            {gallery?.map(photo => (
                <li key={photo._id} className='flex items-center'>
                    <Image unoptimized src={urlFor(photo.image[0]).width(200).url()} width={300} height={300} alt='' />
                    <a className='ml-4'>{photo?.title?.current}</a>
                </li>
            ))}
        </ul>
        
        </>    
    
    );
}