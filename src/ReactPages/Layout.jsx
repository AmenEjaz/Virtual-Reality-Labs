// import Sidebar from "../Components/Sidebar";
// import Navbar from "../Components/Navbar";
// export default function Layout({ children }) {
//   return (
//     <div className="flex">
//       {/* Your existing sidebar */}
//       <aside>
//         {/* Keep your existing sidebar code here */}
//         <Sidebar />
//       </aside>

//       <main className="flex-1">
//         {/* Your existing navbar */}
//         <Navbar />

//         {children}
//       </main>
//     </div>
//   );
// }
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
