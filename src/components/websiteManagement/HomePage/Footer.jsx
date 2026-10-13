"use client";

import { DeleteIcon, EditPIcon, UploadImageIcon } from "../../../Icons/Icons";

import { useRef, useState } from "react";
import AddAnotherSection from "../AddAnotherSection";

function Footer() {
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);

  const [description, setDescription] = useState(
    "VR Labs is an innovative virtual learning platform designed to transform the way students explore science. By combining immersive Virtual Reality (VR), interactive simulations, and AI-powered learning, we make Physics, Chemistry, and Biology more engaging, practical, and accessible than ever before.",
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
    <div className="h-290.5 ml-4 pl-11.25 font-roboto rounded-[30px] bg-[#F3F3F3] p-4.75 ">
      {/*  Footer Section */}

      <h1 className="ml-4 h-9 font-roboto font-bold text-[20px] text-[#010101] mt-4">
        Footer
      </h1>

      {/* TITLE */}

      <div className="mt-10.25 ml-4">
        <label className="block text-[14px] text-[#374151] font-semibold">
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="
            mt-3
            w-251.5
            
            h-23
            px-4
            py-6
            
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
          Rights Reserved{" "}
        </label>

        <input
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

      {/* HERO IMAGE */}

      <div className="mt-8 ml-11">
        <h3 className=" mt-3.75 font-bold text-[20px]">Card</h3>
        <div className="ml-223  gap-4.75 flex flex-row items-center">
          <DeleteIcon />
          <EditPIcon />
        </div>
        <label className="block text-[14px] text-[#374151] font-semibold">
          Social Icon{" "}
        </label>

        {/* Upload Box */}

        {!image && (
          <div
            className="
              mt-2  
            w-238.5
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
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <UploadImageIcon />

            <p className="mt-2 text-[#9C9C9C] font-roboto font-medium text-[14px]">
              Drag & Drop or Click to Upload
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current.click();
              }}
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

      <div className="w-57.5 mt-6 ml-8 h-34.5 border-[#EAEAEA] bg-white">
        <div className="w-33.75 h-26 bg-[#EAEAEA] ml-5.25 mt-auto"></div>
      </div>
      <div className="mt-4 ml-4 ">
        <label className="block text-[14px] text-[#374151] font-semibold">
          Link
        </label>

        <input
          type="text"
          placeholder="Add Link here"
          className="
            mt-3 w-251.5 h-11.5 px-4 rounded-xl border
            border-[#D1D5DB] outline-none text-[12px] text-[#000000]   bg-white 
          "
        />
      </div>
      <div className="mb-19 mt-10.75 flex flex-row ml-179 gap-2.5">
        <button
          type="button"
          className="
            border
            border-[#0F766E]
            bg-white
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
      <AddAnotherSection />
    </div>
  );
}

export default Footer;
