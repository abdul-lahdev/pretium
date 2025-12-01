import React from 'react'
import Image from 'next/image'
export default function Tools() {
    return (
        <section className="py-16 bg-[var(--purple2)]">

            <div className="mx-auto" data-aos="fade-up">
                <div className="w-[90%] xl:w-[70%]  mx-auto px-0 xl:px-3 py-10 rounded-[16px]">
                    <h1 className="text-[var(--dark4)] text-[38px]/[44px] md:text-[50px]/[64px] lg:text-[56px]/[64px] font-semibold text-center">
                        Tools that just make sense
                    </h1>


                    <div className="min-h-[500px] md:h-[700px] mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">

                            {/* LEFT SIDE */}
                            <div className="bg-white md:h-full rounded-3xl p-5 flex flex-col justify-around">
                                <div className='flex justify-center'>
                                    <Image
                                        src="/image/toolImage.png"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        className='h-full w-full'
                                    />
                                </div>
                                <div>
                                    <h1 className='text-[var(--dark4)] text-[32px]/[44px] font-medium'>
                                        Practice analytics dashboard
                                    </h1>
                                    <p className='text-[var(--dark5)] font-normal text-[18px]/[30px]'>
                                        Track and log digital consent for procedures, sharing
                                        of data, and treatment protocols.
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="flex flex-col gap-3 md:h-full">
                                <div className="bg-white p-5 h-auto md:h-1/2 rounded-3xl flex flex-col justify-around">
                                    <div className='flex justify-center'>
                                        <Image
                                            src="/image/toolImage1.png"
                                            width={100}
                                            height={100}
                                            alt="Picture of the author"
                                            className='h-full w-[400px]'
                                        />
                                    </div>
                                    <div>
                                        <h1 className='text-[var(--dark4)] text-[32px]/[44px] font-medium'>
                                            Automated reminders
                                        </h1>
                                    </div>
                                </div>
                                <div className="bg-white p-5 h-auto md:h-1/2 rounded-3xl flex flex-col justify-around">
                                    <div className='flex justify-center'>
                                        <Image
                                            src="/image/toolImage2.png"
                                            width={100}
                                            height={100}
                                            alt="Picture of the author"
                                            className='h-full w-[400px]'
                                        />
                                    </div>
                                    <div>
                                        <h1 className='text-[var(--dark4)] text-[32px]/[44px] font-medium'>
                                            Automated reminders
                                        </h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}
