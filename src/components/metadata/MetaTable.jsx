import { EditIcon, MetaIcon } from "../../Icons/Icons";

const data = [
  {
    name: "LAB-001",
    title: "Introduction to Kinematics",
    difficulty: "Beginner",
    tag: "vr science",
    objectives: "3 objectives",
    status: "Complete",
  },
  {
    name: "LAB-001",
    title: "Chemical Bonding Explorer",
    difficulty: "Advanced",
    tag: "vr science",
    objectives: "3 objectives",
    status: "Complete",
  },
  {
    name: "LAB-001",
    title: "Cell Division Simulation",
    difficulty: "Beginner",
    tag: "vr science Interactive",
    objectives: "3 objectives",
    status: "Incomplete",
  },
  {
    name: "LAB-001",
    title: "Electromagnetic Wave An",
    difficulty: "Beginner",
    tag: "vr science interactive",
    objectives: "3 objectives",
    status: "Incomplete",
  },
  {
    name: "LAB-001",
    title: "Organic Chemistry Lab",
    difficulty: "Advanced",
    tag: "vr science 3d",
    objectives: "3 objectives",
    status: "Complete",
  },
  {
    name: "LAB-001",
    title: "Newton Laws Demo",
    difficulty: "Advanced",
    tag: "vr science 3d",
    objectives: "3 objectives",
    status: "Complete",
  },
  {
    name: "LAB-001",
    title: "Organic Chemistry Lab",
    difficulty: "Intermediate",
    tag: "vr science interactive",
    objectives: "3 objectives",
    status: "Incomplete",
  },
  {
    name: "LAB-001",
    title: "Organic Chemistry Lab",
    difficulty: "Intermediate",
    tag: "vr science interactive",
    objectives: "3 objectives",
    status: "Incomplete",
  },
  {
    name: "LAB-001",
    title: "Organic Chemistry Lab",
    difficulty: "Beginner",
    tag: "vr science Interactive",
    objectives: "3 objectives",
    status: "Complete",
  },
  {
    name: "LAB-001",
    title: "Organic Chemistry Lab",
    difficulty: "Advanced",
    tag: "vr science 3d",
    objectives: "3 objectives",
    status: "Complete",
  },
  {
    name: "LAB-001",
    title: "Organic Chemistry Lab",
    difficulty: "Intermediate",
    tag: "vr science 3d",
    objectives: "3 objectives",
    status: "Incomplete",
  },
];

function MetaTable() {
  return (
    <div className="w-265 h-214.25 mt-8 ml-9.5 rounded-xl border-[0.5px] border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] overflow-hidden">
      {/* HEADER */}
      <div
        className="
      h-[88px]
      flex items-center
      font-roboto font-medium text-[14px] text-[#A1A1A1]
      border-b border-[#D8D8D8]
    "
      >
        <div className="ml-[38px] w-22.75">Lab</div>
        <div className="ml-[83px] w-22.75">Title</div>
        <div className="ml-[83px] w-15">Difficulty</div>
        <div className="ml-[83px] w-13.5">Tags</div>
        <div className="ml-[93px] w-17.75">Objectives</div>
        <div className="ml-[71px] w-20.25">Meta Status</div>
        <div className="ml-[69px] w-17">Actions</div>
      </div>

      {/* BODY */}
      <div>
        {data.map((d, index) => (
          <div
            key={`${d.name}-${index}`}
            className={`
          h-17.25
          flex items-center
          ${index !== data.length - 1 ? "border-b border-[#D8D8D8]" : ""}
        `}
          >
            {/* LAB */}
            <div className="ml-9.5 w-20 ">
              <p className="font-roboto font-medium text-[12px] text-[#A7A7A7]">
                {d.name}
              </p>
            </div>

            {/* TITLE */}
            <div className="ml-9.5 w-45 ">
              <p className="font-roboto font-medium text-[14px] text-[#403F3F] whitespace-nowrap">
                {d.title}
              </p>
            </div>

            {/* DIFFICULTY */}
            <div className="ml-8 w-20.75 ">
              <div
                className={`
              w-20.75 h-6.5
              rounded-[20px]
              flex items-center justify-center
              font-roboto font-medium text-[14px]
              ${
                d.difficulty === "Beginner"
                  ? "bg-[#DDFFD0] text-[#3F9825]"
                  : d.difficulty === "Advanced"
                    ? "bg-[#FFF3D0] text-[#EF7015]"
                    : "bg-[#FFEAEA] text-[#EF1515]"
              }
            `}
              >
                {d.difficulty}
              </div>
            </div>

            {/* TAGS */}
            <div className="ml-15.5 w-18 ">
              <p className="font-roboto font-medium text-[14px] text-[#7A96F0] whitespace-nowrap">
                {d.tag}
              </p>
            </div>

            {/* OBJECTIVES */}
            <div className="ml-22 w-22.5 shrink-0">
              <p className="font-roboto font-medium text-[14px] text-[#403F3F] whitespace-nowrap">
                {d.objectives}
              </p>
            </div>

            {/* META STATUS */}
            <div className="ml-11.5 w-22.75 shrink-0">
              <div
                className={`
              w-24.25 h-8
              rounded-[20px]
              flex items-center justify-center
              font-roboto font-medium text-[14px]
              ${
                d.status === "Complete"
                  ? "bg-[#EDFFE6] text-[#4F930A]"
                  : "bg-[#FFF6E6] text-[#D58A21]"
              }
            `}
              >
                {d.status}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="ml-18.5 flex items-center gap-3.25">
              <EditIcon />
              <MetaIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MetaTable;
