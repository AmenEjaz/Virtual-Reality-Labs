import {
  CompletedIcon,
  GreenLabIcon,
  RedDownArrowIcon,
  SavedLabsIcon,
} from "../../Icons/Icons";
function LearningCard() {
  const activities = [
    {
      icon: <RedDownArrowIcon />,
      count: 52,
      info: "Total Users",
    },
    {
      icon: <GreenLabIcon />,
      count: 47,
      info: "Attempted Labs",
    },
    {
      icon: <CompletedIcon />,
      count: 41,
      info: "Completed Labs ",
    },
    {
      icon: <SavedLabsIcon />,
      count: 18,
      info: "Saved Labs",
    },
  ];

  return (
    <div className=" ml-9.25">
      <h3 className="mb-3.75 font-roboto text-[20px] font-medium">
        Learning Activity
      </h3>
      <div className="flex flex-row gap-8.25">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="
              w-60.5
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
                rounded-md mb-2.5 flex items-center justify-center"
            >
              {activity.icon}
            </div>

            <p className="font-roboto ml-8 font-medium text-[24px]">
              {activity.count}
            </p>

            <p className="font-roboto ml-8 text-[14px] text-[#A1A1A1]">
              {activity.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningCard;
