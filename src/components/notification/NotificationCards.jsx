import { EmailNotifyIcon, WTickIcon } from "../../Icons/Icons";

function NotificationCards() {
  return (
    <div className="w-284 h-319.25 font-roboto">
      <div className="mt-13 ml-9.5">
        <h1 className="text-[20px] font-semibold">Notification Settings</h1>

        <p className="text-[14px] text-[#A1A1A1] ">
          Email, push, and in-app notification preferences{" "}
        </p>
      </div>
      {/* Cards */}
      <div className=" ml-8.75 flex flex-row gap-2.75">
        <div className="pl-8.25 mt-3.5 w-88.75 h-65.5 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] ">
          <div className="flex flex-row gap-3">
            <div className=" w-11.25 gap-3 mt-5.25 h-10.5 bg-[#EBFBFF] p-2.5">
              <EmailNotifyIcon />
            </div>

            <h1 className="  mt-7.75 text-[16px] font-semibold whitespace-nowrap">
              Notification Settings
            </h1>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col">
              <h1 className="  w-55.5 mt-7 text-[14px]  whitespace-nowrap">
                New User Registration{" "}
              </h1>
              <h1 className=" text-[12px] text-[#949494] whitespace-nowrap">
                When a new user signs up{" "}
              </h1>
            </div>
            {/* Toggle */}
            <button className="mt-9 w-11 h-5.75 rounded-full bg-[#06B6D4] relative">
              <span className="absolute right-0.5 top-0.5 w-4.75 h-4.75 bg-white rounded-full shadow-sm" />
            </button>
          </div>
          <div className="flex flex-row gap-6 mt-5">
            <div className="flex flex-col">
              <h1 className="   w-55.5 text-[14px]  whitespace-nowrap">
                Subscription Updates
              </h1>
              <h1 className=" text-[12px] text-[#949494] whitespace-nowrap">
                Plan changes and renewals{" "}
              </h1>
            </div>
            {/* Toggle */}
            <button className=" mt-2 w-11  h-5.75 rounded-full bg-[#D9D9D9] relative">
              <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" />
            </button>
          </div>
          {/* Lab Published */}
          <div className="flex flex-row gap-6 mt-5">
            <div className="flex flex-col">
              <h1 className=" w-55.5 text-[14px]  whitespace-nowrap">
                Lab Published{" "}
              </h1>
              <h1 className=" text-[12px] text-[#949494] whitespace-nowrap">
                When a lab goes live{" "}
              </h1>
            </div>
            {/* Toggle */}
            <button className=" mt-2 w-11  h-5.75 rounded-full bg-[#D9D9D9] relative">
              <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" />
            </button>
          </div>
        </div>

        {/* Push Notifications */}

        <div className="pl-8.25 mt-3.5 w-88.75 h-65.5 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] ">
          <div className="flex flex-row gap-3">
            <div className=" w-11.25 gap-3 mt-5.25 h-10.5 bg-[#EBFBFF] p-2.5">
              <EmailNotifyIcon />
            </div>

            <h1 className="  mt-7.75 text-[16px] font-semibold whitespace-nowrap">
              Push Notification
            </h1>
          </div>
          {/* New User Alerts */}
          <div className="flex flex-row gap-6">
            <div className="flex flex-col">
              <h1 className="  w-55.5 mt-7 text-[14px]  whitespace-nowrap">
                New User Alerts{" "}
              </h1>
              <h1 className=" text-[12px] text-[#949494] whitespace-nowrap">
                Real-time sign-up alert{" "}
              </h1>
            </div>
            {/* Toggle */}
            <button className="mt-9 w-11 h-5.75 rounded-full bg-[#06B6D4] relative">
              <span className="absolute right-0.5 top-0.5 w-4.75 h-4.75 bg-white rounded-full shadow-sm" />
            </button>
          </div>
          {/* Lab Launch Alerts */}
          <div className="flex flex-row gap-6 mt-5">
            <div className="flex flex-col">
              <h1 className="   w-55.5 text-[14px]  whitespace-nowrap">
                Lab Launch Alerts{" "}
              </h1>
              <h1 className=" text-[12px] text-[#949494] whitespace-nowrap">
                High-usage lab notifications{" "}
              </h1>
            </div>
            {/* Toggle */}
            <button className=" mt-2 w-11  h-5.75 rounded-full bg-[#D9D9D9] relative">
              <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" />
            </button>
          </div>
          {/* Report Ready */}
          <div className="flex flex-row gap-6 mt-5">
            <div className="flex flex-col">
              <h1 className=" w-55.5 text-[14px]  whitespace-nowrap">
                Report Ready{" "}
              </h1>
              <h1 className=" text-[12px] text-[#949494] whitespace-nowrap">
                When analytics reports are generated{" "}
              </h1>
            </div>
            {/* Toggle */}
            <button className=" mt-2 w-11  h-5.75 rounded-full bg-[#D9D9D9] relative">
              <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" />
            </button>
          </div>
        </div>

        {/* In-App Notification */}

        <div className="pl-8.25 mt-3.5 w-88.75 h-65.5 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] ">
          <div className="flex flex-row gap-3">
            <div className=" w-11.25 gap-3 mt-5.25 h-10.5 bg-[#EBFBFF] p-2.5">
              <EmailNotifyIcon />
            </div>

            <h1 className="  mt-7.75 text-[16px] font-semibold whitespace-nowrap">
              In-App Notifications
            </h1>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col">
              <h1 className="  w-55.5 mt-7 text-[14px]  whitespace-nowrap">
                All Notifications{" "}
              </h1>
              <h1 className=" text-[12px] text-[#949494] whitespace-nowrap">
                Show all in-app alerts{" "}
              </h1>
            </div>
            {/* Toggle */}
            <button className="mt-9 w-11 h-5.75 rounded-full bg-[#D9D9D9] relative">
              <span className="absolute right-0.5 top-0.5 w-4.75 h-4.75 bg-white rounded-full shadow-sm" />
            </button>
          </div>
          {/* System Alerts */}
          <div className="flex flex-row gap-6 mt-5">
            <div className="flex flex-col">
              <h1 className="   w-55.5 text-[14px]  whitespace-nowrap">
                System Alerts{" "}
              </h1>
              <h1 className=" text-[12px] text-[#949494] whitespace-nowrap">
                Platform maintenance updates{" "}
              </h1>
            </div>
            {/* Toggle */}
            <button className=" mt-2 w-11  h-5.75 rounded-full bg-[#D9D9D9] relative">
              <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" />
            </button>
          </div>
          {/* Marketing */}
          <div className="flex flex-row gap-6 mt-5">
            <div className="flex flex-col">
              <h1 className=" w-55.5 text-[14px]  whitespace-nowrap">
                Marketing{" "}
              </h1>
              <h1 className=" text-[12px] text-[#949494] whitespace-nowrap">
                Feature announcements{" "}
              </h1>
            </div>
            {/* Toggle */}
            <button className=" mt-2 w-11  h-5.75 rounded-full bg-[#D9D9D9] relative">
              <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Admin Notification Email */}
      <div className="ml-8.25 flex flex-col  mt-4.75 w-271.75 h-65.5  rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] ">
        <h3 className="mb-6 text-[20px] ml-8.25 mt-6.75 font-roboto font-medium">
          Admin Notification Email
        </h3>
        <label className="text-[14px] ml-8.25 font-medium " htmlFor="">
          Notification Email Address
        </label>
        <input
          className="mt-0.75 px-5 font-medium    text-[14px] text-[#999999] ml-8.25 rounded-md h-9.75 w-121.25 border border-[#E6E6E6]"
          type="text"
          name=""
          id=""
          placeholder="alerts@vrlabs.edu"
        />

        <label className="mt-6.25 text-[14px] ml-8.25 font-medium " htmlFor="">
          Daily Digest Time{" "}
        </label>
        <input
          className="mt-0.75 px-5 font-medium    text-[14px] text-[#999999] ml-8.25 rounded-md h-9.75 w-121.25 border border-[#E6E6E6]"
          type="text"
          name=""
          id=""
          placeholder="08:00 AM"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-row mt-12 ml-8.25 gap-6.75">
        <button className="font-medium w-132 h-8.75 rounded-lg border border-[#DBDBDB]">
          Discard
        </button>

        <button className="font-medium w-132 h-8.75 rounded-lg text-white bg-[linear-gradient(90deg,#0F766E_0%,#111827_100%)]">
          <div className="flex flex-row items-center justify-center gap-2">
            <WTickIcon />
            Save Changes
          </div>
        </button>
      </div>
    </div>
  );
}

export default NotificationCards;
