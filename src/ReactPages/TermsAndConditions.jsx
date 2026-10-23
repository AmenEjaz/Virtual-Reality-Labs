import React from "react";

const accounts = [
  {
    info: "You are responsible for maintaining the confidentiality of your account credentials.",
  },
  {
    info: "You agree to provide accurate, current, and complete information during registration.",
  },
  {
    info: "You are responsible for all activity that occurs under your account.",
  },
  {
    info: "You must notify us promptly of any unauthorized use of your account or security breach.",
  },
  {
    info: "Accounts created on behalf of an institution may be administered by that institution.",
  },
];

const subscription = [
  {
    info: "Subscriptions renew automatically at the end of each billing period unless cancelled before the renewal date.",
  },
  {
    info: "You may cancel your subscription at any time; access continues until the end of the current paid period.",
  },
  {
    info: "Fees are billed through our third-party payment providers and are non-refundable except where required by law.",
  },
  {
    info: "We may change subscription prices with reasonable advance notice.",
  },
];

const acceptableUse = [
  {
    info: "Copy, modify, distribute, sell, or lease any part of the Service without our written permission.",
  },
  {
    info: "Reverse engineer, decompile, or attempt to extract the source code of the Service.",
  },
  {
    info: "Use the Service for any unlawful, harmful, or fraudulent purpose.",
  },
  {
    info: "Interfere with, disrupt, or attempt to gain unauthorized access to the Service or its infrastructure.",
  },
  {
    info: "Upload or transmit viruses, malware, or any other harmful code.",
  },
  {
    info: "Harass, abuse, or harm other users, or misuse shared communication features.",
  },
];

const use = [
  {
    info: "You should use VR hardware in a safe, clear, and supervised environment free of obstacles.",
  },
  {
    info: "Some users may experience motion sickness, dizziness, or discomfort; stop use immediately if you feel unwell.",
  },
  {
    info: "You are responsible for using compatible and properly maintained VR equipment.",
  },
  {
    info: "Younger users should be supervised by a parent, guardian, or educator.",
  },
];

