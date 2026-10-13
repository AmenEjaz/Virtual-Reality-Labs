import ChaptersManagement from "../components/academicManagement/ChaptersManagement";
import Filter from "../components/academicManagement/Filter";

function ManageChapters() {
  return (
    <div className="284.5 h-292.25">
      {/* Heading */}
      <div className="">
        <h2 className="ml-6 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
          Grade Overview
        </h2>

        <p className="ml-6.25 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
          Quick stats per grade level
        </p>
      </div>

      <Filter />
      <ChaptersManagement />
    </div>
  );
}

export default ManageChapters;
