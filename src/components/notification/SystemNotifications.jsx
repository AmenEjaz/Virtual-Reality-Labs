"use client";

import NotificationCard from "./NotificationCard";

const notifications = [
  {
    id: 8,
    title: "Welcome to VR Labs",
    description:
      "Welcome aboard! Start by exploring our free labs. We recommend beginning with States of Matter or Circuit Basics.",
    time: "10 minutes ago",
    read: false,
  },
];

export default function SystemNotifications() {
  return <NotificationCard notifications={notifications} />;
}
