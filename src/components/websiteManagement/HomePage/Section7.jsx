function Section7() {
  return (
    <div className="w-272.25 h-101 bg-[#F3F3F3] mt-15.5">
      <h3 className="ml-16 font-medium">Section 7</h3>

      <div className="mt-7.5 ml-16 ">
        <label className="block text-[14px] text-[#374151] font-semibold">
          Title
        </label>

        <input
          type="text"
          placeholder="The Future of Science Education"
          className="
          
            mt-3
            w-251.5
            h-11.5
            px-4
            rounded-xl
            border
            border-[#D1D5DB]
            outline-none
            text-[16px]
            text-[#000000]
            bg-white 
          "
        />
      </div>

      {/* DESCRIPTION */}

      <div className="mt-7">
        <label className="ml-16 block text-[14px] text-[#374151] font-semibold">
          Description
        </label>

        <textarea
          placeholder="Our platform combines cutting-edge VR technology with proven pedagogical methods to deliver an unparalleled learning experience."
          className="
            mt-3
            w-251.5
            ml-16
            h-11.5
            px-3
            py-3
            rounded-xl
            border
            border-[#D1D5DB]
            text-[12px]
            text-[#000000]
            bg-white
          "
        />
      </div>
      <div className="flex flex-row gap-2.5 mt-7 ml-165          ">
        <button
          type="button"
          className="
            border
            border-[#0F766E]
            w-22
            h-10
            rounded-lg
            text-[14px]
            text-[#0F766E]
          "
        >
          Cancel
        </button>

        <button
          type="button"
          className="
            border
            border-[#0F766E]
            bg-[#0F766E]
            w-50.5
            h-10
            rounded-lg
            text-[14px]
            text-white
          "
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Section7;
