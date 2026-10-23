import React from "react";
import Image from "next/image";
import { Comma } from "@/icons/Icons";

function Info() {
  return (
    <div>
      {/* Testimonial Card */}
      <div className="ml-33.25 mt-18.25 flex w-fit border border-[#E4E4E4]">
        {/* Image and Comma */}
        <div className="relative h-101 w-[482px] shrink-0">
          <Image
            className="h-full w-full object-cover"
            src="/RL.jpg"
            alt="Rimsha Latif"
            width={482}
            height={404}
          />

          {/* Comma on top-right of image */}
          <div className="absolute -right-8 -top-8 flex h-18.5 w-18.5 items-center justify-center rounded-full bg-[#D9D9D9]">
            <Comma />
            <div className="-ml-4">
              <Comma />
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="flex flex-col">
          <p className="ml-15.5 mt-20.25 w-142.25 font-roboto text-[20px]">
            VR Labs has transformed how my students understand abstract physics
            concepts. The projectile motion lab alone improved test scores by
            35%. Students are genuinely excited about science now.
          </p>

          <p className="ml-15.5 mt-18.5 font-roboto text-[24px] font-semibold">
            Rimsha Latif
          </p>

          <p className="ml-15.5 mt-2.5 font-roboto text-[20px] text-[#838383]">
            Stanford Online High School
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="ml-162 mt-14 flex flex-row items-center justify-center mb-23.75 gap-1 font-roboto text-[20px]">
        <p className="mt-2">01</p>

        {/* <div className="h-[4px] w-[92px] overflow-hidden rounded-full bg-[#CFCFCF]">
          <div className="h-full w-[31px] rounded-full bg-[#0F766E]" /> */}
        <div className=" w-[92px] mt-2 border rounded-full h-1.5 border-[#CFCFCF] bg-[#CFCFCF] absolute ">
          <div
            className="
                    h-full
                    rounded-full
                   border border-[#0F766E] bg-[#0F766E]
                   w-[31px]
                  "
          />
        </div>

        <p className="ml-24 mt-2">04</p>
      </div>
    </div>
  );
}

export default Info;
