"use client";

import React from "react";

import useMedia from 'use-media'

import HoverServiceCard from "@/components/hoverservice-card";
import Image from "next/image";



export function CoursesCategories() {

  interface CardData {
    img: string;
    title: string;
    desc: string;
  }

  const cards: CardData[] = [
    {
      img: "/image/matchingProcess.png",
      title: "That’s why our services",
      desc: "That’s why our services are designed to meet you.",
    },
    {
      img: "/image/matchingProcess1.png",
      title: "Mental Health Support",
      desc: "Talk with certified experts privately.",
    },
    {
      img: "/image/matchingProcess2.png",
      title: "Medical Writing",
      desc: "Accurate documentation and support.",
    },
  ];

  const isWide = useMedia({ minWidth: '768px' });
  return (
    <section className="py-12 bg-[#F9ECFE]">
      <div className="mx-auto">
        <div className="w-[90%] xl:w-[70%]  mx-auto px-1 lg:px-3 py-10 rounded-[16px]" data-aos="fade-up">
          <h1 className="text-[var(--dark1)] text-[38px]/[58px] md:text-[48px]/[68px] lg:text-[64px]/[73px] font-normal text-center">
            How Our Therapy
            <span className="inline xl:block"> Matching <span className="text-[var(--purple1)]">Process</span></span>
            <span> Works</span>
          </h1>
          <p className="text-[16px]/[27px] font-normal text-[var(--dark2)] text-center lg:w-[50%] md:w-full mx-auto mt-3 ">
            That’s why our services are designed to meet you where you are, whether you arre looking for someone to talk to.
          </p>
          <h1 className="text-black text-2xl">
            {
              isWide ? <HoverServiceCard /> : <>
                <div className="flex flex-col gap-5 w-full pt-10 p-0 xl:p-10 rounded-xl">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="
                relative h-[300px] rounded-2xl overflow-hidden cursor-pointer
                flex-1 transition-all duration-500
            "
                    >
                      {/* IMAGE */}
                      <Image
                        src={card.img}
                        alt="service"
                        width={600}
                        height={300}
                        className="w-full h-[300px]  object-cover"
                      />

                      {/* DARK OVERLAY — ALWAYS VISIBLE */}
                      <div className="absolute inset-0 bg-black/40" />

                      {/* TEXT — ALWAYS VISIBLE */}
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-semibold">{card.title}</h3>
                            <p className="text-sm opacity-80">{card.desc}</p>
                          </div>

                          <button className="mt-4 bg-purple-600 hover:bg-purple-700 h-[48px] w-[48px] rounded-[10px] text-sm font-medium flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H18M13 6L18.2929 11.2929C18.6834 11.6834 18.6834 12.3166 18.2929 12.7071L13 18"
                                stroke="#D9D9D9"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </>
            }
          </h1>

        </div>

      </div>
    </section>
  );
}

export default CoursesCategories;