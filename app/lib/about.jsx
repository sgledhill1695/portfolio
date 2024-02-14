'use client'

import { useInView } from 'react-intersection-observer';


export default function About({navigation, setNavigation}){

    const options = {
        threshold: 0.9,
        rootMargin: '0px',
        onChange: (inView, entry) => {

            if (inView) {

                const updatedNav = navigation.map(nav => {

                    if (nav.id === 1) {
                        nav.active = true;
                        return nav;
                    } else {
                        nav.active = false;
                        return nav;
                    }

                });

                setNavigation(updatedNav);

            } else {

                const updatedNav = navigation.map(nav => {

                    if (nav.id === 3) {
                        nav.active = false;
                        return nav;
                    } else {
                        return nav;
                    }

                });

                setNavigation(updatedNav);
            }
        }
    };

    const { ref, inView, entry } = useInView(options);




    return(
        <section ref={ref} className='mt-[50px] md:mt-[0px]'>

            <h2 className='md:hidden text-[white] text-[15px] mb-[30px] tracking-widest border-l-[4px] md:border-l-[0px] border-[#5EEAD4] ps-2 md:ps-0'>ABOUT</h2>

            <p className="text-[#C4C4C4] mb-5 main-text">
                Hi, I'm Sam. In 2021 I tried my hand at coding, and since then I haven't been able to stop. Today, I am a junior full-stack developer working within the NHS.
            </p>

            <p className="text-[#C4C4C4] mb-5 main-text">
                I currently design and build front-end websites and web applications for Dene Healthcare. My passion is taking a good design and making it reality.
                With over 2 years experience, my skillset includes HTML, CSS, JavaScript and PHP. I also have experience with a number of frameworks such as React, Next JS, and Laravel.
            </p>

            <p className="text-[#C4C4C4] mb-5 main-text">
                When I'm not turning 0 and 1's into websites, I'm often out walking in the Yorkshire Dales, biking, hanging out with friends or tinkering in the garage.         
            </p>

        </section>
    )
}