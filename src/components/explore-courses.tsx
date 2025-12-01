"use client";



export function ExploreCourses() {
  return (
    <section className="py-20 xl:py-36 bg-white">
      <div className="mx-auto">
        <div className="w-[90%] lg:xl-[70%] mx-auto px-0 xl:px-3 py-10 rounded-[16px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5" data-aos="fade-up">
            <div>
              <h1 className="text-black text-[38px]/[58px] md:text-[48px]/[71px] lg:text-[64px]/[73px] font-normal">
                Making each step <span className="inline xl:block">of care</span>
                simple for your health
              </h1>
              <ul className="flex flex-col gap-5 mt-8">
                <li className="flex items-center gap-3">
                  <div className="bg-[#7026A1] rounded-full w-[28px] h-[28px] flex items-center justify-center">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                  </div>
                  <p className="text-[var(--dark3)] text-[20px]/[24px] font-medium">Book appointments in just minutes</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-[#7026A1] rounded-full w-[28px] h-[28px] flex items-center justify-center">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                  </div>
                  <p className="text-[var(--dark3)] text-[20px]/[24px] font-medium">Access reports directly from your phone</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-[#7026A1] rounded-full w-[28px] h-[28px] flex items-center justify-center">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                  </div>
                  <p className="text-[var(--dark3)] text-[20px]/[24px] font-medium">Receive expert follow-ups with ease</p>
                </li>
              </ul>
            </div>
            <div className="mt-8 xl:mt-0">
              <div className="flex gap-3">
                <div className="w-[45px] h-[45px] rounded-[3px] shadow-[4px_4px_12px_0_#0000001A] bg-cover bg-center bg-[url(/image/trustImg.png)] rotate-2"></div>
                <p className="text-black font-normal text-[24px]/[37px]">With years of trusted medical experience,</p>
              </div>
              <p className="text-[24px] font-normal text-black">
                our team works closely
                <span className="text-[var(--dark3)] "> with patients to make this
                  healthcare simple and clear</span>
              </p>
              <p className="text-[24px] font-normal text-black mt-8">
                Quality care takes consistency and patience. By
                staying connected
                <span className="text-[var(--dark3)] "> every day, patients achieve
                  better outcomes that last.</span>
              </p>
              <p className="text-[24px] font-normal text-black mt-8">
                We believe in reducing stress, improving access,
                and creating a
                <span className="text-[var(--dark3)] "> smoother journey so every patient
                  feels supported.</span>
              </p>

              <div className="bg-[var(--purple1)] rounded-[24px] w-full px-8 py-5 shadow-[0_1px_15px_0_#00000026] flex flex-col md:flex-row  items-center gap-8 mt-5">
                <h4 className="text-white font-semibold text-[42px]/[42px]">87%</h4>
                <p className="text-white font-medium text-[20px]/[26px]">Patients reported faster access & improved
                  satisfaction when using Healthjoy.</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ExploreCourses;
