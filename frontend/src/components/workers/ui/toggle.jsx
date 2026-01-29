import React, { useState } from "react";

export default function Toggle({
  defaultOn = false,
  variant = "default",
  size = "default",
  className = "",
  onClick,
}) {
  const [isOn, setIsOn] = useState(defaultOn);

  const sizeClasses = {
    default: "h-10 px-3",
    sm: "h-9 px-2.5",
    lg: "h-11 px-5",
  };

  const variantClasses = {
    default: "bg-transparent",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        setIsOn(!isOn);
        if (onClick) onClick(e);
      }}
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium
        transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500
        disabled:opacity-50 disabled:pointer-events-none
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${isOn ? "bg-blue-600 text-white" : "text-gray-700"}
        ${className}
      `}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
