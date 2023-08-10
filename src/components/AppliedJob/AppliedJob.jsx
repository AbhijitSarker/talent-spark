import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
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
        <div className=' mx-5'>
            <div className=' mb-16  shadow-lg rounded  bg p-12' >
                <img className='w-60 h-20 pb-5 mb-10' src={company_logo} alt="" />
                <div className='md:flex justify-between'>
                    <div>
                        <h3 className='text-2xl font-semibold text-purple-600'>{job_name}</h3>
                        <h4 className='text-gray-600 pb-2'>{company_name}</h4>
                    </div>
                    <p className='border h-12 border-purple-400 px-10 py-2 text-xl rounded shadow-md'>{job_location}</p>
                </div>

                <div className='flex  py-2   px-0'>
                    <MapPinIcon className="h-5 w-5 text-gray-500  mr-3" />
                    <p> {company_location}</p>
                </div>
                <div className='flex  py-2'>
                    <CurrencyDollarIcon className="h-5 w-5 text-gray-500 mr-3" />
                    <p>{salary_range}</p>
                </div>


                <div className='flex items-center pt-2 pb-5'>
                    <CurrencyDollarIcon className="h-5 w-5 text-gray-500 mr-3" />
                    <p>{job_description}</p>
                </div>

                <Link to={`/job/${id}`} className="mt-16 text-purple-600 hover:underline shadow-md hover:text-blue-600 border  hover:bg-blue-100 border-purple-300 px-10 py-3 rounded">Details</Link>
            </div>
        </div>
    );
};

export default AppliedJob;