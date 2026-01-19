import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useDocumentUpload } from "@/hooks/useDocumentUpload";
import DocumentUpload from "@/components/DocumentUpload";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const registrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  mobileNumber: z
    .string()
    .trim()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number is too long")
    .regex(/^[+]?[\d\s()-]+$/, "Please enter a valid phone number"),
  emailAddress: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  jobRole: z.string().min(1, "Please select a job role"),
  robotCheck: z.boolean().refine((val) => val === true, "Please verify you're not a robot"),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const documentTypes = [
  { type: "id-proof", label: "Upload ID Proof" },
  { type: "visa", label: "Upload Visa/Work Permit" },
  { type: "address-proof", label: "Upload Address Proof" },
  { type: "resume", label: "Upload Resume" },
];

const WorkerRegistration = () => {
  const [emailVerified, setEmailVerified] = useState(false);
  const [verifyingEmail, setVerifyingEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { uploads, uploading, uploadDocument, removeDocument, clearUploads } = useDocumentUpload();

  // Generate a temporary ID for document uploads (in production, this would be the user's auth ID)
  const [tempUserId] = useState(() => `temp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      emailAddress: "",
      jobRole: "",
      robotCheck: false,
    },
  });

  const handleVerifyEmail = async () => {
    const emailResult = await form.trigger("emailAddress");
    
    if (!emailResult) return;
    
    setVerifyingEmail(true);
    // Simulate email verification
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setVerifyingEmail(false);
    setEmailVerified(true);
    toast({
      title: "Email Verified",
      description: "Your email has been verified successfully.",
    });
  };

  const handleDocumentUpload = (file: File, documentType: string) => {
    uploadDocument(file, documentType, tempUserId);
  };

  const onSubmit = async (data: RegistrationFormData) => {
    if (!emailVerified) {
      toast({
        title: "Email Not Verified",
        description: "Please verify your email before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    const uploadedDocs = Object.keys(uploads).filter(key => uploads[key] !== null);
    
    toast({
      title: "Application Submitted!",
      description: `We'll review your application and ${uploadedDocs.length} document(s) and get back to you soon.`,
    });
    form.reset();
    setEmailVerified(false);
    clearUploads();
  };

  const isAnyUploading = Object.values(uploading).some(Boolean);

  return (
    <PageLayout breadcrumb="workers / register">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <Card className="shadow-sm card-hover">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="animate-fade-in">
                <CardTitle className="text-xl md:text-2xl font-semibold">Worker Registration</CardTitle>
                <CardDescription className="mt-2">
                  Join our team as an event staff member by registering your details below.
                </CardDescription>
              </div>
              <div className="hidden md:block animate-bounce-subtle">
                <img 
                  src="https://illustrations.popsy.co/amber/man-with-a-laptop.svg" 
                  alt="Registration illustration" 
                  className="w-28 lg:w-32 h-28 lg:h-32 object-contain"
                />
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="animate-fade-in delay-100" style={{ opacity: 0 }}>
                  <h3 className="text-lg font-medium mb-4">Worker Registration</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Full Name <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Thomas"
                              className="input-focus transition-all duration-200"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs animate-fade-in" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="mobileNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Mobile Number <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(+91) 9876543210"
                              className="input-focus transition-all duration-200"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs animate-fade-in" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="emailAddress"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel>
                          Email Address <span className="text-destructive">*</span>
                        </FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john.thomas@email.com"
                              className="flex-1 input-focus transition-all duration-200"
                              disabled={emailVerified}
                              {...field}
                            />
                          </FormControl>
                          <Button 
                            type="button" 
                            size="sm"
                            onClick={handleVerifyEmail}
                            disabled={emailVerified || verifyingEmail}
                            className={`btn-press transition-all duration-300 ${
                              emailVerified ? "bg-green-500 hover:bg-green-600" : ""
                            }`}
                          >
                            {verifyingEmail ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : emailVerified ? (
                              <>
                                <CheckCircle2 className="h-4 w-4 mr-1" />
                                <span className="hidden sm:inline">Verified</span>
                              </>
                            ) : (
                              <span className="text-xs sm:text-sm">Verify Email</span>
                            )}
                          </Button>
                        </div>
                        <FormMessage className="text-xs animate-fade-in" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="jobRole"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel>
                          Job Role <span className="text-destructive">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="input-focus transition-all duration-200">
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="coordinator">Event Coordinator</SelectItem>
                            <SelectItem value="staff">Event Staff</SelectItem>
                            <SelectItem value="manager">Event Manager</SelectItem>
                            <SelectItem value="catering">Catering Service</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs animate-fade-in" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="animate-fade-in delay-200" style={{ opacity: 0 }}>
                  <FormLabel className="text-base font-medium">Upload Documents (PDF, JPG, PNG)</FormLabel>
                  
                  <Alert className="mt-2 mb-3 bg-muted/50 border-muted">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Documents are securely stored. Max file size: 5MB each.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {documentTypes.map((doc, idx) => (
                      <div
                        key={doc.type}
                        className="animate-fade-in"
                        style={{ animationDelay: `${(idx + 3) * 100}ms`, opacity: 0 }}
                      >
                        <DocumentUpload
                          label={doc.label}
                          documentType={doc.type}
                          uploadedFile={uploads[doc.type] || null}
                          isUploading={uploading[doc.type] || false}
                          onUpload={handleDocumentUpload}
                          onRemove={removeDocument}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="robotCheck"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in delay-300" style={{ opacity: 0 }}>
                      <div className="flex items-center gap-3 p-4 border rounded-lg bg-muted/30 transition-all duration-200 hover:bg-muted/50">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                            className="transition-all duration-200"
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer mb-0">
                          I'm not a robot
                        </FormLabel>
                        <div className="ml-auto">
                          <img 
                            src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                            alt="reCAPTCHA" 
                            className="h-8"
                          />
                        </div>
                      </div>
                      <FormMessage className="text-xs animate-fade-in" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full btn-press transition-all duration-300 animate-fade-in delay-400" 
                  size="lg"
                  disabled={isSubmitting || isAnyUploading}
                  style={{ opacity: 0 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : isAnyUploading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Uploading Documents...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default WorkerRegistration;
