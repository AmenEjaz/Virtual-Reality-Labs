import { UploadImageIcon, WTickIcon } from "../Icons/Icons";

// import { CheckIcon, ImageIcon } from "../../Icons/Icons";
function PlatformSetting() {
  return (
    <div className="w-284 h-319.25 font-roboto">
      {/* Page Header */}
      <div className="mt-13 ml-9.5">
        <h1 className="text-[20px] font-semibold">General Settings</h1>

        <p className="text-[14px] text-[#A1A1A1] ">
          Platform name, branding, and basic configurations
        </p>
      </div>

      <div className="mt-4 ml-9.5 flex flex-row gap-3.25">
        <div className=" gap-6.25 flex flex-col ">
          {/* Platform Information */}
          <div className=" w-174.5 h-93.75 border border-[#D9D9D9] rounded-xl  shadow-[0px_2px_4px_0px_#00000040]">
            <h2 className="mt-7.5 ml-7 text-[16px] font-semibold  mb-5">
              Platform Information
            </h2>

            <label className=" ml-7  text-[14px] font-medium mb-1">
              Platform Name
            </label>

            <input
              type="text"
              value="VR Labs"
              readOnly
              className="w-161.25 mb-6.25  ml-7 h-9.75 border border-[#E6E6E6] rounded-[10px] px-3 text-[14px] text-[#999999] "
            />

            <label className="ml-7  text-[14px] font-medium mb-1">
              Tagline
            </label>

            <input
              type="text"
              value="Immersive Virtual Science Laboratories"
              readOnly
              className=" ml-7 w-161.25 h-9.75 border border-[#E6E6E6] rounded-[10px] px-3 text-[14px] text-[#999999] "
            />

            {/* Admin Email */}
            <label className="ml-7 mt-6.25 block text-[14px] font-medium mb-1">
              Admin Email
            </label>

            <input
              type="text"
              value="admin@vrlabs.edu"
              readOnly
              className=" ml-7 w-161.25 h-9.75 border border-[#E6E6E6] rounded-[10px] px-3 text-[14px] text-[#999999] "
            />
          </div>

          {/* Regional Settings */}
          <div className="border border-[#D9D9D9] rounded-xl h-75.25 w-174.75 shadow-[0px_2px_4px_0px_#00000040]">
            <h2 className="mt-7.5 ml-7 text-[16px] font-semibold  mb-5">
              Regional Settings
            </h2>

            {/* Language */}
            <div className=" flex flex-row gap-3">
              <div className=" flex flex-col">
                <label className="ml-7 text-[14px] font-medium mb-1">
                  Default Language
                </label>

                <input
                  type="text"
                  value="English"
                  readOnly
                  className="w-79.25 h-9.72 ml-7  h-9.75 border text-[#999999] rounded-[9px] px-3 text-[14px]   border-[#E6E6E6] "
                />
              </div>
              {/* Time Zone */}
              <div className=" flex flex-col">
                <label className="text-[14px] font-medium mb-1">Timezone</label>

                <input
                  type="text"
                  value="Asia/Karachi (GMT+5)"
                  readOnly
                  className="w-79.25 h-9.72  h-9.75 border text-[#999999] rounded-[9px] px-3 text-[14px]   border-[#E6E6E6] "
                />
              </div>
            </div>
            {/* Date Format and Currency */}
            <div className="flex flex-row gap-3 ml-7 mt-8">
              <div className=" flex flex-col">
                <label className=" text-[14px] font-medium mb-1">
                  Date Format
                </label>

                <input
                  type="text"
                  value="DD/MM/YYYY"
                  readOnly
                  className="w-79.25 h-9.72  h-9.75 border text-[#999999] rounded-[9px] px-3 text-[14px]   border-[#E6E6E6] "
                />
              </div>
              {/* Time Zone */}
              <div className=" flex flex-col">
                <label className="ml-7 text-[14px] font-medium mb-1">
                  Currency
                </label>

                <input
                  type="text"
                  value="PKR (Rs)"
                  readOnly
                  className="w-79.25 h-9.72 ml-7  h-9.75 border text-[#999999] rounded-[9px] px-3 text-[14px]   border-[#E6E6E6] "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6.75">
          {/* Logo & Branding */}
          <div className=" w-93 h-130.25 border border-[#D9D9D9] rounded-xl  shadow-[0px_2px_4px_0px_#00000040]">
            <h2 className="text-[16px] font-semibold m-7.5">Logo & Branding</h2>

            {/* Upload Box */}
            <div className="h-89.5 w-82.25 m-auto border border-dashed border-[#BEBEBE] rounded-lg flex flex-col items-center justify-center">
              <div className="mb-3">
                <UploadImageIcon />
              </div>

              <p className="text-[14px] text-[#9C9C9C] mb-1">Upload Logo</p>

              <p className="text-[12px] text-[#949494]">PNG, SVG up to 2MB</p>
            </div>

            <p className="text-center text-[14px] text-[#A1A1A1] mt-6.5">
              Current: VR Labs (text logo)
            </p>
          </div>

          {/* Maintenance Mode */}
          <div className="border h-38.25 w-93  border-[#D9D9D9] rounded-lg p-6.25 shadow-[0px_2px_4px_0px_#00000040]">
            <h2 className="text-[16px] font-semibold  mb-5">
              Maintenance Mode
            </h2>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium ">Maintenance Mode</p>

                <p className="text-[12px] text-[#949494] ">
                  Disable platform access temporarily
                </p>
              </div>

              {/* Toggle */}
              <button className="w-11 h-5.75 rounded-full bg-[#D9D9D9] relative">
                <span className="absolute left-0.5 top-0.5 w-4.75 h-4.75 bg-white rounded-full shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Buttons */}
      <div className="grid grid-cols-2 gap-5 mt-8">
        <button className="h-8.75 w-132 rounded-[10px] border border-[#DBDBDB] text-[14px] font-medium text-[#060606] hover:bg-[#F8F8F8] transition ">
          Discard
        </button>

        <button className="h-8.75 w-132 rounded-[10px] bg-[linear-gradient(90deg,#0F766E_0%,#111827_100%)] text-white text-[14px] font-medium flex items-center justify-center gap-2 ">
          <WTickIcon /> Save Settings
        </button>
      </div>
    </div>
  );
}

export default PlatformSetting;
