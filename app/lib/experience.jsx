import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";

import Pill from "./pill"

export default function Experience({navigation, setNavigation}){

    const options = {
        threshold: 1,
        rootMargin: '0px',
        onChange: (inView, entry) => {

            if (inView) {

                const updatedNav = navigation.map(nav => {

                    if (nav.id === 2) {
                        nav.active = true;
                        return nav;
                    } else {
                        nav.active = false;
                        return nav;
                    }

                });

                setNavigation(updatedNav);
            }
        }
    };

    const { ref, inView, entry } = useInView(options);

    
    return(
        <>
            <h2 className=' text-[white] text-[15px] mb-[30px] tracking-widest border-l-[4px] md:border-l-[0px] border-[#5EEAD4]  ps-2 md:ps-0'>EXPERIENCE</h2>

            <section className="flex flex-col gap-[55px] md:gap-[40px]" ref={ref}>
    
                <div>
                    <div className="flex items-center">
                        <span className="text-[#828488] text-[14px]">2022 - Present -  </span>
                        <h3 className="text-[white] ms-2 sans">Junior Web Developer</h3>
                    </div>

                    <p className="text-[#828488] text-[14px]">Dene Healthcare</p>

                    <p className="pt-[12px] mid-white text-[14px] leading-[22px]">
                        Build and style front-end websites for clients within the NHS. Liaise with clients to achieve their desired website functionality. Develop and maintain web applications that help streamline day to day operations accross various sectors within the organisation.
                    </p>
    
                    <div className="flex items-center gap-[8px] pt-[15px] flex-wrap">
                        <Pill title={'JavaScript'} />
                        <Pill title={'Next JS'}/>
                        <Pill title={'PHP'} />
                        <Pill title={'Laravel'} />
                        <Pill title={'HTML'} />
                        <Pill title={'CSS'} />
                        <Pill title={'WordPress'} />
                        <Pill title={'MySQL'} />
                    </div>
                </div>
    
    
                <div>
                    <div className="flex items-center">
                        <span className="text-[#828488] text-[14px]">2021 - 2022 -  </span>
                        <h3 className="text-[white] ms-2 sans">Digital Development</h3>
                    </div>
                    
                    <p className="text-[#828488] text-[14px]">Dene Healthcare</p>

    
                    <p className="pt-[12px] mid-white text-[14px] leading-[22px]">
                        Set up and construct client WordPress websites. Manage and maintain WordPress websites for over 150 clients. Work with clients to implement changes and improvements to WordPress websites. Set up and manage client web servers. Learn and develop skills with HTML, CSS and numerous programming languages.
                    </p>
    
                    <div className="flex items-center gap-[8px] pt-[15px] flex-wrap">
                        <Pill title={'HTML'} />
                        <Pill title={'CSS'} />
                        <Pill title={'JavaScript'} />
                        <Pill title={'WordPress'} />
                    </div>
                </div>
    
            </section>
    
            <a href="/downloads/samuel-gledhill-cv.pdf" target="_blank" className="flex items-center gap-2 sans-bold tracking-widest text-[13px]  text-[white] hover:text-[#5EEAD4] fill-[white] hover:fill-[#5EEAD4] mt-[35px]">
                <div className="hover:cursor-pointer uppercase">View Full Curriculum Vitae</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[12px] hover:cursor-pointer" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" /></svg>
            </a>
        </>
    )
}