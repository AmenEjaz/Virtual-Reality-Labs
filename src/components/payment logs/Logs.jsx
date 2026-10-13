"use client";

import { useRouter } from "next/navigation";
import { SearchIcon } from "../../Icons/Icons";

const data = [
  {
    date: "2024-01-15",
    time: "14:32",
    user: "Rimsha latif",
    email: "smdesigner024@gmail.com",
    plan: "Premium Plan",
    amount: "$149.00",
    paymentMethod: "Easypaisa",
    status: "Paid",
    actions: "View Details",
  },
  {
    date: "2024-01-15",
    time: "13:18",
    user: "Rimsha latif",
    email: "smdesigner024@gmail.com",
    plan: "Basic Plan",
    amount: "$49.00",
    paymentMethod: "Easypaisa",
    status: "Paid",
    actions: "View Details",
  },
  {
    date: "2024-01-15",
    time: "11:45",
    user: "Rimsha latif",
    email: "smdesigner024@gmail.com",
    plan: "Enterprise Plan",
    amount: "$299.00",
    paymentMethod: "Easypaisa",
    status: "Failed",
    actions: "View Details",
  },
  {
    date: "2024-01-15",
    time: "10:22",
    user: "Rimsha latif",
    email: "smdesigner024@gmail.com",
    plan: "Premium Plan",
    amount: "$149.00",
    paymentMethod: "Easypaisa",
    status: "Paid",
    actions: "View Details",
  },
  {
    date: "2024-01-15",
    time: "11:45",
    user: "Rimsha latif",
    email: "smdesigner024@gmail.com",
    plan: "Basic Plan",
    amount: "$299.00",
    paymentMethod: "Easypaisa",
    status: "Paid",
    actions: "View Details",
  },
  {
    date: "2024-01-15",
    time: "10:22",
    user: "Rimsha latif",
    email: "smdesigner024@gmail.com",
    plan: "Premium Plan",
    amount: "$149.00",
    paymentMethod: "Easypaisa",
    status: "Paid",
    actions: "View Details",
  },
  {
    date: "2024-01-15",
    time: "13:18",
    user: "Rimsha latif",
    email: "smdesigner024@gmail.com",
    plan: "Basic Plan",
    amount: "$49.00",
    paymentMethod: "Easypaisa",
    status: "Paid",
    actions: "View Details",
  },
  {
    date: "2024-01-15",
    time: "11:45",
    user: "Rimsha latif",
    email: "smdesigner024@gmail.com",
    plan: "Enterprise Plan",
    amount: "$299.00",
    paymentMethod: "Easypaisa",
    status: "Failed",
    actions: "View Details",
  },
];

function Logs() {
  const router = useRouter();
  return (
    <div>
      {/* Search bar */}
      <h2 className=" w-54.5 h-6.75 ml-7  font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
        Payment Logs
      </h2>
      <div className=" flex flex-row ">
        <div className=" w-220 h-9 flex gap-2.5  border border-[#D1D5DB] rounded-lg pl-2  items-center flex-row-41.75  font-roboto font-medium leading-[133%] ml-7 mt-4  text-[#868686]">
          <SearchIcon />
          <input
            className=" text-[14px] w-192.75  "
            type="text"
            name=""
            id=""
            placeholder=" Search by user name, email or plan..."
          />
        </div>
        <button className="w-26.5 ml-3 h-9 mt-3.5 border border-[#D1D5DB] rounded-lg text-[14px] bg-[#EFEFEF] text-[#374151]">
          <select name="dats" id="days">
            <option value="">Last 7 Days</option>
            <option value="">Last 2 Days</option>
          </select>
        </button>
        <button className="w-26.5 h-9 ml-3 mt-3.5 border border-[#D1D5DB] rounded-lg text-[14px] bg-[#EFEFEF] text-[#374151]">
          <select name="dats" id="days">
            <option value="">All Status</option>
            <option value="">Last 2 Days</option>
          </select>
        </button>
      </div>

      {/* Table */}
      <table className="w-270.75 h-148 ml-8.75 mt-5 ">
        <colgroup>
          <col className="w-44.5" />
          <col className="w-52.25" />
          <col className="w-40.25" />
          <col className="w-25" />
          <col className="w-46.25" />
          <col className="w-35" />
          <col className="w-32.5" />
        </colgroup>
        <thead>
          <tr className=" h-10 w-271.25 text-left  bg-[#F5F5F5] font-medium text-[12px] text-[#4B5563]">
            <th className="">Date & time</th>
            <th className="">User</th>
            <th className="">Plan Name</th>
            <th className="">Amount</th>
            <th className="">Payment Method</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        {data.map((log, index) => {
          return (
            <tr key={index} className="font-roboto">
              <td className="h-18 border-b border-[#D1D5DB] text-[14px] text-[#111827]">
                {log.date} {log.time}
              </td>

              <td className="border-b border-[#D1D5DB]">
                <div className="flex flex-col">
                  <p className="text-[14px] text-[#111827]">{log.user}</p>
                  <p className="w-38 text-[12px] text-[#6B7280]">{log.email}</p>
                </div>
              </td>

              <td className="border-b border-[#D1D5DB] text-[14px] text-[#111827]">
                {log.plan}
              </td>

              <td className="border-b border-[#D1D5DB] text-[14px] text-[#111827] font-medium">
                {log.amount}
              </td>

              <td className="border-b border-[#D1D5DB] text-[14px] text-[#4B5563]">
                {log.paymentMethod}
              </td>

              <td className="border-b border-[#D1D5DB]">
                <span
                  className={`inline-flex w-12 h-5.5 items-center justify-center rounded-xl text-[12px] ${
                    log.status === "Paid"
                      ? "bg-[#DCFCE7] text-[#15803D]"
                      : "bg-[#FEE2E2] text-[#B91C1C]"
                  }`}
                >
                  {log.status}
                </span>
              </td>

              <button
                onClick={() => router.push("/payment-logs/payment-logs")}
                className="mt-7  border-[#D1D5DB] text-[14px] text-[#052967] font-medium"
              >
                {log.actions}
              </button>
            </tr>
          );
        })}
      </table>
      <div className="mt-7 flex flex-row font-roboto w-265 h-17.25 border border-[#F3F4F6] gap-2.5">
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
export default Logs;
