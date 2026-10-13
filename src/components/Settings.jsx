import {
  GeneralSettingIcon,
  PlatformIcon,
  NotificationSettingIcon,
  SecuritySettingIcon,
  UnityIcon,
} from "../Icons/Icons";

const stats = [
  {
    icon: <GeneralSettingIcon />,
    title: "General Setting",
    description: "Platform name, logo & Basic Configuration",
  },
  {
    icon: <PlatformIcon />,
    title: "Platform Settings",
    description: "Lab limits, session duration, access controls",
  },
  {
    icon: <NotificationSettingIcon />,
    title: "Notification Settings",
    description: "Platform name, logo & Basic Configuration",
  },
  {
    icon: <SecuritySettingIcon />,
    title: "Security Settings",
    description: "2FA, password policies, session management",
  },
  {
    icon: <UnityIcon />,
    title: "Unity Integration",
    description: "WebGL settings, asset bundles, VR runtime config",
  },
];

function Settings() {
  return (
    <>
      <div className="mt-[-40px]">
        <div className="">
          <h2
            className="
            w-[218px]
            h-[27px]
            ml-[22px]
            font-roboto
            mt-[-35px]
            font-medium
            text-[20px]
            leading-[133%]
            text-[#000000]"
          >
            Settings
          </h2>
          <p
            className="
            w-[327px]
            h-[30px]
            ml-[22px]
            font-roboto
            font-medium
            text-[#A1A1A1]
            leading-[133%]
          "
          >
            Quick access to platform configuration
          </p>
        </div>
        <div className="flex flex-wrap gap-y-4 gap-x-[15px] mt-[28px] ml-7">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
              w-[204px]
              h-[155px]
              rounded-xl
              border-[0.5px]
              border-[#D9D9D9]
              shadow-[0px_2px_4px_0px_#00000040]
              bg-[#06B6D414]

              
              mt-[20px]
              
            "
            >
              <div className="ml-[24px] mt-[20px] ">{stat.icon}</div>

              <h3
                className="
                w-[157px]
                h-[21px]
                font-roboto
                font-medium
                text-[16px]
                leading-[133%]
                text-black
                mt-[11px]
                ml-[23px]
              "
              >
                {stat.title}
              </h3>

              <p
                className="
                w-[162px]
                h-[60px]
                font-roboto
                font-medium
                text-[14px]
                text-[#A1A1A1]
                ml-[24px]
                mt-[6px]
                leading-[133%]
              "
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Settings;
