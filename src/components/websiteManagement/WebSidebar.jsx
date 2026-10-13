"use client";

import Link from "next/link";
import { HomeIcon } from "../../Icons/Icons";

const sidebarItems = [
  {
    name: "Home Page",
    path: "/website-management/homepage",
    sections: "9 Sections",
  },
  {
    name: "Privacy Policy",
    path: "/website-management/privacy-policy",
    sections: "9 Sections",
  },
  {
    name: "Terms & Conditions",
    path: "/website-management/terms-and-conditions",
    sections: "9 Sections",
  },
];

function WebSidebar({ selectedPage }) {
  return (
    <aside
      className="w-80 min-h-[calc(100vh-64px)] p-4 font-roboto bg-white
      shadow-[0px_4px_6px_-1px_#0000001A]
      border border-[#E9D5FF80]"
    >
      <div className="flex flex-col gap-4">
        {sidebarItems.map((item) => {
          const isActive = selectedPage.path === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`w-full h-21 flex items-center rounded-2xl border ${
                isActive
                  ? "bg-white border-[#0F766E]"
                  : "bg-white border-[#0F766E4A]"
              }`}
            >
              <div className="flex items-center ml-4 w-72">
                <div
                  className={`w-8 h-8 border border-[#0F766E] rounded-xl flex items-center justify-center ${
                    isActive ? "bg-[#0F766E]" : "bg-[#F0FDFA]"
                  }`}
                >
                  <HomeIcon isActive={isActive} />
                </div>

                <div className="ml-3 flex flex-col justify-center">
                  <p className="font-roboto whitespace-nowrap text-[#052967] font-semibold text-[14px] leading-5">
                    {item.name}
                  </p>

                  <div className="mt-1 flex items-center gap-3">
                    <span className="px-2 h-6 flex items-center rounded-xl bg-[#DBEAFE] text-[12px] text-[#2563EB]">
                      Dynamic
                    </span>

                    <span className="text-[12px] text-[#6B7280]">
                      {item.sections}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export default WebSidebar;
