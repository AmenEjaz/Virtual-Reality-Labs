"use client";

import { EditIcon, AddIcon, DeleteIcon } from "../../Icons/Icons";
import AddNewGrade from "./AddNewChapter";
import DeleteGrade from "./DeleteGrade";
import EditGrade from "./EditGrade";
import { useState } from "react";
const grades = [
  { grade: "Grade 9", subjects: 3, chapters: 14, labs: 52, status: "Active" },
  { grade: "Grade 10", subjects: 3, chapters: 12, labs: 48, status: "Active" },
  { grade: "FSC Part I", subjects: 3, chapters: 8, labs: 36, status: "Active" },
  {
    grade: "FSC Part II",
    subjects: 3,
    chapters: 8,
    labs: 36,
    status: "Active",
  },
];

function GradeManagement() {
  // Modale
  const [isAddModalOpen, setAddModelOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModelOpen] = useState(false);
  const [isEditModalOpen, setEditModelOpen] = useState(false);

  return (
    <div className=" relative">
      <div className="flex flex-row">
        <div>
          <h2 className="ml-6 mt-9.5 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
            Grade Management
          </h2>
          <p className="ml-6.25 mb-2.75 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
            Manage educational grade levels
          </p>
        </div>
        <button
          onClick={() => setAddModelOpen(true)}
          className="flex flex-row justify-center items-center gap-2.5 w-37.75 ml-172 mt-9.5 mr-6.75
           rounded-[10px] h-11 p-2.5 bg-[linear-gradient(90deg,#0F766E_0%,#000000_100%)]"
        >
          <AddIcon />
          <p className="font-roboto text-medium text-[#FFFFFF]">Add Grade</p>
        </button>
      </div>
      <div className="w-272.5 mt-2.75 ml-6 rounded-xl border-[0.5px] border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] overflow-hidden">
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
                Grade Name
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Subjects
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Chapters
              </th>
              <th className="text-center font-roboto font-medium text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Labs
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
            {grades.map((grade, index) => (
              <tr
                key={grade.grade}
                className={`h-18.25 ${
                  index !== grades.length - 1 ? "border-b border-[#D8D8D8]" : ""
                }`}
              >
                <td className="pl-7.75 text-left align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101] whitespace-nowrap">
                  {grade.grade}
                </td>
                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
                  {grade.subjects}
                </td>
                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
                  {grade.chapters}
                </td>
                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
                  {grade.labs}
                </td>
                <td className="align-middle">
                  <div className="mx-auto w-21.75 h-7.75 rounded-[20px] bg-[#DBFEBD] flex items-center justify-center font-roboto font-medium text-[14px] leading-[133%] text-[#4F930A]">
                    {grade.status}
                  </div>
                </td>
                <td className="align-middle">
                  <div className="flex flex-row items-center justify-center gap-3.25">
                    <DeleteIcon onClick={() => setDeleteModelOpen(true)} />
                    <EditIcon onClick={() => setEditModelOpen(true)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isAddModalOpen && <AddNewGrade onClose={() => setAddModelOpen(false)} />}
      {isDeleteModalOpen && (
        <DeleteGrade onClose={() => setDeleteModelOpen(false)} />
      )}
      {isEditModalOpen && <EditGrade onClose={() => setEditModelOpen(false)} />}
    </div>
  );
}

export default GradeManagement;
