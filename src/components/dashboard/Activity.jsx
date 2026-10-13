const activities = [
  {
    title: "New User Registered",
    description: "Zara Khan joined VR Labs",
    time: "2 minutes ago",
    color: "bg-emerald-400",
  },
  {
    title: "New Lab Published",
    description: "Quantum Entanglement Simulator published",
    time: "12 minutes ago",
    color: "bg-blue-500",
  },
  {
    title: "Subscription Upgraded",
    description: "Ali Hassan upgraded to Premium",
    time: "1 day ago",
    color: "bg-purple-500",
  },
  {
    title: "Grade Created",
    description: "O-Levels grade added to system",
    time: "3 days ago",
    color: "bg-yellow-400",
  },
];

function Activity() {
  return (
    <div className="w-[533px] h-[518px] mb-[50px] ml-[21px] rounded-xl border-[0.5px] bg-[#FDFDFD] border-[#D9D9D9] shadow-[0px_2px_4px_0px _#00000040];">
      <h2
        className="
            w-[218px]
            h-[27px]
            mt-[28px]
            ml-[30px]
            font-roboto
            font-medium
            text-[20px]
            
            leading-[133%]
            text-[#000000]
          "
      >
        Recent Activity
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
        Latest platform events
      </p>
      <div>
        {activities.map((activity, index) => (
          <div key={index}>
            {/* Activity */}
            <div className="flex items-start gap-4 ">
              <div
                className={`mt-[41px] h-[7px] w-[6px] ml-[32px] rounded-full ${activity.color}`}
              />

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-roboto  font-medium text-[14px] mt-[34px] text-[#000000] leading-[133%]">
                  {activity.title}
                </h3>

                <p className="mt-0 font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1]">
                  {activity.description}
                </p>
              </div>

              {/* Time */}
              <span className="mr-[23px] mt-[34px] font-roboto shrink-0 text-[12px] text-[#64748B]">
                {activity.time}
              </span>
            </div>

            {/* Line after activity */}
            {index !== activities.length - 1 && (
              <div className="w-[524px] ml-[] mt-[29px] border-t border-[#D8D8D8]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
