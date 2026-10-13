"use client";

import { useRouter } from "next/navigation";

import {
  BlueLabIcon,
  GreenLaunchIcon,
  RedLaunchIcon,
  SessionIcon,
} from "../../Icons/Icons";

function LabUsageReport() {
  const data = [
    {
      icon: <RedLaunchIcon />,
      count: "12,847",
      info: "Total Launches",
    },
    {
      icon: <GreenLaunchIcon />,
      count: "428",
      info: "Avg. Daily Launches",
    },
    {
      icon: <BlueLabIcon />,
      count: "186",
      info: "Unique Labs Opened ",
    },
    {
      icon: <SessionIcon />,
      count: "28 min",
      info: "Avg. Session Duration",
    },
  ];
  const router = useRouter();
  return (
    <div className="w-284.5 h-292.25">
      <div className="flex gap-8 ml-9.5">
        {data.map((labData, index) => (
          <div
            key={index}
            className="
              w-59
              h-44.25
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
              className="w-15 h-12.5 ml-8 shadow-[0px_2px_4px_0px_#00000040]
                rounded-md mb-4 flex items-center justify-center"
            >
              {labData.icon}
            </div>

            <p className="font-roboto ml-8 font-medium text-[24px]">
              {labData.count}
            </p>

            <p className="font-roboto ml-8 text-[14px] text-[#A1A1A1]">
              {labData.info}
            </p>
          </div>
        ))}
      </div>
      <div className=" flex flex-row mt-9 mb-8">
        <button
          onClick={() =>
            router.push(
              "/reports-and-analytics/lab-usage-report/grade-wise-usage",
            )
          }
          className="ml-160.5 font-medium w-58 h-12 font-roboto rounded-[20px] text-[20px] flex justify-center items-center"
        >
          View Grade wise
        </button>

        <button
          onClick={() =>
            router.push(
              "/reports-and-analytics/lab-usage-report/subject-wise-usage",
            )
          }
          className="font-medium w-58 h-12 font-roboto rounded-[20px] text-[20px] flex justify-center items-center"
        >
          View Subject wise
        </button>
      </div>
      {/* Labs Charts */}
      <div className="flex flex-row ">
        <div className="w-125.75 ml-9.5  h-111 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#0000004]">
          <h3 className="font-roboto font-medium leading-[133%] text-[16px] mt-9 ml-7.5">
            Most Opened Labs (Top 5)
          </h3>
          {/* Line Graph */}
          <div>
            <div className="mt-6 flex flex-row">
              <p className="font-roboto w-61 leading-[133%] text-[#A8A8A8] text-[16px] ml-7">
                1 Introduction to Kinematics
              </p>
              <p className="font-roboto leading-[133%] ml-36 text-[#A8A8A8] text-[16px] ">
                2,840{" "}
              </p>
            </div>
            <div className="mt-4.5 w-106.5  h-1.25 ml-10.5 bg-[#8B5CF6] "></div>
          </div>

          <div>
            <div className="mt-6 flex flex-row">
              <p className="font-roboto w-61 leading-[133%] text-[#A8A8A8] text-[16px] ml-7">
                2 Cell Division Simulation
              </p>
              <p className="font-roboto leading-[133%] ml-36 text-[#A8A8A8] text-[16px] ">
                2,510{" "}
              </p>
            </div>
            <div className="mt-4.5 w-93.5  h-1.25 ml-10.5 bg-[#06B6D4] "></div>
          </div>

          <div>
            <div className="mt-6 flex flex-row">
              <p className="font-roboto w-61 leading-[133%] text-[#A8A8A8] text-[16px] ml-7">
                3 Chemical Bonding Explorer{" "}
              </p>
              <p className="font-roboto leading-[133%] ml-36 text-[#A8A8A8] text-[16px] ">
                2,290{" "}
              </p>
            </div>
            <div className="mt-4.5 w-84  h-1.25 ml-10.5 bg-[#06D444] "></div>
          </div>
          <div>
            <div className="mt-6 flex flex-row">
              <p className="font-roboto w-61 leading-[133%] text-[#A8A8A8] text-[16px] ml-7">
                4 Acid-Base Titration
              </p>
              <p className="font-roboto leading-[133%] ml-36 text-[#A8A8A8] text-[16px] ">
                1,980{" "}
              </p>
            </div>
            <div className="mt-4.5 w-66.25 h-1.25  ml-10.5 bg-[#E4E424] "></div>
          </div>
          <div>
            <div className="mt-6 flex flex-row">
              <p className="font-roboto w-61 leading-[133%] text-[#A8A8A8] text-[16px] ml-7">
                5 Newton Laws Demo{" "}
              </p>
              <p className="font-roboto leading-[133%] ml-36 text-[#A8A8A8] text-[16px] ">
                2,840{" "}
              </p>
            </div>
            <div className="mt-4.5 w-61.5  h-1.25 ml-10.5 bg-[#F94B4B] "></div>
          </div>
        </div>

        <div className="ml-8.25">
          <div className="w-125.75  h-46.5 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#0000004]">
            <h3 className="font-roboto font-medium leading-[133%] text-[16px] mt-9 ml-9">
              Lab Access Distribution
            </h3>

            <div className="mt-8.75 ml-8 flex flex-row">
              <div className="h-4 w-4 rounded-full bg-[#06B6D4]"></div>
              <p className=" ml-2.25 font-roboto font-medium leading-[133%] text-[#A1A1A1] text-[14px]">
                Free Labs
              </p>
            </div>
            <div className="mt-3.5 ml-8 flex flex-row">
              <div className="h-4 w-4 rounded-full bg-[#8B5CF6]"></div>
              <p className=" ml-2.25 font-roboto font-medium leading-[133%] text-[#A1A1A1] text-[14px]">
                Premium Labs
              </p>
            </div>
          </div>
          {/* Subject-wise Lab Usage */}
          <div className="w-125.75 mt-7.5 h-57 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#0000004]">
            <h3 className="font-roboto font-medium leading-[133%] text-[16px] mt-9 ml-9">
              Subject-wise Lab Usage
            </h3>
            <p className=" font-roboto font-medium ml-9 text-[#A1A1A1] mt-1.25">
              Launch distribution across subjects
            </p>

            <div className="mt-8.5 ml-8 flex flex-row">
              <p className=" w-14.5 ml-2.25 font-roboto font-medium leading-[133%] text-[#A1A1A1] text-[14px]">
                Physics
              </p>
              <div className="w-58 h-1.25 mt-1.5  ml-3 bg-[#8B5CF6]"></div>
            </div>
            <div className="mt-3.75 ml-8 flex flex-row">
              <p className=" w-14.5 ml-2.25 font-roboto font-medium leading-[133%] text-[#A1A1A1] text-[14px]">
                Chemistry
              </p>
              <div className="w-52.75 h-1.25 mt-1.5  ml-3 bg-[#06B6D4]"></div>
            </div>
            <div className="mt-3.75 ml-8 flex flex-row">
              <p className=" w-14.5 ml-2.25 font-roboto font-medium leading-[133%] text-[#A1A1A1] text-[14px]">
                Biology
              </p>
              <div className="w-42.25 h-1.25 mt-1.5  ml-3 bg-[#4ED406]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabUsageReport;
