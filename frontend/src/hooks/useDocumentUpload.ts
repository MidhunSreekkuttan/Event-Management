import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface UploadedFile {
  name: string;
  path: string;
  url: string;
}

interface DocumentUploadState {
  [key: string]: UploadedFile | null;
}

export const useDocumentUpload = () => {
  const [uploads, setUploads] = useState<DocumentUploadState>({});
  const [uploading, setUploading] = useState<{ [key: string]: boolean }>({});
  const { toast } = useToast();

  const uploadDocument = async (
    file: File,
    documentType: string,
    userId: string
  ): Promise<UploadedFile | null> => {
    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 5MB",
        variant: "destructive",
      });
      return null;
    }

    // Validate file type
    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload PDF, JPG, or PNG files only",
        variant: "destructive",
      });
      return null;
    }

    setUploading((prev) => ({ ...prev, [documentType]: true }));

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${documentType}-${Date.now()}.${fileExt}`;
      const filePath = `${userId}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("worker-documents")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("worker-documents")
        .getPublicUrl(filePath);

      const uploadedFile: UploadedFile = {
        name: file.name,
        path: filePath,
        url: urlData.publicUrl,
      };

      setUploads((prev) => ({ ...prev, [documentType]: uploadedFile }));

      toast({
        title: "Document uploaded",
        description: `${file.name} uploaded successfully`,
      });

      return uploadedFile;
    } catch (error: any) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: error.message || "Failed to upload document",
        variant: "destructive",
      });
      return null;
    } finally {
      setUploading((prev) => ({ ...prev, [documentType]: false }));
    }
  };

  const removeDocument = async (documentType: string) => {
    const upload = uploads[documentType];
    if (!upload) return;

    try {
      const { error } = await supabase.storage
        .from("worker-documents")
        .remove([upload.path]);

      if (error) throw error;

      setUploads((prev) => ({ ...prev, [documentType]: null }));
      toast({
        title: "Document removed",
        description: "File has been removed",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to remove document",
        variant: "destructive",
      });
    }
  };

  const clearUploads = () => {
    setUploads({});
  };

  return {
    uploads,
    uploading,
    uploadDocument,
    removeDocument,
    clearUploads,
  };
};
