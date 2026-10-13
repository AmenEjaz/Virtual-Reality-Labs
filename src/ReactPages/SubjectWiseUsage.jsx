"use client";

import { useRouter } from "next/navigation";
import {
  BackArrowIcon,
  ChemistryIcon,
  PhysicsIcon,
  BiologyIcon,
} from "../Icons/Icons";

const subjectData = [
  {
    icon: <PhysicsIcon />,
    name: "Physics",
    percentage: "42%",
    bar_width: "49.75",
    acive: "10,450",
    labs: "68",
  },
  {
    icon: <ChemistryIcon />,
    name: "Chemistry",
    percentage: "42%",
    bar_width: "34",
    acive: "10,450",
    labs: "68",
  },
  {
    icon: <BiologyIcon />,
    name: "Biology",
    percentage: "42%",
    bar_width: "34",
    acive: "10,450",
    labs: "68",
  },
];

const chemistryData = [
  {
    width: "72px",
    height: "21px",
  },
  {
    width: "74px",
    height: "24px",
  },
  {
    width: "72px",
    height: "30px",
  },
  {
    width: "74px",
    height: "36px",
  },
  {
    width: "85px",
    height: "42px",
  },
  {
    width: "85px",
    height: "49px",
  },
  {
    width: "83px",
    height: "58px",
  },
  {
    width: "84px",
    height: "65px",
  },
  {
    width: "85px",
    height: "75px",
  },
  {
    width: "85px",
    height: "83px",
  },
  {
    width: "85px",
    height: "91px",
  },
];

function SubjectWiseUsage() {
  const router = useRouter();

  return (
    <div className="w-284.5 h-292.25">
      {/* Breadcrumb */}
      <div className="flex flex-row ml-8.75 mt-6.25">
        <button
          type="button"
          onClick={() => router.push("/reports-and-analytics/lab-usage-report")}
          aria-label="Back to Lab Usage Report"
          className="cursor-pointer"
        >
          <BackArrowIcon />
        </button>
        <p className="w-96 h-6.5 mt-1 ml-4 font-roboto text-[14px] text-[#A1A1A1]">
          User Statistics <span>&gt;</span> Subject Wise Usage
        </p>
      </div>

      {/* Heading */}
      <h2 className="ml-9.75 h-6.5 mt-9.5 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
        Subject-wise Usage
      </h2>

      <p className="ml-9.75 mb-2.75 font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1]">
        Usage analytics across Physics, Chemistry, and Biology
      </p>

      {/* Usage Cards */}
      <div className="flex flex-row">
        <div className="flex gap-7.5 ml-8">
          {subjectData.map((data, index) => (
            <div
              key={index}
              className="
                w-82.5
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
              {/* Icon + Subject + Percentage */}
              <div className="flex flex-row  mt-7.25">
                <div
                  className="
                    w-14.75
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

                <div className=" flex flex-col ml-3.75  ">
                  <p className=" font-roboto  font-medium text-[20px]">
                    {data.name}
                  </p>

                  <p className="h-6.75 mt-0.5  font-roboto text-[#06B6D4] text-[20px]">
                    {data.percentage}
                  </p>
                </div>
              </div>

              {/* Usage Bar */}
              <div
                className={`${data.bar_width} h-1 bg-[#0F766E]  ml-7.5`}
              ></div>

              {/* Active Users */}
              <div className="flex flex-row">
                <p className="w-30 font-roboto ml-7.5 text-[#A1A1A1] h-4.75 mt-4.25 font-medium text-[14px]">
                  Active Users
                </p>

                <p className="font-medium text-[12px] mt-3.5 ml-auto mr-8 text-[#A1A1A1]">
                  {data.acive}
                </p>
              </div>

              {/* Total Labs */}
              <div className="flex flex-row">
                <p className="w-30 h-4.75 font-roboto ml-7.5 text-[#A1A1A1]  mt-1.25 font-medium text-[14px]">
                  Total Labs
                </p>

                <p className="font-medium text-[12px] mt-1.25  ml-auto mr-8  text-[#A1A1A1]">
                  {data.labs}
                </p>
              </div>

              {/* Divider */}
              <div className="w-82.5 mt-2.5 border border-[#E6E6E6]"></div>

              {/* Best Performing Lab */}
              <p className="w-49.75 h-8.75 mt-2.5 font-roboto ml-7.5 text-[#A1A1A1] text-[10px]">
                Best Performing Lab
                <br />
                <span>Introduction to Kinematics (2,840 launches)</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Table */}
      <div
        className="
          w-262.75
          h-211
          ml-8.75
          rounded-xl
          mt-8.25
          border-[0.5px]
          border-[#D9D9D9]
          shadow-[0px_2px_4px_0px_#00000040]
          font-roboto
        "
      >
        <h1 className="pt-9.25 h-6.75 pl-8.5 font-medium text-[20px] leading-[133%]">
          Monthly Launches by Subject
        </h1>
        {/* <p className="w-25.5 flex justify-between text-[14px] mt-12 text-[#A1A1A1] ml-8.5">
          <span>Physics</span>
          <span className="text-[#262626] w-25.5 ml-[782px]">440 launches</span>
        </p> */}

        {/* Physics  */}
        <p className="w-25.5   text-[14px] mt-12 text-[#A1A1A1] ml-8.5">
          <span>Physics</span>
          <span className="text-[#262626] ml-196.5 whitespace-nowrap">
            440 launches
          </span>
        </p>
        <div className="pl-8.5 flex flex-row items-baseline mt-15">
          {/* <div className="flex flex-row items-end ml-8.5 mt-8"> */}
          {chemistryData.map((data, index) => (
            <div
              key={index}
              style={{
                width: data.width,
                height: data.height,
              }}
              className="mr-0.75 bg-[#111827]"
            ></div>
          ))}
        </div>

        {/* Chemistry  */}
        <p className="w-25.5   text-[14px] mt-12 text-[#A1A1A1] ml-8.5">
          <span>Chemistry</span>
          <span className="text-[#262626] ml-196.5 whitespace-nowrap">
            350 launches
          </span>
        </p>
        <div className="pl-8.5 flex flex-row items-baseline mt-15">
          {/* <div className="flex flex-row items-end ml-8.5 mt-8"> */}
          {chemistryData.map((data, index) => (
            <div
              key={index}
              style={{
                width: data.width,
                height: data.height,
              }}
              className="mr-0.75 bg-[#0F766E]"
            ></div>
          ))}
        </div>

        {/* Biology  */}
        <p className="w-25.5   text-[14px] mt-12 text-[#A1A1A1] ml-8.5">
          <span>Biology</span>
          <span className="text-[#262626] ml-196.5 whitespace-nowrap">
            290 launches
          </span>
        </p>
        <div className="pl-8.5 flex flex-row items-baseline mt-15">
          {/* <div className="flex flex-row items-end ml-8.5 mt-8"> */}
          {chemistryData.map((data, index) => (
            <div
              key={index}
              style={{
                width: data.width,
                height: data.height,
              }}
              className="mr-0.75 bg-[#5CF67D]"
            ></div>
          ))}
        </div>
        <p className="mt-12.25 font-roboto text-[#A1A1A1] text-[14px] ml-8.5">
          Jan <span className="ml-37">Mar</span>
          <span className="ml-34">May</span>
          <span className="ml-37">July</span>
          <span className="ml-36">Sep</span>
          <span className="ml-39">Nov</span>
        </p>

        {/* {chemistryData.map((data) => {
            return (
              <div
                className={`w-${data.width} h-${data.height} mr-0.75 bg-[#111827]`}
              >
                {" "}
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default SubjectWiseUsage;
