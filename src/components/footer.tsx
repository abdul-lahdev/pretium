import Image from "next/image";

import Link from 'next/link'
export function Footer() {
  return (
    <footer className="bg-[var(--dark4)]">
      <div className="pt-20 bg-[var(--dark4)] rounded-tl-[32px] rounded-tr-[32px] -translate-y-6">
        <div className="mx-auto">
          <div className="w-[90%] lg:w-[60%]  mx-auto px-3 py-10 rounded-[16px]">
            <div className="flex flex-col md:flex-row justify-center md:justify-between gap-5">
              <div>
                <h1 className="text-white text-[18px] font-medium">Get Started</h1>
                <ul className="mt-4 flex flex-col gap-3">
                  <li className="text-white font-normal text-[16px]">
                    <Link href="/">
                      Terms & privacy
                    </Link>
                  </li>
                  <li className="text-white font-normal text-[16px]">
                    <Link href="/">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-white text-[18px] font-medium">Get Started</h1>
                <ul className="mt-4 flex flex-col gap-3">
                  <li className="text-white font-normal text-[16px]">

                    <Link href="/features">
                      Features
                    </Link>
                  </li>
                  <li className="text-white font-normal text-[16px]">
                    <Link href="/">
                      Pricing
                    </Link>
                  </li>
                  <li className="text-white font-normal text-[16px]">
                    <Link href="/">
                      Company
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-white text-[18px] font-medium">Get Started</h1>
                <ul className="mt-4 flex flex-col gap-3">
                  <li className="text-white font-normal text-[16px]">
                    <Link href="/">
                      Terms & privacy
                    </Link>

                  </li>
                  <li className="text-white font-normal text-[16px]">
                    <Link href="/">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#494949]  mt-12 pt-12 flex justify-center">
              <Image
                width={768}
                height={768}
                src='/image/FooterImage.svg'
                alt='logo'
                className=" h-[50%] w-[50%] "
              />

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
