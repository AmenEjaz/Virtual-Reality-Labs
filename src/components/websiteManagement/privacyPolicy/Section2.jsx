import {
  BulletIcon,
  DCrossIcon,
  DeleteIcon,
  EditPIcon,
} from "../../../Icons/Icons";
import AddAnotherSection from "../AddAnotherSection";

function Section2() {
  const list = [
    {
      item: "Enhanced Engagement and retention",
    },
    {
      item: "Enhanced Engagement and retention",
    },
    {
      item: "Enhanced Engagement and retention",
    },
    {
      item: "Enhanced Engagement and retention",
    },
  ];

  return (
    <div className="w-272.25 h-148.5 font-roboto bg-[#F3F3F3]">
      <div className=" flex flex-row">
        {" "}
        <h3 className="ml-5.5 mt-3.75 font-bold text-[20px]">Section 2</h3>
        <div className="ml-209 mt-5.5 gap-4.75 flex flex-row items-center">
          <DeleteIcon />
          <EditPIcon />
        </div>
      </div>
      <div className="mt-9.5 rounded ">
        <label className="ml-5.5 block text-[14px] text-[#374151] font-semibold">
          Title
        </label>

        <input
          type="text"
          placeholder="Information We Collect"
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

          <input
            placeholder="We collect the following categories of information to operate and improve the Service:"
            className="
            mt-3
            w-251.5
            h-12
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

        {/* Bullet Section */}

        <div className="mt-9.25  ml-5.5 w-192.25 h-106 border border-[#938A96] rounded-[15px]">
          <div className="mb-5 flex flex-row gap-1.5 mt-5.75 ml-8">
            <div className=" h-9.25 w-25.75 bg-[#84FFB3] text-[20px] flex flex-row items-center justify-center text-[#070707]">
              <BulletIcon />
              Bullets
            </div>
            <div className=" h-9.25 w-25.75 bg-[#E0E0E0] flex items-center justify-center flex-row text-[20px] text-[#070707]">
              <BulletIcon />
              Bullets
            </div>
          </div>

          <div>
            {list.map((listItem) => {
              return (
                <ul className="text-[16px] font-roboto text-[#1F2937] ">
                  <div className="flex flex-row items-center">
                    <div className="ml-3 mr-5.25 bg-black rounded-full w-1.75 h-1.5"></div>
                    <li className=" mr-3 text-[16px] py-3 px-4.25 font-semibold h-12.25 mb-3.5 w-168.25 rounded-lg border border-[#938A96]">
                      {listItem.item}
                    </li>
                    <DCrossIcon />
                  </div>
                </ul>
              );
            })}
          </div>
        </div>

        {/* Buttons */}

        <div className="flex flex-row gap-2.5 mt-19 ml-181 mb-13">
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
        <AddAnotherSection />
      </div>
    </div>
  );
}

export default Section2;
