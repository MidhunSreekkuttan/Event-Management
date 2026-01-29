import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

/* Root components */
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

/* Overlay */
const SheetOverlay = React.forwardRef(function SheetOverlay(
  { className = "", ...props },
  ref
) {
  return (
    <SheetPrimitive.Overlay
      ref={ref}
      className={`fixed inset-0 z-50 bg-black/80
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0
        ${className}`}
      {...props}
    />
  );
});

/* Content */
const SheetContent = React.forwardRef(function SheetContent(
  { side = "right", className = "", children, ...props },
  ref
) {
  const sideClasses = {
    top: "inset-x-0 top-0 border-b animate-slide-in-top",
    bottom: "inset-x-0 bottom-0 border-t animate-slide-in-bottom",
    left:
      "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm animate-slide-in-left",
    right:
      "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm animate-slide-in-right",
  };

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ${sideClasses[side]} ${className}`}
        {...props}
      >
        {children}

        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
});

/* Layout helpers */
const SheetHeader = ({ className = "", ...props }) => (
  <div
    className={`flex flex-col space-y-2 text-center sm:text-left ${className}`}
    {...props}
  />
);

const SheetFooter = ({ className = "", ...props }) => (
  <div
    className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
    {...props}
  />
);

const SheetTitle = React.forwardRef(function SheetTitle(
  { className = "", ...props },
  ref
) {
  return (
    <SheetPrimitive.Title
      ref={ref}
      className={`text-lg font-semibold ${className}`}
      {...props}
    />
  );
});

const SheetDescription = React.forwardRef(function SheetDescription(
  { className = "", ...props },
  ref
) {
  return (
    <SheetPrimitive.Description
      ref={ref}
      className={`text-sm text-muted-foreground ${className}`}
      {...props}
    />
  );
});

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};