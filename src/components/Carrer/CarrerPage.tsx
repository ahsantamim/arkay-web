import { useState } from "react";
import {
  Briefcase,
  Users,
  Award,
  MessageCircle,
  Send,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "../ui/separator";
import JobCard from "./JobCard";
import ApplicationForm from "./ApplicationForm";
import toast, { Toaster } from "react-hot-toast";
const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const companyValues = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative Spirit",
      description:
        "We believe in the power of teamwork and diverse perspectives.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Open Communication",
      description:
        "We foster transparent and honest dialogue across all levels.",
    },
  ];

  const jobs = [
    {
      id: "frontend-engineer",
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote (US)",
      type: "Full-time",
      description:
        "We're looking for a Senior Frontend Engineer to join our team. You'll be responsible for building and maintaining high-quality web applications.",
    },
    {
      id: "product-designer",
      title: "Product Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      description:
        "Join our design team to create exceptional user experiences that delight our customers and solve complex problems.",
    },
    {
      id: "marketing-specialist",
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote (Global)",
      type: "Full-time",
      description:
        "Help us spread the word about our products and services through creative and data-driven marketing campaigns.",
    },
  ];

  const handleApply = (jobId: string) => {
    setSelectedJob(jobId);
    setTimeout(() => {
      const formElement = document.getElementById("application-form");
      formElement?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="flex flex-col w-full mt-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl">
            Be part of something extraordinary. We're building the future
            together, one innovation at a time.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="font-medium flex rounded-none items-center gap-2 bg-white text-blue-700 hover:bg-white/90"
            onClick={() => {
              const jobsElement = document.getElementById("open-positions");
              jobsElement?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Open Positions
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Values</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            These principles guide everything we do and shape our company
            culture.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <Card
                key={index}
                className="border-none  hover:shadow-lg rounded-none  transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div id="open-positions" className="py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Open Positions
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Find your perfect role and join us on our journey to excellence.
          </p>

          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="mx-auto flex justify-center mb-8">
              <TabsTrigger value="all">All Departments</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {jobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onApply={() => handleApply(job.id)}
                />
              ))}
            </TabsContent>

            <TabsContent value="engineering" className="space-y-6">
              {jobs
                .filter((job) => job.department === "Engineering")
                .map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onApply={() => handleApply(job.id)}
                  />
                ))}
            </TabsContent>

            <TabsContent value="design" className="space-y-6">
              {jobs
                .filter((job) => job.department === "Design")
                .map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onApply={() => handleApply(job.id)}
                  />
                ))}
            </TabsContent>

            <TabsContent value="marketing" className="space-y-6">
              {jobs
                .filter((job) => job.department === "Marketing")
                .map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onApply={() => handleApply(job.id)}
                  />
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Application Form */}
      <div id="application-form" className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Apply Now</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Take the first step towards your next great opportunity.
          </p>

          <ApplicationForm
            selectedJobId={selectedJob}
            jobOptions={jobs}
            onSubmitSuccess={() => {
              toast.success("Application submitted!", {
                position: "top-center",
                duration: 5000,
                style: {
                  background: "hsl(var(--background))",
                  color: "hsl(var(--foreground))",
                  border: "1px solid hsl(var(--border))",
                },
              });
              setSelectedJob(null);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
