const messages = [
  {
    number: 10,
    title: "Total Messages",
    bg: "#FDFEE2",
  },
  {
    number: 8,
    title: "New",
    bg: "#E6F2FF",
  },
  {
    number: 5,
    title: "Read",
    bg: "#EDFFEA",
  },
  {
    number: 5,
    title: "Unread",
    bg: "#FFEAEA",
  },
];

function ContactCards() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-row items-center mt-6.5">
        {/* Title */}
        <div className="w-86.25 ml-7">
          <h2 className="font-roboto font-medium text-[20px] leading-[133%] text-[#000000]">
            Contact Messages
          </h2>

          <p className="mt-1 font-roboto text-[14px] whitespace-nowrap leading-[133%] text-[#A1A1A1]">
            Manage and respond to incoming messages from users
          </p>
        </div>

        {/* Unread Button */}
        <button className="w-38 h-10.5 ml-95 whitespace-nowrap border border-[#D1D5DB] rounded-lg text-[14px] flex items-center justify-center bg-[#FFE8E8]">
          4 unread messages
        </button>

        {/* Mark All Button */}
        <button className="w-38 h-10.5 ml-3 whitespace-nowrap mr-7 border border-[#D1D5DB] rounded-lg text-[14px] flex items-center justify-center bg-white">
          Mark All as read
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-row gap-5.5 ml-7 mt-6.5">
        {messages.map((message) => (
          <div
            key={message.title}
            style={{ backgroundColor: message.bg }}
            className="w-61.25 h-28  items-center justify-center rounded-lg flex flex-col "
          >
            <p className="ml-6 font-roboto font-medium text-[14px] text-[#262626]">
              {message.title}
            </p>

            <p className="ml-6 mt-2 font-roboto text-[24px] text-[#4B5563]">
              {message.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactCards;
