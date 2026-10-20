"use client";

import { useState } from "react";
import NotificationCard from "./NotificationCard";

const initialNotifications = [
  {
    id: 1,
    title: "New Lab Available",
    description:
      "Quantum Mechanics Intro has been added to the Physics premium collection. Start exploring now!",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: 2,
    title: "Lab Updated: Chemical Bonding",
    description:
      "Chemical Bonding has been updated with new content and interactive experiments.",
    time: "25 minutes ago",
    read: false,
  },
  {
    id: 3,
    title: "New Subject",
    description:
      "A new subject has been added to your learning catalog. Explore it now!",
    time: "1 hour ago",
    read: false,
  },
];

export default function UnreadNotifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) =>
    setNotifications((current) =>
      current.map((item) => (item.id === id ? { ...item, read: true } : item)),
    );

  return (
    <NotificationCard
      notifications={notifications.filter((item) => !item.read)}
      onMarkAsRead={markAsRead}
    />
  );
}
