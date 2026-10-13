"use client";

import { PlusIcon, UploadImageIcon } from "../../../Icons/Icons";
import { useRef, useState } from "react";

function FooterCards() {
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
    <div
      className="
        font-medium
        w-272.25
        rounded-[30px]
        bg-[#F3F3F3]
        pl-12
        pr-12
        pt-6
        pb-6
      "
    >
      {/* Heading */}
      <h3 className="ml-4 text-[16px]">Cards</h3>

      {/*  ICONS */}
      <div className="mt-8 ml-4">
        <label className="block text-[14px] text-[#374151] font-semibold">
          Icons
        </label>

        {/* Upload Box */}
        {!image ? (
          <div
            className="
              mt-2
              w-226.5
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
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
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
        ) : (
          <div
            className="
              mt-2
              w-226.5
              h-36.25
              border-2
              border-dashed
              border-[#D5D5D5]
              rounded-lg
              flex
              items-center
              justify-center
              overflow-hidden
              bg-white
            "
          >
            <img
              src={image.src}
              alt="Uploaded"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}

        <p className="text-[12px] mt-3.5 text-[#9C9C9C]">
          Accept JPG, Png. Max size 5MB
        </p>
      </div>

      {/* CARD PREVIEW  */}
      <div className="mt-5 ml-4 w-57.5 h-34.5 border border-[#EAEAEA]">
        <div className="h-26 w-35.75 bg-[#EAEAEA] ml-5.25 overflow-hidden">
          {image && (
            <img
              src={image.src}
              alt="Card Preview"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* LINK */}
      <div className="mt-5 ml-4">
        <label className="block text-[14px] text-[#374151] font-semibold">
          Link
        </label>

        <input
          type="text"
          placeholder="Add Link here"
          className="
            mt-3
            w-226.5
            h-11.5
            px-4
            rounded-xl
            border
            border-[#D1D5DB]
            outline-none
            text-[12px]
            text-[#000000]
            bg-white
          "
        />
      </div>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-row justify-end gap-2.5">
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

      {/* ADD ANOTHER CARD */}
      <div
        className="
          mt-6
          -mx-12
          h-14.5
          flex
          flex-row
          gap-2.5
          bg-[#F3F3F3]
          text-[14px]
          text-[#020202]
          items-center
          justify-center
          border-t
          border-[#E5E5E5]
        "
      >
        <PlusIcon />
        Add Another Card
      </div>
    </div>
  );
}

export default FooterCards;
