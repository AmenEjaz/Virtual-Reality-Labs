function Analytics() {
  return (
    <div>
      <h2 className=" ml-3.5 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
        Reports &amp; Analytics
      </h2>
      <p className="ml-5.5 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
        Lab usage and distribution
      </p>

      <div className="w-146.75 h-199.25 ml-3.5 mt-5.25 rounded-xl border-[0.5px] border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] px-[24px] py-[22px]">
        <h3 className="font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
          Free vs Premium Labs
        </h3>
        <div className="mt-3.5 ml-6.5 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-4 h-4 rounded-full bg-[#17B8CF]" />
            <span className="font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
              Free Labs
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-4 h-4 rounded-full bg-[#0F2E28]" />
            <span className="font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
              Premium Labs
            </span>
          </div>
        </div>

        {/* Most Opened Labs */}
        <h3 className="mt-10.5 font-roboto font-medium text-[14px] leading-[133%] text-[#050505]">
          Most Opened Labs
        </h3>

        <div className="mt-3.5 flex flex-col gap-2.5">
          {/* 1 */}
          <div className="grid grid-cols-[13px_495.5px_46px] gap-2.5 items-start">
            <span className="font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
              1
            </span>

            <div>
              <p className="font-roboto text-[14px]  font-medium leading-[20px] text-[#A1A1A1]">
                Introduction to Kinematics
              </p>
              <div className="h-[3px] w-[495.5px] mt-[5px] rounded-full bg-[#9D0B82]" />
            </div>

            <span className=" w-[40px] shrink-0 ml-[-25px] font-roboto text-[14px] font-medium leading-[20px] text-[#A1A1A1]">
              2,840
            </span>
          </div>

          {/* 2 */}
          <div className="grid grid-cols-[13px_495.5px_46px] gap-[10px] items-start">
            <span className="font-roboto text-[14px] leading-[20px] text-[#A1A1A1]">
              2
            </span>

            <div>
              <p className="font-roboto text-[14px] font-medium leading-[20px] text-[#A1A1A1]">
                Cell Division Simulation
              </p>
              <div className="h-[3px] w-[88%] mt-[5px] rounded-full bg-[#FB4A15]" />
            </div>

            <span className="font-roboto text-[14px] font-medium ml-[-25px] leading-[20px] text-[#A1A1A1]">
              2,510
            </span>
          </div>

          {/* 3 */}
          <div className="grid grid-cols-[13px_495.5px_46px] gap-[10px] items-start">
            <span className="font-roboto text-[14px] leading-[20px] text-[#A1A1A1]">
              3
            </span>

            <div>
              <p className="font-roboto text-[14px] font-medium leading-[20px] text-[#A1A1A1]">
                Chemical Bonding Explorer
              </p>
              <div className="h-[3px] w-[81%] mt-[5px] rounded-full bg-[#46B8FF]" />
            </div>

            <span className="font-roboto text-[14px] font-medium ml-[-25px] leading-[20px] text-[#A1A1A1]">
              2,290
            </span>
          </div>

          {/* 4 */}
          <div className="grid grid-cols-[13px_495.5px_46px] gap-[10px] items-start">
            <span className="font-roboto text-[14px] leading-[20px] text-[#A1A1A1]">
              4
            </span>

            <div>
              <p className="font-roboto text-[14px] font-medium leading-[20px] text-[#A1A1A1]">
                Acid-Base Titration
              </p>
              <div className="border-[3px] w-[70%] mt-[5px] rounded-full border-[#E6E023]" />
            </div>

            <span className="font-roboto text-[14px] font-medium ml-[-25px] leading-[20px] text-[#A1A1A1]">
              1,980
            </span>
          </div>

          {/* 5 */}
          <div className="grid grid-cols-[13px_495.5px_46px] gap-[10px] items-start">
            <span className="font-roboto text-[14px] leading-[20px] text-[#A1A1A1]">
              5
            </span>

            <div>
              <p className="font-roboto text-[14px] font-mediumleading-[20px] text-[#A1A1A1]">
                Newton Laws Demo
              </p>
              <div className="h-[3px] w-[62%] mt-[5px] rounded-full bg-[#5FFE2E]" />
            </div>

            <span className="font-roboto font-medium text-[14px] ml-[-25px] leading-[20px] text-[#A1A1A1]">
              1,750
            </span>
          </div>
        </div>

        {/* Grade-wise Usage */}
        <h3 className="mt-9.5 h-4.75 font-roboto mb-[24px] font-medium text-[14px] leading-[133%] text-[#050505]">
          Grade-wise Usage
        </h3>
        <div className="mt-[14px] flex flex-col gap-[14px]">
          <div className="flex items-center gap-2">
            <span className="w-[86px]  shrink-0 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
              Grade 9
            </span>
            <div className="flex-1">
              <div className="h-[3px] w-[179px] rounded-full bg-[#5CE01B]" />
            </div>
            <span className="w-[40px] shrink-0 text-right font-roboto text-[14px] font-medium leading-[133%] text-[#010101]">
              35%
            </span>
          </div>

          <div className="flex items-center mt-[15px] gap-2">
            <span className="w-[86px] shrink-0 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
              Grade 10
            </span>
            <div className="flex-1">
              <div className="h-[3px] w-[144px] rounded-full bg-[#B026C9]" />
            </div>
            <span className="w-[40px] shrink-0 text-right font-roboto text-[14px] font-medium leading-[20px] text-[#010101]">
              28%
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-[86px] shrink-0 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
              FSC Part I
            </span>
            <div className="flex-1">
              <div className="h-[3px] w-[117px] rounded-full bg-[#F6F269]" />
            </div>
            <span className="w-[40px] shrink-0 text-right font-roboto text-[14px] font-medium leading-[133%] text-[#010101]">
              22%
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-[86px] shrink-0 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
              FSC Part II
            </span>
            <div className="flex-1">
              <div className="h-[3px] w-[90px] rounded-full bg-[#FE2E32]" />
            </div>
            <span className="w-[40px] shrink-0 text-right font-roboto text-[14px] font-medium leading-[133%] text-[#010101]">
              15%
            </span>
          </div>
        </div>

        <h3 className="mt-[51px] font-roboto font-medium text-[14px] leading-[133%] text-[#050505]">
          Subject-wise Usage Distribution
        </h3>
        <div className="mt-[24px] flex flex-col gap-3.75">
          <div className="flex items-center gap-2">
            <span className="w-[86px] shrink-0 font-roboto text-[14px] font-medium leading-[133%] text-[#A1A1A1]">
              Physics
            </span>
            <div className="flex-1">
              <div className="border-[3px] w-[179px] rounded-full border-[#5FFE2E]" />
            </div>
            <span className="w-[40px] shrink-0 text-right font-roboto text-[14px] font-medium  leading-[133%] text-[#050505]">
              35%
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-[86px] shrink-0 font-roboto text-[14px] font-medium leading-[133%] text-[#A1A1A1]">
              Chemistry
            </span>
            <div className="flex-1">
              <div className="border-[3px] w-[144px] rounded-full border-[#D42EFE]" />
            </div>
            <span className="w-[40px] shrink-0 text-right font-roboto text-[14px] font-medium leading-[20px] text-[#050505]">
              28%
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-[86px] shrink-0 font-roboto text-[14px] font-medium leading-[133%] text-[#A1A1A1]">
              Biology
            </span>
            <div className="flex-1">
              <div className="border-[3px] w-[117px] rounded-full border-[#F6F269]" />
            </div>
            <span className="w-[40px] shrink-0 text-right font-roboto text-[14px] font-medium leading-[133%] text-[#050505]">
              22%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
