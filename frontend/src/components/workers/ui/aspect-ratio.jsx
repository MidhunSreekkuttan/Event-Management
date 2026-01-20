const AspectRatio = ({ ratio = 16 / 9, children, className = "" }) => {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ paddingTop: `${100 / ratio}%` }}
    >
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
};

export default AspectRatio;

