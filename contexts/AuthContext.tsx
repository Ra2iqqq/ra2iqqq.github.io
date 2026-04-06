import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type AuthUser = {
  id: string;
  Firstname: string;
  Lastname: string;
  profile_picture?: string;
  modules: string[];
  roleName: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  roleName: string;
  isAdmin: boolean;
  isAuthenticated: boolean;
  hasModule: (module: string) => boolean;
  logout: () => Promise<void>;
  loginAsDemo: () => void;
};

const defaultUser: AuthUser = {
  id: "demo-user",
  Firstname: "Guest",
  Lastname: "User",
  modules: ["PROFILE", "WORK", "WORK_DETAILS", "ACHIEVEMENT", "ACHIEVEMENT_DETAILS", "CERTIFICATION"],
  roleName: "Admin",
};

const fallbackValue: AuthContextValue = {
  user: defaultUser,
  roleName: defaultUser.roleName,
  isAdmin: true,
  isAuthenticated: true,
  hasModule: () => true,
  logout: async () => {},
  loginAsDemo: () => {},
};

const AuthContext = createContext<AuthContextValue>(fallbackValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(defaultUser);

  const value = useMemo<AuthContextValue>(() => {
    const hasModule = (module: string) => {
      if (!user) return false;
      if (user.roleName.toUpperCase() === "ADMIN") return true;
      return user.modules.includes(module);
    };

    return {
      user,
      roleName: user?.roleName ?? "Guest",
      isAdmin: (user?.roleName ?? "").toUpperCase() === "ADMIN",
      isAuthenticated: Boolean(user),
      hasModule,
      logout: async () => {
        setUser(null);
      },
      loginAsDemo: () => {
        setUser(defaultUser);
      },
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
