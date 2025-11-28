import React from 'react'

export default function Tools() {
    return (
        <section className="pt-16 bg-[var(--purple2)]">
            <div className="mx-auto">
                <div className="lg:w-[70%] md:w-full mx-auto px-3 py-10 rounded-[16px]">
                    <h1 className="text-[var(--dark4)] text-[56px]/[64px] font-semibold text-center">
                        Tools that just make sense
                    </h1>


                    <div className="min-h-[500px] md:h-[700px] mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">

                            {/* LEFT SIDE */}
                            <div className="bg-white md:h-full rounded-3xl p-5">
                                Left Side
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="flex flex-col gap-3 md:h-full">
                                <div className="bg-white p-5 h-auto md:h-1/2 rounded-3xl">
                                    First
                                </div>
                                <div className="bg-white p-5 h-auto md:h-1/2 rounded-3xl">
                                    Second
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}
