import { CrossIcon } from "../../Icons/Icons";

function ViewChatModal({ message, onClose }) {
  return (
    <div className="w-197.25 h-178.5 bg-white rounded-xl font-roboto p-7.5 overflow-y-auto">
      {/* Header */}
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-row items-start gap-3">
          <p className="bg-[#1E6DEB] text-[24px] text-white w-16 h-16.25 flex items-center justify-center  font-medium rounded">
            RL
          </p>

          <div className="flex flex-col">
            <p className="text-[24px] font-medium text-[#111827]">
              {message.name}
            </p>

            <p className="text-[20px] text-[#262626]">{message.email}</p>
          </div>
        </div>

        <button type="button" onClick={onClose} className="cursor-pointer">
          <CrossIcon />
        </button>
      </div>

      {/* User Details */}
      <div className="flex flex-row gap-2 mt-8">
        <div className="w-88 h-17.75 rounded-lg bg-[#EBEEF4] flex flex-col justify-center px-4">
          <p className="ml-11.5 text-[#8E8D8D] text-[16px] leading-5.5">
            Full Name
          </p>

          <p className="ml-11.5 text-[20px] leading-5.5">{message.name}</p>
        </div>

        <div className="w-88 h-17.75 rounded-lg bg-[#EBEEF4] flex flex-col justify-center px-4">
          <p className="ml-11.5 text-[#8E8D8D] text-[16px] leading-5.5">
            Email
          </p>

          <p className="ml-11.5 text-[20px] leading-5.5">{message.email}</p>
        </div>
      </div>

      {/* Date */}
      <div className="w-88 mt-3.25 h-17.75 rounded-lg bg-[#EBEEF4] flex flex-col justify-center px-4">
        <p className="ml-11.5 text-[#8E8D8D] text-[16px] leading-5.5">Date</p>

        <p className=" ml-11.5 text-[20px] leading-5.5">
          {message.date} at {message.time}
        </p>
      </div>

      {/* Message */}
      <p className="text-[20px] mt-9.5 ml-9.25">Message</p>

      <div className="w-full ml-9.25  h-48.5 mt-2 bg-[#EBEEF4] rounded-lg p-4 text-[16px] text-[#262626]">
        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww{" "}
        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww{" "}
      </div>

      {/* Buttons */}
      <div className="ml-9.25 mt-12 flex flex-row gap-2.5">
        <button className="w-120.25 bg-[#0F766E] h-9 text-[14px] text-white rounded">
          Reply
        </button>

        <button className="h-9 w-53.75 text-[14px] text-[#E81010] bg-[#FEAFA5C4] rounded">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ViewChatModal;
