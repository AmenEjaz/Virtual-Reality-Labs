"use client";

import { useState } from "react";
import ViewChatModal from "./ViewChatModal";
import { DeleteIcon, EyeIcon, SearchIcon, TickIcon } from "../../Icons/Icons";
function MessagesTable() {
  const paymentData = [
    {
      name: "Rimsha latif",
      email: "smdesigner024@gmail.com",
      message: "Hello, I am very interested in...",
      date: "Apr 9,2026",
      time: "10:32",
      status: "New",
    },
    {
      name: "Rimsha latif",
      email: "smdesigner024@gmail.com",
      message: "Hello, I am very interested in...",
      date: "Apr 9,2026",
      time: "10:32",
      status: "New",
    },
    {
      name: "Rimsha latif",
      email: "smdesigner024@gmail.com",
      message: "Hello, I am very interested in...",
      date: "Apr 9,2026",
      time: "10:32",
      status: "Replied",
    },
    {
      name: "Rimsha latif",
      email: "smdesigner024@gmail.com",
      message: "Hello, I am very interested in...",
      date: "Apr 9,2026",
      time: "10:32",
      status: "Read",
    },
    {
      name: "Rimsha latif",
      email: "smdesigner024@gmail.com",
      message: "Hello, I am very interested in...",
      date: "Apr 9,2026",
      time: "10:32",
      status: "Read",
    },
    {
      name: "Rimsha latif",
      email: "smdesigner024@gmail.com",
      message: "Hello, I am very interested in...",
      date: "Apr 9,2026",
      time: "10:32",
      status: "Replied",
    },
    {
      name: "Rimsha latif",
      email: "smdesigner024@gmail.com",
      message: "Hello, I am very interested in...",
      date: "Apr 9,2026",
      time: "10:32",
      status: "New",
    },
  ];
  const [viewMessage, setViewMessage] = useState(null);
  return (
    <div>
      <div className="ml-7 mr-7 mt-7 flex flex-row items-center gap-4">
        {" "}
        {/* Search Bar */}
        <div className="w-139.25 h-10.5 flex flex-row items-center gap-2.5 border border-[#E5E7EB] rounded-lg px-3 font-roboto">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search by university name..."
            className="w-full outline-none border-none text-[14px] text-[#262626] placeholder:text-[#9CA3AF]"
          />
        </div>
        {/* Message Filter Buttons */}
        <div className="w-74.75 h-10 flex flex-row border border-[#E5E7EB] rounded-lg overflow-hidden">
          <button className="w-1/4 h-full flex items-center justify-center border-r border-[#E5E7EB] bg-white text-[14px] ">
            All
          </button>
          <button className="w-1/4 h-full flex items-center justify-center border-r border-[#E5E7EB] bg-[#E5E7EB] text-[14px] ">
            New
          </button>
          <button className="w-1/4 h-full flex items-center justify-center border-r border-[#E5E7EB] bg-[#E5E7EB] text-[14px] ">
            Read
          </button>
          <button className="w-1/4 h-full flex items-center justify-center bg-[#E5E7EB] text-[14px] ">
            Unread
          </button>
        </div>
        {/* Date Dropdown */}{" "}
        <select className="w-40.25 h-10 ml-0 rounded-xl border-none bg-[#E5E7EB] px-3 text-[14px]  outline-none">
          {" "}
          <option value="newest">Date (Newest)</option>{" "}
          <option value="oldest">Date (Oldest)</option>{" "}
        </select>{" "}
      </div>
      {/* Table */}

      <table className="w-284 ml-8.75 mt-5 table-fixed border-collapse">
        <colgroup>
          <col className="w-[15%]" /> {/* Name */}
          <col className="w-[22%]" /> {/* Email */}
          <col className="w-[22%]" /> {/* Messages */}
          <col className="w-[14%]" /> {/* Date */}
          <col className="w-[12%]" /> {/* Status */}
          <col className="w-[15%]" /> {/* Actions */}
        </colgroup>

        <thead>
          <tr className="h-16 bg-[#F5F5F5] text-left font-roboto font-medium text-[12px] text-[#374151]">
            <th className="px-4 text-left">Name</th>
            <th className="px-15">Email</th>
            <th className="px-4 text-left">Messages</th>
            <th className="px-6">Date</th>
            <th className="px-6">Status</th>
            <th className="px-10">Actions</th>
          </tr>
        </thead>

        <tbody>
          {paymentData.map((data) => (
            <tr
              key={data.id}
              className="h-14 font-roboto border-b border-[#F3F4F6]"
            >
              <td className="px-4 text-left text-[14px] font-semibold text-[#111827]">
                {data.name}
              </td>

              <td className="px-4 text-left text-[12px] text-[#6B7280]">
                {data.email}
              </td>

              <td className="px-4 text-[12px] text-[#374151]">
                {data.message}
              </td>

              <td className="px-4 text-left text-[12px] text-[#374151]">
                <div className="flex flex-col gap-0.5">
                  <span>{data.date}</span>
                  <span>{data.time}</span>
                </div>
              </td>

              <td className="px-4 text-left">
                <span
                  className={`inline-flex items-center justify-center min-w-17.5 h-5 px-3 rounded-full text-[12px] font-bold
              ${
                data.status === "New"
                  ? "text-[#C2410C] bg-[#FFEDD5]"
                  : data.status === "Replied"
                    ? "text-[#15803D] bg-[#DCFCE7]"
                    : "text-[#565555] bg-[#E8E7E5]"
              }
            `}
                >
                  {data.status}
                </span>
              </td>

              <td className="px-4">
                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setViewMessage(data)}
                    className="cursor-pointer"
                  >
                    <EyeIcon />
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center cursor-pointer"
                  >
                    <TickIcon />
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center cursor-pointer"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {viewMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur">
          <ViewChatModal
            message={viewMessage}
            onClose={() => setViewMessage(null)}
          />
        </div>
      )}
      <div className="ml-9.25 mt-7 flex flex-row font-roboto w-265 h-17.25 border border-[#F3F4F6] gap-2.5">
        <p className="ml-6 whitespace-nowrap w-full text-[14px] text-[#4B5563]">
          Showing <span className="font-medium"> 1 </span> to{" "}
          <span className="font-medium"> 8 </span> of{" "}
          <span className="font-medium">247 </span>results
        </p>

        <div className="flex flex-row ml-148  gap-2">
          <button className="w-20 h-8.5 rounded-md border text-[#4B5563] border-[#D1D5DB]">
            Previous
          </button>

          <button className="w-8 h-8.5 rounded-md border text-white bg-[#0F766E]">
            1
          </button>
          <button className="w-8 h-8.5 rounded-md border text-[#374151] border-[#D1D5DB]">
            2
          </button>
          <button className="w-8 h-8.5 text-[#374151] rounded-md border  border-[#D1D5DB]">
            3
          </button>

          <button className="w-20 h-8.5 rounded-md border text-[#4B5563] font-medium border-[#D1D5DB]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default MessagesTable;
