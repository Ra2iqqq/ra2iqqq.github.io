import { useState, type ReactNode } from "react";
import {
  User,
  Briefcase,
  Trophy,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { pb } from "../utils/api";

const iconStyling = "w-4 h-4";

const mainNav = [
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: <User className={iconStyling} />,
    module: "PROFILE",
  },
  {
    name: "Work",
    href: "/dashboard/work",
    icon: <Briefcase className={iconStyling} />,
    module: "WORK",
  },
  {
    name: "Achievement",
    href: "/dashboard/achievement",
    icon: <Trophy className={iconStyling} />,
    module: "ACHIEVEMENT",
  },
  {
    name: "Certification",
    href: "/dashboard/certification",
    icon: <FileText className={iconStyling} />,
    module: "CERTIFICATION",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, hasModule, roleName } = useAuthContext();

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    navigate("/auth/login");
  };

  const displayName = (() => {
    if (!user) return "User";
    const raw = user as typeof user & { firstname?: string; lastname?: string };
    const first = user.Firstname || raw.firstname || "";
    const last = user.Lastname || raw.lastname || "";
    const full = `${first} ${last}`.trim();
    return full || "User";
  })();

  const profileImageUrl = user?.profile_picture
    ? pb.files.getUrl(user, user.profile_picture, { thumb: "100x100" })
    : "";

  // Filter navigation items based on user permissions
  const filteredNav = mainNav.filter((item) => {
    // If no module specified, always show
    if (!item.module) return true;
    // Show only if user has the required module
    return hasModule(item.module);
  });

  return (
    <div className="flex h-screen">
      <nav className="flex h-full flex-col justify-between border-e border-gray-100 bg-white w-[18em] flex-shrink-0">
        <div className="px-4 py-6 flex-1 overflow-y-auto">
          {/* Top Header */}
          <span
            className="grid h-10 w-full place-content-center rounded-lg cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/logobidai.png"
              alt="BidaiDesk Logo"
              className="h-15 w-auto"
            />
          </span>

          {/* Main Navigation */}
          <div className="mt-6 space-y-4 border-t-1 border-gray-200">
            <span className="inline-block text-xs text-gray-600 ml-4 my-3">
              Main
            </span>
            <ul className="space-y-1">
              {filteredNav.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      "flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-all " +
                      (isActive
                        ? "bg-pink-100 text-pink-700 shadow-sm border-l-4 border-pink-500"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-700")
                    }
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative flex-shrink-0">
          <div className="border-t border-gray-100 cursor-pointer">
            <a
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
            >
              {profileImageUrl ? (
                <img
                  alt={displayName}
                  src={profileImageUrl}
                  className="size-10 rounded-full object-cover"
                />
              ) : (
                <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-xs text-gray-500">U</span>
                </div>
              )}

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">
                    {displayName}
                  </strong>
                  <span>{roleName || "No Role"}</span>
                </p>
              </div>
            </a>
          </div>

          {isOpen && (
            <div className="absolute bottom-full left-0 w-full bg-white rounded-lg mb-2 overflow-hidden shadow-lg border border-gray-200">
              <ul className="py-1">
                <li>
                  <a
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/dashboard/settings");
                    }}
                    className="cursor-pointer flex items-center gap-3 px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors rounded-lg"
                  >
                    <Settings className="h-4 w-4" />
                    <span className="select-none">Setting</span>
                  </a>
                </li>
                <li>
                  <a 
                    onClick={handleLogout}
                    className="cursor-pointer flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 transition-colors rounded-lg"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="select-none">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <div className="flex-1 bg-pink-50 h-full overflow-auto">
        <div className="p-5 min-h-full">{children}</div>
      </div>
    </div>
  );
}