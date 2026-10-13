import { RedDeleteIcon } from "../../Icons/Icons";

function DeleteGrade({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-114 h-104 bg-white rounded-xl shadow-2xl">
        <h2 className="mt-7 ml-9 font-roboto font-semibold text-[20px] leading-[133%] text-black">
          Confirm Delete
        </h2>

        <div className="w-114.25 mx-auto mt-6 border-b border-[#A9A9A9]" />
        <div className="flex flex-col items-center">
          <div className="w-17.5 h-17.5 mt-6 rounded-full bg-[#FFD4D4] flex items-center justify-center">
            <RedDeleteIcon />
          </div>

          <p className="mt-6 font-roboto font-medium text-[14px] text-[#A1A1A1]">
            Are you sure you want to delete
          </p>

          <h3 className="mt-1 font-roboto font-medium text-[20px] text-black">
            "Grade 9"?
          </h3>

          <p className="mt-1.75 font-roboto font-medium text-[14px] text-[#A1A1A1]">
            This action cannot be undone
          </p>
        </div>

        <div className="flex justify-center mt-8.5 gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="w-30.5 h-9 border border-[#DBDBDB] font-medium rounded-xl text-[14px] text-[#060606]"
          >
            Cancel
          </button>

          <button
            type="button"
            className="w-30.5 h-9 rounded-xl font-medium bg-[#F21515] text-[14px] text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteGrade;
