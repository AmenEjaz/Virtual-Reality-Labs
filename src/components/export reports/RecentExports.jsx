import { CSVIcon, DownIcon, PDFIcon, XPDFIcon } from "../../Icons/Icons";

function RecentExports() {
  const exports = [
    {
      icon: <PDFIcon />,
      name: "Lab_Usage_Report_Jul2026.pdf",
      date: "2026-06-28",
      time: "14:30",
      size: "2.4MB",
    },
    {
      icon: <CSVIcon />,
      name: "User_Statistics_Jun2026.csv",
      date: "2026-06-28",
      time: "09:15",
      size: "1.1MB",
    },
    {
      icon: <XPDFIcon />,
      name: "Grade_Usage_Q2_2026.xlsx",
      date: "2026-06-15",
      time: "16:45",
      size: "3.8MB",
    },
  ];

  return (
    <div className="mt-7 ml-8.75 w-261 h-105.5 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040]">
      <div className="ml-9.75 mt-11">
        <h2 className="w-54.5 h-6.75 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
          Recent Export
        </h2>

        {exports.map((file) => {
          return (
            <div key={file.name} className="mt-10">
              <div className="flex flex-row font-roboto space-x-4.75 text-[#979696]">
                {file.icon}

                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <p className="text-[16px] font-medium w-65.25 mr-152.75">
                      {file.name}
                    </p>

                    <DownIcon className="" />
                  </div>

                  <p className="text-[12px] mt-2.5">
                    {file.date} {file.time} {file.size}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentExports;
