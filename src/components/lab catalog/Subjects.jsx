"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FreePremium from "../../../public/FreePremium.png";
import { BlueArrowIcon, BackArrowIcon } from "../../icons/Icons";

function Subjects() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const grade = searchParams.get("grade") || "Grade 9";

  const learnings = [
    {
      pic: FreePremium,
      subject: "Physics",
      chapters: "12 Chapters",
      labs: "48 Labs",
    },
    {
      pic: FreePremium,
      subject: "Chemistry",
      chapters: "12 Chapters",
      labs: "48 Labs",
    },
    {
      pic: FreePremium,
      subject: "Biology",
      chapters: "12 Chapters",
      labs: "48 Labs",
    },
  ];

  return (
    <div className="mt-3.25 w-full max-w-284.5 min-h-317.5 pt-11.25 pl-12.25 pr-12.25">
      {/* Breadcrumb */}
      <p className="text-[14px] text-[#727272]">
        Dashboard &gt; Lab Catalog &gt; {grade}
      </p>

      {/* Heading */}
      <h1 className="mt-2 text-[36px] font-bold">Choose a Subject</h1>

      <p className="mt-1.5 text-[14px] text-[#727272]">
        Exploring {grade} science curriculum — 16 labs available
      </p>

      {/* Back to Grades */}
      <div
        onClick={() => router.push("/lab-catalog")}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            router.push("/lab-catalog");
          }
        }}
        className="flex flex-row items-center gap-2 mt-4 cursor-pointer"
      >
        <BackArrowIcon />
        <p className="text-[14px] text-[#727272]">Back to Grades</p>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-3 gap-12 mt-7">
        {learnings.map((item) => (
          <div
            key={item.subject}
            onClick={() =>
              router.push(
                `/lab-catalog/chapter?grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(item.subject)}`,
              )
            }
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                router.push(
                  `/lab-catalog/chapters?grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(item.subject)}`,
                );
              }
            }}
            className="w-full max-w-72 h-77 mb-11 overflow-hidden rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] cursor-pointer hover:shadow-lg transition-shadow"
          >
            <img
              src={item.pic.src}
              alt={`${item.subject} virtual labs`}
              className="w-full h-43.25 object-cover rounded-xl"
            />

            <p className="text-[20px] ml-5.5 mt-2.5 font-semibold mb-3">
              {item.subject}
            </p>

            <div className="w-full border-t border-[#D4D2D2]" />

            <div className="ml-5.5 mr-2.5 flex items-center gap-2 mt-7">
              <p className="text-[14px] text-[#727272]">{item.chapters}</p>

              <p className="ml-20 text-[14px] text-[#0F766E]">{item.labs}</p>

              <BlueArrowIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;
