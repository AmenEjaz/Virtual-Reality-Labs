import { useRef, useState } from "react";
import { CrossIcon, UploadImageIcon } from "../../Icons/Icons";

function AddNewGrade({ onClose }) {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

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
    /* Overlay */
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center backdrop-blur-sm">
      {/* Modal */}
      <div className="relative w-145.25 h-145.25 bg-white rounded-xl shadow-2xl ">
        {/* Header */}
        <div className="flex flex-row">
          <h2 className="ml-9 mt-8.75 font-roboto font-medium text-[20px] leading-[133%]">
            Add New Grade
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="absolute right-9 top-9 cursor-pointer"
          >
            <CrossIcon />
          </button>
        </div>

        <div className="w-126.25 mt-5.75 mx-auto border-b border-[#A9A9A9]" />

        {/* Form */}
        <form className="px-9">
          {/* Grade Name */}
          <div className="mt-6 mb-8.25">
            <label
              className="block font-roboto font-medium text-[#A1A1A1] text-[14px] leading-[133%] mb-2"
              htmlFor="gradeName"
            >
              Grade Name
            </label>

            <input
              className="w-125.5 h-9.75 rounded-lg border border-[#DBDBDB] px-3 outline-none"
              type="text"
              name="gradeName"
              id="gradeName"
              required
              placeholder="e.g Grade 11"
            />
          </div>

          {/* Status */}
          <div className="mt-6 mb-8.25">
            <label
              className="block font-roboto font-medium text-[#A1A1A1] text-[14px] leading-[133%] mb-2"
              htmlFor="status"
            >
              Status
            </label>

            <select
              className="w-125.5 h-9.75 rounded-lg border border-[#DBDBDB] px-3 text-[#A1A1A1] outline-none"
              name="status"
              id="status"
              defaultValue="active"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Grade Image */}
          <div className="mt-6">
            <p className="font-roboto font-medium text-[14px] text-[#A1A1A1] leading-[133%] mb-2">
              Grade Image
            </p>

            <div
              className="w-123 h-45.25 border-2 border-dashed border-[#D5D5D5] rounded-lg flex flex-col items-center justify-center cursor-pointer"
              onClick={() => fileInputRef.current.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              {image ? (
                <img
                  src={image}
                  alt="Grade preview"
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <>
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
                </>
              )}

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
          <div className="flex flex-row justify-end mt-7 gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="w-30.5 h-9 border rounded-xl border-[#DBDBDB] text-[14px] text-[#A1A1A1]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-30.5 h-9 rounded-xl text-white bg-[linear-gradient(90deg,#0F766E_0%,#111827_100%)] text-[14px]"
            >
              Create Grade
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewGrade;
