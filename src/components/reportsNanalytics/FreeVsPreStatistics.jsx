import { BlackLabIcon, BlackPremiumIcon, Freeicon } from "../../Icons/Icons";

function FreeVsPreStatistics() {
  const comparisonData = [
    {
      items: "Avg. Session Duration",
      free: "22 min",
      premium: "48 min",
      difference: "+118%",
    },
    {
      items: "Labs Completed per Week",
      free: "3.2",
      premium: "8.7",
      difference: "+172%",
    },
    {
      items: "Return Rate",
      free: "62%",
      premium: "91%",
      difference: "+47%",
    },
    {
      items: "Support Tickets",
      free: "2.4/mon",
      premium: "0.6/mon",
      difference: "-75%",
    },
    {
      items: "Avg. rating Given",
      free: "3.9",
      premium: "4.7",
      difference: "+21%",
    },
  ];

  const total = 24893;
  const freeLabs = 16172;
  const premiumLabs = 8721;

  const freePercentage = (freeLabs / total) * 100;
  const premiumPercentage = (premiumLabs / total) * 100;
  const data = [
    {
      icon: <Freeicon />,
      count: "16,177",
      info: "Free Users",
      percentage: "65% of total",
    },
    {
      icon: <BlackPremiumIcon />,
      count: "110",
      info: "Premium Users",
      percentage: "35% of total",
    },
    {
      icon: <BlackLabIcon />,
      count: "112",
      info: "Free Labs",
      percentage: "60% of total",
    },
    {
      icon: <BlackPremiumIcon />,
      count: "72",
      info: "Premium Labs",
      percentage: "40% of total",
    },
  ];

  return (
    <div className="w-284.5 h-292.25">
      {/* Statistics Cards */}
      <div className="flex gap-6 ml-9.5">
        {data.map((labData, index) => (
          <div
            key={index}
            className="
              w-61.25
              h-50.25
              flex
              flex-col
              justify-center
              rounded-xl
              border-[0.5px]
              border-[#D9D9D9]
              shadow-[0px_2px_4px_0px_#00000040]
            "
          >
            <div
              className="
                w-15
                h-12.5
                ml-8
                shadow-[0px_2px_4px_0px_#00000040]
                rounded-md
                mb-4
                flex
                justify-center
                items-center
              "
            >
              {labData.icon}
            </div>

            <p className="font-roboto mt-2 ml-8 font-medium text-[24px]">
              {labData.count}
            </p>

            <p className="font-roboto ml-8 text-[14px] text-[#A1A1A1]">
              {labData.info}
            </p>

            <p className="font-roboto ml-8 text-[14px] text-[#A1A1A1]">
              {labData.percentage}
            </p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="flex flex-row mt-18">
        {/* Lab Access Distribution */}
        <div className="w-106.25 ml-9 h-82 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040]">
          <h3 className="font-roboto font-medium leading-[133%] text-[16px] mt-9 ml-7.5">
            Lab Access Distribution
          </h3>

          <div className="mt-8.75 ml-8 flex flex-row">
            <div className="h-4 w-4 rounded-full bg-[#0F766E]" />

            <p className="ml-2.25 font-roboto font-medium leading-[133%] text-[#A1A1A1] text-[14px]">
              Free Labs
            </p>
          </div>

          <div className="mt-3.5 ml-8 flex flex-row">
            <div className="h-4 w-4 rounded-full bg-[#111827]" />

            <p className="ml-2.25 font-roboto font-medium leading-[133%] text-[#A1A1A1] text-[14px]">
              Premium Labs
            </p>
          </div>
        </div>

        {/* User Plan Distribution */}
        <div className="ml-7.25 ">
          <div className="w-151 h-82 rounded-xl  border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040]">
            <h3 className="font-roboto font-medium leading-[133%] text-[16px] mt-9 ml-9">
              User Plan Distribution
            </h3>

            {/* Chart + Legend */}
            <div className="flex items-center mt-10.25 ml-7">
              {/* DONUT */}
              <div
                className="w-39.25 h-39.25 rounded-full relative"
                style={{
                  background: `conic-gradient(
      #12857D 0% ${freePercentage}%,
      #111827 ${freePercentage}% ${freePercentage + premiumPercentage}%
    )`,
                }}
              >
                <div className="absolute inset-6.75 rounded-full bg-white flex flex-col items-center justify-center">
                  <span className="font-roboto font-medium text-[18px] text-[#111111]">
                    {total}
                  </span>

                  <span className="font-roboto text-[12px] text-[#A1A1A1]">
                    Total
                  </span>
                </div>
              </div>

              {/* LEGEND */}
              <div className="ml-18">
                {/* Free Labs */}
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-[#0F766E] shrink-0" />

                  <p className="ml-2.25 w-33.75 font-roboto font-medium text-[14px] text-[#A1A1A1]">
                    Free Labs
                  </p>

                  <p className="font-roboto ml-22 font-medium text-[13px] text-[#111111]">
                    16172
                  </p>
                </div>

                {/* Premium Labs */}
                <div className="mt-3.5 flex items-center">
                  <div className="h-4 w-4 rounded-full bg-[#111827] shrink-0" />

                  <p className="ml-2.25 w-33.75 font-roboto font-medium text-[14px] text-[#A1A1A1]">
                    Premium Labs
                  </p>

                  <p className="font-roboto font-medium ml-24 text-[13px] text-[#111111]">
                    8721
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-262.5 mt-7.5 h-95.5 ml-9 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040]">
        <h3 className="font-roboto font-medium leading-[133%] text-[16px] mt-9 ml-9">
          Engagement Comparison
        </h3>

        <table className="w-full mt-10 table-fixed border-collapse">
          <colgroup>
            <col className="w-37.5" />
            <col className="w-37.5" />
            <col className="w-37.5" />
            <col className="w-37.5" />
          </colgroup>

          <thead className=" ">
            <tr className="">
              <th className="pl-8.5 pb-3 text-left font-roboto font-medium text-[14px] leading-[133%] text-[#111010] whitespace-nowrap">
                Metric
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#06B6D4] whitespace-nowrap">
                Free
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#8B5CF6] whitespace-nowrap">
                Premium
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#111010] whitespace-nowrap">
                Difference
              </th>
            </tr>
          </thead>

          <tbody>
            {comparisonData.map((com, index) => (
              <tr
                key={com.items}
                className={`h-11.25 ${
                  index !== comparisonData.length - 1
                    ? "border border-[#E6E6E6]"
                    : ""
                }`}
              >
                <td className="pl-7.75 text-left align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101] whitespace-nowrap">
                  {com.items}
                </td>
                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
                  {com.free}
                </td>
                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#8B5CF6]">
                  {com.premium}
                </td>
                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#3EAD46]">
                  {com.difference}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FreeVsPreStatistics;
