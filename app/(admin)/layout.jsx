import Sidebar from "../../src/components/Sidebar";
import Navbar from "../../src/components/Navbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <div className="flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
