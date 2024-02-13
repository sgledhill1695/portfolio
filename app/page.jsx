'use client'

import { useState } from "react";

import Navigation from "./lib/navigation";
import LeftSideContent from "./lib/leftSideContent";
import Stack from "./lib/stack";
import About from "./lib/about";
import Experience from "./lib/experience";
import Projects from "./lib/projects";

export default function Home(){

    const [navigation, setNavigation] = useState([
        { id: 1, title: 'ABOUT', active: false, href: '#about' },
        { id: 2, title: 'EXPERIENCE', active: false, href: '#experience' },
        { id: 3, title: 'PROJECTS', active: false, href: '#projects' },
    ]);

    const handleActive = (id) => {

        const updatedNav = navigation.map(nav => {

            if (nav.id === id) {
                nav.active === true ? nav.active = false : nav.active = true;
                return nav
            } else {
                nav.active = false;
                return nav;
            };
        });

        setNavigation(updatedNav);
    };

    return (
        <>
            <main className="max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-x-[60px] m-auto px-[7%] sm:px-[2%] xl:px-[0%]">

                <div className="col-span-1 flex flex-col md:sticky md:top-0 mb-[20px] sm:mb-[50px] md:mb-[0px] pt-[30px] md:pt-[140px] md:h-[100vh]">

                    <div className="flex flex-col gap-[5px]">
                        <LeftSideContent/>
                        <Navigation
                            navigation={navigation}
                            handleActive={handleActive}
                            setNavigation={setNavigation}
                        />
                    </div>

                    <div className="text-[white] mt-auto md:pb-[170px]">
                        <Stack/>
                    </div>

                </div>


                <div className="col-span-1">

                    <div className="md:pt-[140px]" id="about">
                        <About 
                            navigation={navigation}
                            setNavigation={setNavigation}

                        />
                    </div>

                    <div className="pt-[50px] md:pt-[100px]" id="experience">
                        <Experience
                            navigation={navigation}
                            setNavigation={setNavigation}
                        />
                    </div>

                    <div className="pt-[50px] md:pt-[100px]" id="projects">
                        <Projects
                            navigation={navigation}
                            setNavigation={setNavigation}
                        />
                    </div>
                    
                </div>
                
            </main>
        </>
    )
}