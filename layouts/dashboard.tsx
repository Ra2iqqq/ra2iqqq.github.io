import { useState, type ReactNode } from "react";
import {
  User,
  Briefcase,
  Trophy,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const iconStyling = "w-4 h-4";
const headerFullName = "Muhammad Raziq";
const headerRole = "Software Engineer Testing";
const headerPhotoPath = new URL("../utils/profile_picture.jpg", import.meta.url).href;

const socialLinks = [
  
  {
    name: "Email",
    href: "mailto:muhammadraziq1304@gmail.com",
    icon: <MdEmail className="h-4 w-4" />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/60148353092",
    icon: <FaWhatsapp className="h-4 w-4" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-raziq-bin-mohammad-suhainy/",
    icon: <FaLinkedinIn className="h-4 w-4" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Ra2iqqq",
    icon: <FaGithub className="h-4 w-4" />,
  },
];

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
  const [headerImageError, setHeaderImageError] = useState(false);
  const { user, logout } = useAuthContext();

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    navigate("/auth/login");
  };

  const displayName = (() => {
    if (!user) return "Guest User";
    const raw = user as typeof user & { firstname?: string; lastname?: string };
    const first = user.Firstname || raw.firstname || "";
    const last = user.Lastname || raw.lastname || "";
    const full = `${first} ${last}`.trim();
    return full || "Guest User";
  })();

  const filteredNav = mainNav;

  return (
    <div className="flex h-screen bg-[#0c1016] text-slate-100">
      <nav className="flex h-full flex-col justify-between border-r border-slate-800/80 bg-[#11161d] w-[18em] flex-shrink-0 shadow-2xl">
        <div className="px-6 py-8 flex-1 overflow-y-auto">
          {/* Top Header */}
          <div
            className="flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-gradient-to-b from-[#171d26] to-[#11161d] p-5 cursor-pointer"
            onClick={() => navigate("/")}
          >
            {!headerImageError ? (
              <img
                alt={displayName}
                src={headerPhotoPath}
                className="size-24 rounded-full object-cover border-2 border-slate-600"
                onError={() => setHeaderImageError(true)}
              />
            ) : (
              <div className="size-24 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
                <span className="text-3xl font-semibold text-slate-300">
                  {displayName
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </span>
              </div>
            )}

            <div className="min-w-0 text-center">
              <p className="text-2xs uppercase tracking-widest text-slate-400">Welcome</p>
              <p className="truncate text-[1.1rem] leading-tight font-semibold text-white">{headerFullName}</p>
              <p className="mt-1 text-sm text-slate-400">{headerRole}</p>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="mt-8 space-y-4 border-t border-slate-800 pt-6">
            <span className="inline-block text-xs uppercase tracking-widest text-slate-500 ml-1">
              Navigation
            </span>
            <ul className="space-y-2">
              {filteredNav.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all " +
                      (isActive
                        ? "bg-slate-800 text-white shadow border border-slate-700"
                        : "text-slate-400 hover:bg-slate-800/70 hover:text-slate-200")
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
          <div className="border-t border-slate-800 px-6 pt-4 pb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Social Media
            </p>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/70 py-2 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mt-4 w-full rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800"
            >
              {displayName}
            </button>
          </div>

          {isOpen && (
            <div className="absolute bottom-full left-0 w-full bg-[#161c24] rounded-lg mb-2 overflow-hidden shadow-lg border border-slate-700">
              <ul className="py-1">
                <li>
                  <a
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/dashboard/settings");
                    }}
                    className="cursor-pointer flex items-center gap-3 px-4 py-2 text-slate-200 hover:bg-slate-800 transition-colors rounded-lg"
                  >
                    <Settings className="h-4 w-4" />
                    <span className="select-none">Setting</span>
                  </a>
                </li>
                <li>
                  <a 
                    onClick={handleLogout}
                    className="cursor-pointer flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-950/30 transition-colors rounded-lg"
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
      <div className="flex-1 bg-[#0c1016] h-full overflow-auto">
        <div className="p-6 min-h-full">{children}</div>
      </div>
    </div>
  );
}