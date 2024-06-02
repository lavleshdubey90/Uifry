import React from 'react';
import star from "/public/images/Star.png";
import Image from 'next/image';
import downloadBanner from "/public/images/downloadApp.png";

const Faq = () => {

    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <section className=''>
            <div className='pt-20 container relative mx-auto'>
                <Image src={star} height={64} width={64} alt={'Star'} className='absolute top-44 left-3/4 lg:left-1/2' />
                <div className='text-center md:text-start'>
                    <h4 className='uppercase mb-2 font-medium text-theme tracking-[0.2em]'>faq</h4>
                    <h2 className='font-bold text-4xl lg:text-5xl capitalize'>frequently asked <br /> questions</h2>
                </div>

                <div className="questions w-full mt-10">
                    <div className="grid p-5 grid-rows-1 sm:grid-rows-3 gap-8 xl:gap-10 rounded-lg grid-cols-1 sm:grid-cols-2">

                        {

                            arr.map((item) => {

                                if (item === 1 || item === 4 || item === 5) {
                                    return (<div key={item} className="rounded-lg p-5 lg:p-10 bg-theme text-white mx-auto max-w-96 sm:min-w-full">
                                        <h3 className='font-semibold text-xl lg:text-[28px] flex items-center justify-center mx-auto md:mx-0 md:justify-start capitalize gap-3'>The best financial accounting <br className='hidden xl:block' /> app ever!</h3>
                                        <p className='text-sm sm:text-base md:text-lg xl:text-xl font-medium mt-5 '>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                                    </div>);
                                }

                                else {
                                    return (<div key={item} className="rounded-lg p-5 lg:p-10 mx-auto max-w-96 sm:min-w-full">
                                        <h3 className='font-semibold text-xl lg:text-[28px] flex items-center justify-center mx-auto md:mx-0 md:justify-start capitalize gap-3'>The best financial accounting <br className='hidden xl:block' /> app ever!</h3>
                                        <p className='text-sm sm:text-base md:text-lg xl:text-xl font-medium mt-5 '>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                                    </div>);
                                }
                            })
                        }
                    </div>
                </div>

            </div>

            <Image src={downloadBanner} alt={"Banner"} width={100} height={100} unoptimized={true} className='w-full mt-10' />
        </section>
    )
}

export default Faq