"use client";

import NotificationCard from "./NotificationCard";

const notifications = [
  {
    id: 6,
    title: "Your Free Plan Is Almost Full",
    description:
      "You've used 3 of 5 free labs this month. Upgrade to Premium for unlimited access and advanced features.",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: 7,
    title: "Premium Trial Offer",
    description:
      "Try Premium free for 7 days! Access all advanced labs, earn certificates, and track detailed analytics.",
    time: "10 minutes ago",
    read: false,
  },
];

export default function SubscriptionNotifications() {
  return <NotificationCard notifications={notifications} />;
}
