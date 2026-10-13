import {
  BluePremiumIcon,
  SuspendedIcon,
  GreenUserIcon,
  RedUserIcon,
} from "../../Icons/Icons";
function Users() {
  const users = [
    {
      icon: <RedUserIcon />,
      count: 4,
      info: "Total Users",
    },
    {
      icon: <GreenUserIcon />,
      count: 3,
      info: "Active Users",
    },
    {
      icon: <BluePremiumIcon />,
      count: 12,
      info: "Premium ",
    },
    {
      icon: <SuspendedIcon />,
      count: 1,
      info: "Suspended",
    },
  ];

  return (
    <div className="w-284.5 ">
      <div className="flex flex-row">
        <div>
          <h2 className="ml-9.75 mt-9.5 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
            All Users{" "}
          </h2>
          <p className="ml-9.75 w-96 mb-2.75 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
            View and manage all platform users
          </p>
        </div>
      </div>

      <div className="flex gap-8 ml-9.5">
        {users.map((user, index) => (
          <div
            key={index}
            className="
              w-59
              h-44.25
              flex
              flex-col
              
              justify-center
              rounded-xl
              border-[0.5px]
              border-[#D9D9D9]
              shadow-[0px_2px_4px_0px_#00000040]
            "
          >
            <div
              className="w-15 h-12.5 ml-8 shadow-[0px_2px_4px_0px_#00000040]
                rounded-md mb-4 flex items-center justify-center"
            >
              {user.icon}
            </div>

            <p className="font-roboto ml-8 font-medium text-[24px]">
              {user.count}
            </p>

            <p className="font-roboto ml-8 text-[14px] text-[#A1A1A1]">
              {user.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
