import CertificationModule from "../../modules/certification";
import { ProtectedRoute } from "../../components/ProtectedRoute";

export function meta() {
  return [
    { title: "Certification" },
    { name: "description", content: "Certification Management" },
  ];
}

export default function CertificationPage() {
  return (
    <ProtectedRoute requiredModule="CERTIFICATION">
      <CertificationModule />
    </ProtectedRoute>
  );
}
