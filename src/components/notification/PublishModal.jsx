import { PubIcon } from "../../Icons/Icons";

export default function PublishModal({ onCancel }) {
  return (
    <div className="w-md h-88.75 p-8 bg-[#F6FEFD]">
      <PubIcon />
      <h3 className=" mt-6 font-roboto font-bold text-[18px] ">
        Publish Announcement?
      </h3>
      <p className="font-roboto text-[14px] text-[#4C5568] py-2 w-91 h-11.25">
        {" "}
        This announcement will become visible to the selected users once
        published.
      </p>

      <div>
        <p className="text-[12px] text-[#697282] ">
          Announcement{" "}
          <span className="text-black ml-23"> Chemistry Lab Maintenance</span>
        </p>
        <p className="text-[12px] text-[#697282] ">
          Taget <span className="text-black  ml-70">All Users</span>
        </p>
      </div>

      <div className="flex flex-row font-roboto gap-2 mt-12">
        <button className="  ml-50.75 w-19 h-10.5 text-[#374052] text-[14px] p-4 rounded-md border border-[#DEF1F1] ">
          Cancel onClick={onCancel}
        </button>
        <button className="w-44.25 h-10.5  text-white bg-[linear-gradient(90deg,#00786F_0%,#000000_100%)] text-[14px] p-4 rounded-md flex items-center justify-center border border-[#DEF1F1] ">
          Publish Announcement
        </button>
      </div>
    </div>
  );
}
