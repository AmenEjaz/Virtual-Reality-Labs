import labimg from "../../Images/labimg.png";

function ViewedLabs() {
  const labs = [
    {
      image: labimg,
      name: "Human Heart Anatomy",
      subject: "Biology",
      date: "2026-07-13 14:32",
    },
    {
      image: labimg,
      name: "Human Heart Anatomy",
      subject: "Biology",
      date: "2026-07-13 14:32",
    },
    {
      image: labimg,
      name: "Human Heart Anatomy",
      subject: "Biology",
      date: "2026-07-13 14:32",
    },
    {
      image: labimg,
      name: "Human Heart Anatomy",
      subject: "Biology",
      date: "2026-07-13 14:32",
    },
  ];

  return (
    <div className="w-161 h-121.5 ml-9.25  rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] ">
      <h3 className="text-[20px] font-roboto font-medium mt-8.5 ml-9.5">
        Recently Viewed Labs(4)
      </h3>

      <div className="grid grid-cols-2 gap-x-10 gap-y-6 mt-8.75 ml-9.5">
        {labs.map((lab, index) => (
          <div key={index} className="flex flex-row items-center gap-3 mb-17.5">
            <img
              src={lab.image.src}
              className="w-20 h-19 object-cover rounded-md"
            />

            <div className="flex flex-col">
              <p className="font-roboto font-medium text-[14px]">{lab.name}</p>

              <p className="font-roboto font-medium text-[14px] text-[#716F6F]">
                {lab.subject}
              </p>

              <p className="font-roboto font-medium text-[14px] text-[#B3B2B2]">
                {lab.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewedLabs;
