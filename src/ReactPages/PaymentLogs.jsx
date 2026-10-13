import Logs from "../components/payment logs/Logs";
import PaymentCards from "../components/payment logs/PaymentCards";

export default function PaymentLogs() {
  return (
    <div className="w-284.5 h-374">
      <PaymentCards />
      <Logs />
    </div>
  );
}
