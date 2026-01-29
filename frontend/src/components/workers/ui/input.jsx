import { forwardRef } from "react";

const Input = forwardRef(({ type = "text", className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
        placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-blue-500
        disabled:cursor-not-allowed disabled:opacity-50
        ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;