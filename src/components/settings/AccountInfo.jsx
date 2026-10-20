import React from "react";

function AccountInfo() {
  return (
    <div>
      <div className="mt-[133px] font-roboto font-semibold  pl-13">
        <h2 className="text-[20px] font-semibold  ">Account Information</h2>
        <p className="text-[14px] text-[#727272]  mb-10.5 ">
          Update your email and password.{" "}
        </p>

        <form className="text-[14px] text-[#727272]">
          <div className="mb-5.25 ">
            <label className="block mb-2" htmlFor="fullName">
              Email Address{" "}
            </label>
            <input
              id="fullName"
              className="w-145 h-9.75 px-3 rounded-lg  bg-[#F4F3F3]"
              type="text"
              placeholder="smdesigner024@gmail.com"
            />
          </div>

          <div className="mb-5.25">
            <label className="block mb-2" htmlFor="email">
              Password
            </label>
            <div className="flex gap-1.5">
              <input
                id="email"
                className="w-118.5 h-9.75 px-3 rounded-lg  bg-[#F4F3F3]"
                type="password"
                placeholder="............."
              />
              <button className="bg-[#E5F3FF] w-20 h-9.75 rounded-lg text-[14px] text-[#428DE4] ">
                Change
              </button>
            </div>
            <p className="text-[11px] text-[#C0C0C0] mt-2.5">
              Last changed 3 months ago
            </p>
          </div>

          <div className="mr-7.5 mt-7.25 mb-8.5 w-131 border border-[#A8A6A6]"></div>

          <div className="flex">
            <div>
              <h2 className="text-[16px] font-semibold text-[#000000]  ">
                Two-Factor Authentication
              </h2>
              <p className="text-[14px] text-[#727272] mt-2.5  mb-10.5 ">
                Add an extra layer of security to your account.{" "}
              </p>
            </div>
            <button className="w-20 h-10 mt-5 rounded-lg bg-[#E4E5E6] text-[14px] ml-[159px] text-[#7A7B7C]">
              Enable
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountInfo;