import { DataProtectionIcon, CalenderIcon, ListIcon } from "../icons/Icons.jsx";
function TermsAndConditions() {
  return (
    <div className="mb-20">
      {/* Top */}
      <div className="w-360 h-109.5 bg-[linear-gradient(171.14deg,#0F766E_18.21%,#000000_125.75%)] font-roboto h-33.75 pt-29 pl-29">
        <p className="w-71.5 h-9.25 rounded-[20px] gap-3 flex items-center justify-center p-2.5 text-[20px] mb-4 bg-[#E0E0E073] text-white ">
          <DataProtectionIcon />
          Terms of Service{" "}
        </p>
        <h1 className="text-[74px] text-white whitespace-nowrap w-160 leading-[108%]">
          Terms & Conditions{" "}
        </h1>
        <p className="text-[14px] mt-2 w-128 text-[#FFFFFF]">
          These Terms & Conditions govern your access to and use of the VR Labs
          platform, websites, applications, and immersive lab content.{" "}
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
            <li className="whitespace-nowrap">Acceptance of Terms</li>
            <li className="whitespace-nowrap">Eligibility</li>
            <li className="whitespace-nowrap"> Accounts & Registration</li>
            <li className="whitespace-nowrap">Subscription & Payments</li>
            <li className="whitespace-nowrap">License to Use</li>
            <li className="whitespace-nowrap">Acceptable Use </li>
            <li className="whitespace-nowrap"> Intellectual Property</li>
            <li className="whitespace-nowrap">VR Content & Safety</li>
            <li className="whitespace-nowrap">Third-Party Services</li>
            <li className="whitespace-nowrap"> Desclaimer</li>
            <li className="whitespace-nowrap">Limitation of Liability</li>
            <li className="whitespace-nowrap">Termination</li>
            <li>Government Law</li>
            <li>Changes to These Terms</li>
            <li> Contact Us</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-[40px] whitespace-nowrap mb-2.5 font-bold">
            Acceptance of Terms{" "}
          </h2>
          <p className="text-[20px] w-258 text-[#929292]">
            These Terms & Conditions (&quot;Terms) constitute a legally binding
            agreement between you (&quot;you or &quot;user) and VR Labs
            (&quot;we, &quot;us, or &quot;our) governing your use of the VR Labs
            virtual reality science learning platform, including our websites,
            mobile applications, and immersive lab content (collectively, the
            &quot;Service). By accessing or using the Service, you confirm that
            you have read, understood, and agree to be bound by these Terms. If
            you do not agree, you must not use the Service.{" "}
          </p>

          {/* ELIGIBILTY */}

          <h2 className="text-[40px] whitespace-nowrap mb-2.5 mt-14 font-bold">
            Eligibility{" "}
          </h2>
          <p className="text-[20px] w-258 text-[#929292]">
            You must be at least the minimum age required to consent to data
            processing in your jurisdiction, or have verifiable consent from a
            parent, guardian, or educational institution, to use the Service. By
            using the Service, you represent that you meet these requirements
            and that all information you provide is accurate and complete.
          </p>

          {/* Accounts & Registration */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Accounts & Registration{" "}
          </h2>

          {accounts.map((data) => {
            return (
              <ul>
                <li className="flex gap-2.75 leading-[133%] items-center text-[#929292] mb-2.5 text-[20px]">
                  <ListIcon />
                  {data.info}
                </li>
              </ul>
            );
          })}

          {/* Subscriptions & Payments */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Subscriptions & Payments{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            We use the information we collect for the following purposes:
          </p>
          {subscription.map((subs) => {
            return (
              <ul>
                <li className="flex gap-2.75 leading-[133%] items-center text-[#929292] mb-2.5 text-[20px]">
                  <ListIcon />
                  {subs.info}
                </li>
              </ul>
            );
          })}

          {/* License to Use */}

          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            License to Use{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            Subject to your compliance with these Terms, we grant you a limited,
            non-exclusive, non-transferable, revocable license to access and use
            the Service for your personal, educational, or institutional
            learning purposes. This license does not transfer any ownership
            rights to you.{" "}
          </p>

          {/* Acceptable Use */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Acceptable Use{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">You agree not to: </p>
          {acceptableUse.map((use) => {
            return (
              <ul>
                <li className="flex gap-2.75 leading-[133%] items-center text-[#929292] mb-2.5 text-[20px]">
                  <ListIcon />
                  {use.info}
                </li>
              </ul>
            );
          })}

          {/* Intellectual Property */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Intellectual Property{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            All content, features, and functionality of the Service — including
            text, graphics, logos, VR lab simulations, software, and the design
            and arrangement thereof — are owned by VR Labs or its licensors and
            are protected by intellectual property laws. Except as expressly
            permitted, you may not reproduce, distribute, or create derivative
            works from any part of the Service.
          </p>

          {/* Acceptable Use */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Acceptable Use{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            The Service includes immersive virtual reality experiences. By using
            VR features, you acknowledge and agree that:
          </p>
          {use.map((data) => {
            return (
              <ul>
                <li className="flex gap-2.75 leading-[133%] items-center text-[#929292] mb-2.5 text-[20px]">
                  <ListIcon />
                  {data.info}
                </li>
              </ul>
            );
          })}

          {/* Third-Party Services */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Third-Party Services{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            The Service may contain links to or integrations with third-party
            services, including payment providers, VR hardware platforms, and
            analytics tools. We are not responsible for the content, policies,
            or practices of any third party. Your use of third-party services is
            governed by their own terms and privacy policies.
          </p>

          {/* Disclaimers */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Disclaimers{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            The Service is provided on an "as is" and "as available" basis
            without warranties of any kind, whether express or implied,
            including but not limited to implied warranties of merchantability,
            fitness for a particular purpose, and non-infringement. We do not
            warrant that the Service will be uninterrupted, error-free, or
            completely secure, or that learning outcomes will meet any
            particular expectation.
          </p>

          {/* Limitation of Liability          */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Limitation of Liability{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            To the maximum extent permitted by law, VR Labs shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of data, revenue, or profits, arising out of or
            related to your use of the Service. Our total liability for any
            claim shall not exceed the amount you paid us in the twelve months
            preceding the claim.{" "}
          </p>

          {/* Termination */}

          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Termination{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            We may suspend or terminate your access to the Service at any time,
            with or without notice, if you breach these Terms or engage in
            conduct that we reasonably believe is harmful to the Service or
            other users. You may stop using the Service and delete your account
            at any time. Upon termination, the provisions that by their nature
            should survive will remain in effect.{" "}
          </p>

          {/* Voverning Law */}

          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Governing Law{" "}
          </h2>

          <p className="text-[20px] mb-2 text-[#929292]">
            These Terms are governed by and construed in accordance with the
            laws of the State of California, United States, without regard to
            its conflict of law principles. Any disputes arising from these
            Terms or the Service shall be subject to the exclusive jurisdiction
            of the courts located in San Francisco County, California.{" "}
          </p>

          {/* Changes to These Terms */}
          <h2 className="text-[40px] mt-11.25 whitespace-nowrap mb-2.5 font-bold">
            Changes to These Terms{" "}
          </h2>
          <p className="text-[20px] mb-2 text-[#929292]">
            We reserve the right to modify these Terms at any time. When we make
            material changes, we will update the "Last updated" date and, where
            appropriate, notify you through the Service or by email. Your
            continued use of the Service after changes take effect constitutes
            your acceptance of the revised Terms.{" "}
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

export default TermsAndConditions;
