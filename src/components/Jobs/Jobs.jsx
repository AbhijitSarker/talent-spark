import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getappliedJobs } from '../../utilities/fakedb';
import { addBookmark, getBookmark, getStoredBookmarks } from '../../utilities/database';


const Jobs = () => {
    // const jobs = useLoaderData();

    const [jobs, setJobs] = useState([]);

    const [applied, setApplied] = useState([]);

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
        if (exists) {
            newAppliedJobs = [...applied, appliedJob];
        }
        else {
            const rest = applied.filter(job => job.id !== appliedJob);
            newAppliedJobs = [...rest, appliedJob];
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
        </div>
    );
};

export default Jobs;