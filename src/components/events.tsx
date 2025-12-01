"use client";

import { useState } from "react";
import Image from "next/image";
import useMedia from 'use-media';

export default function Events() {
  const [active, setActive] = useState<"personal" | "family">("personal");
  const isWide = useMedia({ minWidth: '1440px' });

  const features = [
    "One request at a time",
    "Design complexity",
    "Project management",
    "Turnaround time per request",
    "Illustration library access",
    "Dedicated account manager",
  ];

  return (
    <section className="pb-20 bg-white">
      <div className="mx-auto">

        <div className="w-[90%] lg:w-[70%]  mx-auto px-0 lg:px-3 py-10 rounded-[16px]" data-aos="fade-up">


          {/* Top Title */}
          <h1 className="text-[var(--dark1)] text-[38px]/[58px] md:text-[48px]/[71px] lg:text-[64px]/[73px] font-normal text-center mb-8">
            Affordable Plans
            <span className="inline lg:block"> That Fit <span className="text-[var(--purple1)]"> Your Needs</span></span>
          </h1>

          {/* Toggle Buttons */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-3 bg-[var(--grey1)] rounded-[16px] px-3 py-3">
              <button
                className={`flex items-center gap-2 h[50px] px-8 rounded-[8px] py-2 ${active === 'personal' ? 'bg-white' : ''}`}
                onClick={() => setActive("personal")}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_99_14298" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"> <g clipPath="url(#clip0_99_14298)"> <path d="M22.7879 16.0001C23.5594 16.0001 24.2994 16.3066 24.8449 16.8522C25.3905 17.3977 25.697 18.1377 25.697 18.9092V19.8789C25.697 23.7024 22.0907 27.6365 16 27.6365C9.90934 27.6365 6.30304 23.7024 6.30304 19.8789V18.9092C6.30304 18.1377 6.60953 17.3977 7.15509 16.8522C7.70065 16.3066 8.44059 16.0001 9.21213 16.0001H22.7879ZM16 3.39404C17.4145 3.39404 18.7711 3.95595 19.7712 4.95614C20.7714 5.95633 21.3333 7.31289 21.3333 8.72738C21.3333 10.1419 20.7714 11.4984 19.7712 12.4986C18.7711 13.4988 17.4145 14.0607 16 14.0607C14.5855 14.0607 13.229 13.4988 12.2288 12.4986C11.2286 11.4984 10.6667 10.1419 10.6667 8.72738C10.6667 7.31289 11.2286 5.95633 12.2288 4.95614C13.229 3.95595 14.5855 3.39404 16 3.39404Z" fill="white" /> </g> </mask> <g mask="url(#mask0_99_14298)"> <rect width="32" height="32" fill={`${active === 'personal' ? '#7026A1' : '#3C3D3C'}`} /> </g> <defs> <clipPath id="clip0_99_14298"> <rect width="32" height="32" fill="white" /> </clipPath> </defs> </svg>
                Personal
              </button>

              <button
                className={`flex items-center gap-2 h[50px] px-8 rounded-[8px] py-2 ${active === 'family' ? 'bg-white' : ''}`}
                onClick={() => setActive("family")}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_99_14308" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"> <g clipPath="url(#clip0_99_14308)"> <path d="M6.30304 6.3031C6.30304 5.27439 6.7117 4.2878 7.43911 3.56039C8.16653 2.83297 9.15311 2.42432 10.1818 2.42432C11.2106 2.42432 12.1971 2.83297 12.9245 3.56039C13.652 4.2878 14.0606 5.27439 14.0606 6.3031C14.0606 7.33182 13.652 8.31841 12.9245 9.04582C12.1971 9.77324 11.2106 10.1819 10.1818 10.1819C9.15311 10.1819 8.16653 9.77324 7.43911 9.04582C6.7117 8.31841 6.30304 7.33182 6.30304 6.3031ZM19.4502 9.3751L19.5317 9.43717C20.358 10.0423 21.3902 10.2961 22.4029 10.143C23.4157 9.98994 24.3268 9.44252 24.9374 8.6202C25.5481 7.79788 25.8087 6.76741 25.6623 5.75367C25.516 4.73992 24.9747 3.8252 24.1564 3.20911C23.3382 2.59302 22.3095 2.32558 21.2948 2.46515C20.2801 2.60472 19.3618 3.13997 18.7403 3.9541C18.1187 4.76823 17.8445 5.79514 17.9773 6.81074C18.1101 7.82634 18.6392 8.74819 19.4492 9.3751H19.4502ZM12.64 12.1213C12.9804 11.5314 13.4701 11.0415 14.06 10.7011C14.6498 10.3606 15.319 10.1815 16 10.1819C16.5095 10.1816 17.014 10.2818 17.4847 10.4766C17.9554 10.6715 18.3831 10.9572 18.7433 11.3174C19.1035 11.6776 19.3892 12.1053 19.5841 12.576C19.7789 13.0467 19.8791 13.5512 19.8788 14.0607C19.8786 14.6555 19.7415 15.2423 19.4783 15.7757C19.2151 16.3091 18.8327 16.7748 18.3607 17.1368C17.8888 17.4989 17.3398 17.7475 16.7564 17.8635C16.173 17.9795 15.5708 17.9598 14.9962 17.8058C14.4217 17.6519 13.8902 17.3679 13.4429 16.9757C12.9957 16.5836 12.6446 16.0939 12.4168 15.5444C12.1891 14.9949 12.0907 14.4004 12.1294 13.8068C12.1681 13.2133 12.3428 12.6365 12.64 12.1213ZM5.33335 12.1213H10.5125C10.2928 12.7442 10.181 13.4001 10.1818 14.0607C10.1818 15.5511 10.7423 16.9106 11.6635 17.9395H11.1515C10.1518 17.9393 9.17636 18.248 8.35879 18.8234C7.54122 19.3988 6.92144 20.2128 6.58426 21.154C5.93332 20.8928 5.3238 20.5384 4.7748 20.1019C3.31444 18.9286 2.42426 17.1947 2.42426 15.0304C2.42426 14.2588 2.73075 13.5189 3.27631 12.9733C3.82187 12.4278 4.56181 12.1213 5.33335 12.1213ZM20.8485 17.9395C21.8481 17.9395 22.8233 18.2483 23.6407 18.8237C24.458 19.3991 25.0777 20.213 25.4148 21.154C26.0661 20.8929 26.6759 20.5385 27.2252 20.1019C28.6856 18.9286 29.5758 17.1947 29.5758 15.0304C29.5758 14.2588 29.2693 13.5189 28.7237 12.9733C28.1782 12.4278 27.4382 12.1213 26.6667 12.1213H21.4875C21.7009 12.7283 21.8182 13.3809 21.8182 14.0607C21.8202 15.4922 21.2924 16.8738 20.3365 17.9395H20.8485ZM23.5384 21.6786C23.68 22.0209 23.7576 22.3952 23.7576 22.788C23.7576 24.9523 22.8674 26.6861 21.407 27.8595C19.969 29.0134 18.0422 29.5758 16 29.5758C13.9578 29.5758 12.031 29.0134 10.593 27.8595C9.13262 26.6861 8.24244 24.9523 8.24244 22.788C8.24244 22.0164 8.54893 21.2765 9.09449 20.7309C9.64005 20.1854 10.38 19.8789 11.1515 19.8789H20.8485C21.4247 19.8787 21.988 20.0497 22.4669 20.3701C22.9458 20.6905 23.3187 21.146 23.5384 21.6786Z" fill="white" /> </g> </mask> <g mask="url(#mask0_99_14308)"> <rect width="32" height="32" fill={`${active === 'family' ? '#7026A1' : '#3C3D3C'}`} /> </g> <defs> <clipPath id="clip0_99_14308"> <rect width="32" height="32" fill="white" /> </clipPath> </defs> </svg>
                Family
              </button>
            </div>
          </div>

          {/* Layout container */}
          <div className="relative flex justify-center mt-16">
            {/* Left Top Image */}
            {
              isWide ? <Image
                src="/image/pricing1.png"
                alt="group"
                width={140}
                height={140}
                className="absolute left-0 top-0 rounded-lg w-[162px] h-[186px] object-cover"
              /> : null
            }


            {/* Left Bottom Image */}

            {
              isWide ? <Image
                src="/image/pricing2.png"
                alt="group"
                width={140}
                height={140}
                className="absolute left-0 translate-x-12 bottom-0 rounded-lg w-[160px] h-[163px] object-cover"
              /> : null
            }


            {/* Main Pricing Card */}
            <div className="w-full max-w-xl p-6 shadow-lg bg-[var(--grey1)] z-10 rounded-[16px]">
              <div className="bg-purple-600 text-white p-6 rounded-xl">
                <h3 className="text-[24px] font-medium flex items-center gap-2">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_106_1020" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"> <g clipPath="url(#clip0_106_1020)"> <path d="M22.7879 16.0001C23.5594 16.0001 24.2994 16.3066 24.8449 16.8522C25.3905 17.3977 25.697 18.1377 25.697 18.9092V19.8789C25.697 23.7024 22.0907 27.6365 16 27.6365C9.90934 27.6365 6.30304 23.7024 6.30304 19.8789V18.9092C6.30304 18.1377 6.60953 17.3977 7.15509 16.8522C7.70065 16.3066 8.44059 16.0001 9.21213 16.0001H22.7879ZM16 3.39404C17.4145 3.39404 18.7711 3.95595 19.7712 4.95614C20.7714 5.95633 21.3333 7.31289 21.3333 8.72738C21.3333 10.1419 20.7714 11.4984 19.7712 12.4986C18.7711 13.4988 17.4145 14.0607 16 14.0607C14.5855 14.0607 13.229 13.4988 12.2288 12.4986C11.2286 11.4984 10.6667 10.1419 10.6667 8.72738C10.6667 7.31289 11.2286 5.95633 12.2288 4.95614C13.229 3.95595 14.5855 3.39404 16 3.39404Z" fill="white" /> </g> </mask> <g mask="url(#mask0_106_1020)"> <rect width="32" height="32" fill="white" /> </g> <defs> <clipPath id="clip0_106_1020"> <rect width="32" height="32" fill="white" /> </clipPath> </defs> </svg>
                  {active === "personal" ? "Personal Plan" : "Family Plan"}
                </h3>

                <p className="text-[48px] font-normal text-white mt-3">
                  ${active === "personal" ? "199" : "299"}
                  <span className="text-[24px] font-medium text-white"> / Session</span>
                </p>

                <p className="text-white font-normal text-[16px]">
                  One request at a time. Pause or cancel anytime.
                </p>

                <button className="mt-4 text-[var(--purple1)] bg-white h-[56px] w-full rounded-[10px] flex items-center justify-between px-3">
                  Find Support <span className="w-[33px] h-[33px] rounded-[7px] bg-[var(--purple1)] flex items-center justify-center">

                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3.5 8.4002H12.6M9.1 4.2002L12.805 7.90522C13.0784 8.17859 13.0784 8.6218 12.805 8.89517L9.1 12.6002" stroke="#D9D9D9" strokeWidth="1.4" strokeLinecap="round" /> </svg>
                  </span>
                </button>
              </div>

              <div className="mt-6">
                <h4 className="text-[var(--dark1)] font-normal text-[36px] mb-3">{`What's`} included:</h4>

                <ul className="grid lg:grid-cols-2 md:grid-cols-1 gap-3">
                  {features.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-[16px] font-normal text-[var(--dark1)]">
                      <span className="w-[22px] h-[22px] bg-[var(--purple1)] rounded-full flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_106_905" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14"> <g clipPath="url(#clip0_106_905)"> <path d="M4.8372 8.73111L2.5437 6.43761L1.7627 7.21311L4.8372 10.2876L11.4372 3.68761L10.6617 2.91211L4.8372 8.73111Z" fill="black" /> </g> </mask> <g mask="url(#mask0_106_905)"> <rect width="13.2" height="13.2" fill="white" /> </g> <defs> <clipPath id="clip0_106_905"> <rect width="13.2" height="13.2" fill="white" /> </clipPath> </defs> </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Top Image */}

            {
              isWide ? <Image
                src="/image/pricing3.png"
                alt="group"
                width={140}
                height={140}
                className="absolute right-0 -translate-x-24 top-0 rounded-lg w-[151px] h-[189px] object-cover"
              /> : null
            }


            {/* Right Bottom Image */}

            {
              isWide ? <Image
                src="/image/pricing4.png"
                alt="group"
                width={140}
                height={140}
                className="absolute right-0 bottom-0 rounded-lg h-[147px] w-[192px] object-cover"
              /> : null
            }

          </div>



        </div>
      </div>

    </section>
  );
}
