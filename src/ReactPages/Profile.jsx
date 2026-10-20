// import React from "react";
// import Image from "next/image";
// import logo from "../../public/logo.jpg";
// import { stat } from "fs";
import { Edit } from "../icons/Icons";

// const stats = [
//   {
//     count: "12",
//     info: "Labs Done",
//   },
//   {
//     count: "48h",
//     info: "Total Time",
//   },
//   {
//     count: "92%",
//     info: "Avg Score",
//   },
//   {
//     count: "7",
//     info: "Day Streak",
//   },
// ];

// function Profile() {
//   return (
//     <div className="pt-6.25 pl-10 mt-3 ml-5.25">
//       <h2 className="text-[36px] leading-[108%] font-semibold">Profile</h2>{" "}
//       <p className="text-[14px] leading-[133%]  text-[#727272] font-semibold ">
//         Manage your personal information and account details.{" "}
//         {/* <span className=" items-end">
//           <button className="bg-[#DFF0FF] w-30.5 h-8 rounded-lg pt-2.5 pl-8">
//             Edit <Edit />
//           </button>
//         </span> */}
//       </p>
//       <div className="flex flex-row items-center justify-center mt-17.5">
//         {/* LEFT SIDE */}

//         <div className="">
//           <div className="font-roboto flex  flex-col items-center justify-center">
//             <Image className="w-27.25 h-27.25 rounded-full" src={logo} alt="" />
//             <p className="text-[16px] font-semibold">Rimsha Latif</p>
//             <p className="text-[14px] text-[#727272] font-semibold"></p>
//             <div className="flex gap-1">
//               <button className="w-23 h-7 text-[#4D63D3] text-[14px] rounded-[20px] bg-[#DFF0FF]">
//                 Free Plan
//               </button>
//               <button className="w-23 h-7 rounded-[20px] text-[14px] text-[#278234] bg-[#DFF0FF]">
//                 Free Plan
//               </button>
//             </div>
//           </div>
//           <h3 className="text-[16px] font-medium text-start">Your Stats</h3>
//           <div className="grid grid-cols-2 gap-2">
//             {stats.map((stat) => {
//               return;
//               <div className="flex flex-col">
//                 <h3 className="text-[24px] ">{stat.count}</h3>;
//                 <p className="text-[12px] text-[#727272]">{stat.info}</p>
//               </div>;
//             })}
//           </div>
//           <p className="text-[14px] text-[#727272] ">Subjects of Interest</p>
//           <div className="flex gap-1">
//             <button className="w-12.25 h-4.75 text-[#4D63D3] text-[14px] rounded-[20px] bg-[#DFF0FF]">
//               Physics
//             </button>
//             <button className="w-12.25 h-4.75 rounded-[20px] text-[14px] text-[#278234] bg-[#DFF0FF]">
//               Chemistry
//             </button>
//             <button className="w-12.25 h-4.75 rounded-[20px] text-[14px] text-[#1EB0B5] bg-[#DFF0FF]">
//               Biology
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* RIGHT SIDE */}
//       <div className="font-roboto">
//         <h2 className="text-[20px]">Personal Information</h2>
//         <form className="text-[14px] text-[#727272]" action="">
//           <label className="mb-2.5   " htmlFor="">
//             Full Name
//           </label>
//           <br />
//           <input
//             className="w-121 h-9.75 rounded-lg  flex items-center border border-[#DBD9D9] "
//             type="text"
//             placeholder="Rimsha Latif"
//           />
//           <label className="mb-2.5" htmlFor="">
//             Email
//           </label>
//           <br />
//           <input
//             className="w-121 h-9.75 rounded-lg  flex items-center border border-[#DBD9D9] "
//             type="text"
//             placeholder="Smdesigner024@gmail.com"
//           />
//           <label className="mb-2.5" htmlFor="">
//             Phone Number
//           </label>
//           <br />
//           <input
//             className="w-121 h-9.75 rounded-lg  flex items-center border border-[#DBD9D9] "
//             type="tel"
//             placeholder="03190412670"
//           />
//           <label className="mb-2.5" htmlFor="">
//             Member Since
//           </label>
//           <br />
//           <input
//             className="w-121 h-9.75 rounded-lg  flex items-center border border-[#DBD9D9] "
//             type="text"
//             placeholder="September 2025"
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React from "react";
import Image from "next/image";
import logo from "../../public/logo.jpg";

const stats = [
  { count: "12", info: "Labs Done" },
  { count: "48h", info: "Total Time" },
  { count: "92%", info: "Avg Score" },
  { count: "7", info: "Day Streak" },
];

function Profile() {
  return (
    <div className="pt-6.25 pl-10 mt-3 ml-5.25 w-[1090px] ">
      <h2 className="text-[36px] leading-[108%] font-semibold">Profile</h2>
      <div className="flex lfex-row">
        <p className="text-[14px] leading-[133%] text-[#727272] font-semibold">
          Manage your personal information and account details.
        </p>
        <button className="  ml-140 w-30.5 h-8 font-semibold rounded-lg flex items-center gap-4.5 justify-center text-[14px] bg-[#DFF0FF] text-[#4D63D3]">
          Edit
          <Edit />
        </button>
      </div>

      <div className="flex flex-row gap-12 mt-17.5">
        {/* LEFT SIDE */}
        <div className="w-92.75 shrink-0 font-roboto">
          <div className="flex flex-col items-center">
            <Image
              className="w-27.25 h-27.25 rounded-full"
              src={logo}
              alt="Profile"
            />
            <p className="text-[16px] mt-1.75 font-semibold">Rimsha Latif</p>
            <p className="text-[14px] mt-1  text-[#727272]">
              Smdesigner024@gmail.com
            </p>

            <div className="flex gap-1 mt-2">
              <button className="w-23 h-7 text-[#4D63D3] text-[14px] rounded-[20px] bg-[#DFF0FF]">
                Free Plan
              </button>
              <button className="w-23 h-7 rounded-[20px] text-[14px] text-[#278234] bg-[#DFF0FF]">
                Active
              </button>
            </div>
          </div>

          <h3 className="text-[16px] font-semibold mt-18 ml-8.5 mb-3">
            Your Stats
          </h3>

          <div className="grid grid-cols-2 gap-10  mt-6.5 p-8">
            {stats.map((stat) => (
              <div
                key={stat.info}
                className=" w-25 h-21.5 flex pl-11 flex-col pt-4.75   items-center justify-center"
              >
                <h3 className="text-[24px]  font-semibold">{stat.count}</h3>
                <p className="text-[12px] whitespace-nowrap text-[#727272]">
                  {stat.info}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[14px] mt-17.25  text-[#727272] mt-6 mb-2">
            Subjects of Interest
          </p>
          <div className="flex gap-1 mt-3.75 flex-wrap">
            <button className="px-3 h-7 text-[#4D63D3] text-[12px] rounded-[20px] bg-[#DFF0FF]">
              Physics
            </button>
            <button className="px-3 h-7 text-[12px] text-[#278234] rounded-[20px] bg-[#DFF0FF]">
              Chemistry
            </button>
            <button className="px-3 h-7 text-[12px] text-[#1EB0B5] rounded-[20px] bg-[#DFF0FF]">
              Biology
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 min-w-0 font-roboto font-semibold ml-4 pl-13">
          <h2 className="text-[20px] font-semibold mb-11.5 ">
            Personal Information
          </h2>

          <form className="text-[14px] text-[#727272]">
            <div className="mb-5.25 ">
              <label className="block mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                className="w-121 h-9.75 px-3 rounded-lg border border-[#DBD9D9]"
                type="text"
                placeholder="Rimsha Latif"
              />
            </div>

            <div className="mb-5.25">
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="w-121 h-9.75 px-3 rounded-lg border border-[#DBD9D9]"
                type="email"
                placeholder="Smdesigner024@gmail.com"
              />
            </div>

            <div className="mb-5.25">
              <label className="block mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                className="w-121 h-9.75 px-3 rounded-lg border border-[#DBD9D9]"
                type="tel"
                placeholder="03190412670"
              />
            </div>

            <div>
              <label className="block mb-2" htmlFor="memberSince">
                Member Since
              </label>
              <input
                id="memberSince"
                className="w-121 h-9.75 px-3 rounded-lg border border-[#DBD9D9]"
                type="text"
                placeholder="September 2025"
                readOnly
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
