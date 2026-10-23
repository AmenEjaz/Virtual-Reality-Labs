import React from "react";

const information = [
  {
    info: "Account information — name, email address, username, password (stored hashed), role (student, educator, or administrator), and institution or school name.",
  },
  {
    info: "Profile and educational data — grade level, subjects of interest, enrolled courses, learning progress, quiz and assessment results, and lab completion records.",
  },
  {
    info: "Usage data — pages viewed, VR labs launched, session duration, in-app interactions, and features used.",
  },
  {
    info: "Device and technical data — IP address, browser type, operating system, device identifiers, and VR headset model where applicable.",
  },
  {
    info: "Payment information — subscription plan and billing details processed by our third-party payment providers. We do not store full card numbers on our servers.",
  },
  {
    info: "Communications — messages you send to our support team and feedback you provide.",
  },
];

const purpose = [
  {
    info: "To create and manage your account and provide access to the Service.",
  },
  {
    info: "To deliver, personalize, and improve VR lab content and learning experiences.",
  },
  {
    info: "To track learning progress and generate performance and progress reports.",
  },
  {
    info: "To process subscription payments and manage billing.",
  },
  {
    info: "To communicate with you about the Service, including updates, security alerts, and support responses.",
  },
  {
    info: "To monitor usage, detect fraud, and maintain the security and integrity of the Service.",
  },
  {
    info: "To comply with legal obligations and enforce our Terms & Conditions.",
  },
];

const cookies = [
  {
    info: "Strictly necessary cookies — required for the Service to function, such as authentication and security.",
  },
  {
    info: "Preference cookies — remember settings such as language and display preferences.",
  },
  {
    info: "Analytics cookies — help us understand traffic and usage patterns so we can improve the platform.",
  },
];

const infoSharing = [
  {
    info: "Service providers that help us operate the platform, such as hosting, payment processing, analytics, and email delivery partners.",
  },
  {
    info: "Educational institutions associated with your account, for the purpose of supporting your learning and reporting progress to your school or instructor.",
  },
  {
    info: "Legal and regulatory authorities where required by law or to protect our rights, users, or the public.",
  },
  {
    info: "Successors in the event of a merger, acquisition, or sale of assets, where information may be transferred as part of the transaction.",
  },
];

const rights = [
  {
    des: "The right to access the personal information we hold about you.",
  },
  {
    des: "The right to request correction of inaccurate or incomplete information.",
  },
  {
    des: "The right to request deletion of your personal information.",
  },
  {
    des: "The right to object to or restrict certain processing.",
  },
  {
    des: "The right to data portability.",
  },
  {
    des: "The right to withdraw consent where processing is based on consent.",
  },
];

