"use client";

import { useRef, useState } from "react";
import {
  CameraIcon,
  CrossIcon,
  DeleteIcon,
  UploadImageIcon,
} from "../../Icons/Icons";
import lab from "../../Images/lab.png";

function EditSubject({ onClose }) {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(lab);

  const handleFile = (file) => {
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Please upload a JPG or PNG image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB.");
      return;
    }

    setImage(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleDelete = () => {
    setImage(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-[581px] h-[784px] bg-white rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex flex-row items-center justify-between px-8 pt-8.75">
          <h2 className="font-roboto font-medium text-[20px] leading-[133%]">
            Edit Subject: Physics
          </h2>

          <button type="button" onClick={onClose}>
            <CrossIcon />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full mt-5.75 border-b border-[#A9A9A9]" />

        <form className="px-8">
          {/* Subject Name */}
          <div className="mt-6">
            <label
              className="block font-roboto font-medium text-[14px] leading-[133%] mb-2"
              htmlFor="subjectName"
            >
              Subject Name
            </label>

            <input
              className="w-full h-9.75 rounded-lg border border-[#DBDBDB] px-3"
              type="text"
              name="subjectName"
              id="subjectName"
              required
              placeholder="Physics"
            />
          </div>

          {/* Status */}
          <div className="mt-6">
            <label
              className="block font-roboto font-medium text-[14px] leading-[133%] mb-2"
              htmlFor="status"
            >
              Status
            </label>

            <select
              className="w-full h-9.75 rounded-lg border border-[#DBDBDB] px-3"
              name="status"
              id="status"
              defaultValue="active"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Grade */}
          <div className="mt-6">
            <label
              className="block font-roboto font-medium text-[14px] leading-[133%] mb-2"
              htmlFor="grades"
            >
              Grade
            </label>

            <select
              className="w-full h-9.75 rounded-lg border border-[#DBDBDB] px-3"
              name="grades"
              id="grades"
              defaultValue="grade9"
            >
              <option value="grade9">Grade 9</option>
              <option value="grade10">Grade 10</option>
              <option value="FSC1">FSC 1</option>
              <option value="FSC2">FSC 2</option>
            </select>
          </div>

          {/* Grade Image */}
          <div className="mt-6">
            <p className="font-roboto font-medium text-[14px] leading-[133%] mb-2">
              Grade Image
            </p>

            <div
              className="w-full h-45.25 border-2 border-dashed border-[#D5D5D5] rounded-lg flex flex-col items-center justify-center cursor-pointer"
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
                className="mt-3 px-5 py-2 text-[#089BC4] font-roboto text-[12px] cursor-pointer"
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

            <p className="font-roboto text-[12px] mt-3.5 text-[#9C9C9C]">
              Accept JPG, PNG, Max size 5MB
            </p>
          </div>

          {/* Image Preview */}
          <div className="flex flex-row">
            {image && (
              <div className="w-43 h-26 mt-5 border border-[#D5D5D5] rounded-lg flex flex-row">
                <div className="w-25 h-19.5 mt-3 ml-4">
                  <img
                    src={image}
                    alt="Subject preview"
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-3 ml-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <CameraIcon />
                  </button>

                  <button type="button" onClick={handleDelete}>
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="ml-auto mt-18.5">
              <button
                type="button"
                onClick={onClose}
                className="w-30.5 h-9 border rounded-xl border-[#DBDBDB] text-[14px] text-[#060606] mr-1"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-30.5 h-9 rounded-xl text-white bg-[linear-gradient(90deg,#0F766E_0%,#111827_100%)] border-[#DBDBDB] text-[14px]"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditSubject;
