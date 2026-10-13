"use client";

import { usePathname } from "next/navigation";
import UserStatisticNav from "../../../src/components/reportsNanalytics/UserStatisticsNav";

export default function ReportsAnalyticsLayout({ children }) {
  const pathname = usePathname();

  const hideTabs =
    pathname === "/reports-and-analytics/lab-usage-report/grade-wise-usage" ||
    pathname === "/reports-and-analytics/lab-usage-report/subject-wise-usage";

  return (
    <>
      {!hideTabs && <UserStatisticNav />}
      {children}
    </>
  );
}
