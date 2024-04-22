"use client"
// import Link from 'next/link';
// import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fade } from "react-awesome-reveal";
import Residential from '../../assets/Images/Services/featureOne.jpg'


interface cardDataType {
    imgSrc: any;
    heading: string;
    subheading: string;
    link: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: Residential,
        heading: "Residential Lockout",
        subheading: "We provide fast & excellent residential locksmith services that will ensure you feel safe at home.",
        link: 'Learn more'
    },
    {
        imgSrc: '/images/Services/featureTwo.jpg',
        heading: "Automotive",
        subheading: "We carry the best automotive tools and programming softwares to fix all types of car keys & locks.",
        link: 'Learn more'
    },
    {
        imgSrc: '/images/Services/featureThree.jpg',
        heading: "Commercial",
        subheading: "We provide locksmith services for offices & commercial buildings with our locksmith expertise.",
        link: 'Learn more'
    }

]

const Services = () => {
    return (


        <div>
            <div className='mx-auto max-w-7xl py-20 px-6' id="services-section">
                <div className='text-center mb-14' >
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className='text-pink text-lg font-normal mb-3 ls-51 uppercase'>Our Services</h3>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Locked Out? Need a new Key? <br /> We&apos;ve got you covered!</p>
                    </Fade>
                </div>

{    console.log(items.imgSrc)
}
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-y-20  gap-x-5 mt-32 pt-5 service-container'>
                    <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                        {cardData.map((items, i) => (
                            <div className='card-b p-8 relative rounded-3xl my-5' key={i}>
                                <div className='work-img-bg rounded-full grid sm:grid-cols-1 absolute top-[-50%] sm:top-[-50%]  md:top-[-55%] lg:top-[-45%] left-[0%] sm:right-[-1%]'>
                                    <img src={items.imgSrc} alt={items.imgSrc.src} width={500} height={500} style={{borderRadius:"50px", width:"500px", height:"200px", margin:"auto"}}/>
                                </div>
                                <h3 className='text-2xl text-black font-semibold text-center mt-16 '>{items.heading}</h3>
                                <p className='text-lg font-normal pt-3 text-black text-center text-opacity-50'>{items.subheading}</p>
                                <div className='flex items-center justify-center'>
                                    {/* <Link href='/'><p className='text-center text-lg font-medium text-pink mt-2 hover-underline'>{items.link}<ChevronRightIcon width={20} height={20} /></p></Link> */}
                                </div>
                                

                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>

    )
}

export default Services;
