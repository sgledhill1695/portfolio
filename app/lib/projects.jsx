import Website from "./website";
import { useInView } from "react-intersection-observer";

export default function Projects({navigation, setNavigation}){

    const websites = [
        {
            id: 1,
            imgSrc: "/images/audiophile.png",
            imgAlt: 'Image of Audiophile website',
            title: 'Audiophile',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore.',
            stack: [
                'Next JS',
                'Tailwind CSS'
            ],
            href: 'https://audiophile.sg-webdesign.co.uk/',
            codeHref: 'https://github.com/sgledhill1695/Audiophile'
        },
        {
            id: 2,
            imgSrc: "/images/invoice.png",
            imgAlt: 'Image of Invoice Web App',
            title: 'Invoicing Web App',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore.',
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
            id: 3,
            imgSrc: "/images/zebrafish.png",
            imgAlt: 'Image of the Zebrafish website',
            title: 'Zebrafish',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore.',
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
            id: 4,
            imgSrc: "/images/igpm.png",
            imgAlt: 'Image of the IGPM website',
            title: 'IGPM',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore.',
            stack: [
                'Next JS',
                'WordPress'
            ],
            href: 'https://igpm.sg-webdesign.co.uk/',
            codeHref: 'https://github.com/sgledhill1695/IGPM'

        },
        {
            id: 5,
            imgSrc: "/images/gdp.png",
            imgAlt: 'Image of the gdp application',
            title: 'Pharmaceutical Dispatch App',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore.',
            stack: [
                'Next JS',
                'Laravel',
                'MySQL',
                'Tailwind CSS'
            ],
            href: '',
            frontEndCode: 'https://github.com/sgledhill1695/Pharma-Dispatch-Frontend',
            backendCode: 'https://github.com/sgledhill1695/Pharma-Dispatch-Backend'

        },
        {
            id: 6,
            imgSrc: "/images/nightengale.png",
            imgAlt: 'Image of the King Street Surgery website',
            title: 'King Street Surgery',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus ipsum nisi dolore.',
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

            <h2 className='md:hidden text-[white] text-[15px] mb-[35px] tracking-widest'>PROJECTS</h2>

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
                    />
                ))};

            </section>

        </>

    )
}