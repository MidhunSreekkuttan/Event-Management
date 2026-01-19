import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutGrid, Search, LogOut, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Workers", path: "/workers" },
    { label: "Profile", path: "/profile" },
  ];

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item, idx) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => mobile && setIsOpen(false)}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
            mobile ? "block w-full" : ""
          } ${
            location.pathname === item.path
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
          style={{ animationDelay: `${idx * 50}ms` }}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary transition-transform duration-200 group-hover:scale-110">
              <LayoutGrid className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">Event Manager</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLinks />
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-muted transition-colors">
            <Search className="h-5 w-5 text-muted-foreground" />
          </Button>
          
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 ring-2 ring-transparent hover:ring-primary/20 transition-all duration-200">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary/10 text-primary text-sm">JT</AvatarFallback>
            </Avatar>
            <span className="hidden lg:block text-sm font-medium">John Thomas</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex text-muted-foreground hover:text-foreground transition-colors btn-press"
          >
            <LogOut className="h-4 w-4 mr-1" />
            <span className="hidden lg:inline">Logout</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="font-semibold">Menu</span>
                </div>
                
                <div className="flex-1 p-4">
                  <nav className="flex flex-col gap-1">
                    <NavLinks mobile />
                  </nav>
                </div>
                
                <div className="p-4 border-t mt-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary">JT</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">John Thomas</p>
                      <p className="text-xs text-muted-foreground">Event Coordinator</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start btn-press"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;