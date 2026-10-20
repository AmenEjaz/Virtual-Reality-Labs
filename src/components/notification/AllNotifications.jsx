"use client";

import { useState } from "react";
import Link from "next/link";
import { Crown } from "../../icons/Icons";

const initialNotifications = [
  {
    id: 1,
    title: "New Lab Available",
    description:
      "Quantum Mechanics Intro has been added to the Physics premium collection. Start exploring now!",
    time: "10 minutes ago",
    category: "updates",
  },
  {
    id: 2,
    title: "Achievement Unlocked!",
    description:
      "You've completed 12 labs! Keep up the amazing work. Next milestone: 25 labs for the Silver Badge.",
    time: "10 minutes ago",
    category: "achievements",
  },
  {
    id: 3,
    title: "Your Free Plan is Almost Full",
    description:
      "You've used 3 out of 5 free labs this month. Upgrade to Premium for unlimited access and advanced features.",
    time: "1 day ago",
    category: "subscription",
  },
  {
    id: 4,
    title: "Lab Updated: Chemical Bonding",
    description:
      "The Chemical Bonding Explorer has been updated with new molecular visualization tools and interactive quizzes.",
    time: "1 day ago",
    category: "updates",
  },
  {
    id: 5,
    title: "Welcome to VR Labs!",
    description:
      "Welcome aboard! Start by exploring our free labs. We recommend beginning with States of Matter or Circuit Basics.",
    time: "1 day ago",
    category: "system",
  },
];

export default function AllNotifications() {
  const [notifications, setNotifications] = useState(
    initialNotifications.map((item) => ({
      ...item,
      read: false,
    })),
  );

  const [filter, setFilter] = useState("all");

  const unreadCount = notifications.filter((item) => !item.read).length;

  const filteredNotifications = notifications.filter((item) => {
    if (filter === "all") return true;
    if (filter === "unread") return !item.read;
    return item.category === filter;
  });

  const markAsRead = (id) => {
    setNotifications((current) =>
      current.map((item) => (item.id === id ? { ...item, read: true } : item)),
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((item) => ({ ...item, read: true })),
    );
  };

  return (
    <section className="w-full mt-10">
      <div className="flex flex-col gap-4">
        {filteredNotifications.map((item) => (
          <article
            key={item.id}
            className={`flex min-h-[103px] mt-9  w-full items-start gap-6.5 rounded-[16px] bg-white px-4 py-5 sm:px-6 ${
              item.read ? "opacity-70" : ""
            }`}
          >
            <div className="flex h-11.25 w-14 shrink-0 items-center justify-center  bg-[#06B6D430] text-[20px] text-[#111827]">
              <Crown />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-[20px] font-semibold leading-[108%] ">
                {item.title}
              </h3>

              <p className="mt-0.5 text-[14px] leading-[133%] text-[#727272]">
                {item.description}
              </p>

              <div className="mt-5.5  flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link
                  href="/lab-catalog"
                  className="inline-flex h-8.5 w-27.25 items-center justify-center rounded-md bg-[#0F766E] px-4 text-[11px] font-medium text-white hover:bg-[#0B625C]"
                >
                  View Lab
                </Link>

                {!item.read && (
                  <button
                    type="button"
                    onClick={() => markAsRead(item.id)}
                    className="text-[14px] text-[#727272] hover:text-[#0F766E] ml-2"
                  >
                    Mark as read
                  </button>
                )}

                {item.read && (
                  <span className="text-[14px] text-[#0F766E]">Read</span>
                )}
              </div>
            </div>

            <span className="shrink-0 pt-1 text-right text-[14px] text-[#727272]">
              {item.time}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
