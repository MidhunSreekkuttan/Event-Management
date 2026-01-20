import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

/* ======================
   DROPDOWN MENU
====================== */

const DropdownMenu = ({ trigger, items = [] }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* Trigger */}
      <div onClick={() => setOpen(!open)}>
        {trigger}
      </div>

      {/* Menu */}
      {open && (
        <div className="absolute right-0 mt-2 min-w-40 rounded-md border bg-white shadow-md z-50 py-1">
          {items.map((item, index) =>
            item.separator ? (
              <div key={index} className="my-1 h-px bg-gray-200" />
            ) : (
              <button
                key={index}
                disabled={item.disabled}
                onClick={() => {
                  item.onClick?.();
                  setOpen(false);
                }}
                className={`flex w-full items-center px-3 py-2 text-sm text-left
                  ${
                    item.disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
              >
                {item.checked && (
                  <Check className="mr-2 h-4 w-4 text-blue-600" />
                )}
                <span>{item.label}</span>
                {item.shortcut && (
                  <span className="ml-auto text-xs text-gray-400">
                    {item.shortcut}
                  </span>
                )}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;