"use client";

import TestimonialCarousel from "@/components/testimonial-carousel";



function TESTIMONIAL() {
  return (
    <section className=" pb-20 lg:pb-36 bg-white">
      <div className="mx-auto">
        <div className="w-[90%] xl:w-[70%] mx-auto px-0 xl:px-3 py-10 rounded-[16px]" data-aos="fade-up">
          <h1 className="text-[var(--dark1)] text-[38px]/[58px] md:text-[48px]/[71px] lg:text-[64px]/[73px] font-normal text-center mb-8">
            What Clients Say
            <span className="inline lg:block"> About <span className="text-[var(--purple1)]">Pretium Care</span></span>
          </h1>
          <TestimonialCarousel />
        </div>
      </div>
    </section>

  );
}

export default TESTIMONIAL;
