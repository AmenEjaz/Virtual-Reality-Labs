import { AddIcon } from "../../Icons/Icons";
function UserMgtHeading() {
  return (
    <div className="flex flex-row mt-7 ml-5">
      <div>
        <h2 className=" w-54.5 h-6.75 ml-7  font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
          User Management
        </h2>
        <p className="ml-6.25 mb-2.75 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
          View and manage platform users
        </p>
      </div>
      <div className="  flex flex-row justify-center items-center   w-37.75 ml-172   rounded-[10px] h-11 p-2.5 bg-[linear-gradient(90deg,#0F766E_0%,#000000_100%)]">
        <AddIcon />
        <p className="font-roboto text-medium text-[#FFFFFF]">Add User</p>
      </div>
    </div>
  );
}

export default UserMgtHeading;
