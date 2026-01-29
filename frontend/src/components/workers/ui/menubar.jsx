import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const Menubar = ({ menus = [] }) => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="flex h-10 items-center gap-1 rounded-md border bg-white px-1">
      {menus.map((menu, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setOpenMenu(index)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          {/* Trigger */}
          <button className="flex items-center gap-1 rounded-sm px-3 py-1.5 text-sm font-medium hover:bg-gray-100">
            {menu.label}
            <ChevronDown className="h-3 w-3" />
          </button>

          {/* Dropdown */}
          {openMenu === index && (
            <div className="absolute left-0 top-full z-50 mt-1 min-w-45 rounded-md border bg-white shadow-md py-1">
              {menu.items.map((item, i) =>
                item.separator ? (
                  <div key={i} className="my-1 h-px bg-gray-200" />
                ) : (
                  <button
                    key={i}
                    disabled={item.disabled}
                    onClick={item.onClick}
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
      ))}
    </div>
  );
};

export default Menubar;
