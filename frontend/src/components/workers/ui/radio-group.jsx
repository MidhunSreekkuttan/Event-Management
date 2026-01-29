const RadioGroup = ({
  name,
  options = [],
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`grid gap-2 ${className}`}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer text-sm"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            disabled={option.disabled}
            className="h-4 w-4 accent-blue-600"
          />
          <span className={option.disabled ? "opacity-50" : ""}>
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;