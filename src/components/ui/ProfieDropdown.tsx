import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Button from "./Button";
import useUserStore from "../../store/user.store";
import { removeItem } from "../../utils/localstorage";

type IconComponent = (
  props: React.SVGProps<SVGSVGElement>,
) => React.ReactElement;

interface MenuItem {
  label: string;
  href: string;
  icon: IconComponent;
}

const menuItems: MenuItem[] = [
  { label: "Profilim", href: "/students/me", icon: Icon.user },
  { label: "Mening kurslarim", href: "/courses", icon: Icon.book },
  { label: "Sozlamalar", href: "/settings", icon: Icon.settings },
];

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const user = useUserStore((state: any) => state.user);
  const setUser = useUserStore((state: any) => state.setUser);
  const setIsAuthenticated = useUserStore(
    (state: any) => state.setIsAuthenticated,
  );

  const fullName =
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    "Foydalanuvchi";
  const email = user?.email ?? "";
  const avatar = user?.avatar ?? user?.photo ?? "";
  const initials =
    [user?.firstName?.[0], user?.lastName?.[0]].filter(Boolean).join("") || "U";

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleLogout = () => {
    removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  const Avatar = ({ size }: { size: string }) =>
    avatar ? (
      <img
        src={avatar}
        alt={fullName}
        className={`${size} rounded-lg object-cover`}
      />
    ) : (
      <span
        className={`flex ${size} items-center justify-center rounded-lg bg-blue-600 font-semibold text-white`}
      >
        {initials.toUpperCase()}
      </span>
    );

  return (
    <div className="relative" ref={ref}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen((v) => !v)}
        leftIcon={<Avatar size="h-8 w-8 text-xs" />}
        rightIcon={
          <Icon.chevronDown
            className={`h-4 w-4 text-slate-400 transition ${open ? "rotate-180" : ""}`}
          />
        }
        className="cursor-pointer pl-1.5 pr-3 font-medium"
      >
        <span className="hidden max-w-30 truncate sm:block">{fullName}</span>
      </Button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-60 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl shadow-slate-200/60">
          <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
            <Avatar size="h-10 w-10 text-sm" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">
                {fullName}
              </p>
              {email && (
                <p className="truncate text-xs text-slate-400">{email}</p>
              )}
            </div>
          </div>

          <div className="py-1.5">
            {menuItems.map((item) => {
              const ItemIcon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  <ItemIcon className="h-4 w-4 text-slate-400" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="border-t border-slate-100 p-1.5">
            <Button
              variant="danger"
              size="sm"
              fullWidth
              onClick={handleLogout}
              leftIcon={<Icon.logout className="h-4 w-4" />}
              className="cursor-pointer"
            >
              Chiqish
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
