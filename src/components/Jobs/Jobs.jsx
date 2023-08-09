import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getappliedJobs } from '../../utilities/fakedb';
import toast, { Toaster } from 'react-hot-toast';


const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [applied, setApplied] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    useEffect(() => {
        const storedJobs = getappliedJobs();
        const savedJobs = [];
        for (const id in storedJobs) {
            const appliedJobs = jobs.find(job => job.id === id);
            if (appliedJobs) {
                savedJobs.push(appliedJobs);
            }

        }
        setApplied(savedJobs);
    }, [jobs]);

    const handleApplyJob = (appliedJob) => {
        let newAppliedJobs = [];
        const exists = applied.find(job => job.id === appliedJob.id);
        if (!exists) {
            newAppliedJobs = [...applied, appliedJob];
            toast('Successfully Applied')

        }
        else {
            const rest = applied.filter(job => job.id !== appliedJob.id);
            newAppliedJobs = [...rest, appliedJob];
            toast('Already applied ')
        }
        setApplied(newAppliedJobs);
        addToDb(appliedJob.id)
    }

    return (
        <div className=' min-h-screen py-16'>
            <div className=' grid lg:grid-cols-2 container mx-auto gap-10'>
                {
                    jobs.map(job => <JobCard
                        key={job.id}
                        job={job}
                        handleApplyJob={handleApplyJob}
                    ></JobCard>)
                }
            </div>
            <Toaster />

        </div>
    );
};

export default Jobs;