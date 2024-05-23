'use client'

import Image from 'next/image';
import square from '@/public/assets/square.svg'
import squareClicked from '@/public/assets/square-clicked.svg'
import row from '@/public/assets/row.svg'
import rowClicked from '@/public/assets/row-clicked.svg'
import grid from '@/public/assets/grid.svg'
import gridClicked from '@/public/assets/grid-clicked.svg'
import CloseIcon from '@/public/assets/close-white-icon.svg'
import { useLogic } from './useLogic';
import { useLogic as headerUseLogic } from '@/app/components/Header/useLogic';
import { LanguageProps } from '../PodcastsList';
import { ModalProvider } from 'styled-react-modal';
import { StyledModalZoom } from './styles';

export default function GalleryImages({ language }: LanguageProps){
    const { galleryImages, layoutType, openZoom, photoZoom, handleOpenZoom, handleLayout } = useLogic({language})
    const { currentWindow } = headerUseLogic()
    const isBig = (layoutType === 'square' || currentWindow?.innerWidth < 1024)

    return (
        <div className='flex flex-col pt-[250px] pb-[125px] relative px-[20%] items-center justify-center w-full h-[100%] bg-[#061E26]'>
            <div className='flex w-full items-end justify-between pb-[55px]' style={{
                placeContent: currentWindow?.innerWidth < 1024 ? 'center' : 'space-between'
            }}>
                <h1 className="font-extrabold" style={{
                        fontSize: currentWindow?.innerWidth < 1024 ? '32px' : '64px',
                        textAlign: currentWindow?.innerWidth < 1024 ? 'center' : 'left',
                        maxWidth: currentWindow?.innerWidth < 1024 ? '100%' : '37%',
                        overflowWrap: 'break-word',
                        lineHeight: '51px'
                    }}
                >
                    La Mia Galleria
                </h1>
                {currentWindow?.innerWidth >= 1024  &&
                    <div className='flex gap-[31px] z-50'>
                        {layoutType === 'grid' ?
                            <button>
                                <Image src={gridClicked} alt={'Full'}/>
                            </button>
                        :
                            <button onClick={() => handleLayout('grid')}>
                                <Image src={grid} alt={'Full'}/>
                            </button>
                        }      
                        {layoutType === 'row' ?
                            <button>
                                <Image src={rowClicked} alt={'Full'} />
                            </button>
                        :
                            <button onClick={() => handleLayout('row')}>
                                <Image src={row} alt={'Full'} />
                            </button>
                        }
                        {layoutType === 'square' ?
                            <button>
                                <Image src={squareClicked} alt={'Full'} />
                            </button>
                        :
                            <button onClick={() => handleLayout('square')}>
                                <Image src={square} alt={'Full'} />
                            </button>
                        }
                    </div>
                }
            </div>
            <div className='flex items-center flex-wrap gap-[21px] w-full' style={{
                display: 'grid',
                gridTemplateColumns:  layoutType === 'grid' && !isBig ? 'repeat(5, 1fr)' : '1fr',
                gridTemplateRows:  layoutType === 'row' ? 'repeat(5, 1fr)' : '1fr',
            }}>
                {galleryImages?.map(photo => (
                    <div key={photo.url} className='flex items-center relative' style={{
                        width: layoutType === 'row' ? '100%' : 'auto',
                        height: layoutType === 'row' ? '79px' : isBig ? '100%' :'auto',
                        background:  layoutType === 'row' ? 'linear-gradient(#E7F3F8, #9AA7AB)' : 'transparent',
                        borderRadius:  layoutType === 'row' ? '23px' : isBig ? '10px' : '0',
                    }}>
                        <Image unoptimized src={photo.url} width={300} height={300} alt='gallery image' style={{
                            width: layoutType === 'row' ? '80px' : isBig ? '100%' : 'auto',
                            height: layoutType === 'row' ? '79px' : isBig ? '100%' : 'auto',
                            borderTopLeftRadius: layoutType !== 'row' ? '10px' : '23px',
                            borderBottomLeftRadius: layoutType !== 'row' ? '10px' : '23px',
                            borderTopRightRadius: layoutType !== 'row' ? '10px' : '0',
                            borderBottomRightRadius: layoutType !== 'row' ? '10px' : '0',
                            objectFit: 'contain'
                        }} 
                        onClick={() => handleOpenZoom(photo.url)}
                    />
                        {layoutType === 'row' && <a className='ml-4 text-[#313131]'>{photo?.description}</a>}
                    </div>
                ))}
            </div>

            <ModalProvider>
                <StyledModalZoom
                    isOpen={openZoom}
                    onBackgroundClick={() => handleOpenZoom(photoZoom)}
                    onEscapeKeydown={() => handleOpenZoom(photoZoom)}>
                    <Image src={CloseIcon} width={40} height={40} alt='close icon' style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        margin: 40,
                        cursor: 'pointer',
                        zIndex: 50
                    }} onClick={() => handleOpenZoom(photoZoom)}/>
                        <Image unoptimized src={photoZoom} width={300} height={300} alt='gallery image' style={{
                            width: '100%',
                            height: '100%',
                            padding: '80px',
                            objectFit: 'contain'
                        }}/>
                </StyledModalZoom>
            </ModalProvider>
        </div>
    );
}