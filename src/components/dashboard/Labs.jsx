import {
  LabIcon,
  HeartIcon,
  CompletedIcon,
  MonthIcon,
  LabsIcon,
} from "../../icons/Icons";

const stats = [
  {
    icon: <LabsIcon />,
    number: "240",
    title: "Total Users",
  },
  {
    icon: <HeartIcon />,
    number: "8",
    title: "Saved Labs",
  },
  {
    icon: <CompletedIcon />,
    number: "12",
    title: "Completed",
  },
  {
    icon: <MonthIcon />,
    number: "3",
    title: "This Month",
  },
];

function Labs() {
  return (
    <div className="flex flex-row mt-3.25">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="
              w-64
              h-44.25
              rounded-xl
              border-[0.5px]
              border-[#D9D9D9]
              shadow-[0px_2px_4px_0px_#00000040]
              ml-12.25
              
            "
        >
          <div
            className="
                w-13.25
                h-12.25
                ml-6
                mt-6
                rounded-lg
                bg-[linear-gradient(180deg,#0F766E_0%,#000000_100%)]
                flex items-center justify-center"
          >
            {stat.icon}
          </div>

          <h3
            className="
              
                font-roboto
                font-semibold
                text-[20px]
                leading-[133%]
                text-black
                mt-3
                ml-6
              "
          >
            {stat.number}
          </h3>

          <p
            className="
                 font-roboto font-medium text-[#A1A1A1] ml-6 mt-1.5 leading-[133%]"
          >
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Labs;
