import {
  CompletedLabIcon,
  GLabIcon,
  GreenTick,
  SavedLab,
  UpgradeIcon,
} from "../../Icons/Icons";

function RecentActivity() {
  const lab = [
    {
      icon: <GreenTick />,
      info: "Completed Lab",
      title: " Human Heart Anatomy - scored 94%",
      date: "Jul 13 · 02:32 PM ",
    },
    {
      icon: <GLabIcon />,
      info: "Started Lab",
      title: " Cell Structure Tour",
      date: "Jul 13 · 02:32 PM ",
    },
    {
      icon: <CompletedLabIcon />,
      info: "Completed Lab",
      title: "DNA Replication Lab - scored 91%",
      date: "Jul 13 · 02:32 PM ",
    },
    {
      icon: <SavedLab />,
      info: "Saved Lab",
      title: "Atomic Model Explorer",
      date: "Jul 13 · 02:32 PM ",
    },
    {
      icon: <GreenTick />,
      info: "Completed Lab",
      title: "Newton's Laws Simulator — scored 88%",
      date: "Jul 13 · 02:32 PM ",
    },
    {
      icon: <UpgradeIcon />,
      info: "Upgraded Plan",
      title: "Renewed yearly premium subscription",
      date: "Jul 13 · 02:32 PM ",
    },
    {
      icon: <CompletedLabIcon />,
      info: "Started Lab",
      title: "Wave Interference Visualizer",
      date: "Jul 13 · 02:32 PM ",
    },
    {
      icon: <GreenTick />,
      info: "Completed Quiz",
      title: "Cell Biology - scored 96%",
      date: "Jul 13 · 02:32 PM ",
    },
    {
      icon: <SavedLab />,
      info: "Saved Lab",
      title: "Chemical Reaction Lab",
      date: "Jul 13 · 02:32 PM ",
    },
    {
      icon: <GreenTick />,
      info: "Completed Lab",
      title: " Molecular Bonding Studio — scored 90%",
      date: "Jul 13 · 02:32 PM ",
    },
  ];

  return (
    <div className="  w-101.5 h-238 border-[#D9D9D9] rounded-xl border  shadow-[0px_2px_4px_0px_#00000040] ">
      <h3 className=" mt-8.75 ml-7   font-roboto font-medium text-[20px] text-[#898989]">
        Recent Activity
      </h3>
      {lab.map((activity) => {
        return (
          <div className="flex flex-row gap-4.75 mt-7 ">
            <div className="ml-6.75 flex items-center justify-center w-9.25 h-9.25 bg-[#E4FFE2] rounded-full">
              {activity.icon}
            </div>
            <div className="flex flex-col font-roboto">
              <p className="mt text[#B3B2B2] text-[14px] font-medium">
                {activity.info}
              </p>
              <p className="mt text[#B3B2B2] text-[14px] font-medium">
                {activity.title}
              </p>
              <p className="mt text-[10px] text[#B3B2B2] ">{activity.date}</p>
            </div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}

export default RecentActivity;
