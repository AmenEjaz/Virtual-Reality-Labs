"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function UserStatisticNav() {
  const pathname = usePathname();

  return (
    <div className="mt-14.25 flex flex-row mb-6">
      <Link
        href="/reports-and-analytics/user-statistics"
        className={`ml-6 w-70.75 h-12 text-[20px] font-medium flex items-center justify-center
          ${
            pathname === "/reports-and-analytics/user-statistics"
              ? "bg-[#0F766E] text-[#F6F6F6]"
              : "bg-[#F6F6F6] text-[#000000]"
          }`}
      >
        User Statistics
      </Link>

      <Link
        href="/reports-and-analytics/lab-usage-report"
        className={`w-70.75 h-12 text-[20px] font-medium flex items-center justify-center
          ${
            pathname === "/reports-and-analytics/lab-usage-report"
              ? "bg-[#0F766E] text-[#F6F6F6]"
              : "bg-[#F6F6F6] text-[#000000]"
          }`}
      >
        Lab Usage Report
      </Link>

      <Link
        href="/reports-and-analytics/statistics"
        className={`w-70.75 h-12 text-[20px] font-medium flex items-center justify-center
          ${
            pathname === "/reports-and-analytics/statistics"
              ? "bg-[#0F766E] text-[#F6F6F6]"
              : "bg-[#F6F6F6] text-[#000000]"
          }`}
      >
        Free vs Premium Statistics
      </Link>
    </div>
  );
}

export default UserStatisticNav;
