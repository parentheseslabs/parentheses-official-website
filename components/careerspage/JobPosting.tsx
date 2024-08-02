import React from 'react';

type JobPostingProps = {
  title: string;
  location: string;
  description: string;
  minExperience: string;
  preferredLocation: string;
  benefits: string[];
};

const JobPosting: React.FC<JobPostingProps> = ({ title, location, description, minExperience, preferredLocation, benefits }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 pb-8 mb-6">
      <h2 className="text-2xl font-bold text-primary_blue">{title}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="mt-4">{description}</p>
      <p className="mt-4"><strong>Minimum Experience Required:</strong> {minExperience}</p>
      <p className="mt-2"><strong>Preferred Location:</strong> {preferredLocation}</p>
      <div className="mt-4">
        <strong>Benefits:</strong>
        <ul className="list-disc list-inside">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <button className='text-white bg-primary_blue px-16 py-2 rounded-md mt-8'>Apply</button>
    </div>
  );
};

export default JobPosting;
