"use client";

import { EditIcon, DeleteIcon, AddIcon } from "../../Icons/Icons";
import { useState } from "react";
import DeleteChapter from "./DeleteChapter";
import EditChapter from "./EditChapter";
import AddNewChapter from "./AddNewChapter";
const chapters = [
  {
    name: "Kinematics",
    grade: "Grade 9",
    subject: "Physics",
    labs: 5,
    status: "Active",
  },
  {
    name: "Chemical Bonding",
    grade: "Grade 10",
    subject: "Chemistry",
    labs: 4,
    status: "Active",
  },
  {
    name: "Cell Division & Mitosis",
    grade: "FSC Part 1",
    subject: "Biology",
    labs: 3,
    status: "Active",
  },
  {
    name: "Electromagnetic Waves",
    grade: "FSC Part 2",
    subject: "Biology",
    labs: 36,
    status: "Active",
  },
];

function ChaptersManagement() {
  const [isDeleteChapterModalOpen, setDeleteChapterModelOpen] = useState(false);
  const [isEditChapterModalOpen, setEditChapterModelOpen] = useState(false);
  const [isAddChapterModalOpen, setAddChapterModalOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row">
        <div>
          <h2 className="ml-6 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
            Manage Chapters
          </h2>
          <p className="ml-6.25  font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
            Organize chapters with subjects and grades
          </p>
        </div>
        <button
          onClick={() => setAddChapterModalOpen(true)}
          className=" flex flex-row justify-center items-center gap-2.5 w-37.75 ml-auto mt-9.5 mr-6.75 rounded-[10px] h-11 p-2.5 bg-[linear-gradient(90deg,#0F766E0%,#000000_100%)]"
        >
          <AddIcon />
          <p className="font-roboto text-medium text-[#FFFFFF]">Add Chapter</p>
        </button>
      </div>
      <div className="w-272.5  ml-6 rounded-xl border-[0.5px] border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] overflow-hidden">
        <table className="w-full table-fixed border-collapse">
          <colgroup>
            <col className="w-55" />
            <col className="w-37.5" />
            <col className="w-37.5" />
            <col className="w-37.5" />
            <col className="w-45" />
            <col className="w-35" />
          </colgroup>

          <thead>
            <tr className="h-15.5">
              <th className="pl-7.75 text-left font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                CHapter Name
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Grade
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Subject
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Total Labs
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Status
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {chapters.map((chapter, index) => (
              <tr
                key={chapter.name}
                className={`h-18.25 ${
                  index !== chapters.length - 1
                    ? "border-b border-[#D8D8D8]"
                    : ""
                }`}
              >
                <td className="pl-7.75 text-left align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101] whitespace-nowrap">
                  {chapter.name}
                </td>
                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
                  {chapter.grade}
                </td>
                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
                  {chapter.subject}
                </td>
                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
                  {chapter.labs}
                </td>
                <td className="align-middle">
                  <div className="mx-auto w-21.75 h-7.75 rounded-[20px] bg-[#DBFEBD] flex items-center justify-center font-roboto font-medium text-[14px] leading-[133%] text-[#4F930A]">
                    {chapter.status}
                  </div>
                </td>
                <td className="align-middle">
                  <div className="flex flex-row items-center justify-center gap-3.25">
                    <DeleteIcon
                      onClick={() => setDeleteChapterModelOpen(true)}
                    />
                    <EditIcon
                      onClick={() => setEditChapterModelOpen(true)}
                      className="cursor-pointer"
                    />{" "}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isDeleteChapterModalOpen && (
        <DeleteChapter onClose={() => setDeleteChapterModelOpen(false)} />
      )}
      {isEditChapterModalOpen && (
        <EditChapter onClose={() => setEditChapterModelOpen(false)} />
      )}
      {isAddChapterModalOpen && (
        <AddNewChapter onClose={() => setAddChapterModalOpen(false)} />
      )}
    </div>
  );
}

export default ChaptersManagement;
