import Navbar from "../../src/components/Navbar";
import Sidebar from "../../src/components/Sidebar";
export default function UserLayout({ children }) {
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
