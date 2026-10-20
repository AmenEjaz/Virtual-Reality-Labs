"use client";

import Link from "next/link";
import { Crown } from "../../icons/Icons";

export default function NotificationCard({ notifications, onMarkAsRead }) {
  return (
    <section className="mt-10 w-full">
      <div className="flex flex-col gap-4">
        {notifications.map((item) => (
          <article
            key={item.id}
            className={`mt-9 flex min-h-[103px] w-full items-start gap-6.5 rounded-[16px] bg-white px-4 py-5 sm:px-6 ${
              item.read ? "opacity-70" : ""
            }`}
          >
            <div className="flex h-11.25 w-14 shrink-0 items-center justify-center bg-[#06B6D430] text-[20px] text-[#111827]">
              <Crown />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-[20px] font-semibold leading-[108%]">
                {item.title}
              </h3>

              <p className="mt-0.5 text-[14px] leading-[133%] text-[#727272]">
                {item.description}
              </p>

              <div className="mt-5.5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link
                  href="/lab-catalog"
                  className="inline-flex h-8.5 w-27.25 items-center justify-center rounded-md bg-[#0F766E] px-4 text-[11px] font-medium text-white hover:bg-[#0B625C]"
                >
                  View Lab
                </Link>

                {!item.read ? (
                  <button
                    type="button"
                    onClick={() => onMarkAsRead?.(item.id)}
                    className="ml-2 text-[14px] text-[#727272] hover:text-[#0F766E]"
                  >
                    Mark as read
                  </button>
                ) : (
                  <span className="ml-2 text-[14px] text-[#0F766E]">Read</span>
                )}
              </div>
            </div>

            <span className="shrink-0 pt-1 text-right text-[14px] text-[#727272]">
              {item.time}
            </span>
          </article>
        ))}

        {notifications.length === 0 && (
          <p className="mt-9 text-center text-[14px] text-[#727272]">
            No notifications found.
          </p>
        )}
      </div>
    </section>
  );
}
