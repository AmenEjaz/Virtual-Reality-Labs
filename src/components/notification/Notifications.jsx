"use client";

import { useState } from "react";
import {
  AddIcon,
  AllStatus,
  AnnouncementIcon,
  CircleExclamIcon,
  CrownIcon,
  DotsIcon,
  GAllUsers,
  GFreeUserIcon,
  PubIcon,
  SearchIcon,
  SpeakerIcon,
  UnpublishedIcon,
  CTickIcon,
  UndoIcon,
  AllUserIcon,
  DateIcon,
  ResetIcon,
  GreyCrossIcon,
} from "../../Icons/Icons";

import UnpublishModal from "./UnpublishModal";
import CreateAnnouncementModal from "./CreateAnnouncementModal";
import DotModal from "./DotModal";
import DeleteModal from "./DeleteModal";
import EditAnnouncementModal from "./EditAnnouncementModal";
import { announcements as announcementData } from "./announcementData";
function Notifications() {
  const [announcementList, setAnnouncementList] = useState(announcementData);
  const [openModal, setOpenModal] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [deletedAnnouncement, setDeletedAnnouncement] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUnpublishModal, setShowUnpublishModal] = useState(false);

  const notifications = [
    {
      icon: <AnnouncementIcon />,
      count: announcementList.length,
      title: "Total Announcements",
      description: "All announcements created",
    },
    {
      icon: <PubIcon />,
      count: announcementList.filter((item) => item.status === "Published")
        .length,
      title: "Published",
      description: "Published announcements",
    },
    {
      icon: <UnpublishedIcon />,
      count: announcementList.filter((item) => item.status !== "Published")
        .length,
      title: "Unpublished",
      description: "Draft awaiting review",
    },
  ];
  const handleDeleteClick = (announcement, index) => {
    setSelectedAnnouncement({ ...announcement, originalIndex: index });
    setOpenModal(null);
    setShowDeleteModal(true);
  };
  const handleConfirmDelete = () => {
    if (!selectedAnnouncement) return;
    const deletedItem = selectedAnnouncement;
    setAnnouncementList((currentList) =>
      currentList.filter((_, index) => index !== deletedItem.originalIndex),
    );
    setDeletedAnnouncement(deletedItem);
    setSelectedAnnouncement(null);
    setShowDeleteModal(false);
    setShowSuccessToast(true);
  };
  const handleUndo = () => {
    if (!deletedAnnouncement) return;
    setAnnouncementList((currentList) => {
      const restoredList = [...currentList];
      restoredList.splice(
        deletedAnnouncement.originalIndex,
        0,
        deletedAnnouncement,
      );
      return restoredList;
    });
    setDeletedAnnouncement(null);
    setShowSuccessToast(false);
  };
  const handleCloseToast = () => {
    setShowSuccessToast(false);
    setDeletedAnnouncement(null);
  };
  return (
    <div>
      {" "}
      <div className="flex flex-row">
        {" "}
        <div>
          {" "}
          <h2 className="ml-6.5 mt-9.5 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
            {" "}
            Notifications{" "}
          </h2>{" "}
          <p className="ml-6.5 w-130 mb-2.75 font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
            {" "}
            Manage system announcements and keep users informed about important
            updates.{" "}
          </p>{" "}
        </div>{" "}
        <button
          onClick={() => setShowCreateModal(true)}
          className="w-49 flex items-center flex-row whitespace-nowrap gap-2.5 ml-92.25 mt-9.5 rounded-[10px] h-10 p-2.5 bg-[linear-gradient(90deg,#0F766E_0%,#000000_100%)]"
        >
          <AddIcon />
          <p className="font-roboto text-[14px] text-[#FFFFFF]">
            Create Announcement
          </p>
        </button>
      </div>{" "}
      <div className="m-8 mt-3.75 gap-4 flex flex-row">
        {" "}
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="p-5.25 w-85.5 h-44 rounded-xl border border-[#DEF1F1] bg-[#F6FEFD]"
          >
            {" "}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#D0FAF0]">
              {" "}
              {notification.icon}{" "}
            </div>{" "}
            <p className="mt-3 font-semibold text-[30px] font-roboto">
              {" "}
              {notification.count}{" "}
            </p>{" "}
            <p className="font-roboto text-[#232B3D] text-[14px] font-medium mt-1">
              {" "}
              {notification.title}{" "}
            </p>{" "}
            <p className="font-roboto text-[#697282] text-[12px] font-medium">
              {" "}
              {notification.description}{" "}
            </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      <div className="w-276 h-18.5 bg-[#F6FEFD] rounded-xl border border-[#DEF1F1] mt-6 ml-8 flex flex-row">
        {" "}
        <div className="flex flex-row w-96 h-10 gap-3 border border-[#DEF1F1] rounded-md m-4.5 items-center p-3.75">
          {" "}
          <SearchIcon />{" "}
          <input
            type="text"
            className="text-[14px] text-[#374052] font-roboto outline-none"
            placeholder="Search announcements..."
          />{" "}
        </div>{" "}
        <div className="ml-7 w-40 h-10 p-3 rounded-md border mt-4.25 border-[#DEF1F1] flex flex-row items-center">
          {" "}
          <AllStatus />{" "}
          <select className="pl-2 text-[14px] text-[#374052] outline-none">
            {" "}
            <option>All Status</option>{" "}
          </select>{" "}
        </div>{" "}
        <div className="w-40 h-10 p-3 ml-2 rounded-md border mt-4.25 border-[#DEF1F1] flex flex-row items-center">
          {" "}
          <AllUserIcon />{" "}
          <select className="pl-2 text-[14px] text-[#374052] outline-none">
            {" "}
            <option>All Users</option>{" "}
          </select>{" "}
        </div>{" "}
        <div className="w-40 h-10 p-3 ml-2 rounded-md border mt-4.25 border-[#DEF1F1] flex flex-row items-center">
          {" "}
          <DateIcon />{" "}
          <select className="pl-2 text-[14px] text-[#374052] outline-none">
            {" "}
            <option></option>{" "}
          </select>{" "}
        </div>{" "}
        <button className="w-32.25 h-10 p-3 ml-2 rounded-md border mt-4.25 border-[#DEF1F1] flex flex-row items-center">
          {" "}
          <ResetIcon />{" "}
          <p className="pl-2 text-[14px] text-[#374052]"> Reset </p>{" "}
        </button>{" "}
      </div>{" "}
      {/* TABLE  */}{" "}
      <table className="w-276 h-540 bg-[#F6FEFD] rounded-xl mt-5 border ml-8 border-[#DEF1F1]">
        {" "}
        <colgroup>
          {" "}
          <col className="w-63" /> <col className="w-52" />{" "}
          <col className="w-39.5" /> <col className="w-36.5" />{" "}
          <col className="w-29.25" /> <col className="w-33" />{" "}
          <col className="w-23.5" />{" "}
        </colgroup>{" "}
        <thead className="bg-[#DEF1F1] h-10 font-medium text-[12px] text-[#8B92A0] font-roboto">
          {" "}
          <tr>
            {" "}
            <th className="pl-7 text-left"> Announcement </th>{" "}
            <th className="pl-7 text-left"> Type </th>{" "}
            <th className="pl-5 text-left"> Target Users </th>{" "}
            <th className="pl-6 text-left"> Status </th>{" "}
            <th className="pl-6 text-left"> Created </th>{" "}
            <th className="pl-5 text-left"> Last Updated </th>{" "}
            <th className="text-left"> Actions </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {announcementList.map((announcement, index) => (
            <tr key={index} className="h-20 border-t border-[#DEF1F1]">
              {" "}
              {/* Announcement */}{" "}
              <td className="px-4">
                {" "}
                <div className="flex flex-col min-w-0">
                  {" "}
                  <span className="text-[14px] font-roboto font-medium text-[#000000]">
                    {" "}
                    {announcement.announce}{" "}
                  </span>{" "}
                  <span className="text-[12px] font-roboto text-[#697282] mt-1 truncate max-w-50">
                    {" "}
                    {announcement.info}{" "}
                  </span>{" "}
                </div>{" "}
              </td>{" "}
              {/* Type */}{" "}
              <td className="px-4">
                {" "}
                <div className="flex whitespace-nowrap font-medium flex-row items-center gap-2 text-[14px] text-[#4C5568]">
                  {" "}
                  <SpeakerIcon /> <span> System Announcement </span>{" "}
                </div>{" "}
              </td>{" "}
              {/* Target Users */}{" "}
              <td className="px-4">
                {" "}
                <div className="flex flex-row items-center font-medium gap-2 text-[14px] text-[#374052]">
                  {" "}
                  {announcement.target === "All Users" ? (
                    <>
                      {" "}
                      <GAllUsers /> <span>All Users</span>{" "}
                    </>
                  ) : announcement.target === "Free Users" ? (
                    <>
                      {" "}
                      <GFreeUserIcon /> <span>Free Users</span>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <CrownIcon /> <span>Premium Users</span>{" "}
                    </>
                  )}{" "}
                </div>{" "}
              </td>{" "}
              {/* Status */}{" "}
              <td className="px-4">
                {" "}
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-roboto font-medium ${announcement.status === "Published" ? "bg-[#D0FAF0] text-[#00544F]" : "bg-[#DEF1F1] text-[#4C5568]"}`}
                >
                  {" "}
                  <span
                    className={`w-1.5 h-1.25 rounded-full ${announcement.status === "Published" ? "bg-[#00544F]" : "bg-[#4C5568]"}`}
                  />{" "}
                  {announcement.status}{" "}
                </span>{" "}
              </td>{" "}
              {/* Created */}{" "}
              <td className="px-4 text-[14px] font-medium whitespace-nowrap text-[#4C5568] font-roboto">
                {" "}
                {announcement.createdDate}{" "}
              </td>{" "}
              {/* Updated */}{" "}
              <td className="px-4 text-[14px] font-medium whitespace-nowrap text-[#4C5568] font-roboto">
                {" "}
                {announcement.updateDate}{" "}
              </td>{" "}
              {/* Actions */}{" "}
              <td className="px-4 relative">
                {" "}
                <button
                  onClick={() =>
                    setOpenModal(openModal === index ? null : index)
                  }
                >
                  {" "}
                  <DotsIcon />{" "}
                </button>{" "}
                {openModal === index && (
                  <div className="absolute right-4 top-12 z-50">
                    {" "}
                    <DotModal
                      onEdit={() => {
                        setSelectedAnnouncement({
                          ...announcement,
                          originalIndex: index,
                        });
                        setShowEditModal(true);
                        setOpenModal(null);
                      }}
                      onDelete={() => {
                        handleDeleteClick(announcement, index);
                      }}
                      onUnpublish={() => {
                        setSelectedAnnouncement({
                          ...announcement,
                          originalIndex: index,
                        });
                        setOpenModal(null);
                        setShowUnpublishModal(true);
                      }}
                    />{" "}
                  </div>
                )}{" "}
              </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </table>{" "}
      {/*  FOOTER */}{" "}
      <div className="ml-13.5 mt-8 flex flex-row font-roboto w-265 h-17.25 border border-[#F3F4F6] gap-2.5 justify-center">
        {" "}
        <p className="ml-6 whitespace-nowrap w-full text-[14px] text-[#697282]">
          {" "}
          Showing{" "}
          <span className="font-medium"> {announcementList.length} </span>{" "}
          announcements{" "}
        </p>{" "}
        <div className="flex whitespace-nowrap flex-row ml-26 text-[12px] text-[#8B92A0] gap-3">
          {" "}
          <CircleExclamIcon />{" "}
          <p className="-mt-1.5 text-[16px] text-[#8B92A0]">
            {" "}
            Scroll horizontally to view all columns{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      {/* DELETE CONFIRMATION MODAL */}{" "}
      {showDeleteModal && (
        <DeleteModal
          onCancel={() => {
            setShowDeleteModal(false);
            setSelectedAnnouncement(null);
          }}
          onConfirmDelete={handleConfirmDelete}
        />
      )}{" "}
      {/*  EDIT MODAL  */}{" "}
      {showEditModal && (
        <EditAnnouncementModal
          announcement={selectedAnnouncement}
          onClose={() => {
            setShowEditModal(false);
            setSelectedAnnouncement(null);
          }}
        />
      )}
      {/*  SUCCESS TOAST  */}
      {showSuccessToast && (
        <div className="fixed bottom-6 right-6 z-[200] w-96 min-h-17.5 bg-[#F6FEFD] border border-[#DEF1F1] rounded-md shadow-lg flex flex-row items-center px-4 py-3">
          {" "}
          {/* Tick */}{" "}
          <div className="bg-[#D0FAF0] h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-full">
            {" "}
            <CTickIcon />{" "}
          </div>{" "}
          {/* Message */}{" "}
          <p className="ml-3 w-40 font-roboto text-[14px] text-[#00544F] leading-5">
            {" "}
            Announcement deleted successfully.{" "}
          </p>{" "}
          {/* Undo */}{" "}
          {deletedAnnouncement && (
            <button
              onClick={handleUndo}
              className="ml-auto flex items-center gap-1 font-roboto text-[14px] text-[#00544F]"
            >
              {" "}
              <UndoIcon /> <span>Undo</span>{" "}
            </button>
          )}{" "}
          {/* Close */}{" "}
          <button onClick={handleCloseToast} className="ml-4">
            {" "}
            <GreyCrossIcon />{" "}
          </button>{" "}
        </div>
      )}{" "}
      {showCreateModal && (
        <CreateAnnouncementModal onClose={() => setShowCreateModal(false)} />
      )}
      {showUnpublishModal && (
        <UnpublishModal
          onCancel={() => {
            setShowUnpublishModal(false);
            setSelectedAnnouncement(null);
          }}
          onConfirm={() => {
            if (selectedAnnouncement) {
              setAnnouncementList((currentList) =>
                currentList.map((item, index) =>
                  index === selectedAnnouncement.originalIndex
                    ? { ...item, status: "Unpublished" }
                    : item,
                ),
              );
            }

            setShowUnpublishModal(false);
            setSelectedAnnouncement(null);
          }}
        />
      )}
    </div>
  );
}
export default Notifications;
