import React from 'react';
// import JobComponent from '../Job/job';
import JobCard from '../JobCard/JobCard';
import { useLoaderData } from 'react-router-dom';
// import JobCard from './JobCard';

const Jobs = () => {
    const jobs = useLoaderData();


    return (
        <div>
            <div className='grid lg:grid-cols-2 container mx-auto gap-5'>
                {
                    jobs.map(job => <JobCard
                        key={job.id}
                        job={job}
                    ></JobCard>)
                }
            </div>
        </div>
        // <JobCard></JobCard>




    );
};

export default Jobs;