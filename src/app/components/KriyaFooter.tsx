"use client";

import React from "react";
import Link from "next/link";

const KriyaFooter = () => {
  return (
    <footer className="w-full bg-[#7C3AED] rounded-t-3xl text-white px-[10%] py-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
        {/* Left Section - Company */}
        <div className="col-span-2 md:col-span-1 ">
          <h2 className="font-['Zilla_Slab'] font-bold text-[45px] leading-[52px] mb-4">
            Company
          </h2>
          <p className="font-['Open_Sans'] text-[16px] leading-6 tracking-[0.5px] max-w-[351px]">
            Lorem ipsum dolor sit amet consectetur. Tellus elementum ultricies
            sed in risus ac egestas
          </p>
        </div>

        {/* Middle Section - Links */}
        <div className="grid col-span-1 items-center">
          <h3 className="font-['Bakbak_One'] text-[18px] leading-7 mb-4">
            LINKS
          </h3>
          <ul className="space-y-3  font-['Poppins'] text-[16px] leading-6 flex flex-col items-start">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/works">Our Works</Link>
            </li>
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Socials */}
        <div className="grid col-span-1">
          <h3 className="font-['Bakbak_One'] text-[18px] leading-7 mb-4">
            CONNECT WITH US
          </h3>
          <ul className="space-y-3 list-none font-['Poppins'] text-[16px] leading-6">
            <li className="flex items-center gap-2">
              {" "}
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7543 1.90967C6.92234 1.90967 2.19434 6.63767 2.19434 12.4697C2.19434 17.7641 6.09434 22.1354 11.1761 22.8991V15.2685H8.56346V12.4927H11.1761V10.6457C11.1761 7.58759 12.666 6.24503 15.2076 6.24503C16.4249 6.24503 17.0686 6.33527 17.3734 6.37655V8.79959H15.6396C14.5606 8.79959 14.1838 9.82247 14.1838 10.9754V12.4927H17.346L16.9169 15.2685H14.1838V22.9217C19.338 22.2223 23.3143 17.8154 23.3143 12.4697C23.3143 6.63767 18.5863 1.90967 12.7543 1.90967Z"
                  fill="white"
                />
              </svg>
              Facebook
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.43531 1.84131C4.99371 1.84131 2.19531 4.63971 2.19531 8.08131V16.7213C2.19531 20.1629 4.99371 22.9613 8.43531 22.9613H17.0753C20.5169 22.9613 23.3153 20.1629 23.3153 16.7213V8.08131C23.3153 4.63971 20.5169 1.84131 17.0753 1.84131H8.43531ZM18.5153 5.68131C19.0433 5.68131 19.4753 6.11331 19.4753 6.64131C19.4753 7.16931 19.0433 7.60131 18.5153 7.60131C17.9873 7.60131 17.5553 7.16931 17.5553 6.64131C17.5553 6.11331 17.9873 5.68131 18.5153 5.68131ZM12.7553 7.12131C15.6689 7.12131 18.0353 9.48771 18.0353 12.4013C18.0353 15.3149 15.6689 17.6813 12.7553 17.6813C9.84171 17.6813 7.47531 15.3149 7.47531 12.4013C7.47531 9.48771 9.84171 7.12131 12.7553 7.12131ZM12.7553 8.08131C10.3745 8.08131 8.43531 10.0205 8.43531 12.4013C8.43531 14.7821 10.3745 16.7213 12.7553 16.7213C15.1361 16.7213 17.0753 14.7821 17.0753 12.4013C17.0753 10.0205 15.1361 8.08131 12.7553 8.08131Z"
                  fill="white"
                />
              </svg>
              Instagram
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.746 7.29283C21.5548 6.23721 20.6435 5.46846 19.586 5.22846C18.0035 4.89283 15.0748 4.65283 11.906 4.65283C8.73914 4.65283 5.76352 4.89283 4.17914 5.22846C3.12352 5.46846 2.21039 6.18846 2.01914 7.29283C1.82602 8.49283 1.63477 10.1728 1.63477 12.3328C1.63477 14.4928 1.82602 16.1728 2.06602 17.3728C2.25914 18.4285 3.17039 19.1972 4.22602 19.4372C5.90602 19.7728 8.78602 20.0128 11.9548 20.0128C15.1235 20.0128 18.0035 19.7728 19.6835 19.4372C20.7391 19.1972 21.6504 18.4772 21.8435 17.3728C22.0348 16.1728 22.2748 14.4441 22.3235 12.3328C22.226 10.1728 21.986 8.49283 21.746 7.29283ZM9.31477 15.6928V8.97283L15.1704 12.3328L9.31477 15.6928Z"
                  fill="white"
                />
              </svg>
              YouTube
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.19531 17.2661C1.64531 17.2661 1.17448 17.0703 0.782813 16.6786C0.391146 16.2869 0.195312 15.8161 0.195312 15.2661C0.195312 14.7161 0.391146 14.2453 0.782813 13.8536C1.17448 13.4619 1.64531 13.2661 2.19531 13.2661C2.74531 13.2661 3.21615 13.4619 3.60781 13.8536C3.99948 14.2453 4.19531 14.7161 4.19531 15.2661C4.19531 15.8161 3.99948 16.2869 3.60781 16.6786C3.21615 17.0703 2.74531 17.2661 2.19531 17.2661ZM14.1953 17.2661C14.1953 15.3161 13.8286 13.4953 13.0953 11.8036C12.362 10.1119 11.362 8.63278 10.0953 7.36611C8.82865 6.09945 7.34948 5.09945 5.65781 4.36611C3.96615 3.63278 2.14531 3.26611 0.195312 3.26611V0.266113C2.56198 0.266113 4.77031 0.70778 6.82031 1.59111C8.87031 2.47445 10.6703 3.69111 12.2203 5.24111C13.7703 6.79111 14.987 8.59111 15.8703 10.6411C16.7536 12.6911 17.1953 14.8994 17.1953 17.2661H14.1953ZM8.19531 17.2661C8.19531 16.1494 7.98698 15.1119 7.57031 14.1536C7.15365 13.1953 6.57865 12.3494 5.84531 11.6161C5.11198 10.8828 4.26615 10.3078 3.30781 9.89111C2.34948 9.47445 1.31198 9.26611 0.195312 9.26611V6.26611C1.72865 6.26611 3.15781 6.55361 4.48281 7.12861C5.80781 7.70361 6.97031 8.49111 7.97031 9.49111C8.97031 10.4911 9.75781 11.6536 10.3328 12.9786C10.9078 14.3036 11.1953 15.7328 11.1953 17.2661H8.19531Z"
                  fill="white"
                />
              </svg>
              Blog
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default KriyaFooter;
