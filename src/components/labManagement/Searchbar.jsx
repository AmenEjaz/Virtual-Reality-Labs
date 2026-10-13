import { SearchIcon } from "../../Icons/Icons";

function Searchbar() {
  return (
    <div className=" mt-10 w-265 h-21.25 rounded-xl ml-9.75 border-[0.5px] bg-[#D0D0D01A] border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] ">
      <div className="  flex flex-row ">
        <div className=" w-140 h-7.25 flex gap-2.5 border rounded-lg p-2 border-[#D7D7D7] items-center flex-row-41.75  font-roboto font-medium leading-[133%] m-7 text-[#868686]">
          <SearchIcon />
          <input
            className=" text-[14px] w-44"
            type="text"
            name=""
            id=""
            placeholder=" Search Lab by names or ID"
          />
        </div>
        <div className="flex flex-row justify-center gap-0.5 items-center">
          <h2 className="font-roboto font-medium w-12.5 h-5 ml-13">Filter: </h2>
          <button className=" w-16.5 h-7 text-white text-[14px] font-medium bg-[#0F766E] rounded-[10px]">
            All
          </button>
          <button className=" w-16.75 h-7 text-[#868686] text-[14px] font-medium border border-[#D7D7D7] rounded-[10px]">
            Free
          </button>
          <button className=" w-27 h-7 text-[#868686] text-[14px] font-medium border border-[#D7D7D7] rounded-[10px]">
            Premium
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
