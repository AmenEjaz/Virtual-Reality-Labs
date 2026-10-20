import logo from "../../../public/logo.jpg";
import { CardIcon, PlanIcon, PremiumCardIcon } from "../../icons/Icons";
function WelcomeCard() {
  return (
    <div className=" w-272.25 h-39.5 mt-3.25 mb-6.5 ml-5.25 font-roboto rounded-[22px]   flex justify-start">
      <img
        className=" mt-10.75 ml-9.5 w-18.25 h-17.75  rounded-lg"
        src={logo.src}
        alt=""
      />
      <div className=" ml-3.5 mt-12.5 flex flex-col">
        <h1 className="w-192.5 h-9.75 text-[#0F766E] font-bold text-[36px] font-roboto  leading-[108%] ">
          Welcome Back, Rimsha
        </h1>
        <div className=" flex flex-row ">
          <p className="mr-39 font-medium text-[14px] text-[#727272] mt-1.5">
            Continue exploring immersive virtual science experiments. Your
            learning journey continues here.
          </p>
          <PremiumCardIcon />
          <p className="ml-2.5 text-[14px] font-semibold text-[#0F766E]">
            Upgrade to Premium{" "}
          </p>
        </div>
        <div className=" flex flex-row mt-0.75 gap-1.25">
          <div className=" items-center justify-center w-26 h-8.25 rounded-[10px] flex flex-row bg-[#0F766E] text-[14px] text-[#FFFFFF]  gap-2.5">
            <PlanIcon />
            <p>Free Plan</p>
          </div>
          <div className=" items-center justify-center w-50.25 h-8.25 rounded-[10px] flex flex-row bg-[#0F766E] text-[14px] text-[#FFFFFF]  gap-2.5">
            <CardIcon />
            <p>Member since Sep 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;
