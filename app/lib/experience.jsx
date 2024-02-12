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
            <h2 className=' text-[white] text-[15px] tracking-widest mb-[30px]'>EXPERIENCE</h2>

            <section className="flex flex-col gap-[55px] md:gap-[40px]" ref={ref}>
    
                <div>
                    <div className="flex items-center">
                        <span className="text-[#828488] text-[14px]">2020 - Present -  </span>
                        <h3 className="text-[white] ms-2 sans">Junior Web Developer</h3>
                    </div>
    
                    <p className="pt-[12px] mid-white text-[14px] leading-[22px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta ratione unde error dolorum cumque eos a voluptatem, facilis sequi sed id similique nisi aliquid nobis praesentium ad minus natus?
                    </p>
    
                    <div className="flex items-center gap-[8px] pt-[15px] flex-wrap">
                        <Pill title={'Javascript'} />
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
                        <span className="text-[#828488] text-[14px]">2019 - 2020 -  </span>
                        <h3 className="text-[white] ms-2 sans">Digital Development</h3>
                    </div>
    
                    <p className="pt-[12px] mid-white text-[14px] leading-[22px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta ratione unde error dolorum cumque eos a voluptatem, facilis sequi sed id similique nisi aliquid nobis praesentium ad minus natus?
                    </p>
    
                    <div className="flex items-center gap-[8px] pt-[15px] flex-wrap">
                        <Pill title={'HTML'} />
                        <Pill title={'CSS'} />
                        <Pill title={'Javascript'} />
                        <Pill title={'WordPress'} />
                    </div>
                </div>
    
            </section>
    
            <a href="/downloads/Samuel-Gledhill-CV.pdf" target="_blank" className="flex items-center gap-2 sans-bold tracking-widest text-[13px]  text-[white] hover:text-[#5EEAD4] fill-[white] hover:fill-[#5EEAD4] mt-[35px]">
                <div className="hover:cursor-pointer uppercase">View Full Curriculum Vitae</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[12px] hover:cursor-pointer" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" /></svg>
            </a>
        </>
    )
}