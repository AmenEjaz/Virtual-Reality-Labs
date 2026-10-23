// import { EmailIcon, PhoneIcon, LocationIcon } from "@/icons/Icons";
// import React from "react";

// const contact=[
//     {
//         icon:<EmailIcon/>,
//         title:"Email Us",
//         info:"hello@vrlabs.com"

//     }.
//     {
//         icon:<PhoneIcon/>,
//         title:"Call Us",
//         info:"03190412670"

//     }.
//     {
//         icon:<LocationIcon/>,
//         title:"Visit Us",
//         info:"1st Floor KPIT Park, Silk Road Mandian Abbottabad 22010"

//     }.
// ]

// function Contact() {
//   return (
//     <div className="w-360 h-147.25 flex font-roboto">
//       {/* Right */}

//       <div className="mt-23.5 ml-32.25">
//         <button className="w-27 h-6.5 text-[10px] text-[#474747] gap-2 rounded-lg bg-[#06B6D433] flex items-center justify-center">
//           <div className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]"></div>
//           Contact Us
//         </button>

//         <h2 className="text-[40px] mt-6.5 mb-4.5 font-bold">Get In Touch</h2>
//         <p className="w-86 text-[14px] mb-5.5 text-[#000000]">
//           Have questions about VR Labs? Want to schedule a demo for your school?
//           We'd love to hear from you.
//         </p>

// <div>
//     {contact.map((type)=>{
//         return <div className="flex gap-3">

//             {/* Icon */}
// <div className="w-12.5 h-10.75 rouded-[6px] bg-[#0F766E] flex items-center justify-center">
//     {type.icon}
// </div>
// <div className="flex flex-col">
//     <p className="text-[14px] ">{type.title}</p>
//     <p className="text-[12] text-[#747373] ">{type.info}</p>
// </div>
//             </div>
//     })}
// </div>

//       </div>
//       {/* Form Left */}
//       <div className="w-142.25 h-106 rounded-[39px] pt-15.5 pl-10.5 mt-18.5  border border-[#D9D9D9]">
//         <h3 className="text-[20px] font-bold">Send us a message</h3>
//         <form className="text-[12px] mt-10.5" action="">
//           <label className="" htmlFor="">
//             Name *
//           </label>
//           <br />
//           <input
//             className="border mt-2.5 mb-4.5 p-2.5 rounded-[6px] border-[#A7A5A5] w-121 h-9"
//             type="text"
//             placeholder="Your Full Name"
//             required
//           />
//           <br />

//           <label className="" htmlFor="">
//             Email *
//           </label>
//           <br />
//           <input
//             className="border mt-2.5 p-2.5 mb-4.5 rounded-[6px] : border-[#A7A5A5] w-121 h-9"
//             type="text"
//             placeholder="smdesigner024@gmail.com"
//             required
//           />
//           <label className="required" htmlFor="">
//             Message *
//           </label>
//           <br />
//           <input
//             className="border mt-2.5 mb-4.5 p-2.5 rounded-[6px] border-[#A7A5A5] w-121 h-18.5"
//             type="text"
//             placeholder="Tell Us How can we help you"
//             required
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;
import { EmailIcon, PhoneIcon, LocationIcon } from "@/icons/Icons";
import React from "react";

const contact = [
  {
    icon: <EmailIcon />,
    title: "Email Us",
    info: "hello@vrlabs.com",
  },
  {
    icon: <PhoneIcon />,
    title: "Call Us",
    info: "03190412670",
  },
  {
    icon: <LocationIcon />,
    title: "Visit Us",
    info: "1st Floor KPIT Park, Silk Road Mandian Abbottabad 22010",
  },
];

function Contact() {
  return (
    <section id="contact">
      <div className="flex h-147.25 w-360 font-roboto gap-49">
        {/* Contact Information */}
        <div className="ml-32.25 mt-23.5">
          <button className="flex h-6.5 w-27 items-center justify-center gap-2 rounded-lg bg-[#06B6D433] text-[10px] text-[#474747]">
            <div className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]"></div>
            Contact Us
          </button>

          <h2 className="mb-4.5 mt-6.5 text-[40px] font-bold">Get In Touch</h2>

          <p className="mb-5.5 w-86 text-[14px] text-[#000000]">
            Have questions about VR Labs? Want to schedule a demo for your
            school? We would love to hear from you.
          </p>

          <div className="flex flex-col gap-5">
            {contact.map((type) => (
              <div key={type.title} className="flex items-center gap-3">
                {/* Icon */}
                <div className="flex h-10.75 w-12.5 shrink-0 items-center justify-center rounded-[6px] bg-[#0F766E]">
                  {type.icon}
                </div>

                <div className="flex flex-col">
                  <p className="text-[14px]">{type.title}</p>
                  <p className="text-[12px] text-[#747373]">{type.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="ml-12 mt-18.5 h-106 w-142.25 rounded-[39px] border border-[#D9D9D9] pt-15.5 pl-10.5">
          <h3 className="text-[20px] font-bold">Send us a message</h3>

          <form className="mt-10.5 text-[12px]">
            <label htmlFor="name">Name *</label>
            <br />
            <input
              id="name"
              className="mb-4.5 mt-2.5 h-9 w-121 rounded-[6px] border border-[#A7A5A5] p-2.5"
              type="text"
              placeholder="Your Full Name"
              required
            />
            <br />

            <label htmlFor="email">Email *</label>
            <br />
            <input
              id="email"
              className="mb-4.5 mt-2.5 h-9 w-121 rounded-[6px] border border-[#A7A5A5] p-2.5"
              type="email"
              placeholder="smdesigner024@gmail.com"
              required
            />
            <br />

            <label htmlFor="message">Message *</label>
            <br />
            <textarea
              id="message"
              className="mb-4.5 mt-2.5 h-18.5 w-121 resize-none rounded-[6px] border border-[#A7A5A5] p-2.5"
              placeholder="Tell us how we can help you"
              required
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
