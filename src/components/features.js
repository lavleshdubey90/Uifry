import React from 'react';
import phone1 from "/public/images/phone 1.png";
import Image from 'next/image';
import cube1 from "/public/icons/cube 1.png";
import cube2 from "/public/icons/cube 2.png";
import smallStar from "/public/icons/small-star.png";
import background from "/public/images/background.png";

const Features = () => {
    return (
        <section className='relative overflow-x-hidden text-lg mx-auto pt-10'>
            <Image src={background} alt={"Background"} className='absolute -z-10 -right-60' />
            <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                <div className="left md:w-1/2">
                    <Image src={phone1} width={500} alt={"Phone"} unoptimized={true} height={500} className='w-1/2 mx-auto md:w-full min-w-[440px]' />
                </div>
                <div className="p-2 w-full md:w-1/2">
                    <h4 className='uppercase text-center md:text-start text-theme font-medium tracking-[0.2em]'>features</h4>
                    <h2 className='font-bold text-center md:text-start text-4xl lg:text-5xl capitalize'>uifry premium</h2>

                    <div className='text-center md:text-left'>
                        <div className='mt-14 md:mt-10 mx-auto'>
                            <div className='my-5 w-11/12 sm:w-3/4 mx-auto md:mx-0 md:max-w-[30rem] xl:max-w-[35rem]'>
                                <h3 className='flex justify-center md:justify-start items-center gap-2 mb-2 font-semibold'> <Image src={smallStar}  alt={"small star"} unoptimized={true} width={5} height={5} className='w-6' /> Budgeting Intervals</h3>
                                <p className='font-medium text-sm xl:text-lg text-themeGray '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                            </div>
                            
                            <div className='my-5 w-11/12 sm:w-3/4 mx-auto md:mx-0 md:max-w-[30rem] xl:max-w-[35rem]'>
                                <h3 className='flex justify-center md:justify-start items-center gap-2 mb-2 font-semibold'> <Image src={cube2} alt={"cube 2"}  unoptimized={true} width={5} height={5} className='w-6' /> Budgeting Intervals</h3>
                                <p className='font-medium text-sm xl:text-lg text-themeGray '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                            </div>
                            
                            <div className='my-5 w-11/12 sm:w-3/4 mx-auto md:mx-0 md:max-w-[30rem] xl:max-w-[35rem]'>
                                <h3 className='flex justify-center md:justify-start items-center gap-2 mb-2 font-semibold'> <Image src={cube1} alt={"cube 1"} unoptimized={true} width={5} height={5} className='w-6' /> Budgeting Intervals</h3>
                                <p className='font-medium text-sm xl:text-lg text-themeGray '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features