import {
  AddIcon,
  UploadImageIcon,
  BackArrowIcon,
  RequiredIcon,
} from "../../Icons/Icons";

function AddNewLab() {
  return (
    <div>
      <div className="ml-9.5 mt-5">
        <BackArrowIcon />
      </div>
      <h2 className="ml-9.5 mt-2 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
        Add New Lab
      </h2>
      <p className="ml-9.5 mb-6 font-roboto text-[14px] font-medium leading-[133%] text-[#A1A1A1]">
        Create a new VR laboratory experiment
      </p>
      <div className="flex flex-row ">
        <div className="ml-9 w-172.5 h-147 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040]">
          <h2 className="w-54.5 h-7 ml-8 text-[20px] font-medium font-roboto mt-8 ">
            Lab Information
          </h2>
          <h3 className=" mt-8 ml-8 font-roboto h-6.5 font-medium text-[14px] ">
            <div className="flex flex-row text-[14px] text-[#A1A1A1]">
              Lab Title <RequiredIcon />
            </div>
          </h3>
          <input
            className=" w-156.25 h-10 font-roboto font-medium  text-[14px] rounded-lg border border-[#DBDBDB] ml-8"
            type="text"
            name=""
            id=""
            placeholder="    e.g Quantum Entanglement"
          />
          <div>
            <div className="flex flex-row mt-7 ml-8">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <h3 className="font-roboto text-[#A1A1A1] h-6.5 font-medium text-[14px] ">
                    Lab ID
                  </h3>
                  <RequiredIcon />
                </div>

                <input
                  className=" w-77 h-10 font-roboto font-medium text-[14px] rounded-lg border border-[#DBDBDB]"
                  type="text"
                  name=""
                  id=""
                  placeholder="  Lab-001"
                />
              </div>
              <div className="flex flex-col ml-1.75">
                <div className="flex flex-row">
                  <h3 className="font-roboto text-[#A1A1A1] h-6.5 font-medium text-[14px] ">
                    Estimated Duration (min)
                  </h3>
                  <RequiredIcon />
                </div>

                <select
                  className=" w-77 h-10 font-roboto font-medium text-[14px] text-[#A1A1A1] rounded-lg border border-[#DBDBDB]"
                  name="time"
                  id="time"
                  defaultValue="30 sec"
                >
                  <option value="30"> 30 sec</option>
                  <option value="60"> 60 sec</option>
                  <option value="120">120 sec</option>
                  <option value="180">180 sec</option>
                </select>
              </div>
            </div>
            <h3 className=" ml-8  mt-6.5 font-roboto text-[#A1A1A1] h-6.5 font-medium text-[14px] ">
              Description
            </h3>
            <textarea
              className=" ml-8 w-154 h-29.75  font-roboto font-medium text-[14px] p-3 rounded-lg border border-[#DBDBDB]"
              name=""
              id=""
              placeholder="Describe the Lab experiment and learning objectives"
            ></textarea>
          </div>
          <div className="ml-8 mt-3 ">
            <h3 className="w-119 h-6.5 font-roboto font-medium text-[14px] text-[#A1A1A1]">
              Learning Objectives
            </h3>
            <div className="flex flex-row">
              <input
                className="w-140.5 h-10 p-3.5 border font-roboto font-medium text-[#A1A1A1] text-[14px] rounded-lg border-[#DBDBDB]"
                type="text"
                placeholder="Write Learning Objectives here"
              />
              <button className=" bg-[#0F766E] h-10 w-12 ml-2 rounded-lg flex items-center justify-center">
                <AddIcon />
              </button>
            </div>
          </div>

          <div
            className="w-172.5 h-78 mt-32.5 border rounded-xl shadown-[0px_2px_4px_0px_#00000040]
border-[#D9D9D9] gap-7 "
          >
            <h3 className=" ml-8 font-roboto font-medium text-[20px] mt-7 mb-9">
              Thumbnail Upload
            </h3>
            <div className="w-157.7 h-36.25 border-2 border-dashed ml-8 mr-8 border-[#D5D5D5] rounded-lg flex flex-col items-center justify-center cursor-pointer">
              <UploadImageIcon />

              <p className="mt-2 text-[#9C9C9C] font-roboto font-medium text-[14px]">
                Drag & Drop or Click to Upload
              </p>

              <button
                type="button"
                className="mt-3 px-5 py-2 text-[#089BC4] font-roboto text-[12px] cursor-pointer"
              >
                Upload Image
              </button>
            </div>

            <p className="ml-8 font-medium   font-roboto text-[12px] mt-3.5 text-[#9C9C9C]">
              Accept JPG, PNG, Max size 5MB
            </p>
          </div>
        </div>

        {/* Classification */}

        <div className="flex flex-col ml-4.75">
          <div className="w-85.5 h-94.75 rounded-xl border border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040]">
            <h3 className="font-roboto   text-[20px] font-semibold mt-7 ml-8 ">
              Classification
            </h3>
            <div className="text-[#A1A1A1] font-medium ml-10.5 mt-6 flex flex-col">
              <div className="flex flex-row">
                <label className="mb-2" htmlFor="">
                  Grade
                </label>
                <RequiredIcon />
              </div>

              <select
                className=" w-62 h-10 font-roboto font-medium text-[14px] text-black rounded-lg border border-[#DBDBDB]"
                name="time"
                id="time"
                defaultValue="Grade 9"
              >
                <option value="grade 9">Grade 9</option>
                <option value="grade 10">Grade 10</option>
                <option value="FSC 1">FSC 1</option>
                <option value="FSC 2">FSC 2</option>
              </select>
            </div>
            <div className="text-[#A1A1A1] font-medium ml-10.5 mt-6 flex flex-col">
              <div className="flex flex-row">
                <label className="mb-2" htmlFor="">
                  Subject
                </label>
                <RequiredIcon />
              </div>
              <select
                className=" w-62 h-10 font-roboto font-medium text-[14px] text-black rounded-lg border border-[#DBDBDB]"
                name="time"
                id="time"
                defaultValue="Grade 9"
              >
                <option value="grade 9">Grade 9</option>
                <option value="grade 10">Grade 10</option>
                <option value="FSC 1">FSC 1</option>
                <option value="FSC 2">FSC 2</option>
              </select>
            </div>
            <div className="text-[#A1A1A1] font-medium ml-10.5 mt-6 flex flex-col">
              <div className="flex flex-row">
                <label className="mb-2" htmlFor="">
                  Chapter
                </label>
                <RequiredIcon />
              </div>
              <select
                className=" w-62 h-10 font-roboto font-medium text-[14px] text-black rounded-lg border border-[#DBDBDB]"
                name="time"
                id="time"
                defaultValue="Grade 9"
              >
                <option value="grade 9">Grade 9</option>
                <option value="grade 10">Grade 10</option>
                <option value="FSC 1">FSC 1</option>
                <option value="FSC 2">FSC 2</option>
              </select>
            </div>
          </div>
          <div
            className="w-85.5 h-73.25 rounded-xl border mt-5 border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040]
 "
          >
            <h3 className="font-roboto   text-[20px] font-semibold mt-7 ml-8 ">
              Access & Visibility
            </h3>
            <p className="mt-7.5 h-6.5  ml-8 font-medium text-[#A1A1A1]">
              Access Type
            </p>
            <div className="flex flex-row">
              <button className="w-34 h-9.75 bg-[#D5FFD8] ml-7 text-[#0E8D16]  font-medium rounded-xl">
                Free
              </button>
              <button className="w-34 h-9.75 bg-white border border-[#DBDBDB] ml-7 text-[#000000]  font-medium rounded-xl">
                Premium
              </button>
            </div>
            <p className="h-6.5 font-medium mt-7 ml-8 text-[#A1A1A1]">
              Visibility
            </p>

            <div className="flex flex-row ">
              <button className="w-34 h-9.75 bg-[#FFE8FD] ml-7 text-[#922387]  font-medium rounded-xl">
                Published
              </button>
              <button className="w-34 h-9.75 bg-white border border-[#DBDBDB] ml-7 text-[#000000]  font-medium rounded-xl">
                Unpublished
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewLab;
