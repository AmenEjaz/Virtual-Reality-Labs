"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FreePremium from "../../../public/FreePremium.png";
import { BackArrowIcon, SearchIcon } from "../../icons/Icons";

function PhysicsLabs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const grade = searchParams.get("grade") || "Grade 9";
  const subject = searchParams.get("subject") || "Physics";
  const chapter = searchParams.get("chapter") || "Measurements & Units";

  const labs = [
    {
      pic: FreePremium,
      subject: "Physics",
      lab: "Projectile Motion Lab",
      info: "Explore how launch angle, initial velocity, and gravity affect projectile",
      grade: "Grade 9-12",
      status: "Free",
    },
    {
      pic: FreePremium,
      subject: "Physics",
      lab: "Projectile Motion Lab",
      info: "Explore how launch angle, initial velocity, and gravity affect projectile",
      grade: "Grade 9-12",
      status: "Free",
    },
    {
      pic: FreePremium,
      subject: "Physics",
      lab: "Projectile Motion Lab",
      info: "Explore how launch angle, initial velocity, and gravity affect projectile",
      grade: "Grade 9-12",
      status: "Premium",
    },
    {
      pic: FreePremium,
      subject: "Physics",
      lab: "Projectile Motion Lab",
      info: "Explore how launch angle, initial velocity, and gravity affect projectile",
      grade: "Grade 9-12",
      status: "Free",
    },
    {
      pic: FreePremium,
      subject: "Physics",
      lab: "Projectile Motion Lab",
      info: "Explore how launch angle, initial velocity, and gravity affect projectile",
      grade: "Grade 9-12",
      status: "Premium",
    },
    {
      pic: FreePremium,
      subject: "Physics",
      lab: "Projectile Motion Lab",
      info: "Explore how launch angle, initial velocity, and gravity affect projectile",
      grade: "Grade 9-12",
      status: "Premium",
    },
  ];

  return (
    <div className="mt-3.25 w-full max-w-284.5 min-h-317.5 pt-11.25 pl-12.25 pr-12.25">
      {/* Breadcrumb */}
      <p className="text-[14px] text-[#727272]">
        Dashboard &gt; Lab Catalog &gt; {grade} &gt; {subject} &gt; {chapter}
      </p>

      {/* Heading */}
      <h1 className="mt-2 text-[36px] font-bold">{subject} Labs</h1>
      <p className="mt-1.5 text-[14px] text-[#727272]">
        {labs.length} labs in this chapter
      </p>

      {/* Back to Chapters */}
      <div
        onClick={() =>
          router.push(
            `/lab-catalog/chapter?grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(subject)}`,
          )
        }
        role="link"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            router.push(
              `/lab-catalog/chapter?grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(subject)}`,
            );
          }
        }}
        className="flex items-center gap-2 mt-4 cursor-pointer"
      >
        <BackArrowIcon />
        <p className="text-[14px] text-[#727272]">Back to Chapters</p>
      </div>

      {/* Search */}
      <div className="flex items-center pt-8.5 pl-8.5">
        <SearchIcon />
        <input
          type="text"
          className="ml-2.5 text-[14px] text-[#727272] font-semibold font-roboto outline-none"
          placeholder="Search Labs by Name, Topic..."
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap mt-2.5  items-center gap-3  ml-8.5">
        <button className="h-8 px-5 rounded bg-[#0F766E] text-sm text-white">
          All Types
        </button>
        <button className="h-8 px-5 rounded bg-[#F5F5F5] text-sm text-[#7D7D7D]">
          Free
        </button>
        <button className="h-8 px-5 rounded bg-[#F5F5F5] text-sm text-[#7D7D7D]">
          Premium
        </button>
        <p className="ml-auto text-[14px] text-[#727272]">
          Showing {labs.length} of {labs.length} Labs
        </p>
      </div>

      {/* Lab Cards */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-[15px] mt-7">
        {labs.map((item, index) => (
          <div
            key={`${item.lab}-${index}`}
            onClick={() =>
              router.push(
                `/lab-catalog/lab-details?grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(item.subject)}&chapter=${encodeURIComponent(chapter)}&lab=${encodeURIComponent(item.lab)}`,
              )
            }
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                router.push(
                  `/lab-catalog/lab-details?grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(item.subject)}&chapter=${encodeURIComponent(chapter)}&lab=${encodeURIComponent(item.lab)}`,
                );
              }
            }}
            className="w-full max-w-72 min-h-[354px] overflow-hidden rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] cursor-pointer hover:shadow-lg transition-shadow"
          >
            {/* <img
              src={item.pic.src}
              alt={`${item.subject} virtual lab`}
              className="w-full h-[173px] object-cover"
            /> */}

            <div className="relative w-full">
              <img
                src={item.pic.src}
                alt={`${item.subject} virtual lab`}
                className="w-full h-[173px] object-cover"
              />

              <span
                className={`absolute top-[14px] left-[190px] w-[79px] h-[24px] rounded-[10px] flex items-center justify-center text-white text-[14px] ${
                  item.status === "Premium" ? "bg-[#8B5CF6]" : "bg-[#C5C5C5]"
                }`}
              >
                {item.status}
              </span>
            </div>

            <p className="w-fit rounded-xl px-3 py-1 text-[14px] text-[#0F766E] ml-6 mt-2.5 bg-[#06B6D42E] mb-2">
              {item.subject}
            </p>

            <h3 className="text-[20px] px-6 font-semibold">{item.lab}</h3>

            <p className="px-6 mt-2 text-[14px] text-[#A1A1A1]">{item.info}</p>

            <div className="mt-4 px-6 pb-4 flex items-center justify-between gap-5">
              <p className="text-[14px] text-[#A1A1A1]">{item.grade}</p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(
                    `/lab-catalog/lab-details?grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(item.subject)}&chapter=${encodeURIComponent(chapter)}&lab=${encodeURIComponent(item.lab)}`,
                  );
                }}
                className="w-32 h-7.25 rounded-lg px-3 py-1 text-[14px] bg-[#0F766E] text-white cursor-pointer"
              >
                Launch Lab
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PhysicsLabs;
