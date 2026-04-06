type AppRoute = {
  path: string;
  file: string;
};

const routes: AppRoute[] = [
  { path: "/", file: "routes/index.tsx" },
  { path: "/auth/login", file: "routes/auth/login/index.tsx" },
  { path: "/dashboard/profile", file: "routes/profile/index.tsx" },
  { path: "/dashboard/work", file: "routes/work/index.tsx" },
  { path: "/dashboard/achievement", file: "routes/achievement/index.tsx" },
  { path: "/dashboard/certification", file: "routes/certification/index.tsx" },
  {
    path: "/dashboard/work/details",
    file: "routes/work/workdetails/index.tsx",
  },
  {
    path: "/dashboard/achievement/details",
    file: "routes/achievement/achievementDetails/index.tsx",
  },
];

export default routes;
