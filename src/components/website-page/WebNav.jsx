"use client";
// import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
function WebNav() {
  //   const pathname = usePathname();
  //   const isActive = pathname === href;
  return (
    <div className="w-360 h-20 border border-[#E0E0E0] shadow-[0px_0px_4px_0px_#00000040]  flex flex-row  font-roboto">
      <div className="flex flex-row gap-6.75 mt-7.5 ml-113 text-[14px]">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#lab">Virtual Lab</Link>
        <Link href="contact">Contact</Link>
      </div>
      <div className="flex flex-row gap-3.5 text-[14px] mt-5.5 ml-96">
        <button className="text-[#0F766E] border-[#0F766E] border w-19.75 h-8.75">
          Log In
        </button>
        <button className="text-white bg-[#0F766E] border w-23 h-8.75">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default WebNav;
