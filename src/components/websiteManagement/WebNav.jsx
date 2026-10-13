import { PublishIcon } from "../../Icons/Icons";

function WebNav({ selectedPage }) {
  return (
    <div className="w-359.75 font-roboto">
      {/* White Navbar */}
      <div className="h-16 flex items-center justify-between px-12 bg-white">
        {/* Breadcrumb */}
        <div className="flex items-center">
          <p className="text-[14px] text-[#1F2937]">{selectedPage.name}</p>

          <span className="mx-2 text-[14px] text-[#9CA3AF]"> &gt; </span>

          <p className="text-[14px] text-[#1F2937]">{selectedPage.sections}</p>
        </div>

        {/* Publish Button */}
        <button
          className="h-9 w-29 rounded-lg bg-[#0F766E]
          flex items-center justify-center gap-2
          shadow-[0px_10px_15px_0px_#0000001A]"
        >
          <PublishIcon />

          <p className="text-white text-[14px]">Publish</p>
        </button>
      </div>

      {/* Green Header */}
      <div className="h-[132px] bg-[#0F766E] flex items-center justify-center">
        <h1 className="text-white text-[30px] font-bold">
          {selectedPage.name}
        </h1>
      </div>
    </div>
  );
}

export default WebNav;
