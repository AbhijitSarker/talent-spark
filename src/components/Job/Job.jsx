import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import toast, { Toaster } from 'react-hot-toast';
import './Job.css'
const Job = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        async function fetchJobData() {
            try {
                const response = await fetch('/jobs.json');
                const data = await response.json();
                const jobData = data.find(job => job.id === jobId);
                setJob(jobData);
            } catch (error) {
                console.error('Error fetching job data:', error);
            }
        }

        fetchJobData();
    }, [jobId]); // Run the effect whenever jobId changes

    if (!job) {
        return <div>Loading...</div>;
    }
    const {
        id,
        company_name,
        company_logo,
        company_phone,
        company_email,
        company_location,
        job_name,
        job_location,
        job_description,
        job_responsibilities,
        job_requirements,
        salary_range,
        required_experience,
    } = job;



    const handleApplyJob = (id) => {
        addToDb(id)

    }
    return (
        <div className=" bg-gray-100 min-h-screen py-10">

            <div className='container mx-auto px-10 py-16 bg-white rounded-md'>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 mx-5">

                        <h2 className="text-lg font-semibold mb-2">Responsibilities</h2>
                        <ul className="list-disc pl-6 mb-4">
                            {job_responsibilities.map((responsibility, index) => (
                                <li key={index} className="text-gray-700">
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-lg font-semibold mb-2">Requirements</h2>
                        <ul className="list-disc pl-6 mb-4">
                            {job_requirements.map((requirement, index) => (
                                <li key={index} className="text-gray-700">
                                    {requirement}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-600 mb-4">Experience: {required_experience}</p>

                    </div>
                    <div className="md:col-span-1 bg shadow-md rounded-md p-5">
                        <div className="flex justify-between items-center mb-4">

                            <div>
                                <h1 className="text-2xl font-bold">{job_name}</h1>
                                <p className="text-gray-600">{company_name}</p>
                                <p className="text-gray-600">{company_location}</p>
                            </div>
                            <img
                                src={company_logo}
                                alt={`${company_name} Logo`}
                                className="w-32 h-12"
                            />
                        </div>
                        <p className="text-gray-700 mb-4">{job_description}</p>
                        <div className="flex items-center justify-between border-t border-b py-4 my-4">
                            <div>
                                <p className="text-gray-600">Salary Range:</p>
                                <p className="font-semibold">{salary_range}</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Job Location:</p>
                                <p className="font-semibold">{job_location}</p>
                            </div>
                        </div>
                        <div>
                            <p><span className='font-semibold'>Phone:</span> {company_phone}</p>
                            <p><span className='font-semibold'>Email:</span> {company_email}</p>
                            <p><span className='font-semibold'>Phone:</span> {company_location}</p>
                        </div>

                        <Link
                            to={`/job/application/${id}`}
                            onClick={() => handleApplyJob(id)}
                            className=" flex items-center text-center">
                            <div className="mb-5 mt-6 w-full rounded-md bg-sky-500 hover:bg-purple-600 px-5 m-5 py-2 font-medium text-white">Apply</div>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;



{/* <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                        <img
                            src={company_logo}
                            alt={`${company_name} Logo`}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <h1 className="text-2xl font-bold">{job_name}</h1>
                            <p className="text-gray-600">{company_name}</p>
                            <p className="text-gray-600">{company_location}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-b py-4 my-4">
                        <div>
                            <p className="text-gray-600">Salary Range:</p>
                            <p className="font-semibold">{salary_range}</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Job Location:</p>
                            <p className="font-semibold">{job_location}</p>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job_description}</p>
                    <h2 className="text-lg font-semibold mb-2">Responsibilities</h2>
                    <ul className="list-disc pl-6 mb-4">
                        {job_responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-gray-700">
                                {responsibility}
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-lg font-semibold mb-2">Requirements</h2>
                    <ul className="list-disc pl-6 mb-4">
                        {job_requirements.map((requirement, index) => (
                            <li key={index} className="text-gray-700">
                                {requirement}
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-600 mb-4">Experience: {required_experience}</p>
                    <div className="flex justify-between items-center">
                        <Link to={`/job/application/${id}`} onClick={() => handleApplyJob(id)} className="text-purple-600 hover:underline shadow-md hover:text-blue-600 border  hover:bg-blue-100 border-purple-300 px-10 py-3 rounded">Apply</Link>

                    </div>
                </div>
            </div> */}