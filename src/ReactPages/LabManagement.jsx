import LabData from "../components/labManagement/LabData";
import Labs from "../components/labManagement/Labs";
import Searchbar from "../components/labManagement/Searchbar";

function LabManagement() {
  return (
    <div className="w-284 h-393.25">
      <Labs />
      <Searchbar />
      <LabData />
    </div>
  );
}

export default LabManagement;
