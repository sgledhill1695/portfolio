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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate.
            </p>

            <p className="text-[#C4C4C4] mb-5 main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate.
            </p>

            <p className="text-[#C4C4C4] main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate.
            </p>

        </section>
    )
}