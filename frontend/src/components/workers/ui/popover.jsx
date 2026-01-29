import { useEffect, useRef, useState } from "react";

const Popover = ({ trigger, children }) => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      {/* Trigger */}
      <div onClick={() => setOpen(!open)}>
        {trigger}
      </div>

      {/* Content */}
      {open && (
        <div
          className="absolute z-50 mt-2 w-72 rounded-md border bg-white p-4 shadow-md"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Popover;
