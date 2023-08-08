import React from 'react';
import './JobCard';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import './JobsCard.css'


const JobCard = ({ job }) => {
    const {
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


    return (

        <div className='card-width mx-5  shadow-md rounded  bg-c p-8' >
            <img className='w-60 h-20 pb-5' src={company_logo} alt="" />
            <div className='md:flex justify-between'>
                <div>
                    <h3 className='text-2xl font-semibold text-purple-600'>{job_name}</h3>
                    <h4 className='text-gray-600 pb-2'>{company_name}</h4>

                </div>
                <p className='border h-12 border-purple-400 px-10 py-2 text-xl rounded shadow-md'>{job_location}</p>
            </div>
            <div className='md:flex justify-between'>
                <div className='flex  py-5 px-0'>
                    <MapPinIcon className="h-5 w-5 text-blue-400  mr-3" />
                    <p> {company_location}</p>
                </div>
                <div className='flex  py-5'>
                    <CurrencyDollarIcon className="h-5 w-5 text-blue-400 mr-3" />
                    <p>{salary_range}</p>
                </div>
            </div>
            <li className='py-5'>{job_description}</li>
            <div className="flex justify-between">

                <a
                    target='_blank'
                    href={`mailto:${company_email}`}
                    className="text-purple-600 hover:underline shadow-md hover:text-blue-600 border  hover:bg-blue-100 border-purple-300 px-10 py-3 rounded"
                >
                    Apply Now
                </a>
                <Link className="text-purple-600 hover:underline shadow-md hover:text-blue-600 border  hover:bg-blue-100 border-purple-300 px-10 py-3 rounded">View Details</Link>
            </div>

        </div>



        // <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        //     <img
        //         src={company_logo}
        //         alt={`${company_name} Logo`}
        //         className="w-auto h-auto object-cover"
        //     />
        //     <div className="p-4">
        //         <h2 className="text-xl font-semibold mb-2">{job_name}</h2>
        //         <p className="text-gray-600 mb-2">{company_name}</p>
        //         <p className="text-gray-600 mb-2">{job_location}</p>
        //         <p className="font-semibold mb-2">{salary_range}</p>
        //         <p className="text-gray-600 mb-4">{required_experience}</p>
        //         <div className="flex justify-between">
        //             <a
        //                 href={`tel:${company_phone}`}
        //                 className="text-blue-500 hover:underline hover:text-blue-700"
        //             >
        //                 Call Now
        //             </a>
        //             <a
        //                 href={`mailto:${company_email}`}
        //                 className="text-blue-500 hover:underline hover:text-blue-700"
        //             >
        //                 Apply Now
        //             </a>
        //         </div>
        //     </div>
        // </div>
    );
};

export default JobCard;