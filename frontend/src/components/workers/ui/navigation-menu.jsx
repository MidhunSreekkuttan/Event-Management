import { useState } from "react";
import { ChevronDown } from "lucide-react";

const NavigationMenu = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <nav className="relative">
      <ul className="flex items-center gap-1">
        {items.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            {/* Trigger */}
            <button
              className="flex h-10 items-center gap-1 rounded-md px-4 text-sm font-medium
                         hover:bg-gray-100 focus:outline-none"
            >
              {item.label}
              {item.children && (
                <ChevronDown className="h-3 w-3" />
              )}
            </button>

            {/* Dropdown */}
            {item.children && openIndex === index && (
              <div className="absolute left-0 top-full z-50 mt-1 min-w-55
                              rounded-md border bg-white shadow-lg">
                <ul className="py-1">
                  {item.children.map((child, i) => (
                    <li key={i}>
                      <a
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;