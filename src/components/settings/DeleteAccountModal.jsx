"use client";

import React from "react";

function DeleteAccountModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-112 h-64.75 bg-white font-roboto p-6 rounded-xl shadow-lg">
        <h3 className="font-bold text-[20px] text-[#111827]">Delete Account</h3>

        <label className="block mt-9 text-[14px] text-[#4B5563]">
          Please Enter your Current Password
        </label>

        <input
          className="mt-2 w-full h-11 rounded-lg px-4 border text-[14px] text-[#655D5D] border-[#D1D5DB]"
          placeholder="Enter reason for suspension"
          type="password"
        />

        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 h-10 rounded-lg bg-[#F3F4F6] text-[#374151]"
          >
            Cancel
          </button>

          <button
            type="button"
            className="flex-1 h-10 rounded-lg text-white bg-[#0F766E]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccountModal;
