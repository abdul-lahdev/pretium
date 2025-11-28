"use client";

import React from "react";

import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import Image from "next/image";
function TrustedCompany() {
  return (
    <section className="pb-36 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(230,189,244,1)_100%)]">
      <div className="lg:w-[70%] mx-auto px-3 py-10 rounded-[16px]">

        <div className="grid grid-cols-[2fr_1fr] gap-3">
          <div>
            <div className="flex items-center gap-5">
              <h1 className="text-[64px]/[73px] font-normal text-[var(--dark1)] capitalize">Let’s get started</h1>
              <span className="flex items-center justify-center w-[51px] h-[51px] rounded-[10px] bg-[var(--purple1)] cursor-pointer">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_99_15205)"> <path d="M25.0698 0C26.6881 2.09772e-07 28 1.31191 28 2.93023V15.9535C28 17.5718 26.6881 18.8837 25.0698 18.8837H18.8837V24.907C18.8837 26.5253 17.5718 27.8372 15.9535 27.8372H2.93023C1.33719 27.8372 0.0410491 26.566 0.000953856 24.9826L0 24.907V11.8837C2.09772e-07 10.2654 1.31191 8.95349 2.93023 8.95349H15.9535C17.5718 8.95349 18.8837 10.2654 18.8837 11.8837V16.2791H25.0698C25.2496 16.2791 25.3953 16.1333 25.3953 15.9535V2.93023C25.3953 2.75042 25.2496 2.60465 25.0698 2.60465H12.0465C11.8667 2.60465 11.7209 2.75042 11.7209 2.93023V6.38953H9.11628V2.93023C9.11628 1.31191 10.4282 1.31099e-08 12.0465 0H25.0698ZM2.93023 11.5581C2.75042 11.5581 2.60465 11.7039 2.60465 11.8837V24.907L2.60505 24.9237C2.61378 25.0957 2.75605 25.2326 2.93023 25.2326H15.9535C16.1333 25.2326 16.2791 25.0868 16.2791 24.907V18.8837H12.0465C10.4282 18.8837 9.11628 17.5718 9.11628 15.9535V11.5581H2.93023ZM11.7209 15.9535C11.7209 16.1333 11.8667 16.2791 12.0465 16.2791H16.2791V11.8837C16.2791 11.7039 16.1333 11.5581 15.9535 11.5581H11.7209V15.9535Z" fill="white" /> </g> <defs> <clipPath id="clip0_99_15205"> <rect width="28" height="27.8372" fill="white" /> </clipPath> </defs> </svg>
              </span> <h1 className="text-[64px] font-normal text-[var(--dark1)]">your</h1>

            </div>
            <h1 className="text-[64px]/[73px] font-normal text-[var(--dark1)] capitalize">
              mental <span className="text-[var(--purple1)] font-medium">wellness</span> journey Begins Here.
            </h1>
            <form action="">
              <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5 mt-28">
                <div className="mt-8">
                  <Input variant="static" label="Full Name" placeholder="Jane Smith" />
                </div>
                <div className="mt-8">
                  <Input variant="static" label="Email Address" placeholder="chat@Pretium.com" />
                </div>
                <div className="mt-8">
                  <Input variant="static" label="Phone Number" placeholder="Static" />
                </div>
                <div className="mt-8">
                  <Select variant="static" label="What would you like support with?">
                    <Option>Select Option</Option>
                    <Option>Anxiety / Stress</Option>
                  </Select>
                </div>
                <div className="mt-8">
                  <button className="btn btn-primary">Book A Free Session</button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-end">
            <Image
              src="/image/formPhoto.png"
              alt="group"
              width={140}
              height={140}
              className="rounded-[18px] w-[400px] h-[600px] object-cover"
            />
          </div>
        </div>





      </div>
    </section>
  );
}

export default TrustedCompany;
