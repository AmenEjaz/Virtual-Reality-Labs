"use client";

import { EditIcon, AddIcon, DeleteIcon } from "../../Icons/Icons";
import { useState } from "react";
import AddNewSubject from "./AddNewSubject";
import EditSubject from "./EditSubject";
import DeleteSubject from "./DeleteSubject";
const subjects = [
  {
    name: "Physics",
    icon: 3,
    assignedGrade: "Grade 9-10, FSC I-II",
    chapters: 16,
    status: "Active",
  },
  {
    name: "Chemistry",
    icon: 3,
    assignedGrade: "Grade 9-10, FSC I-II",
    chapters: 14,
    status: "Active",
  },
  {
    name: "Biology",
    icon: 3,
    assignedGrade: "Grade 9-10, FSC I-II",
    chapters: 12,
    status: "Active",
  },
];

function SubjectManagement() {
  const [addSubjectModal, setAddSubjectModal] = useState(false);
  const [editSubjectModal, setEditSubjectModal] = useState(false);
  const [deleteSubjectModal, setDeleteSubjectModal] = useState(false);
  return (
    <div>
      <div className="flex flex-row">
        <div>
          <h2 className="ml-6 mt-9.5 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
            Subject Management
          </h2>
          <p className="ml-6.25 mb-2.75 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
            Manage subjects across all grades
          </p>
        </div>
        <button
          onClick={() => setAddSubjectModal(true)}
          className=" w-37.75 flex flex-row justify-center items-center gap-2.5  ml-172 mt-9.5 mr-6.75 rounded-[10px] h-11 p-2.5 bg-[linear-gradient(90deg,#0F766E_0%,#000000_100%)]"
        >
          <AddIcon />
          <p className="font-roboto text-medium text-[#FFFFFF]">Add Subject</p>
        </button>
      </div>
      <div className="w-272.5 h-75.25 mt-2.75 ml-6.5 rounded-xl border-[0.5px] border-[#D9D9D9] shadow-[0px_2px_4px_0px_#00000040] overflow-hidden">
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
            <tr className="h-15.5 mb-15.5">
              <th className="pl-7.75 text-left font-roboto  text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Subject Name
              </th>
              <th className="text-center font-roboto text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Icon
              </th>
              <th className="text-center font-roboto text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Assigned Grade
              </th>
              <th className="text-center font-roboto text-[14px] leading-[133%] text-[#A1A1A1] whitespace-nowrap">
                Chapters
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
            {subjects.map((subject, index) => (
              <tr
                key={subject.name}
                className={`h-17.25  ${index !== subjects.length - 1 ? "border-b border-[#D8D8D8]" : ""}`}
              >
                <td className="pl-7.75 text-left align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101] whitespace-nowrap">
                  {subject.name}
                </td>

                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
                  {subject.icon}
                </td>

                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
                  {subject.assignedGrade}
                </td>

                <td className="text-center align-middle font-roboto font-medium text-[14px] leading-[133%] text-[#010101]">
                  {subject.chapters}
                </td>

                <td className="align-middle">
                  <div className="mx-auto w-21.75 h-7.75 rounded-[20px] bg-[#DBFEBD] flex items-center justify-center font-roboto font-medium text-[14px] leading-[133%] text-[#4F930A]">
                    {subject.status}
                  </div>
                </td>

                <td className="align-middle">
                  <div className="flex flex-row items-center justify-center gap-3.25">
                    <DeleteIcon
                      onClick={() => setDeleteSubjectModal(true)}
                      className="cursor-pointer"
                    />{" "}
                    <EditIcon
                      onClick={() => setEditSubjectModal(true)}
                      className="cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {addSubjectModal && (
        <AddNewSubject onClose={() => setAddSubjectModal(false)} />
      )}

      {editSubjectModal && (
        <EditSubject onClose={() => setEditSubjectModal(false)} />
      )}

      {deleteSubjectModal && (
        <DeleteSubject onClose={() => setDeleteSubjectModal(false)} />
      )}
    </div>
  );
}

export default SubjectManagement;
