import {
  BDoubleTickIcon,
  DeleteIcon,
  EditIcon,
  EyeIcon,
  GDoubleCheckIcon,
} from "../../Icons/Icons";

const plans = [
  {
    plan: "Free",
    description: "Get started with essential VR labs at no cost",
    price: "$0.00",
    duration: "monthly",
    labAccess: "Free Labs",
    status: "Active",
    publication: "Published",
  },
  {
    plan: "Premium",
    description: "Unlimited access to all premium VR labs",
    price: "$14.99",
    duration: "monthly",
    labAccess: "All Premium Labs",
    status: "Active",
    publication: "Published",
  },
  {
    plan: "Premium Annual",
    description: "Best value with 2 months free for dedicated",
    price: "$119.99",
    duration: "yearly",
    labAccess: "Premium Labs",
    status: "Active",
    publication: "Published",
  },
  {
    plan: "Free",
    description: "Get started with essential VR labs at no cost",
    price: "$0.00",
    duration: "monthly",
    labAccess: "Free Labs",
    status: "Active",
    publication: "Published",
  },
  {
    plan: "Free",
    description: "Get started with essential VR labs at no cost",
    price: "$0.00",
    duration: "monthly",
    labAccess: "Free Labs",
    status: "Active",
    publication: "Published",
  },
  {
    plan: "Free",
    description: "Get started with essential VR labs at no cost",
    price: "$0.00",
    duration: "monthly",
    labAccess: "Free Labs",
    status: "Active",
    publication: "Unpublished",
  },
  {
    plan: "Free",
    description: "Get started with essential VR labs at no cost",
    price: "$0.00",
    duration: "monthly",
    labAccess: "Free Labs",
    status: "Active",
    publication: "Unpublished",
  },
  {
    plan: "Legacy Basic",
    description: "Retired starter plan with basic lab access",
    price: "$4.99",
    duration: "monthly",
    labAccess: "Free Labs",
    status: "Deactivated",
    publication: "Unpublished",
  },
];

function Plans({ onView, onEdit, onDelete }) {
  return (
    <div className="w-261 ml-6 mt-9">
      <div
        className="
          h-13 grid grid-cols-[18%_12%_13%_13%_14%_12%_11%_7%] items-center
           bg-[#F5F5F5]  font-roboto font-medium text-[14px]  text-[#4B5563]
        "
      >
        <div className="pl-7">Plan</div>
        <div>Price</div>
        <div>Duration</div>
        <div>Features</div>
        <div>Lab Access</div>
        <div>Status</div>
        <div>Publication</div>
        <div>Actions</div>
      </div>

      <div>
        {plans.map((data, index) => (
          <div
            key={index}
            className="
              h-20.75
              grid  grid-cols-[18%_12%_13%_13%_14%_12%_11%_7%] items-center border-b border-[#F0F0F0] font-roboto
            "
          >
            <div className="pl-7">
              <p
                className="
                  font-medium  text-[16px] leading-5  text-[#1F2937]
                "
              >
                {data.plan}
              </p>

              <p
                className="
                  w-36.25 mt-1 font-normal text-[12px]  leading-3.5  text-[#6B7280]
                "
              >
                {data.description}
              </p>
            </div>
            <div>
              <p
                className="
                  font-medium text-[16px] leading-5 text-[#1F2937]
                "
              >
                {data.price}
              </p>

              <p
                className="
                  font-normal text-[13px] leading-4.25  text-[#6B7280]
                "
              >
                USD
              </p>
            </div>
            <div
              className="
                font-normal text-[16px] text-[#1F2937]
              "
            >
              {data.duration}
            </div>

            <div className="flex items-center gap-1">
              <BDoubleTickIcon />

              <span
                className="
                  font-normal text-[14px] text-[#668BD4] whitespace-nowrap
                "
              >
                4 Features
              </span>
            </div>

            <div className=" font-normal text-[16px] text-[#4B5563] whitespace-nowrap ">
              {data.labAccess}
            </div>

            <div>
              <div
                className={`
                  w-22 h-7 rounded-[20px] flex items-center justify-center gap-1 font-roboto font-medium text-[14px]

                  ${
                    data.status === "Active"
                      ? "bg-[#DCFCE7] text-[#15803D]"
                      : "bg-[#F0F0F0] text-[#707170]"
                  }
                `}
              >
                {data.status === "Active" && <GDoubleCheckIcon />}

                <span>{data.status}</span>
              </div>
            </div>

            <div>
              <div
                className={`
                  w-24 h-7  rounded-[20px] flex items-center justify-center font-roboto font-medium  text-[14px]

                  ${
                    data.publication === "Published"
                      ? "bg-[#DCFCE7] text-[#15803D]"
                      : "bg-[#F0F0F0] text-[#707170]"
                  }
                `}
              >
                {data.publication}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => onView(data)}>
                <EyeIcon />
              </button>

              <button onClick={() => onEdit(data)}>
                <EditIcon />
              </button>

              <button onClick={() => onDelete(data)} className="cursor-pointer">
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