import { DataProtectionIcon, CalenderIcon, ListIcon } from "../icons/Icons.jsx";
function PrivacyPolicy() {
  return (
    <div className="mb-20">
      {/* Top */}
      <div className="w-360 h-109.5 bg-[linear-gradient(171.14deg,#0F766E_18.21%,#000000_125.75%)] font-roboto h-33.75 pt-29 pl-29">
        <p className="w-71.5 h-9.25 rounded-[20px] gap-3 flex items-center justify-center p-2.5 text-[20px] mb-4 bg-[#E0E0E073] text-white ">
          <DataProtectionIcon />
          Privacy & Data Protection{" "}
        </p>
        <h1 className="text-[74px] text-white w-160 leading-[108%]">
          Privacy Policy{" "}
        </h1>
        <p className="text-[14px] mt-2 w-128 text-[#FFFFFF]">
          This policy explains what information VR Labs collects, how we use and
          protect it, and the choices you have over your data.
        </p>
        <p className="text-[16px] mt-3.5  text-[#FFFFFF] flex  gap-2">
          <CalenderIcon />
          Last updated: September 14, 2026
        </p>
      </div>
      {/* Body */}
      <div className="flex pt-18.5 pl-14 gap-20">
        {/* Left */}
        <div className="w-42 h-97 text-[14px]">
          <h3 className="font-bold mb-3">On this Page</h3>
          <ul className="text-[#9D9D9D]  leading-[183%]">
            <li className="whitespace-nowrap">About This Policy</li>
            <li className="whitespace-nowrap">Information We Collect</li>
            <li className="whitespace-nowrap">How We Use Information</li>
            <li className="whitespace-nowrap">Cookies & Tracking</li>
            <li className="whitespace-nowrap">How We Share Information</li>
            <li className="whitespace-nowrap">Data Retention </li>
            <li className="whitespace-nowrap"> Data Security</li>
            <li className="whitespace-nowrap">Children’s Privacy</li>
            <li className="whitespace-nowrap">Your Privacy Rights</li>
            <li className="whitespace-nowrap"> International Transfers</li>
            <li className="whitespace-nowrap"> Changes to This Policy</li>
            <li className="whitespace-nowrap">Contact Us</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-[40px] whitespace-nowrap mb-2.5 font-bold">
            About This Policy
          </h2>
          <p className="text-[20px] w-258 text-[#929292]">
            VR Labs (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            operates the VR Labs virtual reality science learning platform,
            including our websites, applications, and immersive lab content
            (collectively, the &quot;Service&quot;). This Privacy Policy
            describes how we collect, use, disclose, and safeguard your
            information when you use the Service.
            <br /> By accessing or using the Service, you agree to the
            collection and use of information in accordance with this policy. If
            you do not agree, please do not use the Service. This policy applies
            to students, educators, parents, and institutional partners.
          </p>

          {/* Information WE Collect */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Information We Collect{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            We collect the following categories of information to operate and
            improve the Service:
          </p>
          {information.map((data) => {
            return (
              <ul>
                <li className="flex gap-2.75 leading-[133%] items-center text-[#929292] mb-2.5 text-[20px]">
                  <ListIcon />
                  {data.info}
                </li>
              </ul>
            );
          })}

          {/* Information Purpose */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            How We Use Information{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            We use the information we collect for the following purposes:
          </p>
          {purpose.map((p) => {
            return (
              <ul>
                <li className="flex gap-2.75 leading-[133%] items-center text-[#929292] mb-2.5 text-[20px]">
                  <ListIcon />
                  {p.info}
                </li>
              </ul>
            );
          })}

          {/* Cookies & Tracking */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Cookies & Tracking{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            We use cookies and similar tracking technologies to remember your
            preferences, keep you signed in, and understand how the Service is
            used. Cookies we use include:{" "}
          </p>
          {cookies.map((c) => {
            return (
              <ul>
                <li className="flex gap-2.75 leading-[133%] items-center text-[#929292] mb-2.5 text-[20px]">
                  <ListIcon />
                  {c.info}
                </li>
              </ul>
            );
          })}
          <p className="text-[20px] mb-2 text-[#929292]">
            You can control or disable cookies through your browser settings.
            Please note that disabling certain cookies may limit your ability to
            use some features of the Service.
          </p>

          {/* Shoaring Information */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            How We Share Information{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            We do not sell your personal information. We may share information
            with the following categories of recipients:{" "}
          </p>
          {infoSharing.map((info) => {
            return (
              <ul>
                <li className="flex gap-2.75 leading-[133%] items-center text-[#929292] mb-2.5 text-[20px]">
                  <ListIcon />
                  {info.info}
                </li>
              </ul>
            );
          })}

          {/* Cookies & Tracking */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Data Retention{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            We retain personal information for as long as your account is active
            or as needed to provide the Service. When you delete your account,
            we will delete or anonymize your personal information within a
            reasonable period, except where we are required to retain it to
            comply with legal obligations, resolve disputes, or enforce
            agreements.
          </p>

          {/* Data Security */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Data Security{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            We implement reasonable technical and organizational measures to
            protect your information, including encryption in transit, hashed
            passwords, access controls, and regular security reviews. However,
            no method of transmission or storage is completely secure, and we
            cannot guarantee absolute security. Please keep your account
            credentials confidential.
          </p>

          {/* Children's Privacy */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Children's Privacy{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            The Service is designed for educational use and may be accessed by
            students under the age of 16 through a school or institution. Where
            required, consent is obtained from the school or a parent or
            guardian. We do not knowingly collect personal information from
            children without appropriate consent. If you believe a child has
            provided us with personal information without consent, please
            contact us so we can take appropriate action.
          </p>

          {/* Privacy Rights */}

          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Cookies & Tracking{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            Depending on your location, you may have the following rights
            regarding your personal information:{" "}
          </p>
          {rights.map((right) => {
            return (
              <ul>
                <li className="flex gap-2.75 leading-[133%] items-center text-[#929292] mb-2.5 text-[20px]">
                  <ListIcon />
                  {right.des}
                </li>
              </ul>
            );
          })}
          <p className="text-[20px] mb-2 text-[#929292]">
            The rightTo exercise any of these rights, please contact us using
            the details in the Contact Us section below. We will respond within
            the timeframe required by applicable law. to withdraw consent where
            processing is based on consent.{" "}
          </p>

          {/* International Transfers */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            International Transfers{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            Your information may be transferred to and processed in countries
            other than your own. When we transfer personal information across
            borders, we take steps to ensure it receives an adequate level of
            protection consistent with applicable data protection laws.{" "}
          </p>

          {/* Changes to This Policy */}

          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Changes to This Policy{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            We may update this Privacy Policy from time to time. When we make
            material changes, we will notify you by updating the "Last updated"
            date and, where appropriate, by posting a notice on the Service or
            sending you an email. We encourage you to review this policy
            periodically.{" "}
          </p>

          {/* Contact Us */}

          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Contact Us{" "}
          </h2>
          <p className="text-[20px] mb-4.5 text-[#929292]">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-[20px] mb-2 text-black">
            Email:
            <span className="text-[#929292] ml-2 ">legal@vrlabs.com</span>{" "}
          </p>
          <p className="text-[20px] mb-2 text-black">
            Mailing address:
            <span className="text-[#929292] ml-2">
              VR Labs, 210 Innovation Drive, Suite 400, San Francisco, CA 94107,
              USA
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
