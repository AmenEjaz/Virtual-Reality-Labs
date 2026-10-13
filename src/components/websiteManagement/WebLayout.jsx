"use client";

import { usePathname } from "next/navigation";
import WebNav from "./WebNav";
import WebSidebar from "./WebSidebar";

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
    path: "/website-management/conditions",
    sections: "9 Sections",
  },
];

function WebLayout({ children }) {
  const pathname = usePathname();

  const selectedPage =
    sidebarItems.find((item) => item.path === pathname) || sidebarItems[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <WebNav selectedPage={selectedPage} />

      <div className="flex flex-row">
        <WebSidebar selectedPage={selectedPage} />

        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}

export default WebLayout;
