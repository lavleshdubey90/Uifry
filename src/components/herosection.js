import React from 'react';
import Image from 'next/image';
import background from "/public/images/background.png";
import hero from "/public/images/hero.png";
import play from "/public/svgs/play.svg";
import hero2 from "/public/images/hero2.png";
import { CgArrowLongRight } from "react-icons/cg";

const HeroSection = () => {
    return (
        <section className='w-full px-5 overflow-x-hidden lg:container mx-auto flex flex-col-reverse sm:flex-row justify-between'>
            <div className="left w-full sm:w-1/2">
                <div className='w-full relative'>
                    <Image src={background} alt={"background"} width={100} unoptimized={true} height={100} className='w-auto absolute -top-32 sm:-top-0 right-0 left-0 lg:left-20 2xl:left-40 -z-10' />
                </div >

                <div className='text flex flex-col'>
                    <div>
                        <h1 className='capitalize sm:mt-28 font-bold text-4xl lg:text-[50px] xl:text-[64px] 2xl:text-[76px] leading-tight'>make the best <br className='hidden sm:block'/>financial decisions</h1>
                        <p className='opacity-50 my-5 font-medium text-sm leading-snug lg:leading-normal lg:text-base xl:text-lg'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br className='hidden xl:block' /> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        <div className='flex gap-5'>
                            <button className='btn-theme text-sm lg:text-base flex items-center gap-2'>get started <CgArrowLongRight className='scale-150' /> </button>
                            <button className='p-2 text-sm lg:text-base bg-transparent hover:text-theme hover:bg-transparent text-black flex items-center gap-2 font-medium duration-300 active:scale-90'><Image src={play} width={10} alt={"play"} height={10} unoptimized={true} className='w-10' />watch video</button>
                        </div>
                    </div>
                    <div className="image mt-5 sm:mt-0">
                        <Image src={hero2} alt={"hero image 2"} width={570} height={570} className='w-96 xl:w-[570px]' />
                    </div>
                </div>
            </div>

            <div className="right min-w-72 w-11/12 mx-auto sm:w-1/2">
                <Image src={hero} alt={"hero image"} width={100} height={100} unoptimized={true} className='w-full relative z-50 mt-20' />
            </div>
        </section>
    )
}

export default HeroSection;