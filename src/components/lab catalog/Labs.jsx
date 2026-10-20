"use client";

import learning from "../../../public/learning.png";
import { ArrowIcon } from "../../icons/Icons";
import { useRouter } from "next/navigation";

function Labs() {
  const router = useRouter();

  const learnings = [
    {
      pic: learning,
      grade: "Grade 9",
      subjects: "3 Subjects",
      labs: "48 Labs",
    },
    {
      pic: learning,
      grade: "Grade 10",
      subjects: "3 Subjects",
      labs: "48 Labs",
    },
    {
      pic: learning,
      grade: "FSC Part 1",
      subjects: "3 Subjects",
      labs: "48 Labs",
    },
    {
      pic: learning,
      grade: "FSC Part 2",
      subjects: "3 Subjects",
      labs: "48 Labs",
    },
  ];

  return (
    <div className="mt-3.25 w-full max-w-284.5 min-h-317.5 pt-11.25 pl-12.25 pr-12.25">
      <p className="text-[14px] text-[#727272]">Dashboard &gt; Lab Catalog</p>

      <h1 className="mt-2 text-[36px] font-bold">Select Your Grade</h1>

      <p className="mt-1.5 text-[14px] text-[#727272]">
        Browse virtual labs organized by academic level
      </p>

      <div className="grid grid-cols-3 gap-12 mt-8">
        {learnings.map((item) => (
          <div
            key={item.grade}
            onClick={() =>
              router.push(
                `/lab-catalog/subjects?grade=${encodeURIComponent(item.grade)}`,
              )
            }
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                router.push(
                  `/lab-catalog/subjects?grade=${encodeURIComponent(item.grade)}`,
                );
              }
            }}
            className="w-full max-w-72 min-h-77 mb-11 overflow-hidden rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] cursor-pointer hover:shadow-lg transition-shadow"
          >
            <img
              src={item.pic.src}
              alt={`${item.grade} virtual labs`}
              className="w-full h-43.25 object-cover rounded-xl"
            />

            <p className="text-[20px] ml-2.5 mt-2.5 font-semibold mb-3">
              {item.grade}
            </p>

            <div className="w-full border-t border-[#D4D2D2]" />

            <div className="ml-2.5 flex items-center gap-2 mt-7">
              <p className="text-[14px] text-[#727272]">{item.subjects}</p>

              <p className="ml-26 text-[14px] text-[#727272]">{item.labs}</p>

              <ArrowIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Labs;
