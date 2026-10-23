// import React from "react";
// import Image from "next/image";
// import { BNextArrow, NextArrow } from "@/icons/Icons";

// function StartExploring() {
//   return (
//     <div className="relative ml-0 flex h-106.5 w-361.25 items-center justify-center overflow-hidden bg-[#0F766E]">
//       {/* Background image
//       <Image
//         className="absolute inset-0 h-full w-full object-cover"
//         src="/bgExplore.png"
//         alt=""
//         width={1440}
//         height={426}
//       /> */}
//       {/* Background image */}
//       <Image
//         className="absolute inset-10  -left-65 h-full -m-x-0 w-full object-cover scale-65 opacity-30"
//         // className="absolute -bottom-70 -left-10 h-full w-full scale-85 object-cover object-bottom"
//         src="/bgExplore.png"
//         alt=""
//         width={1440}
//         height={426}
//       />

//       {/* Fade upward from the bottom */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0F766E] via-[#0F766]/40 to-transparent" />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-[#0F766E]">
//         <h2 className="text-[40px] font-semibold">
//           Start Exploring Virtual Science Labs Today
//         </h2>

//         <p className="mt-8.75 text-[14px]">
//           Join 125,000+ students and 850+ schools already using VR Labs. Start
//           your free 14-day trial — no credit card required.
//         </p>

//         <div className="mt-19 flex gap-3">
//           <button className="flex h-11 w-[202px] items-center justify-center gap-3 bg-white text-[14px] text-black">
//             Start Free Trial{" "}
//             <span>
//               <BNextArrow />
//             </span>
//           </button>

//           <button className="h-11 w-[205px] bg-white text-[14px] text-black">
//             Sign Up Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StartExploring;

import React from "react";
import Image from "next/image";
import { BNextArrow } from "@/icons/Icons";

function StartExploring() {
  return (
    <div className="relative ml-0 flex h-106.5 w-361.25 items-center justify-center overflow-hidden bg-[#0F766E]">
      {/* Left background image */}
      <Image
        className="absolute inset-y-10 -left-65 h-full w-full scale-65 object-cover opacity-30"
        src="/bgExplore.png"
        alt=""
        width={1440}
        height={426}
      />

      {/* Right background image */}
      <Image
        className="absolute inset-y-10 -right-65 h-full w-full scale-65 object-cover opacity-30"
        src="/bgExplore.png"
        alt=""
        width={1440}
        height={426}
      />

      {/* Fade upward from the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F766E] via-[#0F766E]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white bg-[#0F766E]">
        <h2 className="text-[40px] font-semibold">
          Start Exploring Virtual Science Labs Today
        </h2>

        <p className="mt-8.75 text-[14px]">
          Join 125,000+ students and 850+ schools already using VR Labs. Start
          your free 14-day trial — no credit card required.
        </p>

        <div className="mt-19 flex gap-3">
          <button className="flex h-11 w-[202px] items-center justify-center gap-3 bg-white text-[14px] text-black">
            Start Free Trial
            <BNextArrow />
          </button>

          <button className="h-11 w-[205px] bg-white text-[14px] text-black">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartExploring;
