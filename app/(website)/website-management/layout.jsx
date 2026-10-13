"use client";

import { usePathname } from "next/navigation";
import WebNav from "../../../src/components/websiteManagement/WebNav";
import WebSidebar from "../../../src/components/websiteManagement/WebSidebar";

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

export default function WebsiteManagementLayout({ children }) {
  const pathname = usePathname();

  const selectedPage =
    sidebarItems.find((item) => item.path === pathname) || sidebarItems[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <WebNav selectedPage={selectedPage} />

      <div className="flex flex-row">
        <WebSidebar selectedPage={selectedPage} />

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
