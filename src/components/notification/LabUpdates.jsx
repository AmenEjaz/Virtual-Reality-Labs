"use client";

import NotificationCard from "./NotificationCard";

const notifications = [
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
      "The Chemical Bonding Explorer has been updated with new molecular visualization tools and interactive quizzes.",
    time: "25 minutes ago",
    read: false,
  },
  {
    id: 3,
    title: "New Subject: Environment Science",
    description:
      "We're launching Environmental Science labs next month! Be the first to try climate change and ecosystem simulations.",
    time: "1 hour ago",
    read: false,
  },
];

export default function LabUpdates() {
  return <NotificationCard notifications={notifications} />;
}
