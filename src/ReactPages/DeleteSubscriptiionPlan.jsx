// import { RedDeleteIcon } from "../Icons/Icons";

// function DeleteSubscriptiionPlan({ onClose, plan }) {
//   return (
//     <div className="w-99.25 h-83.5 bg-white font-roboto flex flex-col items-center">
//       {/* Delete Icon */}
//       <div className="w-11.75 h-11.75 mt-5.5 rounded-full bg-[#FFECD9] flex items-center justify-center">
//         <RedDeleteIcon />
//       </div>

//       {/* Heading */}
//       <h2 className="mt-3 whitespace-nowrap text-[20px] font-medium text-[#262626]">
//         Delete Subscription Plan
//       </h2>

//       {/* Description */}
//       <p className="w-83.75 text-center text-[12px] mt-2.75 text-[#A1A1A1]">
//         Are you sure you want to delete "{plan?.plan}"?
//       </p>

//       {/* Subscriber Warning */}
//       <p className="w-67.75 h-11.25 flex items-center justify-center border border-[#FB9A97] text-[12px] text-[#8D8D8D] mt-2.75">
//         No active subscribers
//       </p>

//       {/* Plan Details */}
//       <p className="text-[12px] text-[#8D8D8D] mt-7 text-center">
//         {plan?.price} / {plan?.duration} · {plan?.labAccess} · 4 features
//       </p>

//       <p className="text-[12px] text-[#8D8D8D] mt-1">
//         This action cannot be undone.
//       </p>

//       {/* Buttons */}
//       <div className="flex flex-row gap-2.5 mt-5">
//         <button
//           type="button"
//           onClick={onClose}
//           className="w-38.75 h-8.75 p-2.5 rounded-[10px] border border-[#A6A6A6]"
//         >
//           Cancel
//         </button>

//         <button
//           type="button"
//           className="w-38.75 h-8.75 p-2.5 rounded-[10px] bg-[#DF3517] text-[#FFFFFF]"
//         >
//           Delete Plan
//         </button>
//       </div>
//     </div>
//   );
// }

// export default DeleteSubscriptiionPlan;

import { ExclamationIcon, RedDeleteIcon } from "../Icons/Icons";

function DeleteSubscriptiionPlan({ onClose, plan }) {
  const hasActiveSubscribers = plan?.publication === "Published";

  // Published plan = warning modal
  if (hasActiveSubscribers) {
    return (
      <div className="w-99.25 h-106 bg-white font-roboto flex flex-col items-center">
        {/* Warning Icon */}
        <div className="w-11.75 h-11.75 mt-5.5 rounded-full bg-[#FFECD9] flex items-center justify-center">
          <ExclamationIcon />
        </div>

        {/* Heading */}
        <h2 className="mt-3 whitespace-nowrap text-[20px] font-medium text-[#262626]">
          Delete Subscription Plan
        </h2>

        {/* Description */}
        <p className="w-83.75 text-center text-[12px] mt-2.75 text-[#A1A1A1]">
          This plan has active user subscriptions.
        </p>

        {/* Subscriber Warning */}
        <p className="w-67.75 h-24.25 flex flex-col items-center justify-center border-[#FBD597] border rounded-lg text-[12px] text-[#8D8D8D] mt-2.75 text-center">
          <span className=" text-[#0A0A0A] font-[14px]">
            16,172 active subscribers
          </span>

          <span className="mt-1 pl-4 pr-4">
            Deleting this plan would leave active users without a subscription.
          </span>
        </p>

        {/* Alternative */}
        <p className="w-68.25 h-18.75 text-[12px] leading-[133%] tracking-none rounded-lg text-[#8D8D8D] mt-2.75 text-left">
          Instead of deleting, you can{" "}
          <span className="font-medium text-black">deactivate</span> this plan
          to stop new signups while keeping existing subscribers active, or{" "}
          <span className="font-medium text-black">deactivate</span> it to hide
          it from the public.
        </p>

        {/* Buttons */}
        <div className="flex flex-row  gap-3 mt-2.75 text-[14px] ">
          <button
            type="button"
            onClick={onClose}
            className="w-38.75 h-8.75 p-2.5 bg-[#0F766E] text-[#FFFFFF] flex items-center justify-center rounded-[10px] text-[14px]"
          >
            Deactivate Instead
          </button>

          <button
            type="button"
            className="w-38.75 h-8.75 p-2.5 text-[14px] flex items-center justify-center font-medium rounded-[10px] border border-[#A6A6A6] text-[#828282]"
          >
            Unpublish Instad{" "}
          </button>
        </div>
      </div>
    );
  }

  // Unpublished plan = normal delete modal
  return (
    <div className="w-99.25 h-83.5 bg-white font-roboto flex flex-col items-center">
      {/* Delete Icon */}
      <div className="w-11.75 h-11.75 mt-5.5 rounded-full bg-[#FFECD9] flex items-center justify-center">
        <RedDeleteIcon />
      </div>

      {/* Heading */}
      <h2 className="mt-3 whitespace-nowrap text-[20px] font-medium text-[#262626]">
        Delete Subscription Plan
      </h2>

      {/* Description */}
      <p className="w-83.75 text-center text-[12px] mt-2.75 text-[#A1A1A1]">
        Are you sure you want to delete "{plan?.plan}"?
      </p>

      {/* No Subscribers */}
      <p className="w-67.75 h-11.25 flex items-center justify-center border rounded-lg border-[#FB9A97] text-[12px] text-[#8D8D8D] mt-2.75">
        No active subscribers
      </p>

      {/* Plan Details */}
      <p className="text-[12px] text-[#8D8D8D] mt-7 text-center">
        {plan?.price} / {plan?.duration} · {plan?.labAccess} · 4 features
      </p>

      <p className="text-[12px] text-[#8D8D8D] mt-1">
        This action cannot be undone.
      </p>

      {/* Buttons */}
      <div className="flex flex-row gap-2.5 mt-5">
        <button
          type="button"
          onClick={onClose}
          className="w-38.75 h-8.75 p-2.5 rounded-[10px] border border-[#A6A6A6]"
        >
          Cancel
        </button>

        <button
          type="button"
          className="w-38.75 h-8.75 p-2.5 rounded-[10px] bg-[#DF3517] text-[#FFFFFF]"
        >
          Delete Plan
        </button>
      </div>
    </div>
  );
}

export default DeleteSubscriptiionPlan;
