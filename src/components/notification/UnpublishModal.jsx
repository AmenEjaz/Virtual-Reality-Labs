// import { UnpublishIcon } from "../../Icons/Icons";

// export default function UnpublishModal() {
//   return (
//     <div className="w-md h-65.75 p-8 bg-[#F6FEFD]">
//       <UnpublishIcon />
//       <h3 className=" mt-6 font-roboto font-bold text-[18px] ">
//         Unpublish Announcement?
//       </h3>
//       <p className="font-roboto text-[14px] text-[#4C5568] py-2 w-91 h-11.25">
//         {" "}
//         This announcement will no longer be available in the active notification
//         feed for users.
//       </p>
//       <div className="flex flex-row font-roboto gap-2 mt-12">
//         <button className="  ml-50.75 w-19 h-10.5 text-[#374052] text-[14px] p-4 rounded-md border border-[#DEF1F1] ">
//           Cancel
//         </button>
//         <button className="w-23.5 h-10.5  text-white bg-[linear-gradient(90deg,#00786F_0%,#000000_100%)] text-[14px] p-4 rounded-md flex items-center justify-center border border-[#DEF1F1] ">
//           Unpublish
//         </button>
//       </div>
//     </div>
//   );
// }

import { UnpublishIcon } from "../../Icons/Icons";

export default function UnpublishModal({ onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-md h-65.75 p-8 bg-[#F6FEFD] rounded-xl shadow-xl">
        <UnpublishIcon />

        <h3 className="mt-6 font-roboto font-bold text-[18px]">
          Unpublish Announcement?
        </h3>

        <p className="font-roboto text-[14px] text-[#4C5568] py-2">
          This announcement will no longer be available in the active
          notification feed for users.
        </p>

        <div className="flex flex-row justify-end font-roboto gap-2 mt-12">
          <button
            onClick={onCancel}
            className="w-19 h-10.5 text-[#374052] text-[14px] rounded-md border border-[#DEF1F1]"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="w-23.5 h-10.5 text-white bg-[linear-gradient(90deg,#00786F_0%,#000000_100%)] text-[14px] rounded-md flex items-center justify-center border border-[#DEF1F1]"
          >
            Unpublish
          </button>
        </div>
      </div>
    </div>
  );
}
