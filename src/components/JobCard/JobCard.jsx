import React from 'react';
import './JobCard';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


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

        <div className='card-width border border-purple-300 p-8' >
            <img className='w-60 h-20 pb-5' src={company_logo} alt="" />
            <h3 className='text-2xl font-semibold text-purple-600'>{job_name}</h3>
            <h4 className='text-gray-600 py-2'>{company_name}</h4>
            <div className='flex justify-between'>
                <div className='flex justify-center py-5'>
                    <MapPinIcon className="h-5 w-5 text-blue-400  mr-3" />
                    <p> {company_location}</p>
                </div>
                <div className='flex items-center py-5'>
                    <CurrencyDollarIcon className="h-5 w-5 text-blue-400 mr-3" />
                    <p>{salary_range}</p>
                </div>
            </div>
            <p className='py-5'>{job_description}</p>
            <div className="flex justify-between">
                <a
                    href={`tel:${company_phone}`}
                    className="text-blue-500 hover:underline hover:text-blue-700 border border-purple-300 px-10 py-3"
                >
                    Call Now
                </a>
                <Link className="text-blue-500 hover:underline hover:text-blue-700 border border-purple-300 px-10 py-3">View Details</Link>
                <a
                    href={`mailto:${company_email}`}
                    className="text-blue-500 hover:underline hover:text-blue-700 border border-purple-300 px-10 py-3"
                >
                    Apply Now
                </a>
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