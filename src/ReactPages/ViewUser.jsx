import LearningCard from "../components/userManagement/LearningCard";
import PerformanceSummary from "../components/userManagement/PerformanceSummary";
import Profile from "../components/userManagement/Profile";
import RecentActivity from "../components/userManagement/RecentActivity";
import ViewedLabs from "../components/userManagement/ViewedLabs";

function ViewUser() {
  return (
    <div>
      <Profile />
      <LearningCard />
      <PerformanceSummary />
      <div className="flex flex-row gap-3.5 mt-8">
        <ViewedLabs />
        <RecentActivity />
      </div>
    </div>
  );
}

export default ViewUser;
