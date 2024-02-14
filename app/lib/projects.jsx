import Website from "./website";
import { useInView } from "react-intersection-observer";

export default function Projects({navigation, setNavigation}){

    const websites = [
        {
            id: 1,
            imgSrc: "/images/audiophile.png",
            imgAlt: 'Image of Audiophile website',
            title: 'Audiophile',
            content: 'A shop front-end to advertise and sell audio peripherals.',
            stack: [
                'Next JS',
                'Tailwind CSS'
            ],
            href: 'https://audiophile.sg-webdesign.co.uk/',
            codeHref: 'https://github.com/sgledhill1695/Audiophile'
        },
        {
            id: 2,
            imgSrc: "/images/gdp.png",
            imgAlt: 'Image of the gdp application',
            title: 'Pharmaceutical Dispatch Web App',
            content: 'Developed for Dene Healthcare. This web application uses a weather API to check if the temperature at a  delivery location is safe for the delivery of pharmaceuticals. The back-end is an API built in Laravel.',
            stack: [
                'Next JS',
                'Laravel',
                'MySQL',
                'Tailwind CSS'
            ],
            href: '',
            videoEmbed: true,
            embed: <iframe width="100%" height="315" src="https://www.youtube.com/embed/RoNZtDB6P0A?si=oZxmaso-cG89ASb_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        },

        {
            id: 3,
            imgSrc: "/images/invoice.png",
            imgAlt: 'Image of Invoice Web App',
            title: 'Invoicing Web App',
            content: 'A web application for managing invoices. Implements full CRUD, loading skeletons and also includes a light and dark mode. The back-end is an API built with Node JS, Express and Mongoose.',
            stack: [
                'Next JS',
                'Node JS',
                'Mongoose',
                'Express',
                'Mongo DB'
            ],
            href: 'https://invoice.sg-webdesign.co.uk/',
            frontEndCode: 'https://github.com/sgledhill1695/Invoice-app-frontend',
            backendCode: 'https://github.com/sgledhill1695/Invoice-app-backend',
        },
        {
            id: 4,
            imgSrc: "/images/zebrafish.png",
            imgAlt: 'Image of the Zebrafish website',
            title: 'Zebrafish',
            content: 'My first project as a junior developer. A website to advertise the digital offering at Dene Healthcare.',
            stack: [
                'HTML',
                'CSS',
                'Javascript',
                'PHP',
                'Bootstrap'
            ],
            href: 'https://zebrafishwebdesigns.co.uk',
            codeHref: 'https://github.com/sgledhill1695/Zebrafish'

        },

        {
            id: 5,
            imgSrc: "/images/igpm.png",
            imgAlt: 'Image of the IGPM website',
            title: 'IGPM',
            content: 'A website I am currently building for the Institute of General Practice Management. Uses a headless WordPress API to pull through some of the content.',
            stack: [
                'Next JS',
                'WordPress'
            ],
            href: 'https://igpm.sg-webdesign.co.uk/',
            codeHref: 'https://github.com/sgledhill1695/IGPM'

        },
        {
            id: 6,
            imgSrc: "/images/nightengale.png",
            imgAlt: 'Image of the King Street Surgery website',
            title: 'King Street Surgery',
            content: 'A website for a GP surgery, put together with WordPress.',
            stack: [
                'WordPress',
            ],
            href: 'https://kingstreetsurgery.co.uk/',
        },




    ];

    const options = {
        threshold: 0.3,
        rootMargin: '0px',
        onChange: (inView, entry) => { 

            if(inView){

                const updatedNav = navigation.map(nav => {

                    if(nav.id === 3){
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

            <h2 className='text-[white] text-[15px] mb-[30px] tracking-widest border-l-[4px] md:border-l-[0px] border-[#5EEAD4]  ps-2 md:ps-0'>PROJECTS</h2>

            <section className="flex flex-col md:pb-[80px] gap-[60px]" ref={ref}>

                {websites.map(site => (
                    <Website
                        key={site.id}
                        imgSrc={site.imgSrc}
                        imgAlt={site.imgAlt}
                        title={site.title}
                        content={site.content}
                        stack={site.stack}
                        href={site.href}
                        codeHref={site.codeHref}
                        frontendCode={site.frontEndCode}
                        backendCode={site.backendCode}
                        videoEmbed={site.videoEmbed}
                        embed={site.embed}
                    />
                ))};

            </section>

        </>

    )
}