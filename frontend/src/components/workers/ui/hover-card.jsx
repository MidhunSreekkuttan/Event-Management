const HoverCard = ({ children }) => {
  return (
    <div className="relative inline-block group">
      {children}
    </div>
  );
};

const HoverCardTrigger = ({ children }) => {
  return (
    <div className="cursor-pointer">
      {children}
    </div>
  );
};

const HoverCardContent = ({ children, className = "" }) => {
  return (
    <div
      className={`absolute z-50 mt-2 w-64 rounded-md border bg-white p-4 text-sm shadow-md
        opacity-0 invisible translate-y-1
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
        transition-all duration-200
        ${className}`}
    >
      {children}
    </div>
  );
};

export { HoverCard, HoverCardTrigger, HoverCardContent };