import React from "react";

import {
  InteractionIcon,
  RealLabIcon,
  AccessibleIcon,
  ExperimentIcon,
  CurriculumIcon,
  VRTechIcon,
} from "@/icons/Icons";
const experience = [
  {
    icon: <InteractionIcon />,
    title: "Interactive Learning",
    info: "Hands-on experiments boost retention by 400% compared to textbook-only learning methods.",
  },
  {
    icon: <RealLabIcon />,
    title: "Real Lab Experience",
    info: "Browse Physics, Chemistry, or Biology. Filter by grade level and curriculum to find the right labs.",
  },
  {
    icon: <ExperimentIcon />,
    title: "Safe Experimentation",
    info: "Learn from any device with internet access. No physical lab infrastructure required — democratizing science education.",
  },

  {
    icon: <AccessibleIcon />,
    title: "Accessible Anywhere",
    info: "No risk of chemical spills, burns, or equipment damage. Experiment fearlessly with unlimited attempts.",
  },

  {
    icon: <CurriculumIcon />,
    title: "Safe Experimentation",
    info: "All labs mapped to NGSS, IB, CBSE, and national standards. Seamlessly integrates with your existing lesson plans.",
  },
  {
    icon: <VRTechIcon />,
    title: "Safe Experimentation",
    info: "Cutting-edge VR with spatial audio, haptic feedback support, and photorealistic 3D environments.",
  },
];

function ScienceFuture() {
  return (
    <div className="font-roboto mt-35">
      <button className="flex items-center justify-center ml-164 w-32.25 text-[10px] h-6.5 rounded-lg border border-[#E4E4E4] mb-3.25 bg-[#0F766E33] text-[#474747] gap-2.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#0F766E]"></div>
        <p>Why VR Labs</p>
      </button>

      <h1 className="text-[40px] mt-3.25 leading-[108%] font-bold whitespace-nowrap ml-110">
        The Future of Science Education{" "}
      </h1>
      <p className="text-[14px] ml-109  text-center w-142 mt-3.75">
        Our platform combines cutting-edge VR technology with proven pedagogical
        methods to deliver an unparalleled learning experience.
      </p>

      {/* Steps */}
      <div
        className="mt-12.5 ml-32 grid gap-6.25 "
        style={{ gridTemplateColumns: "repeat(3, 376px)" }}
      >
        {experience.map((exp, index) => (
          <div
            key={index}
            className="w-94 h-58 border border-[#CDCDCD] pt-10.5 pl-7.5"
          >
            <div className="flex h-10.75 w-12.5 items-center justify-center bg-[#0F766E] text-white">
              {exp.icon}
            </div>

            <h2 className="mt-4.75 text-[16px] font-bold">{exp.title}</h2>

            <p className="text-[14px] w-72 mt-1.5">{exp.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScienceFuture;
