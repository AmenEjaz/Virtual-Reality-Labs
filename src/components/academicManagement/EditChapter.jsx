import { CrossIcon } from "../../Icons/Icons";

function EditChapter({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-[581px] h-[518px] bg-white rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex flex-row items-center justify-between px-8 pt-8.75">
          <h2 className="font-roboto font-medium text-[20px] leading-[133%]">
            Edit Chapter: Kinematics
          </h2>

          <button type="button" onClick={onClose}>
            <CrossIcon />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full mt-5.75 border-b border-[#A9A9A9]" />

        <form className="px-8">
          {/* Chapter Name */}
          <div className="mt-6">
            <label
              className="block font-roboto text-[#A1A1A1] font-medium text-[14px] leading-[133%] mb-2"
              htmlFor="chapterName"
            >
              Chapter Name
            </label>

            <input
              className="w-full h-9.75 rounded-lg border font-medium placeholder:text-black border-[#DBDBDB] px-3"
              type="text"
              name="chapterName"
              id="chapterName"
              required
              placeholder="e.g Physics"
            />
          </div>

          {/* Grade & Subject */}
          <div className="flex flex-row gap-3 mt-6">
            <div className="w-1/2">
              <label
                className="block font-roboto text-[#A1A1A1] font-medium text-[14px] leading-[133%] mb-2"
                htmlFor="grades"
              >
                Grade
              </label>

              <select
                className="w-full h-9.75 font-medium rounded-lg text-black border border-[#DBDBDB] px-3"
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

            <div className="w-1/2">
              <label
                className="block font-roboto font-medium text-[14px] text-[#A1A1A1] leading-[133%] mb-2"
                htmlFor="subject"
              >
                Subject
              </label>

              <select
                className="w-full h-9.75 text-black rounded-lg border font-medium border-[#DBDBDB] px-3"
                name="subject"
                id="subject"
                defaultValue="physics"
              >
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
                <option value="maths">Mathematics</option>
              </select>
            </div>
          </div>

          {/* Status */}
          <div className="mt-6">
            <label
              className="block font-roboto text-[#A1A1A1] font-medium text-[14px] leading-[133%] mb-2"
              htmlFor="status"
            >
              Status
            </label>

            <select
              className="w-full h-9.75 font-medium rounded-lg border border-[#DBDBDB] px-3"
              name="status"
              id="status"
              defaultValue="active"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-8">
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditChapter;
