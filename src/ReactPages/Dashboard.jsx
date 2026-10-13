import Activity from "../components/dashboard/Activity";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import SubscriptionOverview from "../components/SubscriptionOverview";
import Actions from "../components/dashboard/Actions";
import Analytics from "../components/Analytics";
import Learning from "../components/dashboard/Learning";
import Settings from "../components/Settings";
import GradeManagement from "../components/academicManagement/GradeManagement";
import SubjectManagement from "../components/academicManagement/SubjectManagement";
import UserManagement from "../components/userManagement/UserManagement";
import UserMgtHeading from "../components/userManagement/UserMgtHeading";
function Dashboard() {
  return (
    <div className="flex flex-col gap-6 relative h-950.75">
      <div className="flex flex-col gap-6">
        <WelcomeCard />
        <Learning />
      </div>
      <div className="flex gap-6">
        <Actions />
        <Activity />
      </div>
      <div className="flex gap-6">
        <SubscriptionOverview />
        <Analytics />
      </div>
      <Settings />
      <GradeManagement />
      <SubjectManagement />
      <UserMgtHeading />
      <UserManagement />
    </div>
  );
}

export default Dashboard;
