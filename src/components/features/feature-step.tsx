import Image from 'next/image'
import React from 'react'

export default function FeatureStep() {
    return (
        <section className="pt-16 bg-white">
            <div className="mx-auto">
                <div className="lg:w-[70%] md:w-full mx-auto px-3 py-10 rounded-[16px]">
                    <h1 className="text-[var(--dark4)] text-[56px]/[64px] font-semibold text-center">
                        Intuitive tools that scale with you

                    </h1>

                    <div className='grid grid-cols-3 gap-4 my-12'>
                        <div className='bg-[var(--purple2)] w-full rounded-[24px] overflow-hidden h-[600px]'>
                            <div className='p-8'>
                                <h2 className='text-[var(--dark5)] font-normal text-[16px]'>
                                    Smart Scheduling
                                </h2>
                                <p className='text-[var(--dark4)] font-medium text-[24px]/[33px]'>
                                    Verify insurance faster, reduce claim denials
                                </p>
                            </div>
                            <div className='flex justify-end items-end pl-8'>
                                <Image
                                    src="/image/ImageBackground.png"
                                    width={2000}   // original ratio maintain ka liye large width
                                    height={1000}
                                    alt="picture"
                                    className="w-full h-auto object-cover"
                                />

                            </div>
                        </div>
                        <div className='bg-[var(--purple2)] w-full rounded-[24px] overflow-hidden h-[600px]'>
                            <div className='p-8'>
                                <h2 className='text-[var(--dark5)] font-normal text-[16px]'>
                                    Secure Telehealth
                                </h2>
                                <p className='text-[var(--dark4)] font-medium text-[24px]/[33px]'>
                                    Send prescriptions directly to
                                    pharmacies, reduce errors
                                </p>
                            </div>
                            <div className='flex justify-end items-center px-8'>
                                <Image
                                    src="/image/ImageBackground2.png"
                                    width={2000}   // original ratio maintain ka liye large width
                                    height={1000}
                                    alt="picture"
                                    className="w-full h-auto object-cover"
                                />

                            </div>
                        </div>
                        <div className='bg-[var(--purple2)] w-full rounded-[24px] overflow-hidden h-[600px]'>
                            <div className='p-8'>
                                <h2 className='text-[var(--dark5)] font-normal text-[16px]'>
                                    AI-Powered Charting
                                </h2>
                                <p className='text-[var(--dark4)] font-medium text-[24px]/[33px]'>
                                    Automate claim generation,
                                    coding suggestions
                                </p>
                            </div>
                            <div className='flex justify-end items-end pl-8'>
                                <Image
                                    src="/image/ImageBackground3.png"
                                    width={2000}   // original ratio maintain ka liye large width
                                    height={1000}
                                    alt="picture"
                                    className="w-full h-auto object-cover"
                                />

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
