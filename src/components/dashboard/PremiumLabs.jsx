import titration from "../../../public/titration.png";
import FreePremium from "../../../public/FreePremium.png";
function PremiumLabs() {
  const labs = [
    {
      pic: titration,
      title: "Organic Synthesis Lab ",
      subject: "Chemistry",
      status: "Premium",
      info: "Advanced",
    },
    {
      pic: titration,
      title: "Organic Synthesis Lab ",
      subject: "Chemistry",
      status: "Premium",
      info: "Advanced",
    },
    {
      pic: FreePremium,
      title: "Organic Synthesis Lab ",
      subject: "Chemistry",
      status: "Free",
      info: "Advanced",
    },
    {
      pic: FreePremium,
      title: "Organic Synthesis Lab ",
      subject: "Chemistry",
      status: "Free",
      info: "Advanced",
    },
  ];

  return (
    <div
      className="
        ml-12.5
        mt-6.5
        w-272.5
        h-120.5
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
          Premium Labs{" "}
        </p>

        <p className="mt-1 text-[14px] font-normal leading-[18px] text-[#A1A1A1]">
          Unlock with Premium plan{" "}
        </p>
      </div>

      {/* Learning Cards */}
      <div className="flex flex-row gap-2.25">
        {labs.map((lab, index) => (
          <div
            key={index}
            className="
              w-62.75
              h-83.5
              
              border
              border-[#D9D9D9]
              rounded-xl shadow-[0px_2px_4px_0px_#00000040]

              bg-white
            "
          >
            {/* Lab Image */}
            {/* <img
              src={lab.pic.src}
              alt={lab.title}
              className="
                w-62.75
                h-43.25
                rounded-md"
            /> */}

            <div className="relative w-full">
              <img
                src={lab.pic.src}
                alt={lab.title}
                className="
                w-62.75
                h-43.25
                rounded-md"
              />

              <span
                className={`absolute top-[13px] left-[136px] w-[91px] h-[24px] rounded-[10px] flex items-center justify-center text-white text-[14px] ${
                  lab.status === "Premium" ? "bg-[#8B5CF6]" : "bg-[#0F766E]"
                }`}
              >
                {lab.status}
              </span>
            </div>

            {/* Right Content */}
            <div className="flex flex-col pl-3">
              {/* Title */}
              <p
                className="
                  text-[16px]
                  font-semibold
                  whitespace-nowrap
                  leading-[133%]
                  text-[#202020]
                  mt-5.25
                "
              >
                {lab.title}
              </p>

              {/* Subject */}
              <p
                className="
                  mt-2
                  text-[14px]
                  font-normal
                  text-[#A1A1A1]
                "
              >
                {lab.subject} <span> .</span> <span>{lab.info}</span>
              </p>

              {/* Progress Information */}
              {/* Continue Button */}
              <button
                className="
                mt-7
                mr-2
                    w-55.5
                    h-7.5
                    rounded-lg
                    border border-[#0F766E]
                    text-[#0F766E]
                    text-[14px]
                    font-medium
                    leading-[133%]
                  "
              >
                Upgrade to Unlock{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PremiumLabs;
