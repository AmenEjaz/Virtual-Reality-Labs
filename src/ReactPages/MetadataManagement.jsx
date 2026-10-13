import MetaTable from "../components/metadata/MetaTable";
import { AddIcon } from "../Icons/Icons";
function MetadataManagement() {
  //   const navigate = useNavigate();
  const labs = [
    {
      //   icon: ,
      count: 5,
      info: "Total Labs",
    },
    {
      //   icon:  ,
      count: 142,
      info: "With Full Metadata",
    },
    {
      //   icon: < />,
      count: -136,
      info: "Missing Metadata",
    },
  ];

  return (
    <div className="w-284.5 h-319.75">
      <div className="flex flex-row">
        <div>
          <h2 className="ml-9.75 mt-9.5 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
            Labs Metadata
          </h2>
          <p className="ml-9.75 w-127.25 mb-2.75 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
            Manage tags, difficulty levels, learning objectives, and metadata
            for each lab
          </p>
        </div>

        <button
          //   onClick={() => navigate("/metadata-management/batch-edit-metadata")}
          className=" w-47.75 flex flex-row justify-center items-center gap-2.5 ml-89 mt-9.5  rounded-[10px] h-11 p-2.5 bg-[linear-gradient(90deg,#0F766E_0%,#000000_100%)]"
        >
          <AddIcon />
          <p className="font-roboto text-medium text-[#FFFFFF]">
            Batch Edit Metadata
          </p>
        </button>
      </div>

      {/* Lab Cards */}
      <div className="flex gap-11 ml-9.5 mb-5">
        {labs.map((lab, index) => (
          <div
            key={index}
            className="
              w-81.25
              h-44.25
              flex
              flex-col
              
              justify-center
              rounded-xl
              border-[0.5px]
              border-[#D9D9D9]
              shadow-[0px_2px_4px_0px_#00000040]
            "
          >
            <div
              className="w-15 h-12.5 ml-8 shadow-[0px_2px_4px_0px_#00000040]
                rounded-md mb-4 flex items-center justify-center"
            >
              {/* {lab.icon} */}
            </div>

            <p className="font-roboto ml-8 font-medium text-[24px]">
              {lab.count}
            </p>

            <p className="font-roboto ml-8 text-[14px] text-[#A1A1A1]">
              {lab.info}
            </p>
          </div>
        ))}
      </div>

      {/* Table */}
      <MetaTable />
    </div>
  );
}

export default MetadataManagement;
