import { type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

type ProtectedRouteProps = {
  children: ReactNode;
  requiredModule?: string;
};

export function ProtectedRoute({ children, requiredModule }: ProtectedRouteProps) {
  const location = useLocation();
  const { isAuthenticated, hasModule } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace state={{ from: location.pathname }} />;
  }

  if (requiredModule && !hasModule(requiredModule)) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  return <>{children}</>;
}
