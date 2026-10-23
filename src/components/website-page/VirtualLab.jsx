// "use client";

// import React from "react";
// import FreePremium from "../../../public/FreePremium.png";
// import { Chapters, Lab, NextArrow } from "../../icons/Icons";

// const labs = [
//   {
//     pic: FreePremium,
//     subject: "Physics",
//     info: "Explore mechanics, electromagnetism, optics, and thermodynamics through immersive VR experiments.",
//     labs: "80 Labs",
//     chapters: "12 Chapters",
//   },

//   {
//     pic: FreePremium,
//     subject: "Chemistry",
//     info: "Mix compounds, observe reactions, and master molecular structures in a safe virtual lab environment.",
//     labs: "80 Labs",
//     chapters: "12 Chapters",
//   },
//   {
//     pic: FreePremium,
//     subject: "Biology",
//     info: "Dissect organisms, explore cellular biology, and study ecosystems with interactive 3D models.",
//     labs: "80 Labs",
//     chapters: "12 Chapters",
//   },
// ];

// function VirtualLab() {
//   //   const router = useRouter();
//   //   const searchParams = useSearchParams();

//   return (
//     <div>
//       <section id="lab" className="w-360 h-182.5 bg-[#E8E8E84D] pt-6">
//         <button className="w-27.25 h-6.5 rounded-lg border border-[#E4E4E4] bg-[#0F766E33] flex flex-row">
//           <div className="w-1.5 h-1.5 bg-[#0F766E] rounded-full"></div>
//           <p className="text-[10px] text-[#474747]">Subjects</p>
//         </button>
//         <h1 className="text-[48px] text-[#0F766E] font-bold mt-4.75">
//           Explore irtual Science Labs
//         </h1>
//         <p className="text-[14px] mt-2 ml-82.75">
//           Choose from three comprehensive subjects, each packed with interactive
//           experiments aligned to international curricula.
//         </p>

//         {/* Cards */}
//         <div className="flex flex-row gap-7 ml-33.25">
//           {labs.map((lab) => {
//             <div className="w-93 h-110.5 rounded-lg border border-[#D9D9D9] shadow-[0px_4px_4px_0px_#00000040]">
//               <p className="w-93 h-59.75">{lab.pic} </p>
//               <p className="text-[16px]">{lab.subject}</p>
//               <p className="text-[14px]">{lab.info}</p>
//               <div className="flex gap-3 mt-3.25">
//                 <div className="flex gap-1">
//                   <Chapters />
//                   <p className="text-[14px] text-[#727272]">{lab.chapters}</p>
//                 </div>
//                 <div className="flex gap-1">
//                   <Lab />
//                   <p className="text-[14px] text-[#727272]">{lab.labs}</p>
//                 </div>
//               </div>
//               <div className="flex mt-3.75 ">
//                 <p className="text-[14px] text-[#3189BF]          ">
//                   Explore {lab.subject} Labs
//                 </p>
//                 <NextArrow />
//               </div>{" "}
//             </div>;
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default VirtualLab;

"use client";

import React from "react";
import Image from "next/image";
import FreePremium from "../../../public/FreePremium.png";
import { Chapters, Lab, NextArrow } from "../../icons/Icons";

const labs = [
  {
    pic: FreePremium,
    subject: "Physics",
    info: "Explore mechanics, electromagnetism, optics, and thermodynamics through immersive VR experiments.",
    labs: "80 Labs",
    chapters: "12 Chapters",
  },
  {
    pic: FreePremium,
    subject: "Chemistry",
    info: "Mix compounds, observe reactions, and master molecular structures in a safe virtual lab environment.",
    labs: "80 Labs",
    chapters: "12 Chapters",
  },
  {
    pic: FreePremium,
    subject: "Biology",
    info: "Dissect organisms, explore cellular biology, and study ecosystems with interactive 3D models.",
    labs: "80 Labs",
    chapters: "12 Chapters",
  },
];

function VirtualLab() {
  return (
    <div>
      <section id="lab" className="w-360 h-182.5 bg-[#E8E8E84D] mb-23">
        <button className="w-27.25 h-6.5 rounded-lg ml-166.5 border border-[#E4E4E4] bg-[#0F766E33] flex flex-row items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#0F766E] rounded-full"></div>
          <p className="text-[10px] text-[#474747]">Subjects</p>
        </button>

        <h1 className="text-[48px] text-[#0F766E] ml-98 font-bold mt-2">
          Explore Virtual Science Labs
        </h1>

        <p className="text-[14px] mt-2 ml-82.75 mb-12">
          Choose from three comprehensive subjects, each packed with interactive
          experiments aligned to international curricula.
        </p>

        <div className="flex flex-row gap-7 ml-33.25">
          {labs.map((lab) => (
            <div
              key={lab.subject}
              className="w-93 h-110.5 rounded-lg border border-[#D9D9D9] shadow-[0px_4px_4px_0px_#00000040]"
            >
              <div className="relative w-full h-59.75">
                <Image
                  src={lab.pic}
                  alt={`${lab.subject} virtual lab`}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-5.75">
                <p className="text-[16px] font-semibold">{lab.subject}</p>
                <p className="text-[14px] mt-2">{lab.info}</p>

                <div className="flex gap-3 mt-3.25">
                  <div className="flex items-center justify-center gap-2">
                    <Chapters />
                    <p className="text-[14px] text-[#727272]">{lab.chapters}</p>
                  </div>

                  <div className="flex gap-2 ml-3 items-center justify-center">
                    <Lab />
                    <p className="text-[14px] text-[#727272]">{lab.labs}</p>
                  </div>
                </div>

                <div className="flex mt-3.75">
                  <p className="text-[14px] text-[#3189BF]">
                    Explore {lab.subject} Labs
                  </p>
                  <NextArrow />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default VirtualLab;
