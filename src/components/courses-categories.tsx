"use client";

import React from "react";




import HoverServiceCard from "@/components/hoverservice-card";



export function CoursesCategories() {
  return (
    <section className="py-12 bg-[#F9ECFE]">
      <div className="mx-auto">
        <div className="w-[70%]  mx-auto px-3 py-10 rounded-[16px]">
          <h1 className="text-[var(--dark1)] text-[64px]/[73px] font-normal text-center">
            How Our Therapy
            <span className="block"> Matching <span className="text-[var(--purple1)]">Process</span></span>
            <span>Works</span>
          </h1>
          <p className="text-[16px]/[27px] font-normal text-[var(--dark2)] text-center lg:w-[50%] md:w-full mx-auto mt-3 ">
            That’s why our services are designed to meet you where you are, whether you arre looking for someone to talk to.
          </p>
          <HoverServiceCard />
        </div>

      </div>
    </section>
  );
}

export default CoursesCategories;