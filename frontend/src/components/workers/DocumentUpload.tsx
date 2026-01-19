import { useRef } from "react";
import { Upload, X, FileCheck, Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

interface DocumentUploadProps {
    label: string;
    documentType: string;
    uploadedFile: { name: string; path: string; url: string } | null;
    isUploading: boolean;
    onUpload: (file:File, documentType: string) => void;
    onRemove: (documentType: string) => void;
    disabled?: boolean;
}

const DocumentUpload = ({
    label,
    documentType,
    uploadedFile,
    isUploading,
    onUpload,
    onRemove,
    disabled = false,
}: DocumentUploadProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onUpload(file, documentType);
        }
        // Reset input
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
           className={cn(
            "relative flex items-center gap-2 p-3 border border-dashed rounded-lg transition-all duration-200 group",
            uploadedFile
               ? "border-green-500 bg-green-50 dark:bg-green-950/20"
               : "cursor-pointer hover:border-primary hover:bg-primary/5",
        (disabled || isUploading) && "opacity-60 cursor-not-allowed"
      )}
    >
      {isUploading ? (
        <>
          <Loader2 className="h-4 w-4 text-primary animate-spin" />
          <span className="text-sm text-muted-foreground">Uploading...</span>
        </>
      ) : uploadedFile ? (
        <>
          <FileCheck className="h-4 w-4 text-green-600" />
          <span className="text-sm text-green-700 dark:text-green-400 truncate flex-1">
            {uploadedFile.name}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(documentType);
            }}
            className="p-1 hover:bg-destructive/10 rounded transition-colors"
            aria-label="Remove file"
          >
            <X className="h-4 w-4 text-destructive" />
          </button>
        </>
      ) : (
        <>
          <Upload className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
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