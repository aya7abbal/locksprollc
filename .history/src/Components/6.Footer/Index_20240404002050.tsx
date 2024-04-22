import Facebook from '../../assets/Images/Footer/facebook.svg'
import Instagram from '../../assets/Images/Footer/insta.svg'
import Yelp from '../../assets/Images/Footer/yelp.svg'
import Logo from "../../assets/Images/Logo/Logo.png"
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

interface socialLinks {
    imgSrc: any;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: Facebook,
        link: 'https://www.facebook.com/LocksmithAF',
        width: 10
    },
    {
        imgSrc: Instagram,
        link: 'https://www.instagram.com/locksprollc/',
        width: 14
    },
    {
        imgSrc: Yelp,
        link: 'https://www.yelp.com/biz/lockspro-llc-tampa-3',
        width: 14
    },

]

const products: ProductType[] = [
    {
        id: 1,
        section: "Company",
        link: ['About', 'Careers', 'Mobile', 'Blog', 'How we work?'],
    },
    {
        id: 2,
        section: "Contact",
        link: ['Help/FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Partners']
    }
    ,
    {
        id: 3,
        section: "More",
        link: ['Recipe', 'Chef', 'Food', 'Support']
    }
]

const Footer = () => {
    return (

        <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 align-center">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12 ">

                {/* COLUMN-1 */}

                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right ">
                        <img src={Logo} alt="logo" width={56} height={56} />
                        <a href="/" className='text-4xl font-semibold text-black ml-4'>
                            Emergency <br /> Lock & Key
                        </a>
                    </div>
                    <h3 className='text-textbl text-md font-medium mt-10 mb-4 lg:mb-16'> Get a quality service within a click. <br />  We have a team of techs waiting your for call. </h3>
                    <div className='flex gap-4'>

                        {socialLinks.map((items, i) => (
                        <a href={items.link} key={i}>
                            <div className="bg-white h-10 w-20 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-red-400">
                                <img src={items.imgSrc} alt={items.imgSrc} width={items.width} height={4} className="sepiaa" />
                            </div>
                        </a>
                        ))}

                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}


                {/* {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2">
                        <p className="text-black text-xl font-semibold mb-9">{product.section}</p>
                        <ul>
                            {product.link.map((link: string, index: number) => (
                                <li key={index} className='mb-5'>
                                    <Link href="/" className="text-footerlinks text-base font-normal mb-6 space-links">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))} */}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801340.7893762237!2d-83.80103459399531!3d28.139067606627886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x257b4770ba400b1%3A0x73272807e13b1ce1!2sLocksPro%20LLC!5e0!3m2!1sen!2seg!4v1712087001321!5m2!1sen!2seg" width="100%" height="450" style={{border:"0",width:"100%"}} allowFullScreen  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


            </div>

            {/* All Rights Reserved */}

            <div className='py-10 md:flex items-center justify-center border-t border-t-bordertop'>
                <h4 className='text-darkgrey text-sm text-center md:text-start font-normal'>@2023 - Emergency Lock & Key. All Rights Reserved.</h4>
                {/* <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-darkgrey text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                    <div className="h-5 bg-bordertop w-0.5"></div>
                    <h4 className='text-darkgrey text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                </div> */}
            </div>
        </div>
    )
}

export default Footer;
