import { RedDeleteIcon } from "../../Icons/Icons";

export default function DeleteModal({ onCancel, onConfirmDelete }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center">
      {/* Delete Modal */}
      <div className="w-120 h-65.75 p-8 rounded-xl shadow-xl bg-white">
        {/* Delete Icon */}
        <div className="h-12 w-12 rounded-xl bg-[#FEE2E2] flex items-center justify-center">
          <RedDeleteIcon />
        </div>

        {/* Heading */}
        <h3 className="mt-6 font-roboto font-bold text-[18px]">
          Delete Announcement?
        </h3>

        {/* Description */}
        <p className="font-roboto text-[14px] text-[#4C5568] py-2 w-91">
          Are you sure you want to delete this announcement? This action cannot
          be undone.
        </p>

        {/* Buttons */}
        <div className="flex flex-row font-roboto gap-2 mt-4 justify-end">
          {/* Cancel */}
          <button
            onClick={onCancel}
            className="w-19 h-10.5 text-[#374052] text-[14px] rounded-md border border-[#DEF1F1] bg-white"
          >
            Cancel
          </button>

          {/* Delete */}
          <button
            onClick={onConfirmDelete}
            className="w-42.5 h-10.5 text-white bg-[#DC2626] text-[14px] rounded-md flex items-center justify-center border border-[#DC2626]"
          >
            Delete Announcement
          </button>
        </div>
      </div>
    </div>
  );
}
