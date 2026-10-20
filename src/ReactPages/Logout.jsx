"use client";

function Logout({ onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white flex flex-col justify-center items-center w-92 h-70.25 font-roboto text-[16px] leading-6">
        <div>
          <h1>Logout of your Account</h1>
        </div>

        <div className="mt-5 flex flex-row">
          <button
            onClick={onCancel}
            className="w-22 h-9 rounded-lg border text-black border-black"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="ml-2.5 w-22 h-9 rounded-lg border text-white bg-[#0F766E]"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
