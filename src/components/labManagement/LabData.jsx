"use client";

import { DeleteIcon, EditIcon } from "../../Icons/Icons";
import labimg from "../../Images/labimg.png";
import { useState } from "react";
import DeleteLab from "./DeleteLab";

function LabData() {
  const [deleteLabModal, setDeleteLabModal] = useState(false);

  const labs = [
    {
      image: labimg,
      name: "LAB-001",
      title: "Introduction to Kinematics",
      grade: "Grade 9",
      subject: "Physics",
      chapter: "Kinematics",
      access: "Free",
      visibility: "Published",
    },
    {
      image: labimg,
      name: "LAB-001",
      title: "Chemical Bonding Explorer",
      grade: "Grade 10",
      subject: "Chemistry",
      chapter: "Chemical Bonding",
      access: "Free",
      visibility: "Published",
    },
    {
      image: labimg,
      name: "LAB-001",
      title: "Cell Division Simulation",
      grade: "FSC Part 1",
      subject: "Biology",
      chapter: "Cell Division &...",
      access: "Premium",
      visibility: "Published",
    },
    {
      image: labimg,
      name: "LAB-001",
      title: "Electromagnetic Wave",
      grade: "FSC Part 2",
      subject: "Physics",
      chapter: "Electromagnetic...",
      access: "Premium",
      visibility: "Draft",
    },
    {
      image: labimg,
      name: "LAB-001",
      title: "Organic Chemistry Lab",
      grade: "Grade 9",
      subject: "Biology",
      chapter: "Cell Division &...",
      access: "Free",
      visibility: "Unpublished",
    },
    {
      image: labimg,
      name: "LAB-001",
      title: "Newton Law Demo",
      grade: "Grade 9",
      subject: "Chemistry",
      chapter: "Chemical Bonding",
      access: "Premium",
      visibility: "Unpublished",
    },
    {
      image: labimg,
      name: "LAB-001",
      title: "Cell Division Simulation",
      grade: "FSC Part 1",
      subject: "Biology",
      chapter: "Cell Division &...",
      access: "Free",
      visibility: "Unpublished",
    },
    {
      image: labimg,
      name: "LAB-001",
      title: "Electromagnetic Wave",
      grade: "FSC Part 2",
      subject: "Physics",
      chapter: "Electromagnetic...",
      access: "Premium",
      visibility: "Draft",
    },
    {
      image: labimg,
      name: "LAB-001",
      title: "Organic Chemistry Lab",
      grade: "Grade 9",
      subject: "Biology",
      chapter: "Cell Division &...",
      access: "Free",
      visibility: "Unpublished",
    },
    {
      image: labimg,
      name: "LAB-01",
      title: "Newton Law Demo",
      grade: "Grade 9",
      subject: "Chemistry",
      chapter: "Cell Division &...",
      access: "Premium",
      visibility: "Published",
    },
    {
      image: labimg,
      name: "LAB-01",
      title: "Cell Division Simulation",
      grade: "Grade 9",
      subject: "Chemistry",
      chapter: "Electromagnetic...",
      access: "Free",
      visibility: "Unpublished",
    },
  ];

  return (
    <div className="w-265 h-214.25 mt-8 ml-8">
      <table className="w-265 border-collapse">
        <colgroup>
          <col className="w-55" />
          <col className="w-45" />
          <col className="w-37.5" />
          <col className="w-37.5" />
          <col className="w-45" />
          <col className="w-35" />
          <col className="w-35" />
          <col className="w-35" />
        </colgroup>

        <thead>
          <tr className="h-15.5">
            <th className="pl-7.75 text-left font-roboto font-medium text-[14px] text-[#A1A1A1]">
              Lab
            </th>

            <th className="text-center font-roboto font-medium text-[14px] text-[#A1A1A1]">
              Title
            </th>

            <th className="text-center font-roboto font-medium text-[14px] text-[#A1A1A1]">
              Grade
            </th>

            <th className="text-center font-roboto font-medium text-[14px] text-[#A1A1A1]">
              Subject
            </th>

            <th className="text-center font-roboto font-medium text-[14px] text-[#A1A1A1]">
              Chapter
            </th>

            <th className="text-center font-roboto font-medium text-[14px] text-[#A1A1A1]">
              Access
            </th>

            <th className="text-center font-roboto font-medium text-[14px] text-[#A1A1A1]">
              Visibility
            </th>

            <th className="text-center font-roboto font-medium text-[14px] text-[#A1A1A1]">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {labs.map((lab, index) => (
            <tr
              key={`${lab.name}-${index}`}
              className={`h-18.25 ${
                index !== labs.length - 1 ? "border-b border-[#D8D8D8]" : ""
              }`}
            >
              <td className="pl-6 text-left align-middle">
                <div className="flex items-center gap-3">
                  <img
                    src={lab.image.src}
                    alt={lab.name}
                    className="w-10 h-10 object-cover rounded-md"
                  />

                  <span className="font-roboto font-medium text-[12px] text-[#A7A7A7]">
                    {lab.name}
                  </span>
                </div>
              </td>

              <td className="text-center align-middle font-roboto font-medium text-[14px] text-[#010101]">
                {lab.title}
              </td>

              <td className="text-center align-middle font-roboto font-medium text-[14px] text-[#010101]">
                {lab.grade}
              </td>

              <td className="text-center align-middle font-roboto font-medium text-[14px] text-[#010101]">
                {lab.subject}
              </td>

              <td className="text-center align-middle font-roboto font-medium text-[14px] text-[#010101]">
                {lab.chapter}
              </td>

              <td className="align-middle">
                <div
                  className={`mx-auto w-21.75 h-7.75 rounded-[20px] flex items-center justify-center font-roboto font-medium text-[14px] ${
                    lab.access === "Free"
                      ? "bg-[#DDFFD0] text-[#3F9825]"
                      : "bg-[#F9D0FF] text-[#982583]"
                  }`}
                >
                  {lab.access}
                </div>
              </td>

              <td className="align-middle">
                <div
                  className={`mx-auto w-21.75 h-7.75 rounded-[20px] flex items-center justify-center font-roboto font-medium text-[14px] ${
                    lab.visibility === "Published"
                      ? "bg-[#EDFFE6] text-[#4F930A]"
                      : lab.visibility === "Draft"
                        ? "bg-[#FFF6E6] text-[#D58A21]"
                        : "bg-[#E8E8E8] text-[#929292]"
                  }`}
                >
                  {lab.visibility}
                </div>
              </td>

              <td className="align-middle">
                <div className="flex items-center justify-center gap-3.25">
                  <DeleteIcon
                    onClick={() => setDeleteLabModal(true)}
                    className="cursor-pointer"
                  />

                  <EditIcon className="cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-7 flex flex-row font-roboto w-265 h-17.25 border border-[#F3F4F6] gap-2.5">
        <p className="ml-6 w-50 text-[14px] text-[#4B5563]">Showing Labs</p>

        <div className="flex flex-row ml-163.75">
          <button className="w-20 h-8.5 rounded-md border text-[#4B5563] border-[#E5E7EB]">
            Previous
          </button>

          <button className="w-8 h-8.5 rounded-md border text-white bg-[#0F766E]">
            1
          </button>

          <button className="w-20 h-8.5 rounded-md border text-[#4B5563] border-[#E5E7EB]">
            Next
          </button>
        </div>
      </div>

      {deleteLabModal && <DeleteLab onClose={() => setDeleteLabModal(false)} />}
    </div>
  );
}

export default LabData;
