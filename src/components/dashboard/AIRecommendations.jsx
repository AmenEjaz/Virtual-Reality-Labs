import React from "react";

function AIRecommendations() {
  const recommendations = [
    {
      title: "Newton's Laws",
      subject: "Physics · Electricity",
      description: "Weak topic — 62% mastery",
      priority: "High",
      type: "high",
    },
    {
      title: "Organic Compounds Lab",
      subject: "Chemistry · Organic Chemistry",
      description: "Weak topic — 58% mastery",
      priority: "High",
      type: "high",
    },
    {
      title: "Genetics Deep Dive",
      subject: "Biology · Genetics",
      description: "Needs improvement — 65% mastery",
      priority: "Medium",
      type: "medium",
    },
    {
      title: "Wave Interference Review",
      subject: "Physics · Waves",
      description: "Reinforce — 83% mastery",
      priority: "Low",
      type: "low",
    },
    {
      title: "Calculus Foundations",
      subject: "Mathematics · Calculus",
      description: "New topic — recommended prep",
      priority: "Low",
      type: "low",
    },
    {
      title: "Genetics Deep Dive",
      subject: "Biology · Genetics",
      description: "Needs improvement — 65% mastery",
      priority: "Medium",
      type: "medium",
    },
    {
      title: "Wave Interference Review",
      subject: "Physics · Waves",
      description: "Reinforce — 83% mastery",
      priority: "Low",
      type: "low",
    },
    {
      title: "Calculus Foundations",
      subject: "Mathematics · Calculus",
      description: "New topic — recommended prep",
      priority: "Low",
      type: "low",
    },
  ];

  return (
    <div
      className="
        w-134.25
        h-173.25
        ml-5.5
        mt-7.75
        rounded-xl
        border
        border-[#D9D9D9]
        shadow-[0px_2px_4px_0px_#00000040]
        bg-white
        px-6
        pt-7
        font-roboto
      "
    >
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-4">
        {/* AI Icon Box */}
        <div className="w-10.25 h-9.75 rounded-md bg-[#DAFFFB] flex items-center justify-center"></div>

        <p className="text-[20px] font-semibold text-[#202020]">
          AI Recommendations{" "}
        </p>
      </div>

      {/* RECOMMENDATIONS */}
      <div className="mt-14.25 flex flex-col gap-6">
        {recommendations.map((recommendation, index) => {
          let boxColor = "";
          let dotColor = "";
          let badgeColor = "";
          let badgeTextColor = "";

          if (recommendation.type === "high") {
            boxColor = "bg-[#FFDFD9]";
            dotColor = "bg-[#FF3232]";
            badgeColor = "bg-[#FFEFEF]";
            badgeTextColor = "text-[#D53131]";
          }

          if (recommendation.type === "medium") {
            boxColor = "bg-[#FFE7BC]";
            dotColor = "bg-[#CE8724]";
            badgeColor = "bg-[#FFF0C7]";
            badgeTextColor = "text-[#BA6D29]";
          }

          if (recommendation.type === "low") {
            boxColor = "bg-[#DFFFD9]";
            dotColor = "bg-[#36C361]";
            badgeColor = "bg-[#EAFFD4]";
            badgeTextColor = "text-[#259716]";
          }

          return (
            <div
              key={index}
              className="
                w-full
                h-11.25
                flex
                items-start
                justify-between
              "
            >
              {/* LEFT SIDE */}
              <div className="flex items-start mb-8">
                {/* Colored Square */}
                <div
                  className={`
                    relative
                    w-10.75
                    h-9.75
                    rounded-lg
                    shrink-0
                    ${boxColor}
                  `}
                >
                  {/* Circle */}
                  <div
                    className={`
                      absolute
                      -top-1
                      -right-1
                      w-3
                      h-3
                      rounded-full
                      ${dotColor}
                    `}
                  ></div>
                </div>

                {/* Recommendation Text */}
                <div className="ml-2.5">
                  {/* Title */}
                  <p
                    className="
                      text-[14px]
                      text-[#0D0D0D]
                      font-semibold
                      leading-[133%]
                      whitespace-nowrap
                    "
                  >
                    {recommendation.title}
                  </p>

                  {/* Subject */}
                  <p
                    className="
                      text-[10px]
                      leading-[133%]
                      text-[#A1A1A1]
                    "
                  >
                    {recommendation.subject}
                  </p>

                  {/* Description */}
                  <p
                    className="
                      text-[10px]
                      font-normal
                      leading-[133%]
                      text-[#A1A1A1]
                    "
                  >
                    {recommendation.description}
                  </p>
                </div>
              </div>

              {/* PRIORITY BADGE */}
              <div
                className={`
                  w-14.5
                  h-5.25
                  rounded-full
                  flex
                  items-center
                  justify-center
                  shrink-0
                  ${badgeColor}
                  ${badgeTextColor}
                `}
              >
                <p className="text-[10px] font-medium leading-none">
                  {recommendation.priority}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AIRecommendations;
