import logo from "../../Images/Logo.jpg";
function WelcomeCard() {
  return (
    <div className=" w-272.25 h-39.5 mt-3.25 mb-6.5 ml-5.25  rounded-[22px] border-[0.5px] border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] flex justify-start">
      <img
        className=" mt-10.75 ml-9.5 w-18.25 h-17.75  rounded-lg"
        src={logo.src}
        alt=""
      />
      <div className=" ml-3.5 mt-12.5 flex flex-col">
        <h1 className="w-192.5 h-9.75  text-[36px] font-roboto font-medium leading-[108%] bg-linear-to-b from-[#0F766E] to-[#000000] bg-clip-text text-transparent">
          Welcome Back, Administrator
        </h1>
        <p className="font-roboto font-medium text-[14px] text-[#727272]">
          Manage your VR Labs platform, users, science content and analytics
          from one intelligent dashboard.
        </p>
      </div>
    </div>
  );
}

export default WelcomeCard;
