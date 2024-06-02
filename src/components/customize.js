import React from 'react';
import star from "/public/icons/star.png";
import phone3 from "/public/images/phone 3.png";
import Image from 'next/image';

const Customize = () => {
    return (
        <section className='pt-10 overflow-x-hidden'>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                <div className="left md:w-1/2">
                    <Image src={phone3} alt={"Phone"} width={500} unoptimized={true} height={500} className='w-1/2 mx-auto md:w-full min-w-[440px]' />
                </div>
                <div className="md:pl-12 2xl:pl-40 right w-full md:w-1/2">
                    <div className='mt-5 md:mt-8 mx-auto text-center md:text-left'>
                        <h3 className='font-semibold text-xl lg:text-[28px] flex items-center justify-center md:justify-start gap-3'><Image src={star} alt={"Star"} width={48} height={48} className='w-8 md:w-[48px]' />fully customizable</h3>
                        <p className='text-themeGray font-medium capitalize text-sm lg:text-base xl:text-lg mt-5 md:mt-8 mx-auto md:mx-0 w-11/12 lg:w-4/6'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customize;