import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import HomeRoute from "./routes";
import LoginPage from "./routes/auth/login";
import ProfilePage from "./routes/profile";
import WorkPage from "./routes/work";
import WorkDetailsPage from "./routes/work/workdetails/index";
import AchievementPage from "./routes/achievement";
import AchievementDetailsPage from "./routes/achievement/achievementDetails/index";
import CertificationPage from "./routes/certification";

function DashboardShell({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route
            path="/dashboard/profile"
            element={
              <DashboardShell>
                <ProfilePage />
              </DashboardShell>
            }
          />
          <Route
            path="/dashboard/work"
            element={
              <DashboardShell>
                <WorkPage />
              </DashboardShell>
            }
          />
          <Route
            path="/dashboard/work/details"
            element={
              <DashboardShell>
                <WorkDetailsPage />
              </DashboardShell>
            }
          />
          <Route
            path="/dashboard/achievement"
            element={
              <DashboardShell>
                <AchievementPage />
              </DashboardShell>
            }
          />
          <Route
            path="/dashboard/achievement/details"
            element={
              <DashboardShell>
                <AchievementDetailsPage />
              </DashboardShell>
            }
          />
          <Route
            path="/dashboard/certification"
            element={
              <DashboardShell>
                <CertificationPage />
              </DashboardShell>
            }
          />
          <Route path="*" element={<Navigate to="/dashboard/profile" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
