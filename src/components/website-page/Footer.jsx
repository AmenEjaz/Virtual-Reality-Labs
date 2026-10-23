import {
  FBIcon,
  GEMailIcon,
  GLocationIcon,
  GPhoneIcon,
  InstaIcon,
  LinkedInIcon,
  XIcon,
} from "@/icons/Icons";
import Link from "next/link";

const contactType = [
  {
    icon: <FBIcon />,
  },
  {
    icon: <InstaIcon />,
  },
  {
    icon: <LinkedInIcon />,
  },
  {
    icon: <XIcon />,
  },
];

const information = [
  {
    icon: <GEMailIcon />,
    info: "Info@vrlabs.com",
  },
  {
    icon: <GPhoneIcon />,
    info: "+1 (234) 567-890",
  },
  {
    icon: <GLocationIcon />,
    info: "123 Education Street, Suit 426 Newyork, NY 10001, USA",
  },
];

export default function Footer() {
  return (
    <div className="w-360 h-[300px] font-roboto pt-12.25 pl-19.25 pr-19.25 bg-[linear-gradient(161.55deg,#0F766E_-38.64%,#000000_114.24%)]">
      {/* Left and Right Sections */}
      <div className="flex justify-between">
        {/* Left */}
        <div>
          <p className="text-[12px] w-91.25 text-white mb-11.75">
            VR Labs is an innovative virtual learning platform designed to
            transform the way students explore science. By combining immersive
            Virtual Reality (VR), interactive simulations, and AI-powered
            learning, we make Physics, Chemistry, and Biology more engaging,
            practical, and accessible than ever before.
          </p>

          <div className="flex gap-2.5">
            {contactType.map((type) => {
              return (
                <a
                  key={type.name}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white"
                >
                  {type.icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right */}
        {/* <div className="mr-20.75">
          <h2 className="text-[20px] leading-[100%] text-white font-bold">
            Contact Information
          </h2>

          <div className="mt-2 flex flex-col gap-2">
            {information.map((infor) => {
              return (
                <div
                  key={infor.info}
                  className="flex  items-center gap-2.5 mb-3"
                >
                  <div className="w-6.5 h-6 leading-[100%] border rounded-md flex items-center justify-center border-[#0F766E] bg-white">
                    {infor.icon}
                  </div>

                  <p className="text-[16px] w-60 text-white">{infor.info}</p>
                </div>
              );
            })}
          </div>
        </div> */}

        <div className="mr-20">
          <h2 className="text-[20px] text-white font-bold mb-2">
            Contact Information
          </h2>

          <div className="flex flex-col gap-2 leading-[100%]">
            {information.map((infor) => {
              return (
                <div
                  key={infor.info}
                  className="flex items-center gap-2.5 mb-3"
                >
                  <div className="w-6.5 h-6 border rounded-md flex items-center justify-center border-[#0F766E] bg-white">
                    {infor.icon}
                  </div>

                  <p className="text-[16px] w-60 text-white">{infor.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Seperator */}
      <div className="w-full border-t border-white mt-4"></div>

      {/*  Links  */}
      <div className="mt-3 flex items-center ">
        <p className="text-[16px] text-white">2026. All rights reserved.</p>

        <div className="flex gap-8 ml-190 underline">
          <Link
            href="/privacy-policy"
            className="text-[16px] text-white hover:underline"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="text-[16px] text-white hover:underline"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
