import AchievementDetailsModule from "../../../modules/achievement/achievementDetails";
import { ProtectedRoute } from "../../../components/ProtectedRoute";

export function meta() {
  return [
    { title: "Achievement Details" },
    { name: "description", content: "Achievement Details" },
  ];
}

export default function AchievementDetailsPage() {
  return (
    <ProtectedRoute requiredModule="ACHIEVEMENT_DETAILS">
      <AchievementDetailsModule />
    </ProtectedRoute>
  );
}
