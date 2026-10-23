import React from "react";

import {
  SubjectsIcon,
  UserAccountIcon,
  VRLabsIcon,
  LearnIcon,
} from "@/icons/Icons";
const steps = [
  {
    icon: <UserAccountIcon />,
    title: "Create Account",
    info: "Sign up in seconds with your email or school credentials. Choose between student, teacher, or institution plans.",
  },
  {
    icon: <SubjectsIcon />,
    title: "Choose Subject",
    info: "Browse Physics, Chemistry, or Biology. Filter by grade level and curriculum to find the right labs.",
  },
  {
    icon: <VRLabsIcon />,
    title: "Launch VR Lab",
    info: "Put on your VR headset or use desktop mode. Enter a fully immersive virtual laboratory environment.",
  },
  {
    icon: <LearnIcon />,
    title: "Learn Immediately",
    infor:
      "Perform experiments, collect data, and test hypotheses. Real-time feedback guides your learning journey.",
  },
];

function StartProcedure() {
  return (
    <div className="font-roboto">
      <button className="flex items-center justify-center ml-164 w-32.25 text-[10px] h-6.5 rounded-lg border border-[#E4E4E4] mb-3.25 bg-[#0F766E33] text-[#474747] gap-2.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#0F766E]"></div>
        <p>How it Works</p>
      </button>

      <h1 className="text-[40px] mt-3.25 leading-[108%] whitespace-nowrap ml-110">
        Get Started in <span className="text-[#0F766E]"> 4 Simple Steps</span>
      </h1>
      <p className="text-[14px] ml-109 whitespace-nowrap mt-3.75">
        From sign-up to hands-on experimentation — your journey into virtual
        science starts here.
      </p>

      {/* Steps */}
      <div className="mt-22.5 ml-32 relative mx-auto grid w-[289%] grid-cols-4">
        <div className="absolute left-0 right-0 top-[40px] h-px bg-[#0F766E]" />{" "}
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="relative flex h-19.5 w-21 items-center justify-center bg-[#0F766E] text-white">
              <span className="flex items-center justify-center">
                {step.icon}
              </span>
              <span className="absolute -right-0.5 -top-1.5 text-[14px] bg-white w-5.25 h-5.25 rounded-full text-black">
                {index + 1}
              </span>
            </div>

            <h2 className="mt-7 text-[16px] font-semibold">{step.title}</h2>
            <p className="text-[14px] w-48 mt-2.75">{step.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StartProcedure;
