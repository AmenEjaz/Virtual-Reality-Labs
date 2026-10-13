import {
  FreeUsersIcon,
  PremiumIcon,
  ExpireIcon,
  RenewIcon,
} from "../Icons/Icons";

const stats = [
  {
    icon: <FreeUsersIcon />,
    number: "16,172",
    title: "Free Users",
  },
  {
    icon: <PremiumIcon />,
    number: "8,721",
    title: "Premium Users",
  },
  {
    icon: <ExpireIcon />,
    number: "342",
    title: "Expiring Plans",
  },
  {
    icon: <RenewIcon />,
    number: "1,287",
    title: "Renewals (Monthly)",
  },
];

function SubscriptionOverview() {
  return (
    <div className="mb-[49px]">
      <h2
        className="
            w-[218px]
            h-[27px]
            ml-[22px]
            font-roboto
            font-medium
            text-[20px]
            leading-[133%]
            text-[#000000]"
      >
        Subscription Overview
      </h2>
      <p
        className="
            w-[327px]
            h-[20px]
            ml-[23px]
            font-roboto
            font-medium
            text-[#A1A1A1]
          "
      >
        Latest platform events
      </p>
      <div className="w-[476px] h-[693px] rounded-xl border-[0.5px] mt-[19px] ml-[23px] border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040];">
        <div className="flex flex-wrap gap-y-4 mt-[28px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
              w-[155px]
              h-[131px]
              rounded-xl
              border-[0.5px]
              border-[#D9D9D9]
              shadow-[0px_2px_4px_0px_#00000040]
              ml-[42px]
              
            "
            >
              <div
                className="
                w-[47px]
                h-[49px]
                ml-[18px]
                mt-[21px]
                rounded-lg
                bg-[linear-gradient(180deg,#0F766E_0%,#000000_100%)]
                flex items-center justify-center"
              >
                {stat.icon}
              </div>

              <h3
                className="
                w-[64px]
                h-[28px]
                font-roboto
                font-medium
                text-[14px]
                leading-[133%]
                text-black
                mt-[8px]
                ml-[18px]
              "
              >
                {stat.number}
              </h3>

              <p
                className="
                w-[130px]
                h-[19px]
                font-roboto
                font-medium
                text-[14px]
                text-[#A1A1A1]
                ml-[18px]
                leading-[20%]
              "
              >
                {stat.title}
              </p>
            </div>
          ))}
        </div>
        <h3 className="mt-13.75  ml-11.25 w-81.75 h-4.75 font-roboto font-medium leading-[133%] text-[#050505]">
          Monthly Premium Growth
        </h3>
        <div className="flex flex-row mt-4">
          <div>
            <div className="w-1.75 mt-16.25 h-28.5 ml-11.25 bg-[#06B6D4]"></div>
            <p className="w-8 mt-4 ml-10 h-47.25 font-roboto font-medium text-[#A1A1A1]">
              Jan
            </p>
          </div>
          <div>
            <div className="w-1.75 mt-8.25 h-36.5 ml-12 bg-[#06B6D4]"></div>
            <p className="w-8 mt-4.75 ml-9.75 h-47.25 font-roboto font-medium text-[#A1A1A1]">
              Mar
            </p>
          </div>
          <div>
            <div className="w-1.75 mt-25 h-19.75 ml-12 bg-[#06B6D4]"></div>
            <p className="w-8 mt-4.75 ml-9.75 h-47.25 font-roboto font-medium text-[#A1A1A1]">
              May
            </p>
          </div>
          <div>
            <div className="w-1.75 mt-8.25 h-36.5 ml-12 bg-[#06B6D4]"></div>
            <p className="w-8 mt-4.75 ml-9.75 h-47.25 font-roboto font-medium text-[#A1A1A1]">
              July
            </p>
          </div>
          <div>
            <div className="w-1.75 mt-19 h-25.75 ml-12 bg-[#06B6D4]"></div>
            <p className="w-8 mt-4.75 ml-9.75 h-47.25 font-roboto font-medium text-[#A1A1A1]">
              Sep
            </p>
          </div>
          <div>
            <div className="w-1.75 mt-29.25 h-15.5 ml-12 bg-[#06B6D4]"></div>
            <p className="w-8 mt-4.75 ml-9.75 h-47.25 font-roboto font-medium text-[#A1A1A1]">
              Nov
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionOverview;
