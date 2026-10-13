import { BackArrowIcon, SuspendIcon } from "../../Icons/Icons";

function Profile() {
  return (
    <div className="w-relative h-relative bg-white font-roboto">
      {/* Main content */}
      <div className="w-relative px-9.5 pt-[18px] pb-[60px]">
        {/* Page title */}
        <h1 className="text-[14px] font-medium leading-[133%] text-[#262626] mb-[8px]">
          Profile
        </h1>
        <div className="mt-6.5 flex flex-row font-roboto text-[#4B5563] text-[14px] gap-4">
          <BackArrowIcon />
          <p>Back to All Users</p>
        </div>

        {/* Account */}

        <div className="w-266.25 h-30.25 flex flex-row  rounded-xl font-roboto border border-[#E5E7EB]  mt-6 ">
          <p className="mt-2 ml-9.5 w-16 h-16 flex items-center justify-center rounded-full bg-[#0F766E] text-white font-bold text-[20px] ">
            RL
          </p>
          <div>
            <h3 className="ml-4 w-34 mt-2 whitespace-nowrap font-bold text-[24px] whitespace-wrap text-[#111827]">
              Rimsha Latif{" "}
            </h3>

            <p className=" mb-2 font-medium ml-4 text-[16px] text-[#4B5563] ">
              smdesigner024@gmail.com
            </p>

            <span className=" pt-3 pr-4 pb-2 pl-4.75 ml-4 w-21 h-7 leading-5 text-[14px] bg-[#C3FED3] rounded-lg text-[#29974E] ">
              Active
            </span>
          </div>

          <div className="ml-155 mt-6.25 w-40.5 h-9 gap-2  bg-[#FEE2E2] flex rounded-lg items-center justify-center">
            <SuspendIcon />
            <p className="text-[#B91C1C] text-[14px]">Suspend Account</p>
          </div>
        </div>

        {/* Overview */}
        <div className="px-6 w-263.75 h-13.75 flex flex-row items-center rounded-xl font-roboto border border-[#E5E7EB]  mt-6 ">
          <h3 className=" flex flex-row font-roboto font-semibold text-[#052967] text-[14px] gap-4">
            Overview
          </h3>
        </div>

        <div className="px-6 w-263.75 h-51  rounded-xl font-roboto border border-[#E5E7EB]  ">
          <div className="flex flex-row">
            <div>
              <h3 className=" leading-4 w-2 mt-6 flex flex-row font-roboto font-semibold text-[#6B7280] text-[12px] ">
                Phone
              </h3>
              <p className=" leading-5 font-medium text-[14px] text-[#111827]">
                +1 (555) 123-4567
              </p>
            </div>
            <div className="ml-101">
              <h3 className=" whitespace-nowrap leading-4 w-2 mt-6 flex flex-row font-roboto font-semibold text-[#6B7280] text-[12px] ">
                Subscription Expiry
              </h3>
              <p className=" leading-5 font-medium text-[14px] text-[#111827]">
                Dec 1, 2026{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <h3 className=" whitespace-nowrap leading-4 w-2 mt-6 flex flex-row font-roboto font-semibold text-[#6B7280] text-[12px] ">
                Registration Date
              </h3>
              <p className=" leading-5 font-medium text-[14px] text-[#111827]">
                Sep 1, 2025{" "}
              </p>
            </div>
            <div className="ml-112.25">
              <h3 className=" whitespace-nowrap leading-4 w-2 mt-6 flex flex-row font-roboto font-semibold text-[#6B7280] text-[12px] ">
                Upgrade History{" "}
              </h3>
              <p className=" leading-5 font-medium text-[14px] text-[#111827]">
                1 upgrade{" "}
              </p>
            </div>
          </div>

          <div>
            <h3 className=" whitespace-nowrap leading-4 w-2 mt-6 flex flex-row font-roboto font-semibold text-[#6B7280] text-[12px] ">
              Current Plan{" "}
            </h3>
            <p className=" leading-5 font-medium text-[14px] text-[#111827]">
              Premium (Yearly){" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
