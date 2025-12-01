"use client";
import Image from 'next/image'

function Hero() {
  return (
    <div className="w-full inset-0 ml-auto   pt-56 bg-white bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(228,214,237,1)_100%)]">
      <div className="w-[90%] lg:w-[70%] mx-auto " data-aos="fade-up">


        <div className="flex items-end justify-center h-full w-full pb-32">
          <div>
            <h1 className="text-[var(--dark4)] text-[35px]/[58px] md:text-[52px]/[72px] lg:text-[72px]/[88px] font-semibold capitalize text-center">
              Next-Gen Software for <span className="inline xl:block">
                Healthcare Efficiency
              </span>
            </h1>
            <p className="text-[var(--dark5)] text-[20px]/[33px] font-normal text-center mt-5">
              Science-backed wellness programs designed to improve <span className="block">your lifestyle. Take the first step now!</span>
            </p>
            <div className="flex justify-center mt-8">
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex justify-center" data-aos="fade-up">
        <Image
          src="/image/Container.jpg"
          width={2000}   // original ratio maintain ka liye large width
          height={1000}
          alt="picture"
          className="lg:w-[80%] md:w-full h-auto object-cover"
        />
      </div>



    </div>
  );
}
export default Hero;
