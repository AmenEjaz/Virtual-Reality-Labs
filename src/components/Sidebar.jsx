"use client";
import Logout from "../ReactPages/Logout";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DashboardIcon,
  LabIcon,
  LogoutIcon,
  NotificationIcon,
  SavedLabIcon,
  SettingIcon,
  SubscriptionIcon,
  UserIcon,
} from "../icons/Icons";

function Sidebar() {
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // const [selectedItem, setSelectedItem] = useState(null);

  const sidebarItems = [
    { label: "Dashboard", href: "/dashboard", Icon: DashboardIcon },
    { label: "Lab Catalog", href: "/lab-catalog", Icon: LabIcon },
    { label: "Saved Labs", href: "/saved-labs", Icon: SavedLabIcon },
    { label: "Subscription", href: "/subscription", Icon: SubscriptionIcon },
    { label: "Notification", href: "/notification", Icon: NotificationIcon },
    { label: "Profile", href: "/profile", Icon: UserIcon },
    { label: "Setting", href: "/setting", Icon: SettingIcon },
    { label: "Logout", href: "/logout", Icon: LogoutIcon },
  ];

  return (
    <>
      <div className="w-75.5 h-839 bg-[#F5FEFF] border border-[#FFFFFF1A] backdrop-filter: blur(0px) pt-21 pl-auto">
        {sidebarItems.map(({ label, href, Icon }, index) => {
          const isLogout = label === "Logout";

          // const isActive = isLogout
          //   ? false
          //   : href === "/"
          //     ? pathname === "/"
          //     : pathname === href || pathname.startsWith(`${href}/`);

          const isActive = isLogout
            ? false
            : href === "/dashboard"
              ? pathname === "/" || pathname === "/dashboard"
              : pathname === href || pathname.startsWith(`${href}/`);

          const itemClassName = `w-64.5 h-13 ${
            index === 0 ? "mt-20.75" : ""
          } mx-5.5 mb-1.5 flex items-center justify-start rounded-2xl border transition-colors duration-200 ${
            isActive
              ? "bg-[#0F766E] border-[#E8E8E8]"
              : "border-[#0F766E] bg-white"
          }`;

          const content = (
            <div className="ml-12 flex items-center ">
              <Icon isActive={isActive} />
              <p
                className={`font-roboto pl-2.5 font-medium text-[16px] ${
                  isActive ? "bg-[#0F766E]  text-[#FFFFFF]" : "text-[#0F766E]"
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

// "use client";

// import Logout from "../ReactPages/Logout";
// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   DashboardIcon,
//   LabIcon,
//   LogoutIcon,
//   NotificationIcon,
//   SavedLabIcon,
//   SettingIcon,
//   SubscriptionIcon,
//   UserIcon,
// } from "../icons/Icons";

// function Sidebar() {
//   const pathname = usePathname();
//   const [showLogoutModal, setShowLogoutModal] = useState(false);

//   const sidebarItems = [
//     { label: "Dashboard", href: "/dashboard", Icon: DashboardIcon },
//     { label: "Lab Catalog", href: "/lab-catalog", Icon: LabIcon },
//     { label: "Saved Labs", href: "/saved-labs", Icon: SavedLabIcon },
//     { label: "Subscription", href: "/subscription", Icon: SubscriptionIcon },
//     { label: "Notification", href: "/notification", Icon: NotificationIcon },
//     { label: "Profile", href: "/profile", Icon: UserIcon },
//     { label: "Setting", href: "/setting", Icon: SettingIcon },
//     { label: "Logout", href: "/logout", Icon: LogoutIcon },
//   ];

//   return (
//     <>
//       <div className="w-75.5 h-839 bg-[#F5FEFF] border border-[#FFFFFF1A] pt-21">
//         {sidebarItems.map(({ label, href, Icon }, index) => {
//           const isLogout = label === "Logout";

//           const isActive = isLogout
//             ? false
//             : pathname === href || pathname.startsWith(`${href}/`);

//           const itemClassName = `w-64.5 h-13 ${
//             index === 0 ? "mt-20.75" : ""
//           } mx-5.5 mb-1.5 flex items-center justify-start rounded-2xl border transition-colors duration-200 ${
//             isActive
//               ? "bg-[#0F766E] border-[#0F766E] text-white"
//               : "bg-white border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E]/10"
//           }`;

//           const content = (
//             <div className="ml-12 flex items-center">
//               <Icon isActive={isActive} />

//               <span className="font-roboto pl-2.5 font-medium text-[16px]">
//                 {label}
//               </span>
//             </div>
//           );

//           if (isLogout) {
//             return (
//               <button
//                 key={href}
//                 type="button"
//                 onClick={() => setShowLogoutModal(true)}
//                 className={itemClassName}
//               >
//                 {content}
//               </button>
//             );
//           }

//           return (
//             <Link
//               key={href}
//               href={href}
//               className={itemClassName}
//               aria-current={isActive ? "page" : undefined}
//             >
//               {content}
//             </Link>
//           );
//         })}
//       </div>

//       {showLogoutModal && (
//         <Logout
//           onCancel={() => setShowLogoutModal(false)}
//           onConfirm={() => {
//             setShowLogoutModal(false);
//             // Add your authentication sign-out logic here.
//           }}
//         />
//       )}
//     </>
//   );
// }

// export default Sidebar;
