import { ActiveUsersCard } from "../ActiveUsersCard/ActiveUsersCard";
import { QuickStartLearning } from "../QuickStartLearning/QuickStartLearning";
import { ScoreCard } from "../ScoreCard/ScoreCard";

export const TopRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <QuickStartLearning />
      <ScoreCard />
      <ActiveUsersCard />
    </div>
  );
};
