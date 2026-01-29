const Progress = ({ value = 0, className = "" }) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className={`w-full h-4 rounded-full bg-gray-200 overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-blue-600 transition-all duration-300"
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
};

export default Progress;
