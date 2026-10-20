import React from "react";
import Instructions from "../components/subsription/payment/Instructions";
import PaymentDetails from "../components/subsription/payment/PaymentDetails";

function Payment() {
  return (
    <div className="w-272.4 h-460 bg-[#F5FEFF] ">
      <Instructions />
      <PaymentDetails/>
    </div>
  );
}

export default Payment;
