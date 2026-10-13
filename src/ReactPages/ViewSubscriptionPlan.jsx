import {
  WCrossIcon,
  CrownIcon,
  CTickIcon,
  GDoubleCheckIcon,
  GlobIcon,
  PenIcon,
} from "../Icons/Icons";

function ViewSubscriptionPlan({ onClose, onEdit }) {
  return (
    <div className="w-99.25 h-243.75 bg-white font-roboto">
      {" "}
      {/* Heading */}
      <div className="w-99.25 h-19 bg-[#0F766E] flex flex-row items-center font-medium">
        <div className="w-8 h-8 rounded-full bg-white  ml-6.5 flex items-center justify-center mr-2.5">
          <CrownIcon className="6.5 mt-6" />
        </div>

        <div className=" font-roboto text-[#FFFFFF] w-66.25  ">
          <h1 className="text-[16px]">Free Plan</h1>
          <p className=" text-[12px]">Plan ID . plan-1</p>
        </div>
        <WCrossIcon onClick={onClose} />
      </div>
      {/* Body */}
      <div className="ml-7.25 font-medium">
        <p className="text-[12px] text-[#A1A1A1] mt-6.5">Pricing</p>
        <h1 className="font-medium text-[24px]">
          $0.00<span className="text-[#A1A1A1] text-[12px]">/monthly</span>
        </h1>
        <div className="flex flex-row gap-2.75">
          <div className="w-38.75 text-[12px] h-11.5 border border-[#B5B5B5] padding-2 flex justify-center flex-col">
            <p className=" ml-2 text-[#A1A1A1]">Currency</p>
            <p className="ml-2 font-medium">USD</p>
          </div>
          <div className="w-38.75 text-[12px] h-11.5 border border-[#B5B5B5] padding-2 flex justify-center flex-col">
            <p className=" ml-2 text-[#A1A1A1]">Duration</p>
            <p className="ml-2 font-medium">Monthly</p>
          </div>
        </div>
        <div className=" mt-2.5 w-38.75 text-[12px] h-11.5 border border-[#B5B5B5] padding-2 flex justify-center flex-col">
          <p className=" ml-2 text-[#A1A1A1]">Lab Access Type</p>
          <p className="ml-2 font-medium text-[#0F766E]">Free Labs</p>
        </div>
        {/* Description */}
        <h3 className="text-[#7B7A7A] text-[14px] mt-5.5">Description</h3>
        <h3 className="text-[#7B7A7A] text-[12px] mt">
          Get started with essential VR labs at no cost
        </h3>
        <h3 className="text-[#7B7A7A] text-[12px] mt-4.5">Features (4) </h3>
        <ul className="text-[#7B7A7A] text-[12px] mt-1.5 font-medium">
          <li>
            <div className="flex flex-row gap-2 mb-1.5">
              <CTickIcon />
              Up to 5 labs per month
            </div>
          </li>
          <li>
            {" "}
            <div className="flex flex-row gap-2 mb-1.5">
              <CTickIcon />
              Standard analytics
            </div>
          </li>
          <li>
            <div className="flex flex-row gap-2 mb-1.5">
              <CTickIcon />
              720 streaming
            </div>
          </li>
          <li>
            <div className="flex flex-row gap-2 mb-1.5">
              <CTickIcon />
              Community Support
            </div>
          </li>
        </ul>

        <h3 className="text-[#7B7A7A] text-[12px] mt-4.5 font-medium">
          Configuration (4){" "}
        </h3>
        <div className="border border-[#D9D9D9] p-2.5 mt-3 h-11.75 w-81.75 flex flex-row text-[12px] items-center gap-2.5">
          <GDoubleCheckIcon />
          <div className="flex flex-col ">
            <h3>Active</h3>
            <h3 className="text-[#A1A1A1]">Accept new signups</h3>
          </div>
        </div>
        <div className="border border-[#D9D9D9] w-81.75 p-2.5 mt-3 h-11.75 flex flex-row text-[12px] items-center gap-2.5">
          <GlobIcon />
          <div className="flex flex-col  ">
            <h3>Active</h3>
            <h3 className="text-[#A1A1A1]">Accept new signups</h3>
          </div>
        </div>

        <h3 className="text-[#7B7A7A] text-[12px] mt-4.5">
          Active Subscribers <span className="ml-55 w-32">16,172</span>{" "}
        </h3>
        <div
          className=" mt-3 h-39 w-84 border border-[#00000080] border-dashed rounded-lg flex items-center justify-center
 "
        >
          <p className="text-[14px] text-[#9C9C9C]">
            {" "}
            No active subscribers yet
          </p>{" "}
        </div>
        <div className="flex flex-row mt-8 gap-1">
          <button
            type="button"
            onClick={onClose}
            className="w-41.5 h-7.25 rounded-[10px] border border-[#BABABA] text-[12px]  text-[#A1A1A1] flex items-center justify-center"
          >
            Cancel{" "}
          </button>
          <button
            onClick={onEdit}
            className="w-41.5 h-7.25 rounded-[10px]  bg-[#0F766E] text-[12px] flex  items-center justify-center  text-[#FFFFFF] "
          >
            <div className=" flex-row gap-2 flex items-center">
              <PenIcon />
              Edit Plan{" "}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewSubscriptionPlan;
