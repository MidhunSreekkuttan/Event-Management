const Badge = ({ variant = "default", className = "", children, ...props }) => {
  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold";

  const variantClasses = {
    default: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-800",
    destructive: "bg-red-600 text-white",
    outline: "border border-gray-300 text-gray-800",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
