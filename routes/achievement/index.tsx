import AchievementModule from "../../modules/achievement";
import { ProtectedRoute } from "../../components/ProtectedRoute";

export function meta() {
  return [
    { title: "Achievement" },
    { name: "description", content: "Achievement Management" },
  ];
}

export default function AchievementPage() {
  return (
    <ProtectedRoute requiredModule="ACHIEVEMENT">
      <AchievementModule />
    </ProtectedRoute>
  );
}
