"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DashboardIcon,
  AcademicIcon,
  LabIcon,
  UserIcon,
  ReportIcon,
  ExportReportIcon,
  SubscriptionIcon,
  ContactIcon,
  NotificationIcon,
  SettingIcon,
  LogoutIcon,
  MetaDataIcon,
} from "../Icons/Icons";

import Logout from "../ReactPages/Logout";

function Sidebar() {
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    { label: "Dashboard", href: "/", Icon: DashboardIcon },
    {
      label: "Academic Management",
      href: "/academic-management",
      Icon: AcademicIcon,
    },
    { label: "Lab Management", href: "/lab-management", Icon: LabIcon },
    {
      label: "Metadata Management",
      href: "/metadata-management",
      Icon: MetaDataIcon,
    },
    { label: "User Management", href: "/user-management", Icon: UserIcon },
    {
      label: "Reports & Analytics",
      href: "/reports-and-analytics",
      Icon: ReportIcon,
    },
    {
      label: "Export Reports",
      href: "/export-reports",
      Icon: ExportReportIcon,
    },
    { label: "Subscription", href: "/subscription", Icon: SubscriptionIcon },
    { label: "Payment Logs", href: "/payment-logs", Icon: SubscriptionIcon },
    { label: "Contact Messages", href: "/contact-messages", Icon: ContactIcon },
    { label: "Notification", href: "/notification", Icon: NotificationIcon },
    { label: "Platform Setting", href: "/platform-setting", Icon: SettingIcon },
    {
      label: "Website Management",
      href: "/website-management",
      Icon: SettingIcon,
    },
    { label: "Logout", href: "/logout", Icon: LogoutIcon },
  ];

  return (
    <>
      <div className="w-75.5 h-[3886px] text-white flex flex-col gap-1.25 border bg-[linear-gradient(108.86deg,#0F766E_-58.74%,#000000_164.53%)] border-[#FFFFFF1A]">
        {menuItems.map(({ label, href, Icon }, index) => {
          const isLogout = label === "Logout";

          const isActive = isLogout
            ? false
            : href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);

          const itemClassName = `w-64.5 h-13 ${
            index === 0 ? "mt-20.75" : ""
          } mx-5.5 flex items-center justify-start rounded-2xl border ${
            isActive
              ? "bg-white border-white"
              : "border-[#E8E8E8] bg-transparent"
          }`;

          const content = (
            <div className="ml-6 flex items-center">
              <Icon isActive={isActive} />
              <p
                className={`font-roboto pl-2 font-medium text-[16px] ${
                  isActive
                    ? "bg-[linear-gradient(180deg,#0F766E_0%,#000000_100%)] bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                {label}
              </p>
            </div>
          );

          if (isLogout) {
            return (
              <button
                key={href}
                type="button"
                onClick={() => setShowLogoutModal(true)}
                className={itemClassName}
              >
                {content}
              </button>
            );
          }

          return (
            <Link key={href} href={href} className={itemClassName}>
              {content}
            </Link>
          );
        })}
      </div>

      {showLogoutModal && (
        <Logout
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={() => {
            setShowLogoutModal(false);
            // Add your authentication sign-out logic here.
          }}
        />
      )}
    </>
  );
}

export default Sidebar;
