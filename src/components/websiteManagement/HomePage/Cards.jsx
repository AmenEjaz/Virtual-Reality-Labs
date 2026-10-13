"use client";

import { useRef, useState } from "react";
import { PlusIcon, UploadImageIcon } from "../../../Icons/Icons";

function Cards() {
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);

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
    <div className="font-medium  w-272.25 h-159.5 rounded-[30px] bg-[#F3F3F3] pl-12">
      <h3 className="ml-4">Cards</h3>

      <div className="mt-8 ml-4">
        <label className="block text-[14px] text-[#374151] font-semibold">
          Icons{" "}
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

      <div className="mt-3.25 ml-4 ">
        <label className="block text-[14px] text-[#374151] font-semibold">
          Label
        </label>

        <input
          type="text"
          placeholder="1"
          className="
          
            mt-3
            w-251.5
            h-11.5
            px-4
            rounded-xl
            border
            border-[#D1D5DB]
            outline-none
            text-[16px]
            text-[#000000]
            bg-white
          "
        />
      </div>
      {/* Title */}

      <div className="mt-6 ml-4 ">
        <label className="block text-[14px] text-[#374151] font-semibold">
          Title
        </label>

        <input
          type="text"
          placeholder="Create Account"
          className="
          
            mt-3
            w-251.5
            h-11.5
            px-4
            rounded-xl
            border
            border-[#D1D5DB]
            outline-none
            text-[14px]
            text-[#000000]
            bg-white
          "
        />
      </div>

      {/* DESCRIPTION */}

      <div className="mt-7">
        <label className="ml-4 block text-[14px] text-[#374151] font-semibold">
          Description
        </label>

        <textarea
          placeholder="Sign up in seconds with your email or school credentials. Choose between student, teacher, or institution plans."
          className="
            mt-3
            w-251.5
            ml-4
            h-11.5
            px-3
            py-3
            rounded-xl
            border
            border-[#D1D5DB]
            text-[14px]
            text-[#000000]
            bg-white
          "
        />
      </div>
      <div className="flex flex-row gap-2.5 mt-7 ml-154          ">
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
      <div className=" mt-13 flex flex-row gap-2.5 bg-[#F3F3F3] h-14.5 text-[14px] text-[#020202] items-center justify-center">
        <PlusIcon />
        Add Another Card
      </div>
    </div>
  );
}

export default Cards;
