"use client";

import React from "react";
import { ProcessingIcon } from "../../../icons/Icons";

function ProcessingPaymentModal({ onCancel }) {
  return (
    <div className="w-106 h-68.25 bg-white rounded-lg flex flex-col font-semibold items-center justify-center font-roboto">
      <div className="w-12.5 h-12.5 rounded-full border border-[#0F766E] flex items-center justify-center p-0.5">
        <div className="w-11.5 h-11.5 rounded-full bg-[#0F766E] flex items-center justify-center ">
          <ProcessingIcon />
        </div>
      </div>

      <h1 className="text-[20px] mt-4 ">Processing Payment</h1>

      <h3 className="text-[14px] mt-1.5 text-center">
        Securely charging{" "}
        <span className="text-[20px] text-[#0F766E]">
          Premium · $14.99 / month
        </span>
      </h3>

      <p className="text-[12px] mt-1.5 ">Please do not close this window</p>

      <button
        onClick={onCancel}
        className="w-64.5 h-8.75 rounded-lg p-2 mt-4 border border-[#797979]"
      >
        Cancel Payment
      </button>
    </div>
  );
}

export default ProcessingPaymentModal;
