"use client";

import { useRouter } from "next/navigation";
import {
  BackArrowIcon,
  BlueStarIcon,
  GreenStarIcon,
  PurpleStarIcon,
  RedStarIcon,
} from "../Icons/Icons";

const usageData = [
  {
    icon: <RedStarIcon />,
    name: "Grade 9",
    users: "8,740 users",
    availability: "52 labs available",
    share: "35%",
  },
  {
    icon: <GreenStarIcon />,
    name: "Grade 10",
    users: "6,980 users",
    availability: "48 labs available",
    share: "28%",
  },
  {
    icon: <BlueStarIcon />,
    name: "FSC Part 1",
    users: "5,450 users",
    availability: "42 labs available",
    share: "22%",
  },
  {
    icon: <PurpleStarIcon />,
    name: "FSC Part 2",
    users: "3,723 users",
    availability: "42 labs available",
    share: "15%",
  },
];

const usageTable = [
  {
    grade: "Grade 9",
    share: "35%",
    active: "8,740",
    labs: 52,
    averageTime: "32 min",
    completion: "89%",
    barWidth: "w-14",
    barColor: "bg-[#8B5CF6]",
  },
  {
    grade: "Grade 10",
    share: "28%",
    active: "6,980",
    labs: 48,
    averageTime: "28 min",
    completion: "85%",
    barWidth: "w-10.5",
    barColor: "bg-[#06B6D4]",
  },
  {
    grade: "FSC Part 1",
    share: "22%",
    active: "5,450",
    labs: 42,
    averageTime: "26 min",
    completion: "82%",
    barWidth: "w-7",
    barColor: "bg-[#06D455]",
  },
  {
    grade: "FSC Part 2",
    share: "15%",
    active: "3,723",
    labs: 42,
    averageTime: "24 min",
    completion: "79%",
    barWidth: "w-7",
    barColor: "bg-[#FFCA1B]",
  },
];

function GradeWiseUsage() {
  const router = useRouter();
  return (
    <div className="w-284.5 h-292.25">
      {/* Breadcrumb */}
      <div className="flex flex-row ml-8.75 mt-6.25">
        {/* <BackArrowIcon /> */}
        <button
          type="button"
          onClick={() => router.push("/reports-and-analytics/lab-usage-report")}
          aria-label="Back to Lab Usage Report"
          className="cursor-pointer"
        >
          <BackArrowIcon />
        </button>
        <p className="w-96 h-6.5 mt-1 ml-4 font-roboto text-[14px] text-[#A1A1A1]">
          User Statistics <span>&gt;</span> Grade Wise Usage
        </p>
      </div>

      {/* Heading */}
      <h2 className="ml-9.75 h-6.5 mt-9.5 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
        Grade-wise Usage
      </h2>

      <p className="ml-9.75 mb-2.75 font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1]">
        Usage analytics broken down by educational grade level
      </p>

      {/* Usage Cards */}
      <div className="flex flex-row">
        <div className="flex gap-5.5 ml-8">
          {usageData.map((data, index) => (
            <div
              key={index}
              className="
                w-61.5
                h-60
                flex
                flex-col
                justify-center
                rounded-xl
                border-[0.5px]
                border-[#D9D9D9]
                shadow-[0px_2px_4px_0px_#00000040]
              "
            >
              <div
                className="
                  w-15
                  h-12.5
                  ml-8
                  shadow-[0px_2px_4px_0px_#00000040]
                  rounded-md
                  mb-4
                  flex
                  items-center
                  justify-center
                "
              >
                {data.icon}
              </div>

              <p className="w-30 h-8 font-roboto ml-7.5 font-medium text-[24px]">
                {data.name}
              </p>

              <p className="w-25.5 h-6.75 mt-0.5 font-roboto ml-8 text-[#A1A1A1] text-[14px]">
                {data.users}
              </p>

              <p className="font-roboto ml-8 text-[14px] text-[#A1A1A1]">
                {data.availability}
              </p>

              <div className="flex flex-row mt-3.5">
                <p className="h-4.75 font-roboto ml-8 text-[14px] text-[#A1A1A1]">
                  Usage Share
                </p>

                <p className="h-4.75 ml-auto mr-8 font-roboto text-[14px] text-[#A1A1A1]">
                  {data.share}
                </p>
              </div>

              <div className="w-20.25 h-1.5 bg-[#0F766E] ml-7.5 mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Usage Table */}
      <div
        className="
          w-262.75
          h-82
          ml-7
          rounded-xl
          mt-9
          border-[0.5px]
          border-[#D9D9D9]
          shadow-[0px_2px_4px_0px_#00000040]
          overflow-hidden
        "
      >
        <table className="w-262.75 table-fixed border-collapse">
          <colgroup>
            <col className="w-37.5" />
            <col className="w-37.5" />
            <col className="w-37.5" />
            <col className="w-37.5" />
            <col className="w-37.5" />
            <col className="w-37.5" />
            <col className="w-37.5" />
          </colgroup>

          <thead>
            <tr className="h-15.5">
              <th className="pl-8.75 text-left font-roboto text-[14px] text-[#A1A1A1] whitespace-nowrap">
                Grade
              </th>

              <th className="text-center font-roboto text-[14px] text-[#A1A1A1] whitespace-nowrap">
                Usage Share
              </th>

              <th className="text-center font-roboto text-[14px] text-[#A1A1A1] whitespace-nowrap">
                Active Users
              </th>

              <th className="text-center font-roboto text-[14px] text-[#A1A1A1] whitespace-nowrap">
                Total Labs
              </th>

              <th className="text-center font-roboto text-[14px] text-[#A1A1A1] whitespace-nowrap">
                Avg. Time
              </th>

              <th className="text-center font-roboto text-[14px] text-[#A1A1A1] whitespace-nowrap">
                Completion Rate
              </th>

              <th className="text-center font-roboto text-[14px] text-[#A1A1A1] whitespace-nowrap">
                Usage Bar
              </th>
            </tr>
          </thead>

          <tbody className="">
            {usageTable.map((use) => {
              const completionValue = parseInt(use.completion);

              const completionClass =
                completionValue > 85
                  ? "bg-[#DEFFCD] text-[#424242]"
                  : "bg-[#FFF3CD] text-[#424242]";

              return (
                <tr
                  className="h-13 text-[#424242] font-roboto font-medium text-[14px]"
                  key={use.grade}
                >
                  <td className="pl-8.75 text-left align-middle  whitespace-nowrap">
                    {use.grade}
                  </td>

                  <td className="text-center align-middle ">{use.share}</td>

                  <td className="text-center align-middle">{use.active}</td>

                  <td className="text-center align-middle">{use.labs}</td>

                  <td className="text-center align-middle ">
                    {use.averageTime}
                  </td>

                  {/* Completion Rate */}
                  <td className="align-middle">
                    <div
                      className={`
                        mx-auto
                        w-16
                        h-6.5
                        rounded-[20px]
                        flex
                        items-center
                        justify-center
                        
                        leading-[133%]
                        ${completionClass}
                      `}
                    >
                      {use.completion}
                    </div>
                  </td>

                  {/* Usage Bar */}
                  <td className="align-middle">
                    <div className="mx-auto w-22.75 h-1.5  ">
                      <div
                        className={`h-full rounded-full ${use.barWidth} ${use.barColor}`}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GradeWiseUsage;
