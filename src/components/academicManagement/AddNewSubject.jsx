import { useRef, useState } from "react";
import { CrossIcon, UploadImageIcon } from "../../Icons/Icons";

function AddNewSubject({ onClose }) {
  const fileInputRef = useRef(null);
  // const [setImage] = useState(null);
  const [setImage] = useState(null);

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

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-[581px] h-[699px] bg-white rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex flex-row items-center justify-between px-8 pt-8.75">
          <h2 className="font-roboto font-medium text-[20px] leading-[133%]">
            Add New Subject
          </h2>

          <button type="button" onClick={onClose}>
            <CrossIcon />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full mt-5.75 border-b border-[#A9A9A9]" />

        <form className="px-8 font-medium text-[#A1A1A1]">
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
              placeholder="e.g Physics"
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

          {/* Grades */}
          <div className="mt-6">
            <label
              className="block font-roboto font-medium text-[14px] leading-[133%] mb-2"
              htmlFor="grade"
            >
              Grades
            </label>

            <select
              className="w-full h-9.75 rounded-lg border border-[#DBDBDB] px-3"
              name="grade"
              id="grade"
              defaultValue="grade9"
            >
              <option value="grade9">Grade 9</option>
              <option value="grade10">Grade 10</option>
              <option value="FSC1">FSC 1</option>
              <option value="FSC2">FSC-2</option>
            </select>
          </div>

          {/* Banner Image */}
          <div className="mt-6">
            <p className="font-roboto font-medium text-[14px] leading-[133%] mb-2">
              Banner Image
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

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-7">
            <button
              type="button"
              onClick={onClose}
              className="w-30.5 h-9 border rounded-xl border-[#DBDBDB] text-[14px] text-[#A1A1A1]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-30.5 h-9 rounded-xl text-white bg-[linear-gradient(90deg,#0F766E_0%,#111827_100%)] border-[#DBDBDB] text-[14px]"
            >
              Create Subject
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewSubject;
