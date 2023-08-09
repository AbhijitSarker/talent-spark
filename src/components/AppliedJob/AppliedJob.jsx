import React from 'react';

const AppliedJob = ({ job }) => {
    const {
        job_name,
        job_location,
        job_description,
        company_name
    } = job;
    return (
        <div>
            <div className="bg-white shadow-md rounded-md p-4">
                <h3 className="text-lg font-semibold mb-2">{job_name}</h3>
                <p>{company_name}</p>
                <p className="text-gray-600 mb-1">{job_location}</p>
                <p className="text-sm text-gray-600">{job_description}</p>
            </div>
        </div>
    );
};

export default AppliedJob;