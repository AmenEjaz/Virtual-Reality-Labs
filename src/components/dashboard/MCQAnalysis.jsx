import { GreenTickIcon, RedCrossIcon } from "@/icons/Icons";

function MCQAnalysis() {
  const topics = [
    {
      name: "Newton's Laws",
      percentage: "92%",
      correct: true,
    },
    {
      name: "Chemical Bonding",
      percentage: "85%",
      correct: true,
    },
    {
      name: "Cell Structure",
      percentage: "73%",
      correct: true,
    },
    {
      name: "Photosynthesis",
      percentage: "91%",
      correct: true,
    },
    {
      name: "Electric Circuit",
      percentage: "52%",
      correct: false,
    },
    {
      name: "Electric Current",
      percentage: "61%",
      correct: false,
    },
  ];

  return (
    <div className="w-134.25 ml-12.5 mt-7.75 rounded-xl h-173.25 pl-6 border font-roboto border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040">
      {/* Header */}
      <div className="mt-7.75  flex items-center">
        <div className="flex items-center gap-2">
          {/* Icon */}
          <div className="w-10.25 h-9.75 rounded-md bg-[#E8FFFB] flex items-center justify-center"></div>

          <p className="text-[20px] font-semibold text-[#202020]">
            MCQ Analysis
          </p>
        </div>

        <p className="text-[14px] whitespace-nowrap ml-45 text-[#A1A1A1]">
          248 total questions
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-2.5 mt-10.5">
        {/* Correct */}
        <div
          className="
            h-22 w-38.75
            rounded-lg
            bg-[#DFFFD9]
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <p className="text-[20px]  text-[#2F831A]">208</p>

          <p className="text-[14px] text-[#2F831A] ">Correct</p>
        </div>

        {/* Incorrect */}
        <div
          className="
            h-22 w-38.75
            rounded-lg
            bg-[#FFE2D9]
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <p className="text-[20px]  text-[#E82D2D]">32</p>

          <p className="text-[14px] text-[#E82D2D] ">Incorrect</p>
        </div>

        {/* Accuracy */}
        <div
          className="
            h-22 w-38.75
            rounded-lg
            bg-[#DFFAFF]
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <p className="text-[20px]  text-[#4192D5]">87%</p>

          <p className="text-[14px] text-[#4192D5] ">Incorrect</p>
        </div>
      </div>

      {/* Topic Performance */}
      <div className="mt-6">
        <p className="text-[14px] font-medium text-[#A1A1A1]">
          Topic-wise Performance
        </p>

        <div className="mt-3 flex flex-col gap-3.5">
          {topics.map((topic, index) => (
            <div key={index}>
              {/* Topic name + percentage */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  {/* Status icon */}
                  <div
                    className={`
                      w-10.25
                      h-9.75
                      rounded-sm
                      flex
                      items-center
                      justify-center
                      ${topic.correct ? "bg-[#DFFFD9]" : "bg-[#FFE2D9]"}
                    `}
                  >
                    <span
                      className={`
                        text-[10px]
                        font-bold
                        ${topic.correct ? "text-[#4ED471]" : "text-[#FF6B6B]"}
                      `}
                    >
                      {topic.correct ? <GreenTickIcon /> : <RedCrossIcon />}
                    </span>
                  </div>

                  <p className="text-[14px] leading-[133%] text-[#0D0D0D]">
                    {topic.name}
                  </p>
                </div>

                <p className="mr-5 text-[14px] text-[#A1A1A1]">
                  {topic.percentage}
                </p>
              </div>

              {/* Progress bar */}
              <div className="ml-13 -mt-3 w-110.5 h-1.5 rounded-full bg-[#EDEDED] overflow-hidden mb-4 ">
                <div
                  className={`
                    h-full
                    rounded-full
                    ${topic.correct ? "bg-[#6BC220]" : "bg-[#F92F2F]"}
                  `}
                  style={{
                    width: topic.percentage,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MCQAnalysis;
