"use client";
// import { AddIcon } from "../Icons/Icons";
import { EyeIcon } from "../../Icons/Icons";
import { useRouter } from "next/navigation";
// import UserMgtHeading from "./UserMgtHeading";
const users = [
  {
    name: "Rimsha",
    email: "Smdesigner024@gmail.com",
    plan: "Free",
    status: "Active",
    lastLogin: "Jul 6,2026",
  },
  {
    name: "Rimsha",
    email: "Smdesigner024@gmail.com",
    plan: "Premium",
    status: "Active",
    lastLogin: "Jul 6,2026",
  },
  {
    name: "Rimsha",
    email: "Smdesigner024@gmail.com",
    plan: "Free",
    status: "Suspended",
    lastLogin: "Jul 6,2026",
  },
];

function UserManagement() {
  const router = useRouter();
  return (
    <div>
      {/* <UserMgtHeading /> */}
      <div className="w-267.5 h-75.25 mt-2.75 ml-7 rounded-xl border-[0.5px] border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] overflow-hidden">
        <table className="w-full table-fixed border-collapse">
          <colgroup>
            <col className="w-55" />
            <col className="w-37.5" />
            <col className="w-37.5" />
            <col className="w-37.5" />
            <col className="w-45" />
            <col className="w-35" />
          </colgroup>

          <thead>
            <tr className="h-15.5 mb-10.5">
              <th className="pl-7.75 text-left font-roboto  text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                User
              </th>
              <th className="text-center font-roboto text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Email
              </th>
              <th className="text-center font-roboto text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Plan
              </th>
              <th className="text-center font-roboto text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Status
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Last Login
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="h-17.25" key={user.name}>
                <td className="pl-7.75 text-left align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101] whitespace-nowrap">
                  {user.name}
                </td>

                <td className="text-center align-middle  font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
                  {user.email}
                </td>

                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#8D1681]">
                  {user.plan}
                </td>

                <td className="align-middle">
                  <div className="mx-auto w-21.75 h-7.75 rounded-[20px] bg-[#DBFEBD] flex items-center justify-center font-roboto  text-[14px] leading-[133%] text-[#4F930A]">
                    {user.status}
                  </div>
                </td>

                <td className="align-middle">
                  <div className="mx-auto w-22.75 h-7.5 rounded-[20px] bg-[#DBFEBD] flex items-center justify-center font-roboto font-medium text-[14px] leading-[133%] text-[#4F930A]">
                    {user.lastLogin}
                  </div>
                </td>

                <td className="align-middle flex mt-5 ml-15">
                  <button
                    type="button"
                    onClick={() => router.push("/user-management/view-user")}
                    className="flex flex-row items-center justify-center gap-3.25"
                  >
                    <EyeIcon />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;
