import React from 'react';
import logo from "/public/icons/logo.png";
import mail from "/public/svgs/mail.svg";
import telephone from "/public/svgs/telephone.svg";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

    const links = ["home", "about us", "bookings", "blog"];
    const legal = ["terms of use", "privacy policy", "cookie policy"];
    const product = ["take tour", "live chat", "reviews"];

    return (
        <footer className='pt-10 p-5 overflow-hidden font-medium flex justify-between md:justify-evenly flex-wrap gap-x-10 flex-shrink-0 mx-auto'>
            <div className="row1 mt-10">
                <Image src={logo} alt={"logo"} width={120} height={120} unoptimized={true} />
                <div className='mt-5 flex flex-col gap-y-2'>
                    <span className='flex gap-2 text-sm md:text-base'><Image alt={"mail"} src={mail} width={24} height={24} className='' />Help@Frybix.com</span>
                    <span className='flex gap-2 text-sm md:text-base'><Image alt={"telephone"} src={telephone} width={24} height={24} className='' />+1234 567 89</span>
                </div>
            </div>

            <div className="row2 mt-10">
                <h3 className='text-lg lg:text-2xl xl:text-3xl capitalize'>Links</h3>
                <div className='mt-5 text-sm md:base flex flex-col gap-y-3'>
                    {
                        links.map((link, index)=><Link key={index} href={"#"} className='capitalize hover:text-theme hover:underline duration-300'>{link}</Link>)
                    }
                </div>
            </div>

            <div className="row3 mt-10">
                <h3 className='text-lg lg:text-2xl xl:text-3xl capitalize'>legal</h3>
                <div className='mt-5 text-sm md:base flex flex-col gap-y-3'>
                    {
                        legal.map((link, index)=><Link key={index} href={"#"} className='capitalize hover:text-theme hover:underline duration-300'>{link}</Link>)
                    }
                </div>
            </div>

            <div className="row4 mt-10">
                <h3 className='text-lg lg:text-2xl xl:text-3xl capitalize'>product</h3>
                <div className='mt-5 text-sm md:base flex flex-col gap-y-3'>
                    {
                        product.map((link, index)=><Link key={index} href={"#"} className='capitalize hover:text-theme hover:underline duration-300'>{link}</Link>)
                    }
                </div>
            </div>

            <div className="row5 mt-10">
                <h3 className='text-lg lg:text-2xl xl:text-3xl capitalize'>newsletter</h3>
                <div className='mt-5 text-sm md:base flex flex-col gap-y-3'>
                    <Link href={"#"} className='capitalize hover:text-theme hover:underline duration-300'>Stay up to Date</Link>
                    <div className='flex'>
                        <input type="email" placeholder='Your Email' name="useremail" className='p-2 max-w-56 lg:w-56 outline-none focus:border-2 focus:border-theme border-r-0 rounded-l-lg' />
                        <input type="submit" value="Subscribe" className='px-4 py-5 rounded-r-lg bg-black text-white cursor-pointer rounded-l-none'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;