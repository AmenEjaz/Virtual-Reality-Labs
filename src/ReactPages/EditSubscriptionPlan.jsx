import { AddIcon, RequiredIcon, WCrossIcon } from "../Icons/Icons";

function EditSubscriptionPlan({ onClose }) {
  return (
    <div className="w-99.25 h-243.75 bg-white font-roboto">
      {" "}
      {/* Heading */}
      <div className="w-99.25 h-19 bg-[#0F766E] flex flex-row items-center font-medium">
        <h1 className="text-[20px] w-58.25 ml-4.25 font-roboto text-[#FFFFFF] mr-25">
          Edit Subscription Plan
        </h1>
        <WCrossIcon onClick={onClose} />{" "}
      </div>
      <form
        className="ml-7.25 mt-5 font-roboto text-[#A1A1A1] font-medium text-[12px]"
        action=""
      >
        <div className="flex flex-row gap-2">
          <div className="flex flex-col">
            <label htmlFor="">
              <div className="flex flex-row">
                Plan Name
                <RequiredIcon />
              </div>
            </label>
            <input
              type="text"
              placeholder="e.g Premium"
              className=" p-2.5 w-41.25 h-7.25 border border-[#BABABA] rounded-[10px] mt-1.25 "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">
              <div className="flex flex-row">
                Currency
                <RequiredIcon />
              </div>
            </label>
            <input
              type="text"
              placeholder="USD"
              className=" p-2.5 w-41.25 h-7.25 border border-[#BABABA] rounded-[10px] mt-1.25 "
            />
          </div>
        </div>

        <label htmlFor="">
          <div className="flex flex-row mt-5">
            Plan Description <RequiredIcon />
          </div>
        </label>
        <input
          type="text"
          placeholder="Short description of what this plan offers"
          className=" p-2.5 w-84.5 h-7.25 border border-[#BABABA] rounded-[10px] mt-1.25 "
        />
        <div className="flex flex-row gap-2 mt-5 ">
          <div className="flex flex-col">
            <label htmlFor="">
              <div className="flex flex-row">
                Price
                <RequiredIcon />
              </div>
            </label>
            <input
              type="text"
              placeholder="e.g 20, 30"
              className=" p-2.5 w-41.25 h-7.25 border border-[#BABABA] rounded-[10px] mt-1.25 "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">
              <div className="flex flex-row">
                Duration
                <RequiredIcon />
              </div>
            </label>
            <input
              type="text"
              placeholder="Monthly/Yearly"
              className=" p-2.5 w-41.25 h-7.25 border border-[#BABABA] rounded-[10px] mt-1.25 "
            />
          </div>
        </div>

        <label htmlFor="">
          <div className="flex flex-row mt-5">
            Features <RequiredIcon />
          </div>
        </label>
        <div className="flex flex-row gap-1.5 ">
          <input
            type="text"
            placeholder="Type a feature and press Enter"
            className=" p-2.5 w-74.5 h-7.25 border border-[#BABABA] rounded-[10px] mt-1.25 "
          />
          <div className=" mt-1 w-8.25 h-7.25 bg-[#0F766E] rounded-[5px] flex items-center justify-center                                   ">
            <AddIcon />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="mt-5.25 w-35.75 h-6 rounded-lg border border-[#BABABA] text-[10px] text-[#A1A1A1] flex p-1.5 justify-center">
            Unlimited labs per month
          </div>
          <div className="mt-5.25 w-35.75 h-6 rounded-lg border border-[#BABABA] text-[10px] text-[#A1A1A1] flex p-1.5 justify-center">
            All premium Lab access{" "}
          </div>
        </div>
        <div className="mt-2 w-35.75 h-6 rounded-lg border border-[#BABABA] text-[10px] text-[#A1A1A1] flex p-1.5 justify-center">
          Advanced progress tracking{" "}
        </div>

        {/* Lab Access Type */}
        <div className="flex flex-row mt-5">
          Lab Access Type <RequiredIcon />
        </div>
        <div className="flex flex-row mt-1.5 gap-1">
          <button className="w-27 h-7.25 rounded-[10px]  bg-[#0F766E] text-[12px] flex  items-center justify-center  text-[#FFFFFF] ">
            Free Labs{" "}
          </button>
          <button className="w-27 h-7.25 rounded-[10px] border border-[#0F766E] text-[12px]  text-[#0F766E] flex items-center justify-center">
            Premium Labs{" "}
          </button>
        </div>

        <div className="flex flex-row gap-2 mt-5 ">
          <div className="flex flex-col">
            <label htmlFor="">
              <div className="flex flex-row">
                Plan Status
                <RequiredIcon />
              </div>
            </label>
            <select
              id="planStatus"
              defaultValue="Active"
              className="pl-2.5 w-41.25 h-7.25 border text-[10px] border-[#BABABA] rounded-[10px] mt-1.25 text-[#A1A1A1] bg-white"
            >
              <option value="Active">Active</option>
              <option value="Unactive">Unactive</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">
              <div className="flex flex-row">
                Publication Status
                <RequiredIcon />
              </div>
            </label>
            <select
              id="publicationStatus"
              defaultValue="Published"
              className="pl-2.5 w-41.25 h-7.25 border text-[10px] border-[#BABABA] rounded-[10px] mt-1.25 text-[#A1A1A1] bg-white"
            >
              <option value="Published">Published</option>
              <option value="Unpublished">Unpublished</option>
            </select>
          </div>
        </div>

        <div className="flex flex-row mt-5 gap-1">
          <button
            type="button"
            onClick={onClose}
            className="w-41.5 h-7.25 rounded-[10px] border border-[#BABABA] text-[12px]  text-[#A1A1A1] flex items-center justify-center"
          >
            Cancel{" "}
          </button>
          <button className="w-41.5 h-7.25 rounded-[10px]  bg-[#0F766E] text-[12px] flex  items-center justify-center  text-[#FFFFFF] ">
            Save Changes{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditSubscriptionPlan;
