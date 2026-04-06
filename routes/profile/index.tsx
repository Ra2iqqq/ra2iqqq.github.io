import ProfileModule from "../../modules/profile";
import { ProtectedRoute } from "../../components/ProtectedRoute";

export function meta() {
  return [
    { title: "Profile" },
    { name: "description", content: "User Profile Management" },
  ];
}

export default function ProfilePage() {
  return (
    <ProtectedRoute requiredModule="PROFILE">
      <ProfileModule />
    </ProtectedRoute>
  );
}