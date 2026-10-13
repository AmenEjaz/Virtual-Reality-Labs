import { CrossIcon } from "../../Icons/Icons";
function AddNewChapter({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* Modal */}
      <div className="w-145.25  h-172 bg-white rounded-xl shadow-xl px-10.75">
        {/* Header */}
        <div className="flex flex-row items-center">
          <h2 className="w-54.5 h-6.75 mt-8.75 font-roboto font-medium text-[20px] leading-[133%]">
            Add New Chapter
          </h2>

          <button type="button" onClick={onClose} className="ml-auto mt-9">
            <CrossIcon />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full mt-5.75 border-b border-[#A9A9A9]" />

        <form>
          {/* Chapter Name */}
          <div className="mt-6 mb-8.25">
            <label
              className="block font-roboto font-medium text-[14px] leading-[133%] mb-2"
              htmlFor="chapterName"
            >
              Chapter Name
            </label>

            <input
              className="w-full h-9.75 rounded-lg border border-[#DBDBDB] px-3 outline-none"
              type="text"
              name="chapterName"
              id="chapterName"
              required
              placeholder="e.g Physics"
            />
          </div>

          {/* Grade + Subject */}
          <div className="flex flex-row gap-4 mb-7">
            {/* Grade */}
            <div className="flex-1">
              <label
                className="block font-roboto font-medium text-[14px] leading-[133%] mb-2"
                htmlFor="grades"
              >
                Grade
              </label>

              <select
                className="w-full h-9.75 rounded-lg border border-[#DBDBDB] px-3 outline-none"
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

            {/* Subject */}
            <div className="flex-1">
              <label
                className="block font-roboto font-medium text-[14px] leading-[133%] mb-2"
                htmlFor="subject"
              >
                Subject
              </label>

              <select
                className="w-full h-9.75 rounded-lg border border-[#DBDBDB] px-3 outline-none"
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
          <div className="mt-6 mb-8.25">
            <label
              className="block font-roboto font-medium text-[14px] leading-[133%] mb-2"
              htmlFor="status"
            >
              Status
            </label>

            <select
              className="w-full h-9.75 rounded-lg border border-[#DBDBDB] px-3 outline-none"
              name="status"
              id="status"
              defaultValue="active"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-end gap-2 mt-11">
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
              Create Chapter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewChapter;
