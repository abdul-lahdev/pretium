"use client";


function Hero() {
  return (
    <div className="w-full">
      <div className="w-full inset-0 ml-auto  py-32
  bg-[linear-gradient(180.14deg,rgba(10,20,13,0)_-72.47%,#0A140D_99.88%),url('/image/Background.jpg')]
  bg-cover bg-center backdrop-blur-[16px] ">


        <div className="flex items-end justify-center h-full">
          <div style={{ minHeight: '100vh' }} className="xl:w-[80%] lg:w-[90%] w-[90%] grid xl:grid-cols-2 lg:grid-cols-1 gap-3 mt-16">
            <div className="" data-aos="fade-right">
              <h1 className="text-white font-medium text-[50px]/[50px] sm:text-[55px]/[66px] md:text-[60px]/[114px] lg:text-[95px]/[102px] xl:text-[104px]/[114px]">
                Your Health Companion
              </h1>
              <p className="text-white font-medium text-[24px] xl:mt-4 mt-2">Support, understanding, and healing are closer than you think.</p>

              <button className="btn btn-primary mt-10">Book A Free Session</button>
              <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-2 gap-5 mt-8">
                <div>
                  <h2 className="text-white font-medium xl:text-[64px]/[73px] lg:text-[57px]/[70px] text-[50px]/[68px]">10K</h2>
                  <p className="text-white font-medium text-[24px]/[28px]">Lives Touched</p>
                </div>
                <div>
                  <h2 className="text-white font-medium xl:text-[64px]/[73px] lg:text-[57px]/[70px] text-[50px]/[68px]">92%</h2>
                  <p className="text-white font-medium text-[24px]/[28px]">Satisfaction Rate</p>
                </div>
                <div>
                  <h2 className="text-white font-medium xl:text-[64px]/[73px] lg:text-[57px]/[70px] text-[50px]/[68px]">24/7</h2>
                  <p className="text-white font-medium text-[24px]/[28px]">Crisis Response</p>
                </div>
              </div>
            </div>
            <div className="xl:flex lg:hidden hidden flex-col items-end justify-start relative" data-aos="fade-left">
              <div className="absolute w-[400px] z-10 h-[600px] rounded-2xl border-spacing-2 border-[#7026A1] shadow-[4px_4px_50px_0_#7026A114] bg-[url(/image/heroSecond.png)] bg-no-repeat bg-cover bg-center "></div>
              <div className="absolute translate-x-10 translate-y-12 w-[490px] h-[500px] rounded-2xl border-spacing-2 border-[#7026A1] shadow-[4px_4px_50px_0_#7026A114] bg-[url(/image/heroRight.png)] bg-no-repeat bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
export default Hero;
