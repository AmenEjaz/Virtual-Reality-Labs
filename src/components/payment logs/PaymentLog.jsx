"use client";

import { useState } from "react";
import { BackArrowIcon } from "../../Icons/Icons";
import ViewPaymentDetails from "../../ReactPages/ViewPaymentDetails";
function PaymentLog() {
  const history = [
    {
      id: "TXN-2024-001234",
      date: "2024-01-15 14:32",
      plan: "Premium Plan",
      amount: "$149.00",
      paymentMethod: "Easypaisa",
      status: "Paid",
      actions: "Approved",
    },
  ];

  const [showScreenshot, setShowScreenshot] = useState(false);
  return (
    <div className="w-284.5 h-347 font-roboto">
      <div className="ml-9.5 mt-5">
        <BackArrowIcon />
      </div>

      <div className="mt-12.25 flex flex-row ml-20">
        {/* User */}
        <div className="flex flex-row">
          <div className="h-16 w-16 bg-[#0F766E] rounded-full tracking-wide text-white font-semibold flex items-center justify-center text-[20px]">
            PS
          </div>

          <div className="flex flex-col ml-9.5">
            <h2 className="mt-2 font-medium text-[24px] leading-[133%] text-[#000000]">
              Rimsha Latif
            </h2>

            <p className="text-[16px] text-[#4B5563] leading-6">
              smdesigner024@gmail.com
            </p>

            <p className="text-[16px] text-[#4B5563] leading-6">
              Member since 2024-01-15
            </p>
          </div>
        </div>

        {/* Current Plan */}
        <div className="flex flex-col ml-149.75">
          <div className="flex flex-row items-center gap-2">
            <h2 className="font-medium whitespace-nowrap text-[18px] leading-[133%] text-[#000000]">
              Premium Plan
            </h2>

            <span className="text-[#15803D] bg-[#DCFCE7] rounded-full px-2 py-1 text-[12px] flex items-center justify-center">
              Active
            </span>
          </div>

          <p className="text-[14px] whitespace-nowrap text-[#4B5563] leading-6">
            Expires: 2024-06-15
          </p>

          <p className="whitespace-nowrap text-[16px] text-[#4B5563] leading-6">
            Applications: 8 / 15
          </p>
        </div>
      </div>

      {/* Plan Management Heading  */}
      <div className="flex flex-row items-center mt-10 ml-20">
        <h2 className="w-54.5 h-7 text-[20px] font-medium">Plan Management</h2>

        <button
          onClick={() => setShowScreenshot(true)}
          className="w-62 h-10 ml-auto mr-5 bg-[#0F766E] text-white text-[16px] rounded-lg"
        >
          View Payment Screenshot
        </button>
      </div>

      <div className="flex flex-row ml-28 mt-20 gap-55.25">
        <div className="flex flex-col">
          <p className="text-[14px] text-[#4B5563]">Plan Type</p>

          <span className="text-[18px] text-[#111827] whitespace-nowrap font-bold">
            Premium Plan
          </span>
        </div>

        <div className="flex flex-col">
          <p className="text-[14px] text-[#4B5563]">Renewal Date</p>

          <span className="text-[18px] text-[#111827] whitespace-nowrap font-bold">
            2024-06-15
          </span>
        </div>
      </div>

      {/* History */}
      <h2 className="mt-22.5 ml-20 h-7 text-[20px] font-medium">
        Payment History
      </h2>

      <table className="mt-8 ml-6 w-261 border-collapse">
        <colgroup>
          <col className="w-72" />
          <col className="w-56" />
          <col className="w-46" />
          <col className="w-46.5" />
          <col className="w-56.25" />
          <col className="w-46.75" />
          <col className="w-46" />
        </colgroup>

        <thead>
          <tr className="h-10 text-[12px] text-[#4B5563] font-bold">
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Plan</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {history.map((data) => (
            <tr key={data.id} className="h-14 text-center">
              <td className="text-[14px]  text-[#111827]">{data.id}</td>
              <td className="text-[#4B5563] text-[14px]">{data.date}</td>
              <td className="text-[14px] text-[#111827]">{data.plan}</td>
              <td className="text-[#111827] text-[14px] font-semibold">
                {data.amount}
              </td>
              <td className="text-[#4B5563] text-[14px]">
                {data.paymentMethod}
              </td>
              <td>
                <span className="text-[12px] text-[#15803D] bg-[#DCFCE7] px-3 py-1 font-bold rounded">
                  {data.status}
                </span>
              </td>
              <td>
                <span className="text-[12px] text-[#15803D] bg-[#DCFCE7] px-3 py-1 font-bold rounded">
                  {data.actions}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showScreenshot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
          <ViewPaymentDetails onClose={() => setShowScreenshot(false)} />
        </div>
      )}
    </div>
  );
}

export default PaymentLog;
