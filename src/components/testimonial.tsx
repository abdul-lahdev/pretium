"use client";

import TestimonialCarousel from "@/components/testimonial-carousel";



function TESTIMONIAL() {
  return (
    <section className="pb-36 bg-white">
      <div className="mx-auto">
        <div className="lg:w-[70%] md:w-full mx-auto px-3 py-10 rounded-[16px]">
          <h1 className="text-[var(--dark1)] text-[64px]/[73px] font-normal text-center mb-8">
            What Clients Say
            <span className="block"> About <span className="text-[var(--purple1)]">Pretium Care</span></span>
          </h1>
          <TestimonialCarousel />
        </div>
      </div>
    </section>

  );
}

export default TESTIMONIAL;
