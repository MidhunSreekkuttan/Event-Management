import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

/* =========================
   CONTEXT MENU ROOT
========================= */

const ContextMenu = ({ children, items = [] }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div onContextMenu={handleContextMenu} className="relative">
      {children}

      {visible && (
        <div
          ref={menuRef}
          style={{ top: position.y, left: position.x }}
          className="fixed z-50 min-w-40 rounded-md border bg-white shadow-md py-1"
        >
          {items.map((item, index) =>
            item.separator ? (
              <div key={index} className="my-1 h-px bg-gray-200" />
            ) : (
              <button
                key={index}
                onClick={() => {
                  item.onClick?.();
                  setVisible(false);
                }}
                disabled={item.disabled}
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

export default ContextMenu;