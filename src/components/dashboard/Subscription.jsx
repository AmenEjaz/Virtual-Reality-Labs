import {
  CircleCrossIcon,
  CircleTickIcon,
  PlanIcon,
  PremiumIcon,
} from "@/icons/Icons";
import React from "react";

function Subscription() {
  return (
    <div>
      <div className="w-133.25 h-94.25 mt-7.5 font-roboto pt-6.25 pl-9.75">
        <div className="flex flex-row gap-69">
          <h1 className="text-[20px] font-medium">Subscription</h1>
          <div className=" items-center justify-center w-26 h-8.25 rounded-[10px] flex flex-row bg-[#0F766E] text-[14px] text-[#FFFFFF]  gap-2.5">
            <PlanIcon />
            <p>Free Plan</p>
          </div>
        </div>{" "}
        <div className=" mt-3 flex flex-row gap-1.75 items-center">
          <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#DAE6FF]">
            <CircleTickIcon />
          </div>
          <p className="text-[14px] whitespace-nowrap text-[#868686]">
            {" "}
            Access to Free Lab
          </p>
        </div>
        <div className=" mt-3 flex flex-row gap-1.75 items-center">
          <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#DAE6FF]">
            <CircleTickIcon />
          </div>
          <p className="text-[14px] whitespace-nowrap text-[#868686]">
            {" "}
            5 Labs Per Month{" "}
          </p>
        </div>
        <div className=" mt-3 flex flex-row gap-1.75 items-center">
          <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#DAE6FF]">
            <CircleTickIcon />
          </div>
          <p className="text-[14px] whitespace-nowrap text-[#868686]">
            {" "}
            Basic Progress Tracking{" "}
          </p>
        </div>
        <div className=" mt-3 flex flex-row gap-1.75 items-center">
          <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#EBEBEBFC]">
            <CircleCrossIcon />
          </div>
          <p className="text-[14px] whitespace-nowrap text-[#868686]">
            {" "}
            Premium Labs Access{" "}
          </p>
        </div>
        <div className=" mt-3 flex flex-row gap-1.75 items-center">
          <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#EBEBEBFC]">
            <CircleCrossIcon />
          </div>
          <p className="text-[14px] whitespace-nowrap text-[#868686]">
            {" "}
            Unlimited Labs{" "}
          </p>
        </div>
        <div className=" mt-3 flex flex-row gap-1.75 items-center">
          <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#EBEBEBFC]">
            <CircleCrossIcon />
          </div>
          <p className="text-[14px] whitespace-nowrap text-[#868686]">
            {" "}
            Advanced Analytics{" "}
          </p>
        </div>
        <div className=" mt-3 flex flex-row gap-1.75 items-center">
          <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#EBEBEBFC]">
            <CircleCrossIcon />
          </div>
          <p className="text-[14px] whitespace-nowrap text-[#868686]">
            {" "}
            Certificate of Completion{" "}
          </p>
        </div>
        <button className="h-9.75 w-117 bg-[linear-gradient(90deg,#0F766E_0%,#105E58_100%)] mt-8 ">
          <div className="flex flex-row items-center justify-center text-[14px] gap-2.5 text-[#FFFFFF]">
            <PremiumIcon />
            Upgrade to Premium{" "}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Subscription;
