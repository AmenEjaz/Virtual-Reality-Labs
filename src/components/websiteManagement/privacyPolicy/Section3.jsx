import { DeleteIcon, EditPIcon } from "../../../Icons/Icons";
import AddAnotherSection from "../AddAnotherSection";

function Section3() {
  return (
    <div className="w-272.25 mt-110 h-148.5 font-roboto bg-[#F3F3F3]">
      <div className="flex flex-row">
        <h3 className="ml-5.5 mt-3.75 font-bold text-[20px]">Section 3</h3>

        <div className="ml-209 mt-5.5 gap-4.75 flex flex-row items-center">
          <DeleteIcon />
          <EditPIcon />
        </div>
      </div>

      <div className="mt-14.5 rounded ">
        <label className="ml-5.5 block text-[14px] text-[#374151] font-semibold">
          Title
        </label>

        <input
          type="text"
          placeholder="Data Retention"
          className="
           ml-5.5
            mt-3
            w-251.5
            h-11.5
            px-4.25
            rounded-xl
            border
            border-[#D1D5DB]
            outline-none
            text-[12px]
            font-medium
            bg-[#FFFFFF] 
          "
        />

        {/* DESCRIPTION */}

        <div className="mt-8 ml-5.5">
          <label className=" block text-[14px] text-[#374151] font-semibold">
            Description
          </label>

          <textarea
            placeholder="We retain personal information for as long as your account is active or as needed to provide the Service. When you delete your account, we will delete or anonymize your personal information within a reasonable period, except where we are required to retain it to comply with legal obligations, resolve disputes, or enforce agreements."
            className="
            mt-3
            w-251.5
            h-19.75
            px-4.25
            font-medium
            py-1.75
            rounded-xl
            border
            border-[#D1D5DB]
            text-[12px]
            text-[#929292]
            bg-white
          "
          />
        </div>
        <div className="flex flex-row gap-2.5 mt-7 ml-181">
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
        <div className="mt-14">
          <AddAnotherSection />
        </div>
      </div>
    </div>
  );
}

export default Section3;
