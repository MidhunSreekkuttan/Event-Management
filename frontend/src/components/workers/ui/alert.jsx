const Alert = ({ variant = "default", className = "", children, ...props }) => {
  const baseClasses =
    "relative w-full rounded-lg border p-4 pl-10 flex gap-2";

  const variantClasses =
    variant === "destructive"
      ? "border-red-300 bg-red-50 text-red-700"
      : "border-gray-200 bg-white text-gray-800";

  return (
    <div
      role="alert"
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const AlertTitle = ({ className = "", children, ...props }) => {
  return (
    <h5
      className={`mb-1 font-medium leading-none tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h5>
  );
};

const AlertDescription = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`text-sm leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Alert, AlertTitle, AlertDescription };