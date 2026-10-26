"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  VerificationSuccessful,
  AccountSecuredIcon,
  EmailConfirmed,
  StartIcon,
} from "@/icons/Icons";

function SuccessfulEmailVerification() {
  const router = useRouter();

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  // Keep your current email temporarily.
  // Later, pass the email entered on the signup page.
  const email = "smdesigner024@gmail.com";

  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    const digits = value.replace(/\D/g, "");
    const updatedCode = [...code];

    if (digits.length > 1) {
      const pastedDigits = digits.slice(0, 6 - index).split("");

      pastedDigits.forEach((digit, i) => {
        updatedCode[index + i] = digit;
      });

      setCode(updatedCode);
      setError("");

      const nextIndex = Math.min(index + pastedDigits.length, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    updatedCode[index] = digits;
    setCode(updatedCode);
    setError("");

    if (digits && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!code[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (code[index]) {
        const updatedCode = [...code];
        updatedCode[index] = "";
        setCode(updatedCode);
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e, index) => {
    e.preventDefault();

    const pastedText = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pastedText) return;

    const updatedCode = [...code];

    pastedText.split("").forEach((digit, i) => {
      if (index + i < 6) {
        updatedCode[index + i] = digit;
      }
    });

    setCode(updatedCode);
    setError("");

    const nextIndex = Math.min(index + pastedText.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const verificationCode = code.join("");

    if (verificationCode.length !== 6) {
      setError("Please enter the complete 6-digit verification code.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          code: verificationCode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid verification code.");
        return;
      }

      router.push("/login");
    } catch {
      setError("Unable to verify your email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setError("");
    setResending(true);

    try {
      const response = await fetch("/api/resend-verification-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to resend the verification code.");
        return;
      }

      setCode(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } catch {
      setError("Unable to resend the code. Please try again.");
    } finally {
      setResending(false);
    }
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
        <div className="w-lg h-187 border border-[#FFFFFF1A] rounded-2xl -12 pt-12  shadow-[4px_10px_5.3px_0px_#00000040]">
          <div className="ml-45.5 w-32 h-32 rounded-full bg-[#0F766E] flex items-center justify-center shadow-[0px_20px_25px_-5px_#0000001A] shadow-[0px_8px_10px_-6px_#0000001A]">
            <VerificationSuccessful />
          </div>

          <h1 className="text-[36px] w-100 ml-35.75 mt-8 font-bold text-[#F3F4F6]">
            Email Verified Successfully
          </h1>

          <p className="mt-4   text-white text-[18px] text-center">
            Your account has been verified. You can now
            <br />
            continue to set up your student profile.
          </p>

          <form
            className="mt-8 flex flex-col items-center"
            onSubmit={handleVerify}
          >
            <div className="w-104 h-14 rounded-xl p-3 items-center flex gap-3 bg-white mb-3 text-[#374151] font-semibold text-[16px]">
              {/* <FormMailIcon /> */}
              <AccountSecuredIcon />
              Account Secured{" "}
            </div>
            <div className="w-104 h-14 rounded-xl p-3 items-center flex gap-3 bg-white mb-3 text-[#374151] font-semibold text-[16px]">
              {/* <FormMailIcon /> */}
              <EmailConfirmed />
              Email Confirmed{" "}
            </div>
            <div className="w-104 h-14 rounded-xl p-3 items-center flex gap-3 bg-white mb-8 text-[#374151] font-semibold text-[16px]">
              <StartIcon />
              Ready to Start{" "}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-104 h-13 rounded-xl shadow-[0px_2px_4px_-2px_#0000001A] bg-white text-[16px] text-[#0F766E] font-semibold text-center disabled:opacity-60"
            >
              Go to Login Page{" "}
            </button>
          </form>
        </div>

        <p className="text-[14px] mt-8 text-center text-white">
          © 2024 Your Education Platform. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default SuccessfulEmailVerification;
