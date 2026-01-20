import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { PanelLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";

const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";

/* ---------------- CONTEXT ---------------- */

const SidebarContext = React.createContext(null);

function useSidebar() {
  const ctx = React.useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used inside SidebarProvider");
  return ctx;
}

/* ---------------- PROVIDER ---------------- */

const SidebarProvider = React.forwardRef(function SidebarProvider(
  { defaultOpen = true, className = "", style, children, ...props },
  ref
) {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(defaultOpen);
  const [openMobile, setOpenMobile] = React.useState(false);

  const toggleSidebar = () => {
    isMobile ? setOpenMobile((o) => !o) : setOpen((o) => !o);
  };

  const value = {
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
    state: open ? "expanded" : "collapsed",
  };

  return (
    <SidebarContext.Provider value={value}>
      <TooltipProvider delayDuration={0}>
        <div
          ref={ref}
          style={{
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          }}
          className={`group flex min-h-screen w-full ${className}`}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
});

/* ---------------- SIDEBAR ---------------- */

const Sidebar = React.forwardRef(function Sidebar(
  { className = "", children, side = "left" },
  ref
) {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent
          side={side}
          className="w-[--sidebar-width] bg-sidebar p-0 [&>button]:hidden"
          style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE }}
        >
          {children}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside
      ref={ref}
      className={`hidden md:flex h-screen w-[--sidebar-width] flex-col bg-sidebar ${className}`}
    >
      {children}
    </aside>
  );
});

/* ---------------- TRIGGER ---------------- */

const SidebarTrigger = React.forwardRef(function SidebarTrigger(
  { className = "", ...props },
  ref
) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      size="icon"
      variant="ghost"
      onClick={toggleSidebar}
      className={`h-7 w-7 ${className}`}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});

/* ---------------- BASIC BLOCKS ---------------- */

const SidebarHeader = ({ className = "", ...props }) => (
  <div className={`p-2 ${className}`} {...props} />
);

const SidebarFooter = ({ className = "", ...props }) => (
  <div className={`p-2 mt-auto ${className}`} {...props} />
);

const SidebarContent = ({ className = "", ...props }) => (
  <div className={`flex-1 overflow-auto ${className}`} {...props} />
);

const SidebarSeparator = (props) => (
  <Separator className="my-2 bg-sidebar-border" {...props} />
);

/* ---------------- MENU ---------------- */

const SidebarMenu = ({ className = "", ...props }) => (
  <ul className={`flex flex-col gap-1 ${className}`} {...props} />
);

const SidebarMenuItem = ({ className = "", ...props }) => (
  <li className={`relative ${className}`} {...props} />
);

const SidebarMenuButton = React.forwardRef(function SidebarMenuButton(
  { asChild = false, isActive = false, className = "", ...props },
  ref
) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-active={isActive}
      className={`flex w-full items-center gap-2 rounded-md p-2 text-sm hover:bg-sidebar-accent ${
        isActive ? "bg-sidebar-accent font-medium" : ""
      } ${className}`}
      {...props}
    />
  );
});

/* ---------------- EXPORTS ---------------- */

export {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarSeparator,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  // eslint-disable-next-line react-refresh/only-export-components
  useSidebar,
};

