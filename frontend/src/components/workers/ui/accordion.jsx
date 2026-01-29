import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ children }) => {
  return <div className="border-b">{children}</div>;
};

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left font-medium hover:underline"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="pb-4 text-sm text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

export { Accordion, AccordionItem };