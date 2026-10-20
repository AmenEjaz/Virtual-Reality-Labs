"use client";

import { DownIcon, SearchIcon, BellIcon } from "../icons/Icons";
function Navbar() {
  return (
    <div className="flex items-center w-284.5 h-21 shadow-[0px_1px_4px_0px_#00000040]">
      {/* Search */}
      <div className="flex items-center w-116.25 h-8.25 ml-8.75 rounded-2xl border border-[#BABABA]">
        <div className="ml-3.75 gap-1.75 flex items-center">
          <SearchIcon />

          <input
            className="font-roboto font-medium text-[14px] h-4.75 w-39.4 text-[#BABABA] "
            placeholder="Search Labs, Subjects....."
            type="text"
          />
        </div>
      </div>

      {/* Profile and Notifications */}
      <div className="ml-93.5 mr-8.75 flex items-center  flex-row">
        <BellIcon className="w-7.25 h-7.25" />

        <img
          className="w-7.25 h-7.25 ml-7  rounded-full object-cover"
          src="/logo.jpg"
          alt="Rimsha Latif"
        />
        <p className="font-roboto whitespace-nowrap w-27.25 mr-4.5 font-medium ml-3 text-black">
          Rimsha Latif
        </p>
        <DownIcon />
      </div>
    </div>
  );
}

export default Navbar;
