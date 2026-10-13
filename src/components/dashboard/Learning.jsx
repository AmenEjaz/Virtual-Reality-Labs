import {
  UsersIcon,
  PremiumIcon,
  StarIcon,
  SubjectIcon,
  ChaptersIcon,
  LabsIcon,
  ActivSubscriptionsIcon,
  LaunchIcon,
} from "../../Icons/Icons";

const stats = [
  {
    icon: <UsersIcon />,
    number: "24,893",
    title: "Total Users",
  },
  {
    icon: <PremiumIcon />,
    number: "8,721",
    title: "Premium Users",
  },
  {
    icon: <StarIcon />,
    number: "4",
    title: "Total Grades",
  },
  {
    icon: <SubjectIcon />,
    number: "3",
    title: "Total Subjects",
  },
  {
    icon: <ChaptersIcon />,
    number: "42",
    title: "Total Chapters",
  },
  {
    icon: <LabsIcon />,
    number: "186",
    title: "Published Labs",
  },
  {
    icon: <ActivSubscriptionsIcon />,
    number: "8,713",
    title: "Active Subscriptions",
  },
  {
    icon: <LaunchIcon />,
    number: "1,238",
    title: "Today's Launches",
  },
];

function Learning() {
  return (
    <div
      className="
          w-272.5
          h-129.5
          ml-5.25
          mb-6.5
          border-[0.5px]
          rounded-xl
          border-[#D9D9D9]
          shadow-[0px_2px_4px_0px_#00000040]
        "
    >
      <h2
        className="
            w-54.5
            h-7
            mt7
            ml-7.5
            font-roboto
            font-medium
            text-[20px]
            leading-[133%]
            text-[#000000]
          "
      >
        Continue Learning
      </h2>

      <p
        className="
            w-87
            h-5
            ml-7.5
            font-roboto
            font-medium
            text-[#A1A1A1]
          "
      >
        Real-time statistics and performance metrics
      </p>

      <div className="flex flex-wrap gap-y-4 mt-7">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              w-[232px]
              h-[177px]
              rounded-xl
              border-[0.5px]
              border-[#D9D9D9]
              shadow-[0px_2px_4px_0px_#00000040]
              ml-[31px]
              
            "
          >
            <div
              className="
                w-[50px]
                h-[49px]
                ml-[50px]
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
                text-[20px]
                leading-[133%]
                text-black
                mt-[30px]
                ml-[50px]
              "
            >
              {stat.number}
            </h3>

            <p
              className="
                w-[137px]
                h-[19px]
                font-roboto
                font-medium
                text-[#A1A1A1]
                ml-[50px]
                leading-[133%]
                mb-13
              "
            >
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;
