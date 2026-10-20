import React from "react";
import { CrownIcon, PremiumIcon } from "../../icons/Icons";
import SubscriptionPlans from "./SubscriptionPlans";

function PremiumSubscription() {
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
              Current Subscription
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
        <div className="flex flex-row">
          <div>
            <button className="w-33.25 h-6.75 rounded-[20px] mt-2 bg-[#C3FFAD] text-[14px] text-[#727272] rounnded-20px] p-0.75">
              Active Premium{" "}
            </button>

            <div className="mt-7 gap-2.75 flex flex-row">
              <div className="w-43 h-18.75 rounded-lg border pt-4 pl-5 border-[#D9D9D9]">
                <p className="text-[14px] text-[#979797] ">
                  Subscription Status
                </p>
                <p className="mt-1 text-[14px] font-semibold  ">Free</p>
              </div>
              <div className="w-43 h-18.75 rounded-lg border pt-4 pl-5 border-[#D9D9D9]">
                <p className="text-[14px] text-[#979797] ">Start Date</p>
                <p className="mt-1 text-[14px] font-semibold ">Jan 15, 2026</p>
              </div>
              <div className="w-43 h-18.75 rounded-lg border pt-4 pl-5 border-[#D9D9D9]">
                <p className="text-[14px] text-[#979797] ">Expiry Date</p>
                <p className="mt-1 text-[14px] font-semibold  ">No expiry</p>
              </div>
            </div>
          </div>
          <div>
            <button className="ml-23 h-9.75 w-68.75 bg-[linear-gradient(90deg,#0F766E_0%,#105E58_100%)] mt-8 ">
              <div className="flex flex-row items-center justify-center text-[14px] gap-2.5 text-[#FFFFFF]">
                <PremiumIcon />
                Renew Subscription{" "}
              </div>
            </button>
            <button className="ml-23 h-9.75 w-68.75 text-[14px] border border-[#E60D0D] font-semibold text-[#B42323] mt-8 ">
              Cancel Subscription{" "}
            </button>
          </div>
        </div>
      </div>
      <p className="text-[14px] -mt-20 ml-7 text-[#727272]">
        Available Lab Access <span className="ml-185">3 / 5 used</span>
      </p>

      <div className="w-233.75 ml-7  bg-[#A3A1A1] relative ">
        <div className="w-79.75 border-2 border-[#0F766E]  "></div>
      </div>
      <p className="text-[14px] ml-7 mt-3.5 text-[#727272]">
        2 free labs remaining this month{" "}
      </p>
      <div className="pl-9 ">
        {" "}
        <SubscriptionPlans />
      </div>
    </div>
  );
}

export default PremiumSubscription;
