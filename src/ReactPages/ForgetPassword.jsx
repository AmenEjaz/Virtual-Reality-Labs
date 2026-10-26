"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FormMailIcon,
  ForgetPassIcon,
  WhiteBackArrowIcon,
} from "@/icons/Icons";

function ForgetPassword() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  // const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    router.push("/dashboard");
  };

  return (
    <div className="w-360 h-231 font-roboto bg-[linear-gradient(359.97deg,#000000_-18.04%,#0F766E_106.22%)] pt-24 pl-25 flex gap-28">
      <Image
        className="w-150 h-150 object-contain"
        src="/login.png"
        alt="VR Labs Login"
        width={600}
        height={600}
      />

      <div>
        <div
          className="w-md  h-121.5 border pt-8 flex flex-col items-center border-[#FFFFFF1A] rounded-2xl backdrop-filter: blur(0px)

shadow-[4px_10px_5.3px_0px_#00000040] "
        >
          {" "}
          <ForgetPassIcon />
          <h1 className="text-[30px] mt-6 leading-9 text-center font-bold text-[#F3F4F6]">
            Forgot Password? 🔒{" "}
          </h1>
          <p className="mt-2 text-center text-white  text-[16px]">
            No worries! Enter your email and we will send you reset instructions
          </p>
          <form onSubmit={handleLogin} className="pl-8 mt-8 text-[14px]">
            <label htmlFor="email" className="text-white">
              Email Address
            </label>

            <div className="relative mt-2 mb-5">
              <span className="absolute left-3 top-4 text-[#9CA3AF]">
                <FormMailIcon />
              </span>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[#374151] pl-11 top-4 pr-4 w-96 h-11.5 bg-white rounded-xl"
                placeholder="Enter your registered email"
                required
              />
            </div>

            <button
              type="button"
              onClick={() => router.push("/reset-code")}
              className="mt-6 w-96 h-12 rounded-xl border border-[#D1D5DB] text-[#0F766E] font-semibold bg-white flex items-center justify-center gap-2"
            >
              Send Reset Code
            </button>

            <p className="mt-6 items-center justify-center text-[14px] flex gap-2 text-white text-center">
              <WhiteBackArrowIcon />
              Back to <Link href="/login">Login</Link>
            </p>
          </form>
        </div>
        <p className="text-[14px] mt-8 text-center text-white">
          © 2024 Your Education Platform. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default ForgetPassword;
