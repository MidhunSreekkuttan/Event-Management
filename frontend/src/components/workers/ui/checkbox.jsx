import { Check } from "lucide-react";

const Checkbox = ({
  checked = false,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <label
      className={`inline-flex items-center ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        className="sr-only"
      />

      <span
        className={`flex h-4 w-4 items-center justify-center rounded-sm border
          ${
            checked
              ? "bg-blue-600 border-blue-600"
              : "bg-white border-gray-300"
          }
          ${className}
        `}
      >
        {checked && <Check className="h-3 w-3 text-white" />}
      </span>
    </label>
  );
};

export default Checkbox;