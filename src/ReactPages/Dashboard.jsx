import React from "react";
import WelcomeCard from "../components/dashboard/WelcomCard";
import Labs from "../components/dashboard/Labs";
import Profile from "../components/dashboard/Profile";
import Subscription from "../components/dashboard/Subscription";
import ContinueLearning from "../components/dashboard/ContinueLearning";
import PopularLabs from "../components/dashboard/PopularLabs";
import PremiumLabs from "../components/dashboard/PremiumLabs";
import MCQAnalysis from "../components/dashboard/MCQAnalysis";
import AIRecommendations from "../components/dashboard/AIRecommendations";
function Dashboard() {
  return (
    <div className="h-818 w-284.5">
      <WelcomeCard />
      <Labs />
      <div className="flex flex-row">
        <Profile />
        <Subscription />
      </div>
      <ContinueLearning />
      <PopularLabs />
      <PremiumLabs />
      <div className="flex flex-row">
        <MCQAnalysis />
        <AIRecommendations />
      </div>
    </div>
  );
}

export default Dashboard;
