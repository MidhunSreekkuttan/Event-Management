import { useEffect } from "react";

const AlertDialog = ({ open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
};

const AlertDialogHeader = ({ children }) => (
  <div className="mb-4 text-center sm:text-left">
    {children}
  </div>
);

const AlertDialogTitle = ({ children }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

const AlertDialogDescription = ({ children }) => (
  <p className="mt-2 text-sm text-gray-500">{children}</p>
);

const AlertDialogFooter = ({ children }) => (
  <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
    {children}
  </div>
);

const AlertDialogAction = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
  >
    {children}
  </button>
);

const AlertDialogCancel = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
  >
    {children}
  </button>
);

export {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
};