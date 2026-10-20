"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { BackArrowIcon, BlueArrowIcon } from "../../icons/Icons";

function Chapter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const grade = searchParams.get("grade") || "Grade 9";
  const subject = searchParams.get("subject") || "Physics";

  const chapters = [
    {
      id: 1,
      subject: "Physics",
      chapter: "Measurements & Units",
      chapterNo: "Chapter 1",
      labs: "6 Labs",
    },
    {
      id: 2,
      subject: "Physics",
      chapter: "Kinematics",
      chapterNo: "Chapter 2",
      labs: "6 Labs",
    },
    {
      id: 3,
      subject: "Physics",
      chapter: "Dynamics",
      chapterNo: "Chapter 3",
      labs: "6 Labs",
    },
    {
      id: 4,
      subject: "Physics",
      chapter: "Force and Motion",
      chapterNo: "Chapter 4",
      labs: "6 Labs",
    },
  ];

  // Show chapters for the selected subject
  const filteredChapters = chapters.filter((chap) => chap.subject === subject);

  const goBack = () => {
    router.push(`/lab-catalog/subjects?grade=${encodeURIComponent(grade)}`);
  };

  return (
    <div className="mt-3.25 w-full max-w-284.5 min-h-317.5 pt-11.25 pl-12.25 pr-12.25">
      {/* Breadcrumb */}
      <p className="text-[14px] text-[#727272]">
        Dashboard &gt; Lab Catalog &gt; {grade} &gt; {subject}
      </p>
      {/* Heading */}
      <h1 className="mt-2 text-[36px] font-bold">Choose a Chapter</h1>
      <p className="mt-1.5 text-[14px] text-[#727272]">
        Explore {subject} chapters for {grade}
      </p>
      {/* Back to Subjects */}
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
      {/* Chapter Cards */}
      {/* <div className="grid grid-cols-2 gap-3.75 mt-7">
        {filteredChapters.map((chap) => (
          <div
            key={chap.id}
            onClick={() => {
              // Add chapter-page navigation here when that route is ready.
            }}
            className="w-150 h-62 mb-4 overflow-hidden rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between pl-9.75">
              <div className="w-24 h-9 mt-10.5 rounded-lg bg-[linear-gradient(180deg,#0F766E_0%,#33BCB1_100%)] flex items-center justify-center text-white text-[16px] leading-[133%]">
                {subject}
              </div>

              <p className=" mr-8 font-roboto text-[14px] text-[#A1A1A1] mt-10.5 ">
                {chap.labs}
              </p>
            </div>

            <p className="ml-9.75 text-[20px] mt-5 font-semibold mb-3">
              {chap.chapter}
            </p>

            <p className="text-[14px] whitespace-nowrap text-[#727272] px-9.75">
              {chap.chapterNo} · {grade}
            </p>
            <div className="w-150 border border-[#D4D2D2] mt-6.5"></div>

            <div className="flex items-center gap-3 ml-72.75">
              <p className="text-[14px] text-[#0F766E]">Explore</p>
              <BlueArrowIcon />
            </div>
          </div>
        ))}
      </div> */}

      {/* Chapter Cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3.75 mt-7">
        {filteredChapters.map((chap) => (
          <div
            key={chap.id}
            onClick={() =>
              router.push(
                `/lab-catalog/physics-lab?grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(subject)}&chapter=${encodeURIComponent(chap.chapter)}`,
              )
            }
            className="w-125  h-[247px]  rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between px-6 pt-8">
              <div className="w-24 h-9 rounded-lg bg-[linear-gradient(180deg,#0F766E_0%,#33BCB1_100%)] flex items-center justify-center text-white text-[16px]">
                {subject}
              </div>

              <p className="font-roboto text-[14px] text-[#A1A1A1]">
                {chap.labs}
              </p>
            </div>

            <p className="px-6 mt-5 text-[20px] font-semibold">
              {chap.chapter}
            </p>

            <p className="px-6 mt-3 text-[14px] text-[#727272]">
              {chap.chapterNo} · {grade}
            </p>

            <div className="border-t border-[#D4D2D2] mt-5" />

            <div className="flex items-center justify-end gap-3 px-6 mt-3">
              <p className="text-[14px] text-[#0F766E]">Explore</p>
              <BlueArrowIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chapter;
