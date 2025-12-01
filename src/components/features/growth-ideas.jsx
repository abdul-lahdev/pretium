"use client";

export default function GrowthIdeas() {
  return (
    <div className="w-full bg-gradient-to-b from-purple-100 to-purple-200 pt-20 ">

      <div className="flex flex-col items-center text-center w-[90%] mx-auto" data-aos="fade-up">


        {/* Heading */}
        <h1 className="text-[38px]/[44px] md:text-[50px]/[76px] lg:text-[72px]/[82px] font-semibold text-[var(--dark4)]">
          Turn your growth ideas <br className=" hidden xl:block" /> into reality <br className=" hidden xl:block" /> today
        </h1>

        {/* Subheading */}
        <p className="text-[#4E5157] font-normal text-[20px]/[33px] mt-4">
          Start your journey to seamless healthcare management today!
        </p>

        {/* Button */}
        <button className="mt-6 btn-primary text-white px-8 py-3 rounded-full transition font-semibold">
          Get Started
        </button>

        {/* Image Section */}
        <div className="mt-12 w-full flex justify-center">
          <img
            src="/image/tablet.png"
            alt="Dashboard preview"
            className="w-[90%] md:w-[600px] drop-shadow-2xl"
          />
        </div>
      </div>



    </div>
  );
}
