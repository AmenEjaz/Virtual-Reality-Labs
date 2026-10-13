import {
  UsersIcon,
  StarIcon,
  SubjectIcon,
  ChaptersIcon,
  LabsIcon,
  ReportIcon,
} from "../../Icons/Icons";

const stats = [
  {
    icon: <StarIcon />,
    title: "Add Grade",
  },
  {
    icon: <SubjectIcon />,
    title: "Add Subject",
  },
  {
    icon: <ChaptersIcon />,
    title: "Add Chapter",
  },
  {
    icon: <LabsIcon />,
    title: "Add New Lab",
  },
  {
    icon: <UsersIcon />,
    title: "Manage Users",
  },

  {
    icon: <ReportIcon />,
    title: "View Reports",
  },
];

function Actions() {
  return (
    <div className="w-[533px] h-[518px] ml-5.25 rounded-xl border-[0.5px] bg-[#FDFDFD] border-[#D9D9D9] shadow-[0px_2px_4px_0px _#00000040];">
      <h2
        className="
            w-[218px]
            h-[28px]
            mt-[28px]
            ml-[30px]
            font-roboto
            font-medium
            text-[20px]
            leading-[133%]
            text-[#000000]
          "
      >
        Quick Actions
      </h2>

      <p
        className="
            w-[348px]
            h-[20px]
            ml-[30px]
            font-roboto
            font-medium
            text-[#A1A1A1]
          "
      >
        Shortcuts to frequently used operations
      </p>

      <div className="grid grid-cols-3 gap-y-4 ml-[31px] mt-[28px]">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              w-36
              h-[131px]
              rounded-xl
              border-[0.5px]
              border-[#D9D9D9]
              shadow-[0px_2px_4px_0px_#00000040]
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
                w-[155px]
                h-[19px]
                font-roboto
                font-medium
                text-[14px]
                leading-[133%]
                text-black
                mt-[12px]
                ml-[18px]
              "
            >
              {stat.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actions;
