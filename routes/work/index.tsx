import WorkModule from "../../modules/work";
import { ProtectedRoute } from "../../components/ProtectedRoute";

export function meta() {
  return [
    { title: "Work" },
    { name: "description", content: "Work Management" },
  ];
}

export default function WorkPage() {
  return (
    <ProtectedRoute requiredModule="WORK">
      <WorkModule />
    </ProtectedRoute>
  );
}