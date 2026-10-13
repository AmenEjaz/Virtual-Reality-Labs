"use client";

import {
  DraftIcon,
  FreeLabIcon,
  PremiumLabIcon,
  PublishedIcon,
  AddIcon,
} from "../../Icons/Icons";

import { useRouter } from "next/navigation";

function Labs() {
  const router = useRouter();

  const labs = [
    {
      icon: <PublishedIcon />,
      count: 5,
      info: "Total Published",
    },
    {
      icon: <FreeLabIcon />,
      count: 3,
      info: "Free Labs",
    },
    {
      icon: <PremiumLabIcon />,
      count: 12,
      info: "Premium Labs",
    },
    {
      icon: <DraftIcon />,
      count: 2,
      info: "Draft",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-row">
        <div>
          <h2 className="ml-9.75 mt-9.5 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
            All Labs
          </h2>

          <p className="ml-9.75 w-96 mb-2.75 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
            View and manage all VR laboratory experiments
          </p>
        </div>

        <button
          onClick={() => router.push("/lab-management/add-new-lab")}
          className="w-40.5 flex flex-row justify-center items-center gap-2.5 ml-122.5 mt-9.5 rounded-[10px] h-11 p-2.5 bg-[linear-gradient(90deg,#0F766E_0%,#000000_100%)]"
        >
          <AddIcon />
          <p className="font-roboto text-medium text-[#FFFFFF]">Add New Lab</p>
        </button>
      </div>

      {/* Lab Cards */}
      <div className="flex gap-8 ml-9.5">
        {labs.map((lab, index) => (
          <div
            key={index}
            className="
              w-60.25
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
              {lab.icon}
            </div>

            <p className="font-roboto ml-8 font-medium text-[24px]">
              {lab.count}
            </p>

            <p className="font-roboto ml-8 text-[14px] text-[#A1A1A1]">
              {lab.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Labs;
