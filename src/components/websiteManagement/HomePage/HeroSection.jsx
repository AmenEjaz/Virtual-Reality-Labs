"use client";

import { CameraIcon, DeleteIcon, UploadImageIcon } from "../../../Icons/Icons";

import { useRef, useState } from "react";

function HeroSection() {
  const sections = [{}, {}, {}];

  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);

  const [title, setTitle] = useState(
    "Experience Science Through Virtual Reality",
  );

  const [description, setDescription] = useState(
    "Step into immersive virtual laboratories for Physics, Chemistry, and Biology. Perform real experiments, visualize complex concepts in 3D, and master science through hands-on discovery — no physical lab required.",
  );

  const handleFile = (file) => {
    if (!file) return;

    // File type validation
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Please upload a JPG or PNG image.");
      return;
    }

    // File size validation
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB.");
      return;
    }

    // Create preview
    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="pl-11.25 font-roboto rounded-[30px] bg-[#F3F3F3] p-4.75 ">
      {/*  Hero Section */}

      <h1 className="h-9 font-roboto font-bold text-[20px] text-[#010101] mt-4">
        Hero Section
      </h1>

      {/* TITLE */}

      <div className="mt-10.25 ml-4 ">
        <label className="block text-[14px] text-[#374151] font-semibold">
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
            mt-3
            w-251.5
            h-11.5
            px-4
            rounded-xl
            border
            border-[#D1D5DB]
            outline-none
            text-[12px]
            text-[#1F2937]
            focus:border-[#0F766E]
          "
        />
      </div>

      {/* DESCRIPTION */}

      <div className="mt-8">
        <label className="ml-4 block text-[14px] text-[#374151] font-semibold">
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="
            mt-3
            w-251.5
            ml-4.25
            h-11.5
            px-4
            py-1
            
            rounded-xl
            border
            border-[#D1D5DB]
            outline-none
            text-[12px]
            text-[#1F2937]
            focus:border-[#0F766E]
          "
        />
      </div>

      {/* BUTTONS */}

      <div className="flex flex-row gap-2.5 mt-8.5 ml-154          ">
        <button
          type="button"
          className="
            border
            border-[#0F766E]
            w-22
            h-10
            rounded-lg
            text-[14px]
            text-[#0F766E]
          "
        >
          Cancel
        </button>

        <button
          type="button"
          className="
            border
            border-[#0F766E]
            bg-[#0F766E]
            w-50.5
            h-10
            rounded-lg
            text-[14px]
            text-white
          "
        >
          Save Changes
        </button>
      </div>

      {/* HERO IMAGE */}

      <div className="mt-8 ml-5.5">
        <label className="block text-[14px] text-[#374151] font-semibold">
          Hero Section Image
        </label>

        {/* Upload Box */}

        {!image && (
          <div
            className="
              mt-2  
            w-251.5
              h-36.25
              border-2
              border-dashed
              border-[#D5D5D5]
              rounded-lg
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
            "
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <UploadImageIcon />

            <p className="mt-2 text-[#9C9C9C] font-roboto font-medium text-[14px]">
              Drag & Drop or Click to Upload
            </p>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="
                mt-3
                px-5
                py-2
                text-[#089BC4]
                font-roboto
                text-[12px]
                cursor-pointer
              "
            >
              Upload Image
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.jpeg,.png"
              className="hidden"
              onChange={handleChange}
            />
          </div>
        )}
        <p className="text-[12px] mt-3.5 text-[#9C9C9C]">
          Accept JPG, Png. Max size 5MB
        </p>
      </div>

      <div className="flex flex-row gap-7 mt-6 ml-13">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-row gap-6 w-57.5 h-34.5">
            <div className="w-33.75 h-26 bg-[#EAEAEA]"></div>

            <div className="flex flex-col gap-3.5 mt-4.75">
              <CameraIcon />
              <DeleteIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
