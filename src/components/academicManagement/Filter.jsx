const grades = [
  // { name: "All" },
  { name: "Grade 9" },
  { name: "Grade 10" },
  { name: "FSC Part 1" },
  { name: "FSC Part 2" },
];

const subjects = [
  // { name: "All" },
  { name: "Physics" },
  { name: "Chemistry" },
  { name: "Biology" },
];
function Filter() {
  return (
    <div className="mb-14.75">
      <div className="w-269.75 m-6.25 h-21.25  flex flex-wrap items-center gap-3 rounded-xl border border-[#D9D9D9] bg-white mb-15">
        <h3 className="ml-8 font-roboto text-[16px] font-semibold leading-[133%] text-black">
          Filter:
        </h3>
        <div className="flex flex-row flex-wrap">
          <button className="w-16 h-7.25 rounded-[10px] bg-[#0F766E] text-white">
            All
          </button>
          {grades.map((grade) => (
            <div
              key={grade.name}
              className="w-19.75 h-7.25  flex items-center justify-center rounded-[10px] border border-[#D7D7D7] text-[14px] text-[#868686]"
            >
              {grade.name}
            </div>
          ))}
        </div>
        {/* Subjects */}
        <div className="flex flex-row flex-wrap gap ml-6 ml-[127px]">
          <button className="w-20.5 h-7.25 rounded-[10px] bg-[#0F766E] text-white">
            All
          </button>
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="w-24.25 h-7.25  flex items-center justify-center rounded-lg border border-[#D7D7D7] text-[14px] text-[#868686]"
            >
              {subject.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
