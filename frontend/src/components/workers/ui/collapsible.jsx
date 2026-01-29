import { useState } from "react";

const Collapsible = ({ children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      {typeof children === "function"
        ? children({ open, setOpen })
        : children}
    </div>
  );
};

const CollapsibleTrigger = ({ children, onClick, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

const CollapsibleContent = ({ open, children, className = "" }) => {
  if (!open) return null;

  return (
    <div className={`mt-2 ${className}`}>
      {children}
    </div>
  );
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
