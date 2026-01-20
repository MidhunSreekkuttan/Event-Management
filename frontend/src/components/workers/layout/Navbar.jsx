import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutGrid, Search, LogOut, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Workers", path: "/workers" },
    { label: "Profile", path: "/profile" },
  ];

  const NavLinks = ({ mobile = false }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => mobile && setIsOpen(false)}
          className={`px-3 py-2 text-sm font-medium rounded-md transition ${
            location.pathname === item.path
              ? "bg-blue-100 text-blue-600"
              : "text-gray-600 hover:bg-gray-100 hover:text-black"
          } ${mobile ? "block w-full" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4">
        
        {/* Left */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center rounded bg-blue-600">
              <LayoutGrid className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-lg">Event Manager</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1">
            // eslint-disable-next-line react-hooks/static-components, react-hooks/static-components
            <NavLinks />
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex p-2 hover:bg-gray-100 rounded">
            <Search className="h-5 w-5 text-gray-500" />
          </button>

          {/* User */}
          <div className="hidden md:flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-semibold">
              JT
            </div>
            <span className="text-sm font-medium">John Thomas</span>
          </div>

          <button className="hidden md:flex items-center gap-1 text-gray-600 hover:text-black">
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
            
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 flex-1">
              // eslint-disable-next-line react-hooks/static-components
              <NavLinks mobile />
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  JT
                </div>
                <div>
                  <p className="text-sm font-medium">John Thomas</p>
                  <p className="text-xs text-gray-500">Event Coordinator</p>
                </div>
              </div>

              <button
                className="w-full flex items-center gap-2 px-3 py-2 border rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
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
