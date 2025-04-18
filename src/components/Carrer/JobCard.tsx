import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
  };
  onApply: () => void;
}

const JobCard = ({ job, onApply }: JobCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md rounded-none hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
              <div className="flex items-center text-slate-600 text-sm">
                <Briefcase className="h-4 w-4 mr-1" />
                <span>{job.department}</span>
              </div>
            </div>
            <Button
              onClick={onApply}
              className="bg-blue-600 rounded-none hover:bg-blue-700 text-white flex items-center gap-1"
            >
              Apply <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-slate-600 mb-4">{job.description}</p>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center text-sm text-slate-500">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-sm text-slate-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{job.type}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
