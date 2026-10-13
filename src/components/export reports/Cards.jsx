"use client";

import { useState } from "react";

import {
  ActivityLogIcon,
  CompletionIcon,
  DGreenDiamondIcon,
  DGreenStarIcon,
  DownloadIcon,
  GreenLabIcon,
  StatisticIcon,
  SubjectReportIcon,
  YTIcon,
} from "../../Icons/Icons";

const reports = [
  {
    id: 1,
    icon: <GreenLabIcon />,
    name: "Lab Usage Report",
    info: "Complete lab launch statistics and trends",
  },
  {
    id: 2,
    icon: <StatisticIcon />,
    name: "User Statistics Report",
    info: "User demographics and activity metrics",
  },
  {
    id: 3,
    icon: <DGreenStarIcon />,
    name: "Grade-wise Usage Report",
    info: "Usage breakdown by educational grade",
  },
  {
    id: 4,
    icon: <SubjectReportIcon />,
    name: "Subject-wise Usage Report",
    info: "Usage breakdown by educational grade",
  },
  {
    id: 5,
    icon: <DGreenDiamondIcon />,
    name: "Free vs Premium Report",
    info: "Comparative analysis of plan tiers",
  },
  {
    id: 6,
    icon: <YTIcon />,
    name: "Subscription Revenue Report",
    info: "Revenue and subscription trends",
  },
  {
    id: 7,
    icon: <CompletionIcon />,
    name: "Lab Completion Report",
    info: "Completion rates and progress tracking",
  },
  {
    id: 8,
    icon: <ActivityLogIcon />,
    name: "User Activity Log",
    info: "Detailed user activity timeline",
  },
];

function Cards() {
  const [selectedReports, setSelectedReports] = useState([]);

  const toggleReport = (id) => {
    setSelectedReports((previous) =>
      previous.includes(id)
        ? previous.filter((reportId) => reportId !== id)
        : [...previous, id],
    );
  };

  const handleExport = () => {
    if (selectedReports.length === 0) {
      alert("Please select at least one report to export.");
      return;
    }

    const selectedNames = reports
      .filter((report) => selectedReports.includes(report.id))
      .map((report) => report.name);

    alert(`Selected reports:\n${selectedNames.join("\n")}`);
  };

  return (
    <div>
      <div className="ml-9.75 mt-11">
        <h2 className="w-54.5 h-6.75 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
          Select Reports to Export
        </h2>

        <p className="mb-2.75 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
          {selectedReports.length} report(s) selected
        </p>
      </div>

      <div className="ml-8.75 w-261 grid grid-cols-4 gap-x-2.75 gap-y-7">
        {reports.map((report) => {
          const isSelected = selectedReports.includes(report.id);

          return (
            <button
              type="button"
              key={report.id}
              onClick={() => toggleReport(report.id)}
              aria-pressed={isSelected}
              className={`w-63.25 h-46.75 rounded-xl border-[0.5px] flex flex-col justify-center text-left transition-colors ${
                isSelected
                  ? "border-[#0F766E] bg-[#F0FDFA]"
                  : "border-[#D9D9D9] bg-white"
              }`}
            >
              <div
                className={`w-19.25 h-12.75 ml-6.75 rounded-[7px] flex items-center justify-center border ${
                  isSelected ? "border-[#0F766E]" : "border-[#D9D9D9]"
                }`}
              >
                {report.icon}
              </div>

              <h3 className="font-roboto font-medium ml-6.75 mt-3 text-[16px] w-48.5">
                {report.name}
              </h3>

              <p className="text-[16px] text-[#979696] w-39.75 mt-1 ml-6.75">
                {report.info}
              </p>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handleExport}
        disabled={selectedReports.length === 0}
        className="w-48 h-11 gap-2.5 rounded-lg mt-9.25 ml-220.25 font-roboto text-white text-[14px] bg-[linear-gradient(90deg,#0F766E_0%,#111827_100%)] disabled:opacity-50"
      >
        <span className="flex flex-row gap-1.5 justify-center items-center">
          <DownloadIcon />
          Export {selectedReports.length} Report(s)
        </span>
      </button>
    </div>
  );
}

export default Cards;
