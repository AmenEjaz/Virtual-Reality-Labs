// import Layout from '../src/components/Layout'
// import Dashboard from "../src/ReactPages/Dashboard";
// export default function HomePage() {
//   return (
//     <Layout>
//       <Dashboard />
//     </Layout>
//   );
// }

import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard");
}