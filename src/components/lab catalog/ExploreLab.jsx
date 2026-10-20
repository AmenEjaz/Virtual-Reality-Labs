import React from "react";

import {
  ArrowIcon,
  SubjectIcon,
  GradeLevelIcon,
  ChapterIcon,
  ClockIcon,
  StarIcon,
  AccessIcon,
  BlueTickIcon,
  BackArrowIcon,
} from "../../icons/Icons";

import learning from "../../../public/learning.png";
function ExploreLab() {
  const learningObjectives = [
    "Understand core Physics principles and theories",
    "Apply scientific methodology in experiments",
    "Collect and analyze experimental data",
    "Develop critical thinking and problem-solving skills",
    "Connect theoretical knowledge with practical applications",
    "Complete assessments with detailed performance feedback",
  ];

  const recommendedLabs = [
    {
      title: "Projectile Motion Lab",
      image: learning,
      duration: "25 min",
      grade: "Grade 9-12",
    },
    {
      title: "Projectile Motion Lab",
      image: learning,
      duration: "25 min",
      grade: "Grade 9-12",
    },
    {
      title: "Projectile Motion Lab",
      image: learning,
      duration: "25 min",
      grade: "Grade 9-12",
    },
  ];

  return (
    // <div className="-[1138px] min-h-[1462px] bg-[#F7FAF9] px-13.25 font-roboto text-[#111111]">
    <div className="w-full min-h-[1449] bg-[#F7FAF9] px-8 xl:px-13.25 font-roboto text-[#111111]">
      <div className="mb-[18px] text-[14px] font-medium text-[#727272] mt-12 ">
        Dashboard &gt; Lab Catalog &gt; Projectile Motion Lab
      </div>

      <div className="flex items-start ">
        {/* LEFT SIDE */}

        <div className="w-[680px] shrink-0 mt-6.5">
          {/* ================= HERO IMAGE ================= */}
          <div className="h-[362px] w-[680px] overflow-hidden rounded-[18px]">
            <img
              src="/ScienceLab.png"
              alt="Projectile Motion Lab"
              className="h-full w-full object-cover"
            />
          </div>

          {/* ABOUT THIS LAB  */}
          <div className="mt-9.5 h-58.5 w-170 rounded-[22px] bg-white px-8.75 py-7.5">
            <h2 className="mb-4.5 text-[20px] font-semibold">About This Lab</h2>

            <p className="w-[613px] text-justify text-[14px] font-normal leading-[133%] text-[#727272]">
              Explore how launch angle, initial velocity, and gravity affect
              projectile trajectories in a virtual environment.
            </p>
            <p className="w-[613px] mb-13 text-justify text-[14px] font-normal leading-[133%] text-[#727272]">
              {" "}
              This immersive VR laboratory provides hands-on experience with
              physics concepts at the 9-12 level. Students will interact with 3D
              models, conduct virtual experiments, and receive real-time
              feedback on their understanding. The lab includes 5 interactive
              modules with progressive difficulty, auto-graded assessments, and
              detailed performance analytics.
            </p>
          </div>

          {/* LEARNING OBJECTIVES ================= */}
          <div className="mt-4.5 w-170 h-67.75  bg-white px-[36px] px-8.25 py-9.75 ">
            <h2 className="mb-4.5 text-[20px] font-semibold">
              Learning Objectives
            </h2>

            <div className="grid grid-cols-2  gap-y-5">
              {learningObjectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-[9px]">
                  {/* Check Circle */}
                  <div className=" w-6 h-6 rounded-full bg-[#D7F9FF] flex items-center justify-center ">
                    <BlueTickIcon />
                  </div>

                  <p className="w-63.25 text-[14px] leading-[133%] text-[#727272]">
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/*  LABS  */}

          <div className="mt-9.5">
            <h2 className="text-[24px] font-semibold">
              Because you completed...
            </h2>

            <p className="mt text-[14px] text-[#727272]">
              AI-matched based on your performance
            </p>

            {/* Cards */}

            <div className="mt-5 flex gap-15">
              {recommendedLabs.map((lab, index) => (
                <div
                  key={index}
                  className="w-72 h-69.75 shrink-0 overflow-hidden rounded-[10px] border border-[#D8D8D8] bg-white shadow-[0px_2px_4px_0px_#00000040"
                >
                  {/* Card Image */}
                  <div className="relative h-[145px] w-full overflow-hidden">
                    <img
                      src={lab.image.src}
                      alt={lab.title}
                      className="h-43.25 rounded-xl w-full object-cover"
                    />

                    {/* Free */}
                    <div className="absolute right-5 top-3.5 rounded-lg bg-[#C5C5C5] px-6.25 py text-[14px] text-white">
                      Free
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="px-6 pt-6">
                    <h3 className="text-[20px] font-semibold ">{lab.title}</h3>

                    <p className="mt-3.25 text-[14px] text-[#A1A1A1]">
                      {lab.duration}
                      <span className="mx-2">·</span>
                      {lab.grade}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="ml-4.5 w-80 h-111.5 shrink-0 ">
          {/* ================= LAB INFO ================= */}
          <div className="h-111.5  rounded-[4px] bg-white px-[27px] py-[25px]">
            <h2 className="mb-7 text-[16px] font-semibold">Lab Info</h2>

            {/* Subject */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-6 w-6 bg-[#D7F9FF] items-center justify-center">
                <SubjectIcon className="h-[15px] w-[15px]" />
              </div>

              <div>
                <p className="text-[10px] text-[#B9B7B7]">Subject</p>

                <p className="text-[14px] font-medium">Physics</p>
              </div>
            </div>

            {/* Grade Level */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-6 w-6 bg-[#D7F9FF] items-center justify-center">
                <GradeLevelIcon className="h-[15px] w-[15px]" />
              </div>

              <div>
                <p className="text-[10px] text-[#B9B7B7]">Grade Level</p>

                <p className="text-[14px] font-medium">9-12</p>
              </div>
            </div>

            {/* Chapter */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-6 w-6 bg-[#D7F9FF] items-center justify-center">
                <ChapterIcon className="h-[15px] w-[15px]" />
              </div>

              <div>
                <p className="text-[10px] text-[#B9B7B7]">Chapter</p>

                <p className="text-[14px] font-medium">Projectile Motion</p>
              </div>
            </div>

            {/* Duration */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-6 w-6 bg-[#D7F9FF] items-center justify-center">
                <ClockIcon className="h-[15px] w-[15px]" />
              </div>

              <div>
                <p className="text-[10px] text-[#B9B7B7]">Duration</p>

                <p className="text-[14px] font-medium">25 min</p>
              </div>
            </div>

            {/* Access */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-6 w-6 bg-[#D7F9FF] items-center justify-center">
                <AccessIcon className="h-[15px] w-[15px]" />
              </div>

              <div>
                <p className="text-[10px] text-[#B9B7B7]">Access Type</p>

                <p className="text-[14px] font-medium">Free</p>
              </div>
            </div>

            {/* Rating */}
            <div className=" flex items-center gap-3">
              <div className="flex h-6 w-6 bg-[#D7F9FF] items-center justify-center">
                <AccessIcon className="h-[15px] w-[15px]" />
              </div>

              <div>
                <p className="text-[10px] text-[#B9B7B7]">Rating</p>

                <p className="text-[14px] font-medium ">
                  4.8/5.0 (12,500 completions)
                </p>
              </div>
            </div>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-16 pl-7 ">
            {/* Launch */}
            <button className="h-7.25 w-64 rounded-lg bg-[#0F766E] text-[14px] font-medium text-white">
              Launch Lab
            </button>

            {/* Save */}
            <button className="mt-3.5 h-[32px] w-[315px] rounded-lg border border-[#B3B1B1] bg-white text-[14px] text-[#9A9A9A]">
              Save Lab
            </button>

            {/* Back */}
            <button className=" mt-3.75 ml-29 flex  items-center justify-center gap-2 text-[10px] text-[#989797]">
              <BackArrowIcon />
              Back to Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreLab;
