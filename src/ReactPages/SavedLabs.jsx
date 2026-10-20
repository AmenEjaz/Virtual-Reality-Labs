"use client";
import { RemoveIcon } from "../icons/Icons";
import { useRouter, useSearchParams } from "next/navigation";
import FreePremium from "../../public/FreePremium.png";

function SavedLabs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const grade = searchParams.get("grade") || "Grade 9";
  const chapter = searchParams.get("chapter") || "Measurements & Units";

  const labs = [
    {
      id: 1,
      pic: FreePremium,
      subject: "Physics",
      lab: "Projectile Motion Lab",
      info: "Explore how launch angle, initial velocity, and gravity affect projectile motion.",
      grade: "Grade 9-12",
      status: "Free",
    },
    {
      id: 2,
      pic: FreePremium,
      subject: "Physics",
      lab: "Projectile Motion Lab",
      info: "Explore how launch angle, initial velocity, and gravity affect projectile motion.",
      grade: "Grade 9-12",
      status: "Free",
    },
    {
      id: 3,
      pic: FreePremium,
      subject: "Physics",
      lab: "Projectile Motion Lab",
      info: "Explore how launch angle, initial velocity, and gravity affect projectile motion.",
      grade: "Grade 9-12",
      status: "Premium",
    },
  ];

  const launchLab = (item) => {
    router.push(
      `/lab-catalog/lab-details?grade=${encodeURIComponent(
        grade,
      )}&subject=${encodeURIComponent(
        item.subject,
      )}&chapter=${encodeURIComponent(
        chapter,
      )}&lab=${encodeURIComponent(item.lab)}`,
    );
  };

  return (
    <div className="mt-3 w-full max-w-[1138px] min-h-screen px-14 py-8 sm:px-6 lg:px-12">
      {/* Heading */}
      <h1 className="mt-2 text-3xl font-bold sm:text-[36px]">Saved Labs</h1>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-[#727272]">labs saved for later</p>

        <button
          type="button"
          onClick={() => {
            console.log("Remove all saved labs");
          }}
          className="text-sm font-medium text-[#0F766E] hover:underline"
        >
          Remove All
        </button>
      </div>

      {/* Lab Cards */}
      <div className="mt-9 grid grid-cols-3 gap-[15px] sm:grid-cols-2 xl:grid-cols-3">
        {labs.map((item) => (
          <div
            key={item.id}
            className="w-full overflow-hidden rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] transition-shadow hover:shadow-lg"
          >
            {/* Image and Status */}
            <div className="relative w-full">
              <img
                src={item.pic.src}
                alt={`${item.subject} virtual lab`}
                className="h-[173px] w-full object-cover"
              />

              <span
                className={`absolute right-3 top-3 flex h-6 min-w-[65px] items-center justify-center rounded-[10px] px-3 text-sm text-white ${
                  item.status === "Premium" ? "bg-[#8B5CF6]" : "bg-[#C5C5C5]"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* Lab Details */}
            <div className="p-3">
              <p className="mb-2 w-20 whitespace-nowrap rounded-xl bg-[#06B6D42E] px-3 py-1 text-sm text-[#0F766E]">
                {item.subject}
                <span className="text-[14px] text-[#A1A1A1] bg-white ml-6.5 leading-[133%]">
                  {item.grade}
                </span>
              </p>

              <h3 className="text-xl font-semibold">{item.lab}</h3>

              <p className="mt-2 text-sm text-[#A1A1A1]">{item.info}</p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <button className="flex text-[14px] text-[#A1A1A1] gap-2 items-center">
                  <RemoveIcon />
                  Remove
                </button>

                <button
                  type="button"
                  onClick={() => launchLab(item)}
                  className="h-8 rounded-lg bg-[#0F766E] px-3 text-sm text-white hover:bg-[#115E59]"
                >
                  Launch Lab
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedLabs;
