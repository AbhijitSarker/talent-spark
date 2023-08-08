import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';
import { useLoaderData } from 'react-router-dom';


const Jobs = () => {
    // const jobs = useLoaderData();

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            try {
                const response = await fetch('/jobs.json');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }

        fetchJobs();
    }, []);
    // console.log(jobs);

    return (
        <div className=' min-h-screen py-16'>
            <div className=' grid lg:grid-cols-2 container mx-auto gap-10'>
                {
                    jobs.map(job => <JobCard
                        key={job.id}
                        job={job}
                    ></JobCard>)
                }
            </div>
        </div>
    );
};

export default Jobs;