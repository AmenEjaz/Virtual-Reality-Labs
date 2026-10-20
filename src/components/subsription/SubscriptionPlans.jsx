"use client";

import React from "react";
import { CrownIcon, GreenTickIcon, PremiumIcon } from "../../icons/Icons";
import { useRouter } from "next/navigation";

function SubscriptionPlans() {
  const router = useRouter();

  return (
    <div className="mt-15.5 font-roboto ">
      <div className=" flex gap-4">
        <div className=" gap-2.75">
          <div className="w-14 h-11.25 flex items-center justify-center bg-[#06B6D430]">
            <CrownIcon />
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="text-[20px] font-semibold leading-[133%] ">
              Premium Benefits
            </h3>
            <p className="mt-0.7 text-[14px] text-[#727272]">
              Everything unlocked when you go Premium
            </p>
            <h3 className="text-[20px]  leading-[133%] mt-3.5">
              $14.99 <span className="text-[14px] text-[#727272]"> /month</span>
            </h3>
            <p className="mt-0.7 text-[14px] text-[#727272]">
              Monthly · Cancel anytime
            </p>

            <div className="w-76 h-17 mt-3 ml-2 border border-[#D9D9D9] pt-3 pl-2.5">
              <p className="mt-0.7 text-[12px] text-[#9A9898]">
                Premium Lab Access{" "}
              </p>
              <p className=" text-[14px] text-[#9A9898] mt-1">
                Unlimited access to all 180+ Premium VR labs{" "}
              </p>
            </div>

            <p className="text-[12px] ml-2 text-[#9A9898] mt-4.5">
              Unlimited access to all 180+ Premium labs
            </p>
            <div className=" mt-3.5">
              <div className=" flex gap-2">
                <div className=" ml-2 w-4.5 h-4.5 rounded-full border flex items-center justify-center border-[#3DB766]">
                  <GreenTickIcon />
                </div>
                <p className=" text-[12px] text-[#9A9898]">
                  Unlimited labs across Physics, Chemistry & Biology{" "}
                </p>
              </div>

              <div className=" mt-2.25 flex gap-2">
                <div className=" ml-2 w-4.5 h-4.5 rounded-full border flex items-center justify-center border-[#3DB766]">
                  <GreenTickIcon />
                </div>
                <p className=" text-[12px] text-[#9A9898]">
                  Advanced analytics and progress tracking{" "}
                </p>
              </div>

              <div className=" mt-2.25 flex gap-2">
                <div className=" ml-2 w-4.5 h-4.5 rounded-full border flex items-center justify-center border-[#3DB766]">
                  <GreenTickIcon />
                </div>
                <p className=" text-[12px] text-[#9A9898]">
                  Certificate of completion for every lab{" "}
                </p>
              </div>

              <div className=" mt-2.25 flex gap-2">
                <div className=" ml-2 w-4.5 h-4.5 rounded-full border flex items-center justify-center border-[#3DB766]">
                  <GreenTickIcon />
                </div>
                <p className=" text-[12px] text-[#9A9898]">
                  Offline mode for on-the-go learning{" "}
                </p>
              </div>

              <div className=" mt-2.25 flex gap-2">
                <div className=" ml-2 w-4.5 h-4.5 rounded-full border flex items-center justify-center border-[#3DB766]">
                  <GreenTickIcon />
                </div>
                <p className=" text-[12px] text-[#9A9898]">
                  Priority customer support{" "}
                </p>
              </div>

              <button className="ml-2 rounded-[20px] h-9.75 w-68.75 bg-[linear-gradient(90deg,#0F766E_0%,#105E58_100%)] mt-6.25 ">
                <div className="flex flex-row items-center justify-center text-[14px] gap-2.5 text-[#FFFFFF]">
                  <PremiumIcon />
                  Upgrade Plan{" "}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="w-[665px] min-h-[620] ml-3.75 pl-12.5">
          {/* Header */}
          <div className="flex gap-4 items-center ">
            <div className="w-14 h-11.25 shrink-0 flex items-center justify-center bg-[#06B6D430]">
              <CrownIcon />
            </div>

            <div>
              <h1 className="text-[20px] font-medium">Upgrade Plan</h1>
              <p className="text-[14px] text-[#727272]">
                Select the plan that fits your learning goals
              </p>
            </div>
          </div>
          <div className=" flex gap-2.25">
            {/* Premium Plan */}
            <div className="w-72 h-118.75 relative mt-7.25 border border-[#F0F0F0]  backdrop-blur-xs pt-4.5 shadow-[4px_4px_4px_0px_#00000040] pr-3.5 rounded-lg pl-6.25">
              <div className="flex items-center justify-between">
                <h2 className=" ml-2 text-[16px] font-semibold">Premium</h2>

                <div className="w-4.75 h-4.75 border border-[#0F766E] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#0F766E]" />
                </div>
              </div>

              <h3 className="text-[20px] font-semibold ">
                $14.99
                <span className="text-[14px] text-[#727272] font-normal">
                  {" "}
                  /month
                </span>
              </h3>

              <p className="text-[14px] text-[#727272] mt-1">
                Monthly · Cancel anytime
              </p>

              <p className="mt-1.5 text-[12px] text-[#9A9898]">
                Everything you need to master STEM in VR
              </p>

              <p className="text-[12px] text-[#9A9898] mt-6">
                Unlimited access to all 180+ Premium labs
              </p>

              <div className="mt-4 space-y-2.25">
                {[
                  "Unlimited Labs Per Month",
                  "Full Premium Lab Access",
                  "Advanced Progress Tracking",
                  "Certificate of Completion",
                  "Offline Mode",
                  "Priority Support",
                ].map((benefit) => (
                  <div key={benefit} className="flex gap-2 items-start">
                    <div className="shrink-0 w-4.5 h-4.5 rounded-full border flex items-center justify-center border-[#3DB766]">
                      <GreenTickIcon />
                    </div>

                    <p className="text-[12px] text-[#9A9898]">{benefit}</p>
                  </div>
                ))}
              </div>

              <button className="w-full rounded-[20px] h-9.75 bg-[linear-gradient(90deg,#0F766E_0%,#105E58_100%)] mt-12.5">
                <div className="flex items-center justify-center text-[14px] gap-2.5 text-white">
                  <PremiumIcon />
                  Selected
                </div>
              </button>
            </div>

            <div className="w-72 h-118.75 relative mt-7.25 border border-[#F0F0F0]  backdrop-blur-xs pt-4.5 shadow-[4px_4px_4px_0px_#00000040] pr-3.5 rounded-lg pl-6.25">
              <div className="flex items-center justify-between">
                <h2 className=" ml-2 text-[16px] font-semibold">
                  Premium Annual
                </h2>

                <div className="w-4.75 h-4.75 border border-[#0F766E] rounded-full flex items-center justify-center"></div>
              </div>

              <h3 className="text-[20px] font-semibold ">
                $119.99
                <span className="text-[14px] text-[#727272] font-normal">
                  {" "}
                  /Anual
                </span>
              </h3>

              <p className="text-[14px] text-[#727272] mt-1">
                Annual · Save 33%
              </p>

              <p className="mt-1.5 text-[12px] text-[#9A9898]">
                Best value for dedicated learners{" "}
              </p>

              <p className="text-[12px] text-[#9A9898] mt-6">
                Unlimited access to all 180+ Premium labs
              </p>

              <div className="mt-4 space-y-2.25">
                {[
                  "All Premium Monthly Features",
                  "Personalized Study Plans",
                  "Monthly Report Cards",
                  "Live Tutoring (2 / month)",
                  "Dedicated Account Manager",
                  "Early Access to New Labs",
                ].map((benefit) => (
                  <div key={benefit} className="flex gap-2 items-start">
                    <div className="shrink-0 w-4.5 h-4.5 rounded-full border flex items-center justify-center border-[#3DB766]">
                      <GreenTickIcon />
                    </div>

                    <p className="text-[12px] text-[#9A9898]">{benefit}</p>
                  </div>
                ))}
              </div>

              <button className="w-full rounded-[20px] h-9.75 border border-[#0F766E] mt-12.5">
                <div className="flex items-center justify-center text-[14px] gap-2.5 text-[#0F766E] font-semibold">
                  Select Plan
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center ml-72 p-9">
        <div className="w-14 h-11.25 shrink-0 flex items-center justify-center bg-[#06B6D430]">
          <CrownIcon />
        </div>

        <div>
          <h1 className="text-[20px] whitespace-nowrap font-semibold">
            Premium . $14.99/month
          </h1>
          <p className="text-[14px] text-[#727272]">
            Secure checkout · Cancel anytime{" "}
          </p>
        </div>

        <button
          onClick={() => router.push("/payment")}
          className="w-53 h-8.5 whitespace-nowrap rounded-[20px] text-[14px] ml-19.25 bg-[linear-gradient(90deg,#0F766E_0%,#0C504A_100%)] p-1. text-white"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default SubscriptionPlans;
