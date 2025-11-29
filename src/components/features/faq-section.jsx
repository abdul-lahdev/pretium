'use client';

import { Typography, IconButton } from "@material-tailwind/react";
import { useState } from "react";



const faqData = [
    {
      question: "What is Pretium used for?",
      answer:
        "Our platform streamlines medical workflows by offering EHR, appointment scheduling, billing, telehealth, and more all in one secure, cloud-based system.",
    },
    {
      question: "Is Pretium HIPAA-compliant?",
      answer: "Yes, Pretium fully complies with HIPAA regulations.",
    },
    {
      question: "Can multiple providers use the same account?",
      answer: "Yes, you can add multiple providers under one organization.",
    },
    {
      question: "Can I access the system from mobile devices?",
      answer: "Yes, Pretium works smoothly on all mobile devices.",
    },
    {
      question: "Do you offer training or onboarding support?",
      answer: "We provide complete onboarding and training support.",
    },
    {
      question: "What kind of customer support do you offer?",
      answer: "24/7 customer support via chat, email, and phone.",
    },
  ];
  

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-16 bg-white">

        <div className="mx-auto">
            <div className="lg:w-[70%] md:w-full mx-auto px-3 py-10 rounded-[16px]">


        <h2 className="text-[var(--dark4)] text-[56px]/[64px] font-semibold text-center">Quick answers<br />for quick decisions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-16">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {faqData.slice(0, 3).map((item, index) => {
            const realIndex = index;
            return (
              <div key={index} className="border-b pb-4">
                <button
                  onClick={() => toggle(realIndex)}
                  className="flex items-center gap-3 w-full text-left"
                >
             <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="28.5" height="28.5" rx="14.25" fill="#7026A1"/> <mask id="mask0_121_6458" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="6" y="6" width="17" height="17"> <g clipPath="url(#clip0_121_6458)"> <path d="M12.0467 16.9139L9.17986 14.047L8.20361 15.0164L12.0467 18.8595L20.2967 10.6095L19.3274 9.64014L12.0467 16.9139Z" fill="black"/> </g> </mask> <g mask="url(#mask0_121_6458)"> <rect x="6" y="6" width="16.5" height="16.5" fill="white"/> </g> <defs> <clipPath id="clip0_121_6458"> <rect width="16.5" height="16.5" fill="white" transform="translate(6 6)"/> </clipPath> </defs> </svg>
                  <span className="font-medium text-gray-900">{item.question}</span>
                </button>

                {openIndex === realIndex && item.answer && (
                  <p className="pl-12 pt-3 text-gray-600 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {faqData.slice(3).map((item, index) => {
            const realIndex = index + 3;
            return (
              <div key={index} className="border-b pb-4">
                <button
                  onClick={() => toggle(realIndex)}
                  className="flex items-center gap-3 w-full text-left"
                >
                           <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="28.5" height="28.5" rx="14.25" fill="#7026A1"/> <mask id="mask0_121_6458" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="6" y="6" width="17" height="17"> <g clipPath="url(#clip0_121_6458)"> <path d="M12.0467 16.9139L9.17986 14.047L8.20361 15.0164L12.0467 18.8595L20.2967 10.6095L19.3274 9.64014L12.0467 16.9139Z" fill="black"/> </g> </mask> <g mask="url(#mask0_121_6458)"> <rect x="6" y="6" width="16.5" height="16.5" fill="white"/> </g> <defs> <clipPath id="clip0_121_6458"> <rect width="16.5" height="16.5" fill="white" transform="translate(6 6)"/> </clipPath> </defs> </svg>

                  <span className="font-medium text-gray-900">{item.question}</span>
                </button>

                {openIndex === realIndex && item.answer && (
                  <p className="pl-12 pt-3 text-gray-600 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>

      </div>

    </section>
  );
}
