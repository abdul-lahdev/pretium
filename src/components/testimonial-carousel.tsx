"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        text: "I Never Thought Talking To Someone Would Help This Much. My Therapist Made Space For Me To Feel Heard Without Pressure.",
        name: "Sam Kurran",
        age: "27 Years Old from New York",
        image: "/image/testamonial.jpg",
    },
    {
        text: "Therapy helped me gain confidence and clarity. I feel like a brand new person.",
        name: "Jessica Carter",
        age: "32 Years Old from Texas",
        image: "/image/testamonial.jpg",
    },
    {
        text: "I learned how to understand myself better. Best decision of my life.",
        name: "Mark Wilson",
        age: "29 Years Old from Florida",
        image: "/image/testamonial.jpg",
    },
];

export default function TestimonialCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 p-4">

            {/* LEFT FIXED-HEIGHT CARD */}
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-500 text-white rounded-2xl p-16 overflow-hidden h-[600px] flex items-center">

                {/* LEFT BUTTON */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition"
                >
                    ←
                </button>

                <div className="w-full h-full relative">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: direction === 1 ? 80 : -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction === 1 ? -80 : 80 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="absolute top-0 left-0 w-full h-full flex flex-col justify-between"
                        >
                            <p className="text-xl leading-relaxed mb-10">
                                {testimonials[index].text}
                            </p>

                            <div>
                                <p className="font-semibold">{testimonials[index].name}</p>
                                <p className="text-sm opacity-80">{testimonials[index].age}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* RIGHT FIXED-HEIGHT IMAGE */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden">

                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={index}
                        src={testimonials[index].image}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                        initial={{ opacity: 0, x: direction === 1 ? 80 : -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction === 1 ? -80 : 80 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    />
                </AnimatePresence>

                {/* RIGHT BUTTON */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition"
                >
                    →
                </button>

            </div>
        </div>
    );
}
