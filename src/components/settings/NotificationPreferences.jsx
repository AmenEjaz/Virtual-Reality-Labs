// import React from "react";

// const notifications = [
//   {
//     title: "Email Notifications",
//     info: "Receive notifications via email",
//   },
//   {
//     title: "Push Notifications",
//     info: "Receive push notifications in your browser",
//   },
//   {
//     title: "Lab Updates ",
//     info: "Get notified when new labs are available",
//   },
//   {
//     title: "Achievement Alerts",
//     info: "Get notified when you earn achievements",
//   },
//   {
//     title: "Weekly Newsletter",
//     info: "Weekly digest of new content and features",
//   },
//   {
//     title: "Learning Tips ",
//     info: "Receive helpful VR lab tips and tricks",
//   },
// ];

// function NotificationPreferences() {
//   return (
//     <div>
//       <div className="flex-1 min-w-0 font-roboto font-semibold ml-4 pl-13">
//         <h2 className="text-[20px] font-semibold  ">
//           Notification Preferences
//         </h2>
//         <p className="text-[14px] #727272 font-semibold mb-10.5 ">
//           Choose how and when you want to be notified.{" "}
//         </p>

//         <div className="mt-10.5">
//           {notifications.map((notification) => {
//             return (
//               <div className="flex">
//                 <div>
//                   <h3 className="text-[14px] ">{notification.title}</h3>
//                   <p className="text-[12px] text-[#AEAEAE] mt-1 ">
//                     {notification.title}
//                   </p>
//                 </div>

//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NotificationPreferences;

import React, { useState } from "react";

const notifications = [
  { title: "Email Notifications", info: "Receive notifications via email" },
  {
    title: "Push Notifications",
    info: "Receive push notifications in your browser",
  },
  { title: "Lab Updates", info: "Get notified when new labs are available" },
  {
    title: "Achievement Alerts",
    info: "Get notified when you earn achievements",
  },
  {
    title: "Weekly Newsletter",
    info: "Weekly digest of new content and features",
  },
  { title: "Learning Tips", info: "Receive helpful VR lab tips and tricks" },
];

function NotificationPreferences() {
  const [enabled, setEnabled] = useState(notifications.map(() => true));

  return (
    <div className="flex-1 min-w-0 font-roboto ml-4 pl-13">
      <h2 className="text-[20px] font-semibold">Notification Preferences</h2>

      <p className="text-[14px] text-[#727272] mb-10.5">
        Choose how and when you want to be notified.
      </p>

      <div className="mt-10.5">
        {notifications.map((notification, index) => (
          <div
            key={notification.title}
            className="flex items-center justify-between w-full py-4"
          >
            <div>
              <h3 className="text-[14px] font-semibold">
                {notification.title}
              </h3>
              <p className="text-[12px] text-[#AEAEAE] mt-1">
                {notification.info}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setEnabled((prev) =>
                  prev.map((value, i) => (i === index ? !value : value)),
                )
              }
              aria-label={`Toggle ${notification.title}`}
              aria-pressed={enabled[index]}
              className={`w-11 h-6 shrink-0 rounded-full flex items-center px-1 transition-colors ${
                enabled[index] ? "bg-[#0F766E]" : "bg-[#D1D5DB]"
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  enabled[index] ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationPreferences;
