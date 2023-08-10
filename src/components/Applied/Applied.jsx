import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Applied.css'
import AppliedJob from '../AppliedJob/AppliedJob';
import JobCard from '../JobCard/JobCard';
const Applied = () => {
    const applied = useLoaderData();
    return (
        <div>
            <div className='bg-gray-100 min-h-screen py-16'>
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