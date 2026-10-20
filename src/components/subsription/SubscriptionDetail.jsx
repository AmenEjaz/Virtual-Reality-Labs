import React from "react";
import { CrownIcon, PremiumIcon } from "../../icons/Icons";
import SubscriptionPlans from "./SubscriptionPlans";

function SubscriptionDetail() {
  return (
    <div className="w-relative h-relative pl-10 ">
      <h1 className=" text-3xl font-bold sm:text-[36px] mt-9.5">
        Subscription
      </h1>

      <p className="text-sm text-[#727272] mt-0.5">
        Manage your plan, billing and Premium access
      </p>

      {/* Subscription Card */}

      <div className="w-249.75 h-98.75 pt-9.5 pl-7 mt-10.75 ">
        <div className="flex flex-row gap-4 items-center">
          <div className="w-14 h-11.25 flex items-center justify-center bg-[#06B6D430]">
            <CrownIcon />
          </div>
          <div className="flex flex-col">
            <h1 className=" text-3xl font-bold sm:text-[20px] ">
              Subscription
            </h1>

            <p className="text-[14px] text-[#727272] mt-0.5">
              Your active plan and access details{" "}
            </p>
          </div>
        </div>

        <p className="text-[14px] mt-4 text-[#727272] ">
          You are on the Free tier. Unlock unlimited labs, certificates and
          advanced analytics with Premium.{" "}
        </p>
        <div className="flex mt-2 gap-2">
          <button className="w-24 h-7 bg-[#0F766E] text-white p-0.75">
            Free Plan
          </button>
          <button className="w-24 h-7 bg-[#BABCBB] text-white p-0.75">
            Free Plan
          </button>
        </div>
        <div className="mt-7 gap-2.75 flex flex-row">
          <div className="w-43 h-18.75 rounded-lg border pt-4 pl-5 border-[#D9D9D9]">
            <p className="text-[14px] text-[#979797] ">Subscription Status</p>
            <p className="mt-1 text-[14px]  ">Free</p>
          </div>
          <div className="w-43 h-18.75 rounded-lg border pt-4 pl-5 border-[#D9D9D9]">
            <p className="text-[14px] text-[#979797] ">Start Date</p>
            <p className="mt-1 text-[14px]  ">Jan 15, 2026</p>
          </div>
          <div className="w-43 h-18.75 rounded-lg border pt-4 pl-5 border-[#D9D9D9]">
            <p className="text-[14px] text-[#979797] ">Expiry Date</p>
            <p className="mt-1 text-[14px]  ">No expiry</p>
          </div>
          <button className="ml-23 h-9.75 w-68.75 bg-[linear-gradient(90deg,#0F766E_0%,#105E58_100%)] mt-8 ">
            <div className="flex flex-row items-center justify-center text-[14px] gap-2.5 text-[#FFFFFF]">
              <PremiumIcon />
              Upgrade to Premium{" "}
            </div>
          </button>
        </div>
        <p className="text-[14px] mt-7.25 text-[#727272]">
          Available Lab Access <span className="ml-185">3 / 5 used</span>
        </p>
        <div className="w-233.75   bg-[#A3A1A1] relative ">
          <div className="w-79.75 border-2 border-[#0F766E]  "></div>
        </div>
        <p className="text-[14px] mt-2 text-[#727272]">
          2 free labs remaining this month{" "}
        </p>
        <SubscriptionPlans />
      </div>
    </div>
  );
}

export default SubscriptionDetail;
