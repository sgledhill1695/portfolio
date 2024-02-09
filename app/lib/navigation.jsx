'use client'

import { useState } from "react";

export default function Navigation({navigation, handleActive}){

    const [hovered, setHovered] = useState(false);
    
    return (
        <ul className="hidden md:flex flex-col gap-[8px] navigation">
            {navigation.map(nav => (
                <li 
                    key={nav.id} 
                    className={`${nav.active ? 'text-[white]' : 'text-[#787878]'} `}
                >
                    <a href={nav.href} className="flex items-center gap-[10px] md:max-w-[300px]">
                        <hr className={`${nav.active ? 'nav-active border-[#5EEAD4]' : 'nav-unactive border-[#787878]'}  border-1`}/>
                        <span className="text-[13px] tracking-widest hover:text-white hover:cursor-pointer">
                            {nav.title}
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    )
}