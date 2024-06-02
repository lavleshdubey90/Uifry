import React from 'react';
import phone2 from "/public/images/phone 2.png";
import Image from 'next/image';
import bell from "/public/icons/bell.png";

const Advantages = () => {
    return (
        <section className='pt-10 overflow-x-hidden'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className="md:pl-12 2xl:pl-40 right w-full md:w-1/2">
                        <h4 className='uppercase text-center md:text-left text-theme font-medium tracking-[0.2em]'>advantages</h4>
                        <h2 className='font-bold text-center md:text-left text-4xl lg:text-5xl capitalize'>why choose uifry ?</h2>

                        <div className='mt-5 md:mt-8 mx-auto text-center md:text-left'>
                            <h3 className='font-semibold text-xl lg:text-[28px] flex items-center justify-center md:justify-start gap-3'><Image src={bell} width={48} height={48} alt={"Bell"} className='w-8 md:w-[48px]'/>clever notifications</h3>
                            <p className='text-themeGray font-medium capitalize text-sm lg:text-base xl:text-lg mt-5 md:mt-8 mx-auto md:mx-0 w-11/12 lg:w-4/6'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                        </div>
                    </div>
                    <div className="left md:w-1/2">
                        <Image src={phone2} width={500} alt={"Phone"} unoptimized={true} height={500} className='w-1/2 mx-auto md:w-full min-w-[440px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages;