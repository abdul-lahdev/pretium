"use client";
import Image from "next/image";
import { useState } from "react";

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

export default function ServiceHoverCards() {
    const [active, setActive] = useState<number>(0);  // ⭐ Default first card

    return (
        <div className="flex gap-5 w-full p-10 rounded-xl">
            {cards.map((card, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setActive(index)}
                    onMouseLeave={() => setActive(0)}  // ⭐ Hover remove → first card active
                    className={`
                        relative h-[400px] rounded-2xl overflow-hidden cursor-pointer
                        transition-all duration-500 ease-in-out
                        ${active === index ? "flex-[2]" : "flex-[1]"}
                    `}
                >
                    {/* IMAGE */}
                    <Image
                        src={card.img}
                        alt="service"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-all duration-500"
                    />

                    {/* DARK OVERLAY */}
                    <div
                        className={`
                            absolute inset-0 bg-black/40 transition-all duration-500
                            ${active === index ? "opacity-100" : "opacity-0"}
                        `}
                    />

                    {/* TEXT */}
                    <div
                        className={`
                            absolute bottom-5 left-5 right-5 text-white transition-all duration-500
                            ${active === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                        `}
                    >
                        <div className="flex  justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">{card.title}</h3>
                                <p className="text-sm opacity-80">{card.desc}</p>
                            </div>

                            <button className="mt-4 bg-purple-600 hover:bg-purple-700 h-[48px] w-[48px] rounded-[10px] text-sm font-medium flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 12H18M13 6L18.2929 11.2929C18.6834 11.6834 18.6834 12.3166 18.2929 12.7071L13 18" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" /> </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
