import { X } from "lucide-react";
import { useEffect } from "react";

/* =====================
   DIALOG ROOT
===================== */

const Dialog = ({ open, onClose, children }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative z-50 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X className="h-4 w-4" />
        </button>

        {children}
      </div>
    </div>
  );
};

/* =====================
   SUB COMPONENTS
===================== */

const DialogHeader = ({ children, className = "" }) => (
  <div className={`mb-4 text-center sm:text-left ${className}`}>
    {children}
  </div>
);

const DialogTitle = ({ children, className = "" }) => (
  <h2 className={`text-lg font-semibold ${className}`}>
    {children}
  </h2>
);

const DialogDescription = ({ children, className = "" }) => (
  <p className={`mt-2 text-sm text-gray-500 ${className}`}>
    {children}
  </p>
);

const DialogFooter = ({ children, className = "" }) => (
  <div
    className={`mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end ${className}`}
  >
    {children}
  </div>
);

export {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
};