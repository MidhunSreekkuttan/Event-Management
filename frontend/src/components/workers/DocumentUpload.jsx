import { useRef } from "react";
import { Upload, X, FileCheck, Loader2 } from "lucide-react";

const DocumentUpload = ({
  label,
  documentType,
  uploadedFile,
  isUploading,
  onUpload,
  onRemove,
  disabled = false,
}) => {
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file, documentType);
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleClick = () => {
    if (!disabled && !isUploading && !uploadedFile) {
      inputRef.current?.click();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative flex items-center gap-2 p-3 border border-dashed rounded-lg transition-all duration-200
        ${
          uploadedFile
            ? "border-green-500 bg-green-50"
            : "cursor-pointer hover:border-blue-500 hover:bg-blue-50"
        }
        ${disabled || isUploading ? "opacity-60 cursor-not-allowed" : ""}
      `}
    >
      {isUploading ? (
        <>
          <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />
          <span className="text-sm text-gray-500">Uploading...</span>
        </>
      ) : uploadedFile ? (
        <>
          <FileCheck className="h-4 w-4 text-green-600" />
          <span className="text-sm text-green-700 truncate flex-1">
            {uploadedFile.name}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(documentType);
            }}
            className="p-1 rounded hover:bg-red-100"
            aria-label="Remove file"
          >
            <X className="h-4 w-4 text-red-600" />
          </button>
        </>
      ) : (
        <>
          <Upload className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          <span className="text-sm text-gray-500">
            {label}
          </span>
        </>
      )}

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
        disabled={disabled || isUploading}
      />
    </div>
  );
};

export default DocumentUpload;