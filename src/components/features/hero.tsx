"use client";
import Image from 'next/image'

function Hero() {
  return (
    <div className="w-full">
      <div className="w-full inset-0 ml-auto  pb-32 pt-56 bg-white bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(228,214,237,1)_100%)]">


        <div className="flex items-end justify-center h-full">
          <div>
            <h1 className="text-[var(--dark4)] text-[72px]/[88px] font-semibold capitalize textcenter">
              Next-Gen Software for <span className="block">
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

      <div className="w-full flex justify-center">
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
