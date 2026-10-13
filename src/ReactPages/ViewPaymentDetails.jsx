"use client";

import { useState } from "react";
import { CrossIcon, DownIcon } from "../Icons/Icons";
import EasypaisaSlip from "../Images/EasypaisaSlip.jpg";

function ViewPaymentDetails({ onClose }) {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);

  return (
    <div className="w-171.25 h-279.25 bg-white font-roboto rounded-xl overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5">
        <h1 className="text-[22px] font-medium">View Detail</h1>

        <button type="button" onClick={onClose}>
          <CrossIcon />
        </button>
      </div>

      <div className="w-full border border-[#E5E7EB]" />

      {/* Payment Screenshot */}
      <div className="px-6 mt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-[22px] font-medium">Payment Screenshot</h1>

          <button type="button">
            <DownIcon />
          </button>
        </div>

        <div className="w-147.5 h-92.75 mt-4 border border-dashed border-[#00000080] flex items-center justify-center overflow-hidden">
          <img
            className="w-120 h-85.25 object-cover"
            src={EasypaisaSlip.src}
            alt="Payment screenshot"
          />
        </div>
      </div>

      {/* Student Details */}
      <div className="w-151.5 h-115.25 mx-auto mt-6 rounded-lg border p-6.25 border-[#E5E7EB] shadow-[0px_1px_2px_0px_#0000000D]">
        <h1 className="text-[20px] font-medium mb-5">Student Details</h1>

        <div className="flex flex-col gap-2">
          {/* Full Name */}
          <h3 className="text-[14px] text-[#374151]">Full Name</h3>

          <p className="w-full h-10.5 rounded-lg bg-[#D1D5DB] px-4 flex items-center text-[14px]">
            Rimsha Latif
          </p>

          {/* Email */}
          <h3 className="text-[14px] text-[#374151] mt-4">Email Address</h3>

          <p className="w-full h-10.5 rounded-lg bg-[#D1D5DB] px-4 flex items-center text-[14px]">
            smdesigner024@gmail.com
          </p>

          {/* Phone */}
          <h3 className="text-[14px] text-[#374151] mt-4">Phone Number</h3>

          <p className="w-full h-10.5 rounded-lg bg-[#D1D5DB] px-4 flex items-center text-[14px]">
            +92 300 1234567
          </p>

          {/* Plan */}
          <h3 className="text-[14px] text-[#374151] mt-4">Plan Type</h3>

          <p className="w-full h-10.5 rounded-lg bg-[#D1D5DB] px-4 flex items-center text-[14px]">
            Premium Plan
          </p>
        </div>
      </div>

      {/* Main Buttons */}
      <div className="flex flex-row gap-3 justify-end px-10 mt-6 pb-6">
        {/* Reject */}
        <button
          type="button"
          onClick={() => setShowRejectModal(true)}
          className="w-37.25 h-9.75 border rounded-[5px] flex items-center justify-center"
        >
          Reject
        </button>

        {/* Approve */}
        <button
          type="button"
          onClick={() => setShowApproveModal(true)}
          className="w-37.25 h-9.75 rounded-[5px] bg-[#0F766E] text-white flex items-center justify-center"
        >
          Approve
        </button>
      </div>

      {/* Rejection Modal */}

      {showRejectModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40">
          <div className="w-md h-81.25 bg-white rounded-xl font-roboto p-6">
            {/* Heading */}
            <h1 className="text-[22px] font-medium">Rejection Reason</h1>

            {/* Description */}
            <p className="text-[14px] text-[#4B5563] mt-2">
              Please provide a reason for rejecting.
            </p>

            <textarea
              className="w-100 h-26.5 mt-5 border border-[#D1D5DB] rounded-lg p-4 text-[#374151] text-[14px] resize-none"
              placeholder="Enter reason for rejection..."
            />

            <div className="flex flex-row gap-3 mt-5">
              <button
                type="button"
                onClick={() => setShowRejectModal(false)}
                className="w-48.5 h-10 rounded-lg border border-[#D1D5DB] flex items-center justify-center text-[#374151]"
              >
                Cancel
              </button>
              <button
                type="button"
                className="w-48.5 h-10 rounded-lg bg-[#0F766E] text-white flex items-center justify-center"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Approval Modal */}

      {showApproveModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center backdrop-blur-md">
          <div className="w-md h-81.25 bg-white rounded-xl font-roboto p-6">
            <h1 className="text-[22px] font-medium">Enter Reason (Optional)</h1>

            <p className="text-[14px] text-[#4B5563] mt-2">
              Please provide a reason
            </p>

            <textarea
              className="w-100 h-26.5 mt-5 border border-[#D1D5DB] rounded-lg p-4 text-[#374151] text-[14px] resize-none"
              placeholder="Enter reason "
            />

            <div className="flex flex-row gap-3 mt-5">
              <button
                type="button"
                onClick={() => setShowApproveModal(false)}
                className="w-48.5 h-10 rounded-lg border border-[#D1D5DB] flex items-center justify-center text-[#374151]"
              >
                Cancel
              </button>

              <button
                type="button"
                className="w-48.5 h-10 rounded-lg bg-[#0F766E] text-white flex items-center justify-center"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewPaymentDetails;
