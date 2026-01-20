const Avatar = ({ src, alt = "", fallback = "", className = "" }) => {
  return (
    <div
      className={`relative h-10 w-10 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <span className="text-sm font-medium text-gray-600">
          {fallback}
        </span>
      )}
    </div>
  );
};

export default Avatar;
