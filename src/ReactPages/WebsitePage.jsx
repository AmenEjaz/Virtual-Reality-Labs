import React from "react";
// import WebNav from "../components/website-page/WebNav";
import About from "../components/website-page/About";
import VirtualLab from "../components/website-page/VirtualLab";
import StartProcedure from "../components/website-page/StartProcedure";
import ScienceFuture from "../components/website-page/ScienceFuture";
import PopularExperiments from "../components/website-page/PopularExperiments";
import Info from "../components/website-page/Info";
import StartExploring from "../components/website-page/StartExploring";
import Contact from "../components/website-page/Contact";
import Footer from "../components/website-page/Footer";
import Image from "next/image";
function WebsitePage() {
  return (
    <div>
      {/* <WebNav /> */}
      <section id="home">
        <div className="w-360 h-171.25 bg-[linear-gradient(180deg,#0F766E_-1.9%,#000000_128.03%)] flex ">
          <div className="mt-29.75 h-33.75 pl-33.75">
            <p className="w-52.25 h-8.25 rounded-[20px] p-2.5 text-[10px] mb-4 bg-[#FFFFFF] text-[#474747] ">
              Now Trusted by 850+ Schools Worldwide
            </p>
            <h1 className="text-[74px] text-white w-160 leading-[108%]">
              Experience Science Through  Virtual Reality
            </h1>
            <p className="text-[14px] mt-2 w-128 text-[#FFFFFF]">
              Step into immersive virtual laboratories for Physics, Chemistry,
              and Biology. Perform real experiments, visualize complex concepts
              in 3D, and master science through hands-on discovery — no physical
              lab required.
            </p>
            <div className="mt-9 ">
              <button className="w-38.5 bg-white h-9.5 p-2.5 text-[14px] text-[#0F766E]">
                Start Free Trial
              </button>
              <button className="ml-4 w-38.5 bg-white h-9.5 p-2.5 text-[14px] text-[#000000]">
                Watch demo
              </button>
            </div>
          </div>
          <Image
            className="w-161 h-161 mt-10"
            src="/asset1.png"
            alt="lab"
            height={161}
            width={161}
          />
        </div>
      </section>

      <About />
      <VirtualLab />
      <StartProcedure />
      <ScienceFuture />
      <PopularExperiments />
      <Info />
      <StartExploring />
      <Contact />
      <Footer />
    </div>
  );
}

export default WebsitePage;
