function PerformanceSummary() {
  return (
    <div className="font-roboto pl-9.25">
      <h3 className=" mt-6 text-[20px] font-medium leading-[133%]">
        Performance Summary
      </h3>
      <div className="mt-6 h-121.5 w-266 flex flex-col rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] ">
        <div className="  flex flex-row">
          <div className="mt-12.5 ml-13.5">
            <div className="w-26.25 h-26.25 rounded-full p-2.25 bg-[conic-gradient(#1FAF30_0%_70%,#EAEAEA_30%_100%)]">
              <p className="w-full h-full rounded-full bg-white flex items-center justify-center text-[24px] font-medium">
                52
              </p>
            </div>

            <p className="text-[14px] font-medium text-[#A1A1A1] mt-7">
              Completion Rate
            </p>
          </div>

          <div className=" mt-12.5 ml-40">
            <div className="w-26.25 h-26.25 rounded-full p-2.25 bg-[conic-gradient(#0F766E_0%_90%,#EAEAEA_30%_100%)]">
              <p className="w-full h-full rounded-full bg-white flex items-center justify-center text-[24px] font-medium">
                92
              </p>
            </div>

            <p className="text-[14px] font-medium text-[#A1A1A1] mt-7">
              Avg. Quiz Score{" "}
            </p>
          </div>

          <div className=" mt-12.5 ml-40">
            <div className="w-26.25 h-26.25 rounded-full p-2.25 bg-[conic-gradient(white_0%_90%,#EAEAEA_30%_100%)]">
              <p className="w-full h-full rounded-full bg-white flex items-center justify-center text-[24px] font-medium">
                Biology
              </p>
            </div>

            <p className="text-[14px] font-medium text-[#A1A1A1] mt-7">
              Favourite Subject
            </p>
          </div>

          <div className=" mt-12.5 ml-40">
            <div className="w-26.25 h-26.25 rounded-full p-2.25 bg-[conic-gradient(white_0%_0%,#FFB845_80%_100%)]">
              <p className="w-full h-full rounded-full bg-white flex items-center justify-center text-[24px] font-medium">
                134 hrs
              </p>
            </div>

            <p className="text-[14px] font-medium text-[#A1A1A1] mt-7">
              Total Learning{" "}
            </p>
          </div>
        </div>
        <div className="w-264.5 h-0 border border-[#BCBCBC] mt-14.25 "></div>
        <div className="flex flex-row gap-39">
          <div className=" mt-19.5 text-[14px] text-[#A1A1A1]">
            <p className="ml-19">Lab Completion Progress</p>
            <div className="ml-5.5 mt-3.5 w-68.25 h-2 border-2.5 bg-[#6791FA]"></div>
            <p className="ml-19 mt-5">41 of 47 labs completed</p>
          </div>

          {/* Quiz Performance */}

          <div className=" mt-13 text-[14px] text-[#A1A1A1]">
            <p className="ml-19">Quiz Performance</p>
            <div className="flex flex-row">
              <div className="ml-19 w-3.25 h-5 mt-9 bg-[#D9D9D9]"></div>
              <div className="ml-1.25 w-3.25 h-9 mt-5 bg-[#D9D9D9]"></div>
              <div className="ml-1.25 w-3.25 h-8.25 mt-5.75 bg-[#D9D9D9]"></div>
              <div className="ml-1.25 w-3.25 h-6 mt-8 bg-[#D9D9D9]"></div>
              <div className="ml-1.25 w-3.25 h-7.75 mt-6 bg-[#D9D9D9]"></div>
              <div className="ml-1.25 w-3.25 h-14.5  bg-[#0F766E]"></div>
            </div>
            <p className="ml-19 mt-1.25">Last 7 assessments</p>
          </div>

          {/* Learning Hours */}

          <div className=" mt-13 text-[14px] text-[#A1A1A1]">
            <p className="ml-19">Quiz Performance</p>
            <div className="flex flex-row">
              <div className="ml-19 w-3.25 h-5 mt-9 bg-[#D9D9D9]"></div>
              <div className="ml-1.25 w-3.25 h-9 mt-5 bg-[#D9D9D9]"></div>
              <div className="ml-1.25 w-3.25 h-11.75 mt-2 bg-[#D9D9D9]"></div>
              <div className="ml-1.25 w-3.25 h-9 mt-5 bg-[#D9D9D9]"></div>
              <div className="ml-1.25 w-3.25 h-7.75 mt-6 bg-[#D9D9D9]"></div>
              <div className="ml-1.25 w-3.25 h-10.75 mt-3 bg-[#0F766E]"></div>
            </div>
            <p className="ml-19 mt-1.25">Last 7 assessments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceSummary;
