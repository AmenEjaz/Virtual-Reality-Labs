import {
  ActiveSubsIcon,
  DollarIcon,
  FailedIcon,
  PlanExpireIcon,
  SucessIcon,
} from "../../Icons/Icons";

function PaymentCards() {
  const logs = [
    {
      icon: <DollarIcon />,
      count: "$487,234",
      percent: "+18.2%",
      des: "Total Revenue",
    },
    {
      icon: <SucessIcon />,
      count: "3,847",
      percent: "+12.5%",
      des: "Successful Payments",
    },
    {
      icon: <FailedIcon />,
      count: "127",
      percent: "-5.3%",
      des: "Failed Payments",
    },
    {
      icon: <ActiveSubsIcon />,
      count: "2,458",
      percent: "+18.2%",
      des: "Active Subscription",
    },
    {
      icon: <PlanExpireIcon />,
      count: "89",
      percent: "+2.1%",
      des: "Plan Expiring Soon",
    },
  ];

  return (
    <div>
      {/* Heading */}
      <div className="flex flex-row mt-7 ml-5">
        <div>
          <h2 className="w-54.5 h-6.75 ml-7 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
            Payment Logs
          </h2>

          <p className="ml-6.25 mb-2.75 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
            View full Payments Log
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-row gap-4 ml-5">
        {logs.map((log, index) => (
          <div key={index} className="w-53.5 h-42.5 font-roboto mt-2 ">
            <div className="flex flex-row">
              <div className="flex flex-col mt-10 items-center justify-center h-full relative">
                {/* Icon */}
                {log.icon}

                {/* Count */}
                <h1 className="text-[#111827] mt-9 text-[24px] font-medium ">
                  {log.count}
                </h1>

                {/* Description */}
                <h3 className="text-[14px] w-34 text-[#4B5563] mt-1 ml-10">
                  {log.des}
                </h3>
              </div>
              {/* Percentage */}
              <p
                className={`text-[14px] mt-6.25 font-medium ${
                  log.percent.startsWith("+")
                    ? "text-[#16A34A]"
                    : "text-[#DC2626]"
                }`}
              >
                {log.percent}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentCards;
