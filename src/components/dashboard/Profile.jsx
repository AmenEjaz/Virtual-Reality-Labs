import { EditIcon } from "@/icons/Icons";

function Profile() {
  return (
    <div className="w-133.25 h-94.25 mt-6.5 ml-5.5 p-7.25 font-roboto">
      <div className="flex flex-row gap-2.25 ">
        <div>
          {" "}
          <img
            className="w-14.75 h-15.5 rounded-full object-cover"
            src="/logo.jpg"
            alt="Rimsha Latif"
          />
        </div>
        <div>
          <p className="text-[20px] font-[500px] ">Rimsha Latif</p>
          <p className="text-[#A1A1A1] text-[14px]">Smdesigner024@gmail.com</p>
        </div>
      </div>

      <p className="text-[14px]  text-[#868686] mt-9">
        Current Plan
        <span className="ml-84.25 w-21.5 h-4.75 text-[#868686] bg-[#E8E8E8] rounded">
          Free
        </span>
      </p>
      <div className="border border-[#D5D5D5] mt-4.25 w-116"></div>
      <p className="text-[14px]  text-[#868686] mt-9">
        Account Status{" "}
        <span className="ml-80.25 w-21.5 h-4.75 text-[#2094B4] bg-[#E0F2FF] text-[14px] rounded">
          Active
        </span>
      </p>
      <div className="border border-[#D5D5D5] mt-4.25 w-116"></div>
      <p className="text-[14px]  text-[#868686] mt-9">
        Current Plan
        <span className="ml-64.25 w-21.5 h-4.75 text-[#868686]  bg-[#E8E8E8] rounded">
          September 15, 2025{" "}
        </span>
      </p>
      <button className="h-9.75 w-117 border border-[#868686] mt-8 ">
        <div className="flex flex-row items-center justify-center text-[14px] gap-2.5 text-[#868686]">
          <EditIcon />
          Edit Profile
        </div>
      </button>
    </div>
  );
}

export default Profile;
