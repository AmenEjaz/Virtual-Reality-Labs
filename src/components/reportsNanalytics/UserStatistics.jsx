import {
  TimeIcon,
  ActivityIcon,
  NewUserIcon,
  TotalUserIcon,
} from "../../Icons/Icons";
function UserStatistics() {
  const users = [
    {
      icon: <TotalUserIcon />,
      count: "24,893",
      info: "Total Users",
    },
    {
      icon: <NewUserIcon />,
      count: "1,842",
      info: "New Users (This Month)",
    },
    {
      icon: <ActivityIcon />,
      count: "3,421",
      info: "Active Today ",
    },
    {
      icon: <TimeIcon />,
      count: "42 min",
      info: "Avg. Time Spent",
    },
  ];

  return (
    <div className="w-284.5 ">
      <div className="flex gap-8 ml-9.5">
        {users.map((user, index) => (
          <div
            key={index}
            className="
              w-59
              h-44.25
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
              className="w-15 h-12.5 ml-8 shadow-[0px_2px_4px_0px_#00000040]
                rounded-md mb-4 flex items-center justify-center"
            >
              {user.icon}
            </div>

            <p className="font-roboto ml-8 font-medium text-[24px]">
              {user.count}
            </p>

            <p className="font-roboto ml-8 text-[14px] text-[#A1A1A1]">
              {user.info}
            </p>
          </div>
        ))}
      </div>
      {/* User Registration */}
      <div className="flex flex-row mt-6.25">
        <div className="w-129.5 ml-9.5  h-84.75 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#0000004]">
          <h3 className="font-roboto font-medium leading-[133%] text-[16px] mt-9 ml-9">
            New User Registration
          </h3>
          <p className="font-roboto font-semibold leading-[133%] text-[#A8A8A8] text-[16px] mt-1.75 ml-9">
            Monthly sign-ups in 2026
          </p>
          <div className=" flex flex-row  ">
            {/* Graph */}
            <div className="flex items-end mt-8 h-45">
              {/* Jan */}
              <div className="flex  flex-col items-center justify-end h-full">
                <div className="w-1.25 h-31.5 ml-8 bg-[#0F766E]"></div>
                <p className="font-roboto ml-7.5 font-medium mt-4 text-[16px] text-[#A8A8A8]">
                  Jan
                </p>
              </div>

              {/* Feb */}
              <div className="w-1.25  h-20.75 ml-5 bg-[#111827] mb-10.5"></div>

              {/* Mar */}
              <div className="flex flex-col justify-end h-full">
                <div className="w-1.25 ml-8 h-37 bg-[#0F766E]"></div>
                <p className="font-roboto font-medium ml-7.5 mt-4 text-[16px] text-[#A8A8A8]">
                  Mar
                </p>
              </div>

              {/* Apr */}
              <div className="w-1.25 h-20.75  ml-5 bg-[#111827]  mb-10.5"></div>

              {/* May */}
              <div className="flex flex-col  justify-end h-full">
                <div className="w-1.25 h-27 ml-8 bg-[#0F766E]"></div>
                <p className="font-roboto font-medium mt-4 ml-7.5 text-[16px] text-[#A8A8A8]">
                  May
                </p>
              </div>

              {/* Jun */}
              <div className="w-1.25 ml-5 h-20.75 bg-[#111827]   mb-10.5"></div>

              {/* Jul */}
              <div className="flex flex-col  justify-end h-full">
                <div className="w-1.25 ml-8 h-37 bg-[#0F766E]"></div>
                <p className="font-roboto font-medium mt-4 ml-7.5 text-[16px] text-[#A8A8A8]">
                  July
                </p>
              </div>

              {/* Aug */}
              <div className="w-1.25 ml-5 h-21.75 bg-[#111827]  mb-10.5"></div>

              {/* Sep */}
              <div className="flex flex-col  justify-end h-full">
                <div className="w-1.25 ml-8 h-27 bg-[#0F766E]"></div>
                <p className="font-roboto font-medium mt-4 ml-7.5 text-[16px] text-[#A8A8A8]">
                  Sep
                </p>
              </div>

              {/* Oct */}
              <div className="w-1.25 ml-5 h-20.75 bg-[#111827]  mb-10.5"></div>
              {/* Nov */}
              <div className="flex flex-col justify-end h-full">
                <div className="w-1.25 ml-8 h-27 bg-[#111827]"></div>
                <p className="font-roboto font-medium mt-4 ml-5 text-[16px] text-[#A8A8A8]">
                  Nov
                </p>
              </div>

              {/* Dec */}
              <div className="w-1.25 ml-5 h-20.75 bg-[#0F766E]  mb-10.5"></div>
            </div>
          </div>
        </div>
        <div className="w-125.75 ml-4  h-84.75 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#0000004]">
          <h3 className="font-roboto font-medium leading-[133%] text-[16px] mt-9 ml-9">
            Plan Distribution
          </h3>
          <p className="font-roboto font-semibold leading-[133%] text-[#A8A8A8] text-[16px] mt-1.75 ml-9">
            Free vs Premium users
          </p>
          <div className="mt-9.5 ml-7.5">
            <p className=" font-roboto leading-[133%] text-[#A8A8A8] text-[16px]">
              Free Users
            </p>
            <div className="w-111.5 mt-4.5 h-0 border-[6px] border-[#111827]"></div>
          </div>
          <div className="mt-9.5 ml-7.5">
            <p className=" font-roboto leading-[133%] text-[#A8A8A8] text-[16px]">
              Premium Users
            </p>
            <div className="w-71.5 mt-4.5 border-[6px]  border-[#0F766E]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStatistics;
