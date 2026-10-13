// import { NavLink } from "react-router-dom";

// function AcademicNav() {
//   return (
//     <div className="mt-14.25 flex flex-row mb-6">
//       <NavLink
//         to="/academic-management/manage-grades"
//         className={({ isActive }) =>
//           `ml-6 w-70.75 h-12  text-[20px] font-medium flex items-center justify-center
//     ${isActive ? "bg-[#0F766E] text-[#F6F6F6]" : "bg-[#F6F6F6] text-[#000000]"}`
//         }
//       >
//         Manage Grade
//       </NavLink>
//       <NavLink
//         to="/academic-management/manage-subjects"
//         className={({ isActive }) =>
//           `w-70.75 h-12  text-[20px] font-medium flex items-center justify-center
//     ${isActive ? "bg-[#0F766E] text-[#F6F6F6]" : "bg-[#F6F6F6] text-[#000000]"}`
//         }
//       >
//         Manage Subjects
//       </NavLink>
//       <NavLink
//         to="/academic-management/manage-chapters"
//         className={({ isActive }) =>
//           `w-70.75 h-12   text-[20px] font-medium flex items-center justify-center
//     ${isActive ? "bg-[#0F766E] text-[#F6F6F6]" : "bg-[#F6F6F6] text-[#000000]"}`
//         }
//       >
//         Manage Chapters
//       </NavLink>
//     </div>
//   );
// }

// export default AcademicNav;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function AcademicNav() {
  const pathname = usePathname();

  return (
    <div className="mt-14.25 flex flex-row mb-6">
      <Link
        href="/academic-management/manage-grades"
        className={`ml-6 w-70.75 h-12 text-[20px] font-medium flex items-center justify-center
          ${
            pathname === "/academic-management/manage-grades"
              ? "bg-[#0F766E] text-[#F6F6F6]"
              : "bg-[#F6F6F6] text-[#000000]"
          }`}
      >
        Manage Grade
      </Link>

      <Link
        href="/academic-management/manage-subjects"
        className={`w-70.75 h-12 text-[20px] font-medium flex items-center justify-center
          ${
            pathname === "/academic-management/manage-subjects"
              ? "bg-[#0F766E] text-[#F6F6F6]"
              : "bg-[#F6F6F6] text-[#000000]"
          }`}
      >
        Manage Subjects
      </Link>

      <Link
        href="/academic-management/manage-chapters"
        className={`w-70.75 h-12 text-[20px] font-medium flex items-center justify-center
          ${
            pathname === "/academic-management/manage-chapters"
              ? "bg-[#0F766E] text-[#F6F6F6]"
              : "bg-[#F6F6F6] text-[#000000]"
          }`}
      >
        Manage Chapters
      </Link>
    </div>
  );
}

export default AcademicNav;
