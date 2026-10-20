import React from "react";
import learning from "../../../public/learning.png";
function ContinueLearning() {
  const learnings = [
    {
      pic: learning,
      title: "Projectile Motion Lab",
      subject: "Physics",
      percent: "65%",
      time: "2 hours ago",
    },
    {
      pic: learning,
      title: "Projectile Motion Lab",
      subject: "Physics",
      percent: "65%",
      time: "2 hours ago",
    },
    {
      pic: learning,
      title: "Projectile Motion Lab",
      subject: "Physics",
      percent: "65%",
      time: "2 hours ago",
    },
    {
      pic: learning,
      title: "Projectile Motion Lab",
      subject: "Physics",
      percent: "65%",
      time: "2 hours ago",
    },
  ];

  return (
    <div
      className="
        ml-12.5
        mt-6.5
        w-272.5
        h-146
        p-8
        border
        border-[#D9D9D9]
        rounded-xl
        shadow-[0px_2px_4px_0px_#00000040]
        font-roboto
      "
    >
      {/* Header */}
      <div className="mb-5">
        <p className="text-[20px] font-semibold leading-[24px] text-[#202020]">
          Continue Learning
        </p>

        <p className="mt-1 text-[14px] font-normal leading-[18px] text-[#A1A1A1]">
          Pick up where you left off
        </p>
      </div>

      {/* Learning Cards */}
      <div className="grid grid-cols-2 gap-5">
        {learnings.map((learn, index) => (
          <div
            key={index}
            className="
              w-125.75
              h-53
              p-4
              flex
              gap-4
              border
              border-[#D9D9D9]
              rounded-lg
              bg-white
            "
          >
            {/* Lab Image */}
            <img
              src={learn.pic.src}
              alt={learn.title}
              className="
                w-38.75
                h-42
                rounded-md
                object-cover
                shrink-0
              "
            />

            {/* Right Content */}
            <div className="flex-1 min-w-0 flex flex-col">
              {/* Title */}
              <p
                className="
                  text-[20px]
                  font-semibold
                  leading-[133%]
                  text-[#202020]
                  truncate
                  mt-2.5
                "
              >
                {learn.title}
              </p>

              {/* Subject */}
              <p
                className="
                  mt-1
                  text-[14px]
                  font-normal
                  leading-[133%]
                  text-[#868686]
                "
              >
                {learn.subject}
              </p>

              {/* Progress Information */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-[14px] text-[#868686]">
                    {learn.percent} complete
                  </p>

                  <p className="text-[11px] text-[#777777]">{learn.time}</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 rounded-full bg-[#E8E8E8] overflow-hidden">
                  <div
                    className="h-full bg-[#0F766E] rounded-full"
                    style={{ width: learn.percent }}
                  ></div>
                </div>

                {/* Continue Button */}
                <button
                  className="
                    mt-4
                    w-full
                    h-7.5
                    rounded-lg
                    bg-[#0F766E]
                    text-white
                    text-[14px]
                    font-medium
                    leading-[133%]
                  "
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContinueLearning;
