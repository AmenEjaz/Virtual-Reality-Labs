"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { VerifyEmailIcon, MsgIcon } from "@/icons/Icons";

function VerifyEmail() {
  const router = useRouter();

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

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

  const handleVerify = (e) => {
    e.preventDefault();

    const verificationCode = code.join("");

    if (verificationCode.length !== 6) {
      setError("Please enter the complete 6-digit verification code.");
      return;
    }

    setError("");

    // API verification will be added later.
    router.push("/email-verified");
  };

  const handleResendCode = () => {
    // Resend API will be added later.
    setCode(["", "", "", "", "", ""]);
    setError("");
    inputRefs.current[0]?.focus();
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
        <div className="w-[512px] min-h-138 border border-[#FFFFFF1A] rounded-2xl pl-10 pt-10 pr-10 pb-8 shadow-[4px_10px_5.3px_0px_#00000040]">
          <div className="ml-54 w-20 h-20 rounded-full bg-white flex items-center justify-center">
            <VerifyEmailIcon />
          </div>

          <h1 className="text-[24px] text-center mt-6 font-bold text-[#F3F4F6]">
            Verify Your Email
          </h1>

          <p className="mt-3.5 text-white text-[16px] text-center">
            We have sent a 6-digit verification code to your email. Please enter
            the code below to continue.
          </p>

          <p className="ml-19 mt-6 items-center justify-center w-68 h-10 bg-white rounded-lg text-[14px] flex gap-2 pl-2.5 text-[#374151]">
            <MsgIcon />
            Sent to: <span className="text-[#A2A2A2]">{email}</span>
          </p>

          <form onSubmit={handleVerify}>
            <div className="flex ml-7 gap-[15px] mt-8 mb-5">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  maxLength={6}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={(e) => handlePaste(e, index)}
                  onFocus={(e) => e.target.select()}
                  aria-label={`Verification digit ${index + 1}`}
                  className="w-[52px] h-[52px] rounded-xl border border-[#FFFFFF80] bg-white text-[#0F766E] text-[22px] font-semibold text-center outline-none focus:border-[#FFFFFF] focus:ring-2 focus:ring-white/30"
                />
              ))}
            </div>

            {error && (
              <p className="text-red-200 text-sm mb-4" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              onClick={() => router.push("/reset-pass")}
              disabled={loading}
              className="w-full h-13 rounded-xl shadow-[0px_2px_4px_-2px_#0000001A] bg-white text-[16px] text-[#0F766E] text-center disabled:opacity-60"
            >
              Verify Email
            </button>
          </form>

          <p className="mt-5 text-[16px] text-white text-center">
            Did not receive the code?{" "}
            <button
              type="button"
              onClick={handleResendCode}
              className="underline font-semibold"
            >
              Resend Code
            </button>
          </p>
        </div>

        <p className="text-[14px] mt-8 text-center text-white">
          © 2024 Your Education Platform. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default VerifyEmail;
