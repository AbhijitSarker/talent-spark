import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Applied.css'
import AppliedJob from '../AppliedJob/AppliedJob';
import JobCard from '../JobCard/JobCard';
const Applied = () => {
    const applied = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([applied]);
    // console.log(applied);
    return (
        <div>
            <div>
                {
                    applied.map(job => <AppliedJob
                        key={job.id}
                        job={job}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default Applied;