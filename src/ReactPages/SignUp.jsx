// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   FormMailIcon,
//   User,
//   LockIcon,
//   EyeIcon,
//   Phone,
//   GoogleIcon,
// } from "@/icons/Icons";

// function Signup() {
//   const router = useRouter();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || "Invalid email or password.");
//         return;
//       }

//       router.push("/dashboard");
//     } catch {
//       setError("Unable to log in. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-360 h-286 font-roboto bg-[linear-gradient(359.97deg,#000000_-18.04%,#0F766E_106.22%)] pt-24.75 pl-25 flex gap-28">
//       <Image
//         className="w-150 h-150 object-contain"
//         src="/login.png"
//         alt="VR Labs Login"
//         width={600}
//         height={600}
//       />

//       <div>
//         <div
//           className="w-md  h-228 border border-[#FFFFFF1A] rounded-2xl backdrop-filter: blur(0px)

// shadow-[4px_10px_5.3px_0px_#00000040] "
//         >
//           <h1 className="text-[30px] mt-8 text-center font-bold text-[#F3F4F6]">
//             Create Your Account{" "}
//           </h1>

//           <p className="mt-2 text-white text-center text-[16px]">
//             Start your study abroad journey{" "}
//           </p>

//           <form onSubmit={handleLogin} className="pl-8 mt-8 text-[14px]">
//             {/*Full Name  */}
//             <label htmlFor="email" className="text-white">
//               Full Name*
//             </label>
//             <div className="relative mt-2 mb-5">
//               <span className="absolute left-3 top-4 text-[#9CA3AF]">
//                 <User />
//               </span>

//               <input
//                 id="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="text-[#374151] pl-11 top-4 pr-4 w-96 h-11.5 bg-white rounded-xl"
//                 placeholder="Enter your full name"
//                 required
//               />
//             </div>
//             {/* Email */}
//             <label htmlFor="email" className="text-white">
//               Email
//             </label>
//             <div className="relative mt-2 mb-5">
//               <span className="absolute left-3 top-4 text-[#9CA3AF]">
//                 <FormMailIcon />
//               </span>

//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="text-[#374151] pl-11 top-4 pr-4 w-96 h-11.5 bg-white rounded-xl"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             {/* Phone Number */}
//             <label htmlFor="num" className="text-white">
//               Phone Nuum
//             </label>
//             <div className="relative mt-2 mb-5">
//               <span className="absolute left-3 top-4 text-[#9CA3AF]">
//                 <Phone />
//               </span>

//               <input
//                 id="num"
//                 type="tel"
//                 value={number}
//                 onChange={(e) => setNumber(e.target.value)}
//                 className="text-[#374151] pl-11 top-4 pr-4 w-96 h-11.5 bg-white rounded-xl"
//                 placeholder="Enter Phone Num..."
//                 required
//               />
//             </div>
//             {/* Password */}
//             <label htmlFor="password" className="text-white">
//               Password
//             </label>
//             <div className="relative mt-2 mb-5">
//               <span className="absolute left-3 top-4 text-[#9CA3AF]">
//                 <LockIcon />
//               </span>

//               <input
//                 id="confirmPassword"
//                 type={showPassword ? "text" : "password"}
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="text-[#374151] pl-11 top-4 pr-11 w-96 h-11.5 bg-white rounded-xl"
//                 placeholder="Confirm your password"
//                 required
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-16 top-4 flex  text-[#9CA3AF]"
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//               >
//                 <EyeIcon />
//               </button>
//             </div>
//             {/* Confirm Password */}
//             <label htmlFor="password" className="text-white">
//               Confirm Password
//             </label>
//             <div className="relative mt-2 mb-5">
//               <span className="absolute left-3 top-4 text-[#9CA3AF]">
//                 <LockIcon />
//               </span>

//               <input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="text-[#374151] pl-11 top-4 pr-11 w-96 h-11.5 bg-white rounded-xl"
//                 placeholder="Enter your password"
//                 required
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-16 top-4 flex  text-[#9CA3AF]"
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//               >
//                 <EyeIcon />
//               </button>
//             </div>
//             Checkboxes {/*  */}
//             <div className="w-96 flex flex-col gap-3 mb-5">
//               <label className="flex items-center gap-2.5 text-white text-[14px] cursor-pointer">
//                 <input
//                   type="checkbox"
//                   required
//                   className="appearance-none w-[9.6px] h-[9.6px] rounded-0.5 border-[0.64px] border-[#FFFFFF] bg-transparent shrink-0 checked:bg-white checked:border-white"
//                 />
//                 <span>
//                   I agree to the{" "}
//                   <Link href="/terms-and-conditions" className="underline">
//                     Terms
//                   </Link>
//                   {" & "}
//                   <Link href="/privacy-policy" className="underline">
//                     Privacy Policy
//                   </Link>
//                 </span>
//               </label>

//               <label className="flex items-center gap-2.5 text-white text-[14px] cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="appearance-none w-[9.6px] h-[9.6px] rounded-0.5 border-[0.64px] border-[#FFFFFF] bg-transparent shrink-0 checked:bg-white checked:border-white"
//                 />
//                 <span>Subscribe to our Newsletter</span>
//               </label>
//             </div>
//             {error && (
//               <p className="text-red-200 mb-3" role="alert">
//                 {error}
//               </p>
//             )}
//             <button
//               type="submit"
//               onClick={router.push("verify-email")}
//               className="w-96 h-12 rounded-xl shadow-[0px_2px_4px_-2px_#0000001A] bg-white text-[#0F766E] text-center"
//             >
//               Create Account
//             </button>
//             <div className="flex mt-6 gap-4 items-center justify-center">
//               <div className="w-31.25 border border-[#D1D5DB]"></div>
//               <p className="text-[14px] text-white">Or sign up with</p>
//               <div className="w-31.25 border border-[#D1D5DB]"></div>
//             </div>
//             <button
//               type="button"
//               className="mt-6 w-96 h-12 rounded-xl border border-[#D1D5DB] text-white flex items-center justify-center gap-2"
//             >
//               <GoogleIcon />
//               Google
//             </button>
//             <p className="mt-5 text-[16px] text-white text-center">
//               Already have an account?{" "}
//               <Link href="/login" className="font-semibold underline">
//                 Login
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FormMailIcon,
  User,
  LockIcon,
  EyeIcon,
  Phone,
  GoogleIcon,
} from "@/icons/Icons";

function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Navigate to the Verify Email page.
    router.push("/verify-email");
  };

  return (
    <div className="w-360 h-286 font-roboto bg-[linear-gradient(359.97deg,#000000_-18.04%,#0F766E_106.22%)] pt-24.75 pl-25 flex gap-28">
      <Image
        className="w-150 h-150 object-contain"
        src="/login.png"
        alt="VR Labs Login"
        width={600}
        height={600}
      />

      <div>
        <div className="w-md h-228 border border-[#FFFFFF1A] rounded-2xl backdrop-filter: blur(0px) shadow-[4px_10px_5.3px_0px_#00000040]">
          <h1 className="text-[30px] mt-8 text-center font-bold text-[#F3F4F6]">
            Create Your Account
          </h1>

          <p className="mt-2 text-white text-center text-[16px]">
            Start your study abroad journey
          </p>

          <form onSubmit={handleSignup} className="pl-8 mt-8 text-[14px]">
            {/* Full Name */}
            <label htmlFor="name" className="text-white">
              Full Name*
            </label>

            <div className="relative mt-2 mb-5">
              <span className="absolute left-3 top-4 text-[#9CA3AF]">
                <User />
              </span>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-[#374151] pl-11 top-4 pr-4 w-96 h-11.5 bg-white rounded-xl"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
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

            {/* Phone Number */}
            <label htmlFor="number" className="text-white">
              Phone Number
            </label>

            <div className="relative mt-2 mb-5">
              <span className="absolute left-3 top-4 text-[#9CA3AF]">
                <Phone />
              </span>

              <input
                id="number"
                type="tel"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="text-[#374151] pl-11 top-4 pr-4 w-96 h-11.5 bg-white rounded-xl"
                placeholder="Enter Phone Num..."
                required
              />
            </div>

            {/* Password */}
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
                className="absolute right-16 top-4 flex text-[#9CA3AF]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <EyeIcon />
              </button>
            </div>

            {/* Confirm Password */}
            <label htmlFor="confirmPassword" className="text-white">
              Confirm Password
            </label>

            <div className="relative mt-2 mb-5">
              <span className="absolute left-3 top-4 text-[#9CA3AF]">
                <LockIcon />
              </span>

              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="text-[#374151] pl-11 top-4 pr-11 w-96 h-11.5 bg-white rounded-xl"
                placeholder="Confirm your password"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-16 top-4 flex text-[#9CA3AF]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <EyeIcon />
              </button>
            </div>

            {/* Checkboxes */}
            <div className="w-96 flex flex-col gap-3 mb-5">
              <label className="flex items-center gap-2.5 text-white text-[14px] cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="appearance-none w-[9.6px] h-[9.6px] rounded-0.5 border-[0.64px] border-[#FFFFFF] bg-transparent shrink-0 checked:bg-white checked:border-white"
                />

                <span>
                  I agree to the{" "}
                  <Link href="/terms-and-conditions" className="underline">
                    Terms
                  </Link>
                  {" & "}
                  <Link href="/privacy-policy" className="underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <label className="flex items-center gap-2.5 text-white text-[14px] cursor-pointer">
                <input
                  type="checkbox"
                  className="appearance-none w-[9.6px] h-[9.6px] rounded-0.5 border-[0.64px] border-[#FFFFFF] bg-transparent shrink-0 checked:bg-white checked:border-white"
                />

                <span>Subscribe to our Newsletter</span>
              </label>
            </div>

            {error && (
              <p className="text-red-200 mb-3" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-96 h-12 rounded-xl shadow-[0px_2px_4px_-2px_#0000001A] bg-white text-[#0F766E] text-center"
            >
              Create Account
            </button>

            <div className="flex mt-6 gap-4 items-center justify-center">
              <div className="w-31.25 border border-[#D1D5DB]"></div>
              <p className="text-[14px] text-white">Or sign up with</p>
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
              Already have an account?{" "}
              <Link href="/login" className="font-semibold underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
