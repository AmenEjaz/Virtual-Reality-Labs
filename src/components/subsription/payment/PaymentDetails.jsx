"use client";

import React, { useRef, useState } from "react";
import { FileIcon, UploadIcon } from "../../../icons/Icons";

function PaymentDetails() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const history = [
    {
      id: "TXN-2024-001234",
      date: "2024-01-15 14:32",
      plan: "Premium Plan",
      amount: "$149.00",
      reason: ".............................",
      method: "Easypaisa",
      status: "Paid",
      actions: "Approved",
    },
    {
      id: "TXN-2024-001235",
      date: "2024-01-16 10:25",
      plan: "Premium Plan",
      amount: "$149.00",
      reason: ".............................",
      method: "Easypaisa",
      status: "Paid",
      actions: "Reject",
    },
    {
      id: "TXN-2024-001236",
      date: "2024-01-17 12:15",
      plan: "Premium Plan",
      amount: "$149.00",
      reason: ".............................",
      method: "Easypaisa",
      status: "Paid",
      actions: "Pending",
    },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!["image/jpeg", "image/png", "application/pdf"].includes(file.type)) {
      alert("Please upload a JPG, PNG, or PDF file.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must not exceed 5MB.");
      event.target.value = "";
      return;
    }

    setSelectedFile(file);
  };

  return (
    <div className="w-full min-w-0 font-roboto pl-5 pr-6">
      {/* Upload Payment Screenshot */}{" "}
      <div className="w-full min-w-0 min-h-[422px] bg-white border border-[#E5E7EB] shadow-[0px_1px_2px_0px_#0000000D] p-6 rounded-lg mt-6">
        {" "}
        <h1 className="text-[20px] text-[#1F2937] font-bold">
          Upload Payment Screenshot{" "}
        </h1>
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            const file = event.dataTransfer.files?.[0];

            if (file && fileInputRef.current) {
              const transfer = new DataTransfer();
              transfer.items.add(file);
              fileInputRef.current.files = transfer.files;
              fileInputRef.current.dispatchEvent(
                new Event("change", { bubbles: true }),
              );
            }
          }}
          className="w-full min-h-80 rounded-lg border-2 border-[#D1D5DB] border-dashed mt-6 flex items-center justify-center flex-col cursor-pointer hover:border-[#9333EA] transition-colors p-5"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F3E8FF]">
            <UploadIcon />
          </div>

          <h2 className="text-[18px] mt-4 text-[#1F2937] font-bold text-center">
            Upload Payment Proof
          </h2>

          <p className="text-[14px] mt-4 text-[#4B5563] text-center">
            Drag and drop your screenshot here, or click to browse
          </p>

          <div className="flex min-w-36 h-10 px-4 gap-2 rounded-lg items-center justify-center mt-4 bg-[#9333EA]">
            <FileIcon />
            <span className="text-[14px] text-white">Choose File</span>
          </div>

          {selectedFile && (
            <p className="text-[13px] mt-3 text-[#15803D] text-center break-all">
              Selected: {selectedFile.name}
            </p>
          )}

          <p className="text-[12px] mt-4 text-[#6B7280] text-center">
            Supported formats: JPG, PNG, PDF (Max 5MB)
          </p>
        </div>
      </div>
      {/* Payment History */}
      <div className="w-full min-w-0 bg-white border border-[#E5E7EB] shadow-[0px_1px_2px_0px_#0000000D] p-6 rounded-lg mt-6 overflow-hidden">
        <h2 className="text-[20px] text-[#1F2937] font-bold mb-6">
          Payment History
        </h2>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-250 border-collapse">
            <colgroup>
              <col className="w-37.5" />
              <col className="w-31.25" />
              <col className="w-25" />
              <col className="w-25" />
              <col className="w-37.5" />
              <col className="w-32.5" />
              <col className="w-25" />
              <col className="w-32.5" />
            </colgroup>

            <thead className="text-[12px] font-semibold text-[#4B5563] text-center bg-[#F9FAFB]">
              <tr>
                {[
                  "Transaction ID",
                  "Date",
                  "Plan",
                  "Amount",
                  "Reason",
                  "Payment Method",
                  "Status",
                  "Actions",
                ].map((heading) => (
                  <th key={heading} className="px-3 py-4">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {history.map((data) => (
                <tr
                  key={data.id}
                  className="text-[14px] text-center border-t border-[#E5E7EB]"
                >
                  <td className="px-3 py-5 text-[#111827] whitespace-nowrap">
                    {data.id}
                  </td>
                  <td className="px-3 py-5 text-[#4B5563] whitespace-nowrap">
                    {data.date}
                  </td>
                  <td className="px-3 py-5 text-[#111827]">{data.plan}</td>
                  <td className="px-3 py-5 font-semibold text-[#111827]">
                    {data.amount}
                  </td>
                  <td className="px-3 py-5 text-[#4B5563]">{data.reason}</td>
                  <td className="px-3 py-5 text-[#4B5563]">{data.method}</td>

                  <td className="px-3 py-5">
                    <span
                      className={`inline-flex items-center justify-center px-3 py-1 text-[12px] font-medium rounded-full whitespace-nowrap ${data.status === "Paid" ? "text-[#15803D] bg-[#DCFCE7]" : "text-[#C9511D] bg-[#FCE2DC]"}`}
                    >
                      {data.status}
                    </span>
                  </td>

                  <td className="px-3 py-5">
                    <span
                      className={`text-[12px] font-medium px-3 py-1 rounded-full whitespace-nowrap ${data.actions === "Approved" ? "text-[#15803D] bg-[#DCFCE7]" : data.actions === "Reject" ? "text-[#E94B4B] bg-[#FCE2DC]" : "text-[#C9511D] bg-[#FDF1E8]"}`}
                    >
                      {data.actions}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
