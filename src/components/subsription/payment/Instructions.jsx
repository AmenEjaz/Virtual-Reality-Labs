"use client";
import { useState } from "react";
import React from "react";
import { BankIcon, InstructionIcon, PaisaIcon } from "../../../icons/Icons";
import ProcessingPaymentModal from "./ProcessingPaymentModal";
import PaymentSuccessfulModal from "./PaymentSuccessfulModal";

function Instructions() {
  const [showProcessing, setShowProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = () => {
    setShowProcessing(true);

    setTimeout(() => {
      setShowProcessing(false);
      setShowSuccess(true);
    }, 3000);
  };

  const paymentDetails = [
    ["Bank Name:", "Allied Bank Limited"],
    ["Account Title:", "EduLearn Platform"],
    ["Account Number:", "0123-4567-8901-2345"],
    ["IBAN:", "PK12ABCD0123456789012345"],
  ];

  const instructions = [
    "Transfer the exact amount.",
    "Take a clear screenshot of the payment confirmation.",
    "Upload the screenshot below.",
    "Your enrollment will be activated within 24 hours after verification.",
  ];

  return (
    <div className="bg-[linear-gradient(90deg,rgba(15,118,110,0.03)_0%,rgba(39,191,179,0.03)_100%)] pt-6.25 px-6 mt-3.25">
      {" "}
      <h1 className="text-3xl font-bold sm:text-[36px] mt-9.5">Payment</h1>{" "}
      <p className="text-sm text-[#727272] mt-4.5">
        Choose your Payment Method{" "}
      </p>
      <div className="flex items-start gap-6 mt-10 bg-white">
        {/* LEFT SIDE */}
        <div className="flex-1 min-w-0">
          <div className="bg-white p-6.25 border border-[#E5E7EB] rounded-lg">
            <h2 className="text-[20px] font-bold text-[#1F2937] bg-[linear-gradient(90deg,#FAF5FF_0%,#FFF7ED_100%)]">
              Payment Instructions
            </h2>

            {/* Bank Transfer */}
            <div className="w-full max-w-150.25  border mt-6 border-[#F3E8FF]">
              <div className="flex gap-3 p-6.25">
                <div className="w-10 h-10 shrink-0 bg-[#9333EA] rounded-lg flex items-center justify-center">
                  <BankIcon />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[16px] text-[#1F2937] font-semibold">
                    Bank Transfer
                  </h3>
                  {paymentDetails.map(([label, value]) => (
                    <p
                      key={label}
                      className="text-[14px] mt-2 font-bold text-[#4B5563]"
                    >
                      {label} <span className="font-medium">{value}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Easypaisa */}
            <div className="w-full max-w-[602px] rounded-lg border p-5.25 border-[#BBF7D0] bg-[linear-gradient(135deg,#F0FDF4_0%,#DCFCE7_100%)] mt-6">
              <div className="flex gap-3 items-center">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-[#16A34A] flex items-center justify-center">
                  <PaisaIcon />
                </div>
                <h3 className="text-[16px] text-[#1F2937] font-semibold">
                  Easypaisa
                </h3>
              </div>
              <p className="text-[14px] mt-3 font-bold text-[#4B5563]">
                Account: <span className="font-medium">0300-1234567</span>
              </p>
              <p className="text-[14px] font-bold text-[#4B5563]">
                Name: <span className="font-medium">EduLearn</span>
              </p>
            </div>

            {/* JazzCash */}
            <div className="w-full max-w-[602px] rounded-lg border p-5.25 border-[#FECACA] bg-[linear-gradient(135deg,#FEF2F2_0%,#FEE2E2_100%)] mt-6">
              <div className="flex gap-3 items-center">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-[#DC2626] flex items-center justify-center">
                  <PaisaIcon />
                </div>
                <h3 className="text-[16px] text-[#1F2937] font-semibold">
                  JazzCash
                </h3>
              </div>
              <p className="text-[14px] mt-3 font-bold text-[#4B5563]">
                Account: <span className="font-medium">0300-1234567</span>
              </p>
              <p className="text-[14px] font-bold text-[#4B5563]">
                Name: <span className="font-medium">EduLearn</span>
              </p>
            </div>

            {/* Important Instructions */}
            <div className="w-full max-w-150 rounded-lg border p-5.25 border-[#BFDBFE] bg-white mt-6">
              <div className="flex gap-3 items-center">
                <InstructionIcon />
                <h3 className="text-[14px] font-semibold text-[#1E40AF]">
                  Important Instructions:
                </h3>
              </div>
              {instructions.map((instruction) => (
                <div
                  key={instruction}
                  className="ml-7.5 flex leading-[133%] gap-4 mt-1 items-center text-[14px] text-[#1D4ED8]"
                >
                  <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#1D4ED8]" />
                  {instruction}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Order Summary */}
        <div className="w-88 h-122.5 bg-white border-[#E5E7EB] max-w-[320px] shrink-0 p-6.25">
          <h1 className="text-[20px] font-bold text-[#1F2937]">
            Order Summary
          </h1>
          <div className=" w-77.5 bg-[#DBFAFF] h-30.25 mt-7 p-2">
            <h1 className="text-[14px] text-[#4B5563]">Basic Premium Plan</h1>
            <p className="text-[12px] mt-1 text-[#9A9898]">
              Everything you need to master STEM in VR
            </p>
            <p className="text-[12px] mt text-[#9A9898]">
              Unlimited access to all 180+ Premium labs{" "}
            </p>
            <h3 className="text-[18px] leading-7 font-bold mt-4.5 text-[#1F2937]">
              Total Amount <span className="pl-22.5">$14.99</span>
            </h3>
          </div>
          <h3 className="text-[14px] mt-4.5 text-[#4B5563]">
            Plan Price{" "}
            <span className="ml-37 font-bold text-[#1F2937]">$149.99</span>
          </h3>
          <button
            onClick={handlePayment}
            className="w-80 mt-80 -ml-7 h-14 bg-[#0F766E] text-white text-[18px]"
          >
            Complete Payment
          </button>
        </div>
      </div>
      {/* Payment Modals */}
      {(showProcessing || showSuccess) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          {showProcessing && (
            <ProcessingPaymentModal onCancel={() => setShowProcessing(false)} />
          )}

          {showSuccess && (
            <PaymentSuccessfulModal onClose={() => setShowSuccess(false)} />
          )}
        </div>
      )}
    </div>
  );
}

export default Instructions;
