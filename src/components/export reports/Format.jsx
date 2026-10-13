"use client";
import { useState } from "react";
import { CSVIcon, PDFIcon, XPDFIcon } from "../../Icons/Icons";

function Format() {
  const formats = [
    {
      icon: PDFIcon,
      name: "PDF",
    },
    {
      icon: CSVIcon,
      name: "CSV",
    },
    {
      icon: XPDFIcon,
      name: "PDF",
    },
  ];

  const [selectedFormat, setSelectedFormat] = useState(0);

  return (
    <div>
      {/* Heading */}
      <div className="ml-9.75 mt-13">
        <h2 className="w-54.5 h-6.75 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
          Export Format
        </h2>

        <p className="mb-2.75 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
          Generate and download detailed analytics reports
        </p>
      </div>

      {/* Cards */}
      <div className="w-261 h-37 ml-9.5 mt-3.5 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040]">
        <h2 className="h-6.75 ml-10 mt-7 font-roboto text-[20px] font-medium">
          Export Format
        </h2>

        <div className="flex flex-row mt-2.75 ml-10 gap-1.5 font-roboto font-medium">
          {formats.map((format, index) => {
            const Icon = format.icon;

            return (
              <div
                key={index}
                onClick={() => setSelectedFormat(index)}
                className={`w-48 h-10.5 rounded-xl border border-[#A4A4A4] flex flex-row items-center justify-center gap-2.5 cursor-pointer ${
                  selectedFormat === index
                    ? "bg-linear-to-r from-[#0F766E] to-[#111827] text-white"
                    : "bg-white text-[#262626]"
                }`}
              >
                <Icon
                  color={selectedFormat === index ? "#FFFFFF" : "#747373"}
                />

                {format.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Format;
