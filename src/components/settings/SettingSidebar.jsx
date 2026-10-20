"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserIcon, PrivacyIcon, NotificationIcon } from "../../icons/Icons";

const options = [
  { icon: UserIcon, name: "Account", href: "/setting/account" },
  //   {
  //     icon: NotificationIcon,
  //     name: "Notification",
  //     href: "/setting/notification",
  //   },
  { icon: PrivacyIcon, name: "Privacy", href: "/setting/privacy" },
];

export default function SettingSidebar() {
  const pathname = usePathname();

  return (
    <div className="pt-6.25 pl-10 mt-3 ml-5.25  ">
      <h2 className="text-[36px] leading-[108%] font-semibold">Settings</h2>
      <div className="flex lfex-row">
        <p className="text-[14px] leading-[133%] text-[#727272]  mt-1.5">
          Manage your account preferences and configuration.{" "}
        </p>
      </div>
      <div className="ml-10 mt-11 w-[371px] h-[277px] pl-[73px] pt-13">
        <div className="flex flex-col gap-6 ">
          {options.map((option) => {
            const active = pathname === option.href;
            const Icon = option.icon;

            return (
              <Link
                key={option.name}
                href={option.href}
                className={`flex items-center gap-1.5 mb-2  text-[16px] ${
                  active ? "text-[#3060B9]" : "text-[#727272]"
                }`}
              >
                <Icon />
                {option.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
