import {
  DblCircleIcon,
  GreyCrossIcon,
  LockIcon,
  SpeakerIcon,
  WTickIcon,
} from "../../Icons/Icons";

function CreateAnnouncementModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="w-155 max-h-[90vh] overflow-y-auto bg-white font-roboto rounded-xl shadow-xl">
        {/* Heading */}
        <div className=" px-6 pt-5 pb-4 border-b border-[#DEF1F1]">
          <div className="flex items-start justify-between">
            <div className="mt-6">
              <p className="text-[11px] text-[#00645E] font-medium">
                Notifications
              </p>

              <h3 className="text-[20px] font-bold text-[#232B3D] mt-1">
                Create Announcement
              </h3>

              <p className="text-[14px] text-[#697282] mt-1">
                Create an announcement to share important information with
                selected users.{" "}
              </p>
            </div>

            <button
              onClick={onClose}
              className="border rounded border-[#DEF1F1] w-9 h-9 mt-7 flex items-center justify-center"
            >
              <GreyCrossIcon />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-hidden px-6 pt-5">
          {/* Announcement Title */}
          <div>
            <label className="block text-[14px] font-bold text-[#232B3D] mb-2">
              Announcement Title
            </label>

            <input
              type="text"
              defaultValue="Enter announcement title"
              className="w-full h-10.5 px-4 border border-[#DEF1F1] rounded-md text-[14px] text-[#101828] outline-none"
            />

            <p className="h-10.5 text-[12px] text-[#8B92A0] mt-1">
              Example: New Physics Labs Available
            </p>
          </div>

          {/* Announcement Message */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[14px] font-bold text-[#232B3D] mb-2">
                Announcement Message
              </label>

              <span className="text-[11px] text-[#8B92A0]">110/600</span>
            </div>

            <textarea
              defaultValue="Write your announcement message..."
              className="w-142.75 h-25.5 px-3 py-2 border border-[#DEF1F1] rounded-md text-[14px] text-[#101828] outline-none resize-none"
            />

            <p className="text-[12px] text-[#8B92A0] mt-1 leading-4">
              Example: New Grade 9 Physics labs are now available. Explore the
              latest experiments and continue your learning journey.
            </p>
          </div>

          {/* Notification Type */}
          <div className="mt-5">
            <h3 className="text-[14px] font-bold text-[#232B3D] mb-2">
              Notification Type
            </h3>

            <div className="w-145.75 h-22.5 border border-[#DEF1F1] rounded-lg bg-[#EDFAF9] px-3 flex  ">
              <div className=" mt-4.25 w-7 h-7 rounded-md bg-[#D0FAF0] flex items-center justify-center shrink-0">
                <SpeakerIcon />
              </div>

              <div className="ml-3 mt-4.25 flex-1">
                <h3 className="w-114.25 text-[14px] font-medium text-[#232B3D]">
                  System Announcement
                </h3>

                <p className="text-[12px] text-[#697282] leading-4 ">
                  New Lab, Subscription Expiry and Upgrade Reminder
                  notifications are generated automatically by the system and
                  cannot be created manually.
                </p>
              </div>
              <div className="mt-3.25">
                <LockIcon />
              </div>
            </div>
          </div>

          {/* Target Users */}
          <div className="mt-6">
            <h3 className="text-[14px] text-[#232B3D] font-medium mb-2">
              Target Users
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {/* All Users */}
              <div className="h-17 w-45.5 border border-[#00786F] rounded-lg bg-[#EBFDF8] px-3 flex ">
                <div className="mt-3.25 w-5 h-5 rounded-full bg-[#00786F] p">
                  <WTickIcon />
                </div>

                <div className="ml-2 mt-3.25">
                  <h3 className="text-[14px] font-medium text-[#232B3D]">
                    All Users
                  </h3>

                  <p className="text-[12px] text-[#697282] mt-0.5">
                    Free + Premium users
                  </p>
                </div>
              </div>

              {/* Free Users */}
              <div className="h-17 w-45.5 border border-[#DEF1F1] rounded-lg px-3 flex ">
                <div className="w-5 h-5 rounded-full bg-[#F6FEFD] border border-[#CAE4E3] mt-3.25 shrink-0" />

                <div className="ml-2 mt-3.25">
                  <h3 className="text-[14px] font-medium text-[#232B3D]">
                    Free Users
                  </h3>

                  <p className="text-[12px] text-[#697282] mt-0.5">
                    Only Free users
                  </p>
                </div>
              </div>

              {/* Premium Users */}
              <div className="h-17 w-45.5 border border-[#DEF1F1] rounded-lg px-3 flex ">
                <div className="w-5 h-5 rounded-full bg-[#F6FEFD] border border-[#CAE4E3] mt-3.25 shrink-0" />

                <div className="ml-2 mt-3.25">
                  <h3 className="text-[14px] font-medium text-[#232B3D]">
                    Premium Users
                  </h3>

                  <p className="text-[12px] text-[#697282] mt-0.5">
                    Only Premium users
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Publication Status */}
          <div className="mt-6">
            <h3 className="text-[14px] text-[#232B3D] font-medium mb-2">
              Publication Status
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {/* Published */}
              <div className="h-11.5 w-69.75 border border-[#DEF1F1] rounded-lg px-3 flex items-center">
                <div className="w-4 h-4 rounded-full border border-[#CAE4E3] " />

                <h3 className=" ml-3 font-medium ">Published</h3>
              </div>

              {/* Unpublished */}

              <div className="h-11.5 w-69.75 border border-[#00786F] rounded-lg bg-[#EBFDF8] px-3 flex items-center">
                <div className="w-4 h-4 rounded-full border border-[#00786F]  pt-0.75 pl-0.75">
                  <DblCircleIcon />
                </div>

                <h3 className="ml-3 font-medium">Unpublished</h3>
              </div>
            </div>

            <p className="mt-2 text-[12px] text-[#8B92A0]">
              Published announcements will be visible to the selected users.
            </p>
          </div>
        </div>

        {/* FOOTER  */}
        <div className="h-20 mt-10 border border-[#DEF1F1] flex items-center justify-end gap-2 px-6">
          <button className="w-19 h-10.5 border border-[#DEF1F1] bg-[#F6FEFD] rounded-md text-[12px] text-[#232B3D]">
            Cancel
          </button>

          <button className="w-42 h-10 rounded-md text-[12px] text-white bg-[linear-gradient(90deg,#00786F_0%,#000000_100%)]">
            Save Announcement
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAnnouncementModal;
