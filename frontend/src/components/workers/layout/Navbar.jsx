import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutGrid, Search, LogOut, Menu } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { supabase } from "../supabase/client";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      const { data } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("user_id", user.id)
        .single();
      setProfile(data);
    };
    fetchProfile();
  }, [user]);

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
    setIsOpen(false);
  };

  const displayName =
    profile?.full_name || user?.email?.split("@")[0] || "User";

  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Workers", path: "/workers" },
    { label: "Profile", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center bg-blue-600 rounded">
              <LayoutGrid className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-lg">Event Manager</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm transition ${
                  location.pathname === item.path
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-500 hover:bg-gray-100 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex p-2 rounded hover:bg-gray-100">
            <Search className="h-5 w-5 text-gray-500" />
          </button>

          {/* Avatar */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-semibold">
              {initials}
            </div>
            <span className="hidden lg:block text-sm font-medium">
              {displayName}
            </span>
          </div>

          {/* Logout Desktop */}
          <button
            onClick={handleLogout}
            className="hidden md:flex items-center gap-1 text-sm text-gray-500 hover:text-black"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg flex flex-col">
            <div className="p-4 border-b font-semibold flex justify-between">
              Menu
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <nav className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm ${
                    location.pathname === item.path
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto p-4 border-t">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{displayName}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 border rounded text-sm hover:bg-gray-100"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
