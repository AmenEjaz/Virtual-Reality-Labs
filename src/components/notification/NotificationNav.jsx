"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function NotificationNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("filter") || "all";

  const navItems = [
    { label: "8 All", value: "all", href: "/notification" },
    { label: "3 Unread", value: "unread", href: "/notification?filter=unread" },
    {
      label: "Lab Updates",
      value: "updates",
      href: "/notification?filter=updates",
    },
    {
      label: "Achievements",
      value: "achievements",
      href: "/notification?filter=achievements",
    },
    {
      label: "Subscription",
      value: "subscription",
      href: "/notification?filter=subscription",
    },
    { label: "System", value: "system", href: "/notification?filter=system" },
  ];

  return (
    <div>
      {" "}
      <h3 className="text-[36px] font-semibold">Notifications</h3>{" "}
      <p className="text-[14px] text-[#727272] font-semibold mt-2">
        3 unread notifications{" "}
      </p>
      {/* Navbar */}
      <div className="flex flex-row">
        <nav className="mt-6 flex w-fit  flex-nowrap items-center font-roboto  bg-white text-[14px] font-semibold">
          {navItems.map((item) => {
            const isActive =
              pathname === "/notification" && activeTab === item.value;

            return (
              <Link
                key={item.value}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-9.75 items-center justify-center whitespace-nowrap px-8 transition-colors duration-200 ${
                  isActive
                    ? " bg-[#0F766E] text-white"
                    : "text-[#727272] hover:bg-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-62 ">
          <button
            type="button"
            // onClick={markAllAsRead}
            className=" mt-6 bg-[#06B6D426] px-4 py-2 text-[14px] font-medium whitespace-nowrap text-[#0F766E] "
          >
            Mark All Read
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationNav;
