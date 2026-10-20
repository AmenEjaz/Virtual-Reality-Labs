"use client";

import React, { useState } from "react";
import DeleteAccountModal from "./DeleteAccountModal";
function PrivacySettings() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="mt-[133px] font-roboto pl-13">
      <h2 className="text-[20px] font-semibold">Privacy Settings</h2>

      <p className="text-[14px] text-[#727272] mb-8.75">
        Choose how and when you want to be notified.
      </p>

      <p className="text-[14px] text-[#2D2B2B] font-bold mb-2.75">
        Deactivate Account
      </p>

      <p className="text-[12px] text-[#655D5D]">
        Temporarily disable your account. You can reactivate it anytime by
        signing in again. Your data and settings will be preserved.
      </p>

      <p className="mt-3 p-4 text-[12px] text-[#655D5D]">
        Deactivation is temporary. All your applications, preferences, and
        documents remain intact. Simply log back in to restore full access.
      </p>

      <button className="w-35.5 mt-5.75 h-9 rounded-lg border border-[#FFAD14] text-[14px] text-[#8E6A28] bg-[#FFF4DD]">
        Deactivate Account
      </button>

      <p className="text-[14px] ml-4 text-[#2D2B2B] font-bold mt-16.75 mb-2.75">
        Delete Account
      </p>

      <p className="text-[12px] text-[#655D5D] ml-4">
        Permanently delete your account and all associated data. This action
        cannot be undone. All personal information, applications, and documents
        will be erased.
      </p>

      <p className="mt-3 p-4 text-[12px] text-[#655D5D] ml-4 h-19.75 w-130 border border-[#FFB7B7]">
        Account deletion is permanent. Your personal information, applications,
        and documents will be erased.
      </p>

      <button
        type="button"
        onClick={() => setShowDeleteModal(true)}
        className="ml-4 w-35.5 mt-5.75 h-9 rounded-lg border border-[#FFAD14] text-[14px] text-white bg-[#EF4444]"
      >
        Delete Account
      </button>

      {showDeleteModal && (
        <DeleteAccountModal onClose={() => setShowDeleteModal(false)} />
      )}
    </div>
  );
}

export default PrivacySettings;
