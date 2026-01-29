import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useDocumentUpload = () => {
  const [uploads, setUploads] = useState({});
  const [uploading, setUploading] = useState({});
  const { toast } = useToast();

  const uploadDocument = async (file, documentType, userId) => {
    // Max 5MB
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 5MB",
        variant: "destructive",
      });
      return null;
    }

    // Allowed file types
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

      const { data } = supabase.storage
        .from("worker-documents")
        .getPublicUrl(filePath);

      const uploadedFile = {
        name: file.name,
        path: filePath,
        url: data.publicUrl,
      };

      setUploads((prev) => ({ ...prev, [documentType]: uploadedFile }));

      toast({
        title: "Document uploaded",
        description: `${file.name} uploaded successfully`,
      });

      return uploadedFile;
    } catch (error) {
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

  const removeDocument = async (documentType) => {
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
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
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
