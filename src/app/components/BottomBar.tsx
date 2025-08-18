// components/BottomBar.tsx
"use client";

import { useState } from "react";

export default function BottomBar() {
  const [openForm, setOpenForm] = useState<null | "investor" | "company">(null);

  return (
    <>
      {/* Sticky Bottom Bar */}
      <div className="hidden lg:flex fixed bottom-0 left-0 w-full bg-[#DD4D2B] h-[62px]  items-center justify-between px-6 z-50">
        <p className="font-open font-bold text-lg leading-6 tracking-normal">
          Get in touch with us today
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setOpenForm("investor")}
            className="bg-white text-[#DD4D2B] flex justify-center items-center px-6 py-2 rounded-full font-[14px] hover:opacity-90"
          >
            <span className="text-[14px] leading-[20px]">for Investor</span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_23_33334"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="25"
                height="25"
              >
                <rect
                  x="24.6914"
                  y="24.2202"
                  width="24"
                  height="24"
                  transform="rotate(180 24.6914 24.2202)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_23_33334)">
                <path
                  d="M12.6914 9.22015L17.6914 14.2202L7.69141 14.2202L12.6914 9.22015Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </button>
          <button
            onClick={() => setOpenForm("company")}
            className="bg-white text-[#DD4D2B] flex justify-center items-center px-6 py-2 rounded-full font-[14px] hover:opacity-90"
          >
            <span className="text-[14px] leading-[20px]">for Company</span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_23_33334"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="25"
                height="25"
              >
                <rect
                  x="24.6914"
                  y="24.2202"
                  width="24"
                  height="24"
                  transform="rotate(180 24.6914 24.2202)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_23_33334)">
                <path
                  d="M12.6914 9.22015L17.6914 14.2202L7.69141 14.2202L12.6914 9.22015Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Popup Form Modal */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            className={`p-6 rounded-xl w-[400px] shadow-lg ${
              openForm === "investor"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            <h2 className="text-[14px] font-bold mb-4">
              {openForm === "investor" ? "Investor Form" : "Company Form"}
            </h2>

            {/* Form */}
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className={`p-2 rounded-[16px] text-[16px] border-none w-full h-[40px] ${
                  openForm === "investor"
                    ? "bg-[#333333] text-white"
                    : "bg-[#EAEAEA] text-black"
                }`}
              />
              <input
                type="email"
                placeholder="Email"
                className={`p-2 rounded-[16px] border-none text-[16px] w-full h-[40px] ${
                  openForm === "investor"
                    ? "bg-[#333333] text-white"
                    : "bg-[#EAEAEA] text-black"
                }`}
              />
              {openForm === "company" && (
                <input
                  type="text"
                  placeholder="Select Company"
                  className="p-2 rounded-[16px] text-[16px] border-none w-full h-[40px] bg-[#EAEAEA] text-black"
                />
              )}
              <textarea
                placeholder="Message"
                className={`p-2 rounded-[16px] border-none w-full text-[14px] h-[80px] ${
                  openForm === "investor"
                    ? "bg-[#333333] text-white"
                    : "bg-[#EAEAEA] text-black"
                }`}
              ></textarea>
              <button
                type="submit"
                className="bg-[#DD4D2B] text-white py-2 text-[14px] rounded-full mt-2 hover:opacity-90"
              >
                Submit
              </button>
            </form>

            <button
              onClick={() => setOpenForm(null)}
              className="mt-4 text-sm underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
