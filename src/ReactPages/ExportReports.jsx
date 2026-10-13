import Cards from "../components/export reports/Cards";
import Format from "../components/export reports/Format";
import RecentExports from "../components/export reports/RecentExports";
export default function ExportReports() {
  return (
    <div className="w-284.5 h-347">
      <Format />
      <Cards />
      <RecentExports />;
    </div>
  );
}
