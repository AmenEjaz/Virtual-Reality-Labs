"use client";

// import { useState } from "react";
// import NotificationNav from "../../../src/components/notification/NotificationNav";
// import AllNotifications from "../../../src/components/notification/AllNotifications";
// export default function NotificationPage() {
//   return (
//     <div className="min-h-screen bg-[#F5FEFF] pl-15 sm:p-6">
//       <NotificationNav />
//       <AllNotifications />
//     </div>
//   );
// }
"use client";

import { useSearchParams } from "next/navigation";
import AllNotifications from "../../../src/components/notification/AllNotifications";
import UnreadNotifications from "../../../src/components/notification/UnreadNotifications";
import NotificationNav from "../../../src/components/notification/NotificationNav";
import LabUpdates from "../../../src/components/notification/LabUpdates";
import Achievements from "../../../src/components/notification/Achievements";
import SystemNotifications from "../../../src/components/notification/SystemNotifications";
import SubscriptionNotifications from "../../../src/components/notification/SubscriptionNotifications";

export default function NotificationPage() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  const components = {
    all: <AllNotifications />,
    unread: <UnreadNotifications />,
    updates: <LabUpdates />,
    achievements: <Achievements />,
    subscription: <SubscriptionNotifications />,
    system: <SystemNotifications />,
  };

  return (
    <div className="w-full">
      <NotificationNav />
      {components[filter] || <AllNotifications />}
    </div>
  );
}
