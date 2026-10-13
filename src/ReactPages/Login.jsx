import { EmailIcon } from "../Icons/Icons";
import { PasswordIcon } from "../Icons/Icons";
import { SecurityIcon } from "../Icons/Icons";
import { LoginIcon } from "../Icons/Icons";
function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-96">
        <h1 className="font-roboto text-2xl font-bold leading-8">
          Admin Login
        </h1>
        <p className="pt-2 font-roboto text-sm font-normal leading-5 text-[#4B5563]">
          Enter your credentials to access the admin panel
        </p>
      </div>
      <div>
        <div className="pt-8 w-96 h-25.5">
          <label className="block pb-2 font-roboto text-sm font-semibold">
            Email
          </label>

          <div className="h-10.5 w-96 rounded-xl px-3 border border-[#D1D5DB] flex items-center gap-2">
            <EmailIcon />
            <input
              className="font-inter text-sm text-[#9CA3AF] outline-none flex-1"
              type="text"
              placeholder="Enter your Email"
            />
          </div>
        </div>
        <div className="pt-8 w-96 h-25.5">
          <label className="block pb-2 font-roboto text-sm font-semibold">
            Password
          </label>

          <div className="h-10.5 w-96 rounded-xl px-3 border border-[#D1D5DB] flex items-center gap-2">
            <PasswordIcon />
            <input
              className="font-inter text-sm text-[#9CA3AF] outline-none flex-1"
              type="text"
              placeholder="Enter your Password"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 w-96 rounded-3xl border border-[#FDE68A] p-4.25">
        <div className="flex items-start gap-2">
          <SecurityIcon className="mt-0.5" />

          <div>
            <h3 className="font-roboto text-sm font-semibold leading-5 text-[#78350F]">
              Security Notice
            </h3>

            <p className="mt-1 font-roboto text-xs font-normal leading-4 text-[#B45309]">
              This portal is restricted to authorized personnel only. All
              <br />
              access attempts are logged and monitored.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <button className="w-96 gap-0.75 rounded-xl h-12 flex items-center justify-center bg-[linear-gradient(27.23deg,#0F766E_-85.1%,#000000_151.08%)]">
          <LoginIcon />
          <p className="font-roboto gap-2 font-semibold text-[#FFFFFF]">
            Log In
          </p>
        </button>
      </div>
    </div>
  );
}

export default Login;
