"use client";

import NotificationCard from "./NotificationCard";

const notifications = [
  {
    id: 4,
    title: "Achievement Unlocked",
    description:
      "You've completed 12 labs! Keep up the amazing work. Next milestone: 25 labs for the Silver Badge.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 5,
    title: "Perfect Score",
    description:
      "You scored 100% on the Cell Division & Mitosis final assessment. Outstanding performance!",
    time: "3 hours ago",
    read: false,
  },
];

export default function Achievements() {
  return <NotificationCard notifications={notifications} />;
}
