"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormMailIcon, LockIcon, EyeIcon, GoogleIcon } from "@/icons/Icons";

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    router.push("/dashboard");
    // try {
    //   const response = await fetch("/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await response.json();

    //   if (!response.ok) {
    //     setError(data.message || "Invalid email or password.");
    //     return;
    //   }

    //   router.push("/dashboard");
    // } catch {
    //   setError("Unable to log in. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
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
          className="w-md  h-167 border border-[#FFFFFF1A] rounded-2xl backdrop-filter: blur(0px)

shadow-[4px_10px_5.3px_0px_#00000040] "
        >
          <h1 className="text-[30px] mt-10 text-center font-bold text-[#F3F4F6]">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-white ml-22 text-[16px]">
            Login to continue your application
          </p>

          <form onSubmit={handleLogin} className="pl-8 mt-8 text-[14px]">
            <label htmlFor="email" className="text-white">
              Email
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
                placeholder="Enter your email"
                required
              />
            </div>

            <label htmlFor="password" className="text-white">
              Password
            </label>

            <div className="relative mt-2 mb-5">
              <span className="absolute left-3 top-4 text-[#9CA3AF]">
                <LockIcon />
              </span>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-[#374151] pl-11 top-4 pr-11 w-96 h-11.5 bg-white rounded-xl"
                placeholder="Enter your password"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-16 top-4 flex  text-[#9CA3AF]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <EyeIcon />
              </button>
            </div>

            <div className="w-96 flex justify-end mb-5">
              <Link href="/forgot-password" className="text-white">
                Forgot Password?
              </Link>
            </div>

            {error && (
              <p className="text-red-200 mb-3" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              // disabled={loading}
              className="w-96 h-12 rounded-xl shadow-[0px_2px_4px_-2px_#0000001A] bg-white text-[#0F766E] text-center disabled:opacity-60"
            >
              Login
            </button>

            <div className="flex mt-6 gap-4 items-center justify-center">
              <div className="w-31.25 border border-[#D1D5DB]"></div>
              <p className="text-[14px] text-white">Or continue with</p>
              <div className="w-31.25 border border-[#D1D5DB]"></div>
            </div>

            <button
              type="button"
              className="mt-6 w-96 h-12 rounded-xl border border-[#D1D5DB] text-white flex items-center justify-center gap-2"
            >
              <GoogleIcon />
              Google
            </button>

            <p className="mt-5 text-[16px] text-white text-center">
              Do not have an account?{" "}
              <Link href="/signup" className="font-semibold underline">
                Sign Up
              </Link>
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

export default Login;
