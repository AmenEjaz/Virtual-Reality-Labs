"use client";

import { useRef, useState } from "react";
import {
  CameraIcon,
  CrossIcon,
  DeleteIcon,
  UploadImageIcon,
} from "../../Icons/Icons";
import lab from "../../Images/lab.png";
function EditGrade({ onClose }) {
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
      <div className="relative w-145.25 h-172.5 bg-white rounded-xl shadow-2xl">
        <div className=" flex flex-row">
          <h2 className="w-54.5 h-6.75 mt-8.75 ml-10.75 font-roboto font-medium text-[20px] leading-[133%]">
            Edit Grade: Grade 9
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-9 top-9 cursor-pointer"
          >
            <CrossIcon />
          </button>
        </div>
        <div className="w-xl mt-5.75 border-b border-[#A9A9A9]"></div>
        <form className=" ml-10.75 ">
          <div className="mt-6mb-8.25">
            <label
              className="block font-roboto font-medium text-[#A1A1A1] text-[14px] leading-[133%] mb-2"
              htmlFor="gradeName"
            >
              Grade Name
            </label>
            <input
              className="w-125.5 h-9.75 rounded-lg border placeholder:text-black font-medium border-[#DBDBDB] px-3"
              type="text"
              name="gradeName"
              id="gradeName"
              required
              placeholder="Grade 9"
            />
          </div>

          <div className="mt-6 mb-8.25">
            <label
              className="block font-roboto text-[#A1A1A1] font-medium text-[14px] leading-[133%] mb-2"
              htmlFor="status"
            >
              Status
            </label>

            <select
              className="w-125.5 h-9.75 rounded-lg border font-medium border-[#DBDBDB] px-3"
              name="status"
              id="status"
              defaultValue="active"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="font-roboto font-medium text-[14px] text-[#A1A1A1] leading-[133%] mb-2">
              Banner Image
            </p>

            <div
              className="w-123 h-45.25 border-2 border-dashed border-[#D5D5D5] rounded-lg flex flex-col items-center justify-center cursor-pointer"
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
            <p className=" font-roboto text-[12px] mt-3.5 text-[#9C9C9C]">
              Accept JPG, PNG, Max size 5MB
            </p>
          </div>
          <div className="flex flex-row">
            {image && (
              <div className="w-43 h-26 mt-5 border border-[#D5D5D5] rounded-lg flex flex-row">
                <div className="w-25 h-19.5 mt-3 ml-4">
                  <img
                    src={image}
                    alt="Banner preview"
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
            <div className="ml-18 mt-18.5">
              <button className="w-30.5 h-9 border font-medium rounded-xl gap-2.5 border-[#DBDBDB] text-[14px] text-[#060606] mr-1">
                Cancel
              </button>
              <button className="w-30.5 h-9 rounded-xl gap-2.5 text-white bg-[linear-gradient(90deg,#0F766E_0%,#111827_100%)] border-[#DBDBDB] text-[14px]  mr-1">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditGrade;
