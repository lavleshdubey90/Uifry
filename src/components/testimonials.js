import Image from 'next/image';
import React from 'react';
import testimonials from "/public/images/testimonials.png";
import user1 from "/public/images/user1.png";
import user2 from "/public/images/user2.png";
import user3 from "/public/images/user3.png";
import user4 from "/public/images/user4.png";
import user5 from "/public/images/user5.png";

const Testimonials = () => {

    const users = [user1, user2, user3, user4, user5];

    return (
        <section className='pt-10 container mx-auto'>
            <div className='text-center'>
                <h4 className='uppercase mb-2 text-center font-medium tracking-[0.2em]'>advantages</h4>
                <h2 className='font-bold text-center text-4xl mx-auto lg:text-5xl capitalize'>what our users <br /> say about us?</h2>
            </div>

            <section className='pt-10 overflow-x-hidden'>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                <div className="left md:w-1/2">
                    <Image src={testimonials} width={500} unoptimized={true} alt={"testimonials"} height={500} className='w-1/2 mx-auto md:w-full min-w-[440px]' />
                </div>
                <div className="md:pl-12 2xl:pl-40 right w-full md:w-1/2">
                    <div className='mt-5 md:mt-8 mx-auto text-center md:text-left'>
                        <h3 className='font-semibold text-xl lg:text-[28px] flex items-center justify-center mx-auto md:mx-0 md:justify-start capitalize w-3/4 gap-3'>The best financial accounting app ever!</h3>
                        <p className='text-themeGray font-medium capitalize text-sm lg:text-base xl:text-lg mt-5 md:mt-8 mx-auto md:mx-0 w-11/12 lg:w-4/6'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                    <div className='flex items-center justify-center md:justify-start mt-5 gap-2'>

                        {
                            users.map((user, index)=>
                            {
                                if(index===0)
                                {
                                    return <Image key={index} src={user} alt={`user ${index}`} width={40} height={40} unoptimized={true}/>
                                }
                                else
                                {
                                    return <Image key={index} src={user} alt={`user ${index}`} width={30} height={30} unoptimized={true} className='opacity-50'/>
                                }
                            })
                        }

                    </div>
                    <p className='text-lg mt-5 md:text-left text-center font-bold capitalize'>nick jonas</p>
                </div>
            </div>
        </section>
        </section>
    )
}

export default Testimonials