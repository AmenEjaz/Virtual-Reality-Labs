"use client";

import React from "react";
import { WhiteTickIcon } from "../../../icons/Icons";
import { useRouter } from "next/navigation";

function PaymentSuccessfulModal({}) {
  const router = useRouter();
  return (
    <div className="w-99.25 h-100.5 pt-10  bg-white rounded-lg font-roboto flex flex-col items-center justify-center  ">
      <WhiteTickIcon />

      <h3 className="text-[20px] font-semibold">Payment Successful!</h3>

      <p className="text-[14px] text-[#A1A1A1]">Premium Activated</p>

      <div className="w-78 h-[125px] bg-[#F3F3F3] p-5 mt-4 text-[14px]">
        <p className="flex justify-between text-[#8D8D8D]">
          Plan
          <span className="font-semibold text-black">Premium</span>
        </p>

        <p className="flex  mt-3.75 justify-between text-[#8D8D8D]">
          Amount Paid
          <span className="font-semibold text-black">$14.99 / month</span>
        </p>

        <p className="flex  mt-3.75 justify-between text-[#8D8D8D]">
          Valid Until
          <span className="font-semibold text-black">Sep 30, 2026</span>
        </p>
      </div>

      <button
        onClick={() => router.push("/premium-subscription")}
        className="w-78 mt-12 h-8.75 rounded-lg bg-[#0F766E] text-white"
      >
        Start Exploring Premium
      </button>
    </div>
  );
}

export default PaymentSuccessfulModal;
