import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface ApplicationFormProps {
  selectedJobId: string | null;
  jobOptions: Array<{
    id: string;
    title: string;
    department: string;
  }>;
  onSubmitSuccess: () => void;
}

// Form schema
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(7, { message: "Please enter a valid phone number" }),
  jobId: z.string({ required_error: "Please select a position" }),
  resume: z
    .any()
    .refine((file) => file?.length >= 1, { message: "Resume is required" }),
  coverLetter: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ApplicationForm = ({
  selectedJobId,
  jobOptions,
  onSubmitSuccess,
}: ApplicationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      jobId: selectedJobId || "",
      coverLetter: "",
    },
  });

  // Update the jobId field when selectedJobId changes
  useState(() => {
    if (selectedJobId) {
      form.setValue("jobId", selectedJobId);
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Form data for email sending
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);

      // Find the job title from the selected job ID
      const selectedJob = jobOptions.find((job) => job.id === data.jobId);
      formData.append("position", selectedJob?.title || data.jobId);

      formData.append("coverLetter", data.coverLetter || "");

      if (data.resume && data.resume.length > 0) {
        formData.append("resume", data.resume[0]);
      }

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real application, you would send this data to your backend:
      // await fetch("/api/submit-application", {
      //   method: "POST",
      //   body: formData,
      // });

      console.log("Form submitted successfully", data);
      form.reset();
      onSubmitSuccess();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6 shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john.doe@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {jobOptions.map((job) => (
                        <SelectItem key={job.id} value={job.id}>
                          {job.title} ({job.department})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="resume"
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Resume / CV</FormLabel>
                <FormControl>
                  <Input
                    {...fieldProps}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => onChange(e.target.files)}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  />
                </FormControl>
                <p className="text-xs text-slate-500">
                  PDF, DOC, or DOCX up to 5MB
                </p>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coverLetter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Letter (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    className="min-h-[120px] resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 rounded-none text-white px-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default ApplicationForm;
