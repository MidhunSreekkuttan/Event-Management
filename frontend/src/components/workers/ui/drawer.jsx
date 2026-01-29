import { useEffect } from "react";

const Drawer = ({ open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative z-50 w-full max-w-md rounded-t-lg bg-white shadow-lg animate-slide-up">
        {/* Handle */}
        <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-gray-300" />

        {children}
      </div>
    </div>
  );
};

/* =====================
   SUB COMPONENTS
===================== */

const DrawerHeader = ({ children, className = "" }) => (
  <div className={`p-4 text-center sm:text-left ${className}`}>
    {children}
  </div>
);

const DrawerTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
);

const DrawerDescription = ({ children, className = "" }) => (
  <p className={`mt-1 text-sm text-gray-500 ${className}`}>
    {children}
  </p>
);

const DrawerContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const DrawerFooter = ({ children, className = "" }) => (
  <div className={`mt-auto p-4 flex flex-col gap-2 ${className}`}>
    {children}
  </div>
);

export {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerContent,
  DrawerFooter,
};