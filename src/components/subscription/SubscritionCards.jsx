"use client";
import {
  AddIcon,
  GDoubleCheckIcon,
  NotpadIcon,
  SearchIcon,
  PlansIcon,
  SubscriberIcon,
} from "../../Icons/Icons";
import Plans from "./Plans";
import AddSubscriptionPlan from "../../ReactPages/AddSubscriptionPlan";
import EditSubscriptionPlan from "../../ReactPages/EditSubscriptionPlan";
import ViewSubscriptionPlan from "../../ReactPages/ViewSubscriptionPlan";
import DeleteSubscriptiionPlan from "../../ReactPages/DeleteSubscriptiionPlan";
import { useState } from "react";
const subscriptions = [
  {
    icon: <PlansIcon />,
    number: 5,
    title: "Total Plans",
  },
  {
    icon: <GDoubleCheckIcon />,
    number: 4,
    title: "Active Plans",
  },
  {
    icon: <NotpadIcon />,
    number: "3",
    title: "Published",
  },
  {
    icon: <SubscriberIcon />,
    number: "25,235",
    title: "Total Subscribers",
  },
];

function SubscritionCards() {
  const [modal, setModal] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  return (
    <div>
      <div className="flex flex-row">
        <div className=" w-86.25 ">
          <h2 className="ml-6 mt-9.5 font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
            Subscription Plans{" "}
          </h2>
          <p className="ml-6.25 mb-2.75  w-84.25  font-roboto text-[14px] leading-[133%] text-[#A1A1A1]">
            Manage plan pricing, features, status, and publication{" "}
          </p>
        </div>
        <button
          onClick={() => setModal("add")}
          className="flex flex-row justify-center items-center gap-2.5 w-57 ml-129 mt-9.5
             rounded-[10px] h-11 p-2.5
             bg-[linear-gradient(90deg,#0F766E_0%,#000000_100%)]"
        >
          <AddIcon />
          <p className="font-roboto text-medium text-[#FFFFFF]">
            Add Subscription Plan
          </p>
        </button>
      </div>
      <div className="flex flex-row gap-3  ml-6">
        {/* {subscriptions.map((subs) => {
          return (
            <div className="w-63.5 h-39.75 bg-[#F0F0F0] flex flex-col justify-center mt-6.5">
              <div className="w-14.75 h-13 mt-4.5 ml-5.5 bg-[#FFFFFF] flex  items-center justify-center">
                {" "}
                {subs.icon}
              </div>{" "}
              <p className="text-[20px] ml-6 font-medium font-roboto">
                {subs.number}
              </p>
              <p className="text-[14px] ml-6 font-roboto text-[#A1A1A1]">
                {subs.title}
              </p>
            </div>
          );
        })} */}

        {subscriptions.map((subs) => (
          <div
            key={subs.title}
            className="w-63.5 h-39.75 bg-[#F0F0F0] flex flex-col justify-center mt-6.5"
          >
            <div className="w-14.75 h-13 mt-4.5 ml-5.5 bg-white flex items-center justify-center">
              {subs.icon}
            </div>

            <p className="text-[20px] ml-6 font-medium font-roboto">
              {subs.number}
            </p>

            <p className="text-[14px] ml-6 font-roboto text-[#A1A1A1]">
              {subs.title}
            </p>
          </div>
        ))}
      </div>
      {/* Search bar */}
      <div className=" w-125 h-7.25 flex gap-2.5  rounded-lg p-2 items-center flex-row-41.75  font-roboto font-medium leading-[133%] m-7 text-[#868686]">
        <SearchIcon />
        <input
          className=" text-[14px] w-44"
          type="text"
          name=""
          id=""
          placeholder=" Search Plans..."
        />
      </div>
      <div className="ml-6">
        <button className=" w-27.75 h-7 text-white text-[14px] font-medium bg-[#0F766E] ">
          All
        </button>
        <button className=" w-27.75 h-7 text-[#868686] bg-[#F5F5F5] text-[14px] font-medium ">
          Active
        </button>
        <button className=" w-27.75 h-7 text-[#868686] bg-[#F5F5F5] text-[14px] font-medium ">
          Deactivated
        </button>
      </div>

      {/* Table */}
      <Plans
        onView={(plan) => {
          setSelectedPlan(plan);
          setModal("view");
        }}
        onEdit={(plan) => {
          setSelectedPlan(plan);
          setModal("edit");
        }}
        onDelete={(plan) => {
          setSelectedPlan(plan);
          setModal("delete");
        }}
      />
      {/* Add Subscription Plan Modal */}
      {modal === "add" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
          <AddSubscriptionPlan onClose={() => setModal(null)} />
        </div>
      )}

      {/* View Subscription Plan Modal */}

      {modal === "view" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
          <ViewSubscriptionPlan
            plan={selectedPlan}
            onClose={() => setModal(null)}
            onEdit={() => setModal("edit")}
          />
        </div>
      )}

      {modal === "edit" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
          <EditSubscriptionPlan
            plan={selectedPlan}
            onClose={() => setModal(null)}
          />
        </div>
      )}

      {modal === "delete" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
          <DeleteSubscriptiionPlan
            plan={selectedPlan}
            onClose={() => setModal(null)}
          />
        </div>
      )}
    </div>
  );
}

export default SubscritionCards;
