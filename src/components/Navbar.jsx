import { SearchIcon } from "../Icons/Icons";
import { NotifyIcon } from "../Icons/Icons";

import logo from "../Images/Logo.jpg";
function Navbar() {
  return (
    <div className="w-295.75 h-20.75 flex items-center bg-[#FFFFFF] shadow-[0px_1px_4px_0px_#00000040]">
      {/* Search */}
      <div className="flex items-center w-116.25 h-8.25 ml-8.75 rounded-2xl border border-[#BABABA]">
        <div className="ml-3.75 gap-1.75 flex items-center">
          <SearchIcon className="w-3.25 h-3.25" />

          <input
            className="font-roboto font-medium text-[14px] h-4.75 w-39.4 text-[#BABABA] outline-none"
            placeholder="Search Labs, Subjects....."
            type="text"
          />
        </div>
      </div>

      <div className="ml-93.5 mr-8.75 flex items-center  ">
        <NotifyIcon className="w-7.25 h-7.25" />
        <img
          className="w-7.25 h-7.25 mr-45. ml-7 mr-1.25 rounded-full object-cover flex items-center justify-center"
          src={logo.src}
          alt="Rimsha Latif"
        />

        <p className="font-roboto w-27.25 mr-19.75 font-medium ml-3 text-black">
          Rimsha Latif
        </p>
      </div>
    </div>
  );
}
export default Navbar;
