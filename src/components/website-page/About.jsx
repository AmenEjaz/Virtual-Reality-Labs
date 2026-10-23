import React from "react";
import Image from "next/image";
function About() {
  return (
    <section id="about" className="w-360 h-150.75 font-roboto mt-17 ml-31">
      <h2 className="leading-[108%] text-[48px]">About Us</h2>
      <div className="flex gap-12 mt-11">
        <Image
          className="w-206.5 h-89.75"
          src="/web1.jpg"
          alt="VR Labs"
          width={826}
          height={359}
        />{" "}
        <p className="text-[14px] text-left leading-[133%] w-85 font-semibold">
          VR Labs is an innovative virtual learning platform designed to
          transform the way students explore science. By combining immersive
          Virtual Reality (VR), interactive simulations, and AI-powered
          learning, we make Physics, Chemistry, and Biology more engaging,
          practical, and accessible than ever before. Our platform allows
          students to perform virtual experiments in a safe, interactive
          environment where they can learn by doing. From exploring scientific
          concepts to completing hands-on laboratory activities, VR Labs bridges
          the gap between theory and real-world experience. With personalized
          learning insights, intelligent recommendations, and curriculum-aligned
          content, we empower students to strengthen their understanding,
          improve academic performance, and build confidence in STEM subjects.
        </p>
      </div>
    </section>
  );
}

export default About;
