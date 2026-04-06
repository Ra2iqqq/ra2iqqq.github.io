import WorkDetailsModule from "../../../modules/work/workDetails";
import { ProtectedRoute } from "../../../components/ProtectedRoute";

export function meta() {
  return [
    { title: "Work Details" },
    { name: "description", content: "Work Details" },
  ];
}

export default function WorkDetailsPage() {
  return (
    <ProtectedRoute requiredModule="WORK_DETAILS">
      <WorkDetailsModule />
    </ProtectedRoute>
  );
}
