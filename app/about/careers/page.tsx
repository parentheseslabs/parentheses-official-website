

import React from 'react';
import JobList from '@/components/careerspage/JobList';

const jobs = [
  {
    title: 'Frontend Developer',
    location: 'New York, NY',
    description: 'We are looking for a skilled frontend developer to join our team.',
    minExperience: '2 years',
    preferredLocation: 'New York or Remote',
    benefits: ['Health insurance', '401(k) matching', 'Paid time off'],
  },
  {
    title: 'Backend Developer',
    location: 'San Francisco, CA',
    description: 'Join our backend team to build robust and scalable APIs.',
    minExperience: '3 years',
    preferredLocation: 'San Francisco',
    benefits: ['Health insurance', 'Flexible working hours', 'Gym membership'],
  },
  {
    title: 'Product Manager',
    location: 'Remote',
    description: 'Lead our product development efforts and ensure customer satisfaction.',
    minExperience: '5 years',
    preferredLocation: 'Remote',
    benefits: ['Health insurance', 'Remote work', 'Stock options'],
  },
];

const Careers: React.FC = () => {
  return (
    <div id='hero' className="min-h-screen bg-gray-100 pb-12 pt-36 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary_blue mb-8">Careers</h1>
        <p className='text-center text-xl mb-4'>These are some openings in <span className='text-2xl text-primary_blue font-sfpd-semibold'>Parentheses Labs</span></p>
        <JobList jobs={jobs} />
      </div>
    </div>
  );
};

export default Careers;

