'use client'

import { useState } from 'react';

import Image from 'next/image';
import Pill from './pill';

export default function Website({imgSrc, imgAlt, title, content, stack, href, codeHref, frontendCode, backendCode}){

    const [hovered, setHovered] = useState(false);
    const [codeHovered, setCodeHovered] = useState(false);
    const [frontendHovered, setFrontendHovered] = useState(false);
    const [backendHovered, setBackendHovered] = useState(false);


    return(
        <>
            <div className="flex flex-col sm:flex-row gap-[12px]">
                <a href={href} target="_blank">
                    <Image
                        src={imgSrc}
                        width={400}
                        height={400}
                        alt={imgAlt}
                        className={`${hovered ? 'border-[#5EEAD4]' : 'border-[#C4C4C4]'} border-2  rounded-sm shrink-0 max-w-[220px] md:max-w-[125px] hover:cursor-pointer`}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}

                    />
                </a>

                <div>
                    <a href={href}>
                        <h3 className="ms-2 sans flex items-center gap-2 relative">
                            <span 
                                className={`${hovered ? 'text-[#5EEAD4]' : 'text-[white]'} hover:cursor-pointer`} 
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                {title}
                            </span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`${hovered ? 'fill-[#5EEAD4] svg-move' : 'fill-[white]'} w-[10px] hover:cursor-pointer`}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                viewBox="0 0 384 512"><path d="M352 128c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l146.7 0L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 205.3 288 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224z" />
                            </svg>
                        </h3>
                    </a>

                    <p className='text-[#C4C4C4] ms-2 text-[14px]'>
                        {content}
                    </p>

                    <p className='ms-2 text-[#C4C4C4] mt-2 text-[14px] flex gap-2 items-center mb-2'>

                        {codeHref && (
                            <>
                                <a href={codeHref} target="_blank"
                                    onMouseEnter={() => setCodeHovered(true)}
                                    onMouseLeave={() => setCodeHovered(false)}
                                    className={`${codeHovered ? 'text-[#5EEAD4]' : 'text-[#5EEAD4]'} hover:cursor-pointer underline`}
                                >
                                    See the code
                                </a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${codeHovered ? 'fill-[#5EEAD4] svg-move' : 'fill-[#5EEAD4]'} w-[8px]`}
                                    viewBox="0 0 384 512"><path d="M352 128c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l146.7 0L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 205.3 288 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224z" />
                                </svg>
                            </>
                        )}

                        {frontendCode && (
                            <>
                                <a href={frontendCode} target="_blank"
                                    onMouseEnter={() => setFrontendHovered(true)}
                                    onMouseLeave={() => setFrontendHovered(false)}
                                    className={`${frontendHovered ? 'text-[#5EEAD4]' : 'text-[#5EEAD4]'} hover:cursor-pointer underline`}
                                >
                                    Frontend code
                                </a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${frontendHovered ? 'fill-[#5EEAD4] svg-move' : 'fill-[#5EEAD4]'} w-[8px]`}
                                    viewBox="0 0 384 512"><path d="M352 128c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l146.7 0L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 205.3 288 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224z" />
                                </svg>

                                <a href={backendCode} target="_blank"
                                    onMouseEnter={() => setBackendHovered(true)}
                                    onMouseLeave={() => setBackendHovered(false)}
                                    className={`${backendHovered ? 'text-[#5EEAD4]' : 'text-[#5EEAD4]'} hover:cursor-pointer underline`}
                                >
                                    Backend code
                                </a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${backendHovered ? 'fill-[#5EEAD4] svg-move' : 'fill-[#5EEAD4]'} w-[8px]`}
                                    viewBox="0 0 384 512"><path d="M352 128c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l146.7 0L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 205.3 288 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224z" />
                                </svg>

                            </>
                        )}

                    </p>

                    <div className='flex pt-2 flex-wrap gap-x-2 gap-y-2'>
                        {stack.map(s => (
                            <Pill key={s} title={s} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}