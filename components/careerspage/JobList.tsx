import React from 'react';
import JobPosting from './JobPosting';

type Job = {
  title: string;
  location: string;
  description: string;
  minExperience: string;
  preferredLocation: string;
  benefits: string[];
};

type JobListProps = {
  jobs: Job[];
};

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="space-y-6">
      {jobs.map((job, index) => (
        <JobPosting
          key={index}
          title={job.title}
          location={job.location}
          description={job.description}
          minExperience={job.minExperience}
          preferredLocation={job.preferredLocation}
          benefits={job.benefits}
        />
      ))}
    </div>
  );
};

export default JobList;
