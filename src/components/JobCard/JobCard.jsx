import React from 'react';
import './JobCard';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';
import './JobsCard.css'

const JobCard = ({ job, handleApplyJob }) => {
    const {
        id,
        company_name,
        company_logo,
        company_location,
        job_name,
        job_location,
        job_description,
        salary_range,
    } = job;

    return (

        <div className='card-width mb-10 mx-5 bg  shadow-xl rounded   p-12' >
            <div className='md:flex justify-between mb-10'>
                <img className='w-60 h-20 pb-5' src={company_logo} alt="" />
                <p className='border h-12 border-purple-400 px-10 py-2 text-xl rounded shadow-md'>{job_location}</p>
            </div>
            <div>
                <h3 className='text-3xl font-semibold text-purple-600'>{job_name}</h3>
                <h4 className='text-gray-600 pb-2'>{company_name}</h4>

            </div>
            <div className='md:flex justify-between'>
                <div className='flex items-center py-5 px-0'>
                    <MapPinIcon className="h-5 w-5 text-gray-500  mr-3" />
                    <p> {company_location}</p>
                </div>
                <div className='flex items-center py-5'>
                    <CurrencyDollarIcon className="h-5 w-5 text-gray-500 mr-3" />
                    <p>{salary_range}</p>
                </div>
            </div>
            <div className='flex items-center py-5'>
                <CurrencyDollarIcon className="h-5 w-5 text-gray-500 mr-3" />
                <p>{job_description}</p>
            </div>

            <div className="flex justify-between">

                <Link to={`/job/application/${id}`} onClick={() => handleApplyJob(job)} className="text-purple-600 hover:underline shadow-md hover:text-blue-600 border  hover:bg-blue-100 border-purple-300 px-10 py-3 rounded">Apply</Link>
                <Link to={`/job/${id}`} className="text-purple-600 hover:underline shadow-md hover:text-blue-600 border  hover:bg-blue-100 border-purple-300 px-10 py-3 rounded">Details</Link>
            </div>
        </div>
    );
};

export default JobCard;
