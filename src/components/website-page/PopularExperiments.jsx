"use client";

import React from "react";
import Image from "next/image";
import exp1 from "../../../public/exp1.png";
import exp2 from "../../../public/exp2.png";
import exp3 from "../../../public/exp3.png";
import {
  Chapters,
  GradesIcon,
  Lab,
  NextArrow,
  WNextIcon,
} from "../../icons/Icons";

const labs = [
  {
    pic: exp1,
    status: "Free",
    subject: "Physics",
    grade: "Grade 9-12",
    title: "Projectie Motion Lab",
    des: "Calculate trajectories, adjust launch angles, and study gravity in an immersive 3D physics environment.",
  },
  {
    pic: exp2,
    status: "Premium",
    subject: "Chemistry",
    grade: "Grade 9-12",
    title: "Chemical Bonding Explorer",
    des: "Visualize ionic, covalent, and metallic bonds in 3D. Manipulate atoms and see molecular structures form in real-time.",
  },
  {
    pic: exp3,
    status: "Free",
    subject: "Biology",
    grade: "Grade 9-12",
    title: "Cell Division & Mitosis",
    info: "Zoom into a living cell and watch mitosis unfold step by step. Interact with chromosomes and spindle fibers.",
  },
];

function PopularExperiments() {
  return (
    <div>
      <div className="w-360 h-182.5 bg-[#E8E8E84D] mt-16">
        <button className="w-27.25 h-6.5 rounded-lg ml-166.5 border gap-2 border-[#E4E4E4] bg-[#0F766E33] flex flex-row items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#0F766E] rounded-full"></div>
          <p className="text-[10px] text-[#474747]">Featured Labs</p>
        </button>

        <h1 className="text-[48px]  ml-98 font-bold mt-2">
          Popular Virtual Experiments
        </h1>

        <p className="text-[14px] mt-2  text-center mb-12">
          Discover our most popular interactive labs, loved by students and
          teachers alike.{" "}
        </p>

        <div className="flex flex-row gap-7 ml-33.25">
          {labs.map((lab) => (
            <div
              key={lab.subject}
              className="w-93 h-110.5 rounded-lg border  border-[#D9D9D9] shadow-[0px_4px_4px_0px_#00000040] bg-[#0F766E]"
            >
              <div className="relative w-full h-59.75">
                <Image
                  src={lab.pic}
                  alt={`${lab.subject} virtual lab`}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-5.75 ">
                <div className="flex gap-3.5 items-center ">
                  <p className="text-[14px] w-22.25 h-6 text-center rounded-[20px] bg-white text-[#0F766E] ">
                    {lab.subject}
                  </p>
                  <div className=" flex gap-2 text-14px] text-[#CCCCCC] items-center">
                    <GradesIcon />
                    Grade 9-12
                  </div>
                </div>

                <p className="text-[14px] leading-[133%] mt-3.5 text-white">
                  {lab.title}
                </p>
                <p className="text-[14px] leading-[133%] mt-2 text-white">
                  {lab.des}
                </p>

                <div className="flex mt-3.75 items-center gap-2">
                  <p className="text-[14px] text-white leading-[133%]">
                    Launch Lab
                  </p>
                  <WNextIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularExperiments;
