import React from 'react';


const staticJobData = {
    "id": 20,
    "company_name": "Facebook",
    "company_logo": "facebook_logo.png",
    "company_phone": "+1 (456) 789-0123",
    "company_email": "careers@facebook.com",
    "company_location": "Menlo Park, CA",
    "job_name": "Product Designer",
    "job_location": "Remote",
    "job_description": "Create user-centered design solutions for social media platforms.",
    "job_responsibilities": [
        "Collaborate with product managers and engineers to define design goals and requirements.",
        "Design intuitive and visually appealing user interfaces and experiences.",
        "Create wireframes, mockups, and prototypes to communicate design concepts.",
        "Conduct user research and usability testing to iterate on design solutions."
    ],
    "job_requirements": [
        "Bachelor's degree in Design, HCI, or related field",
        "Proficiency in design software (e.g., Sketch, Figma, Adobe Creative Suite)",
        "Strong portfolio showcasing previous design work",
        "Experience with user-centered design principles and methodologies"
    ],
    "salary_range": "$75,000 - $110,000 per year",
    "required_experience": "3+ years in UI/UX design."
};
const JobCard = () => {
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
    } = staticJobData;


    return (
        <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src={company_logo}
                alt={`${company_name} Logo`}
                className="w-full h-32 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{job_name}</h2>
                <p className="text-gray-600 mb-2">{company_name}</p>
                <p className="text-gray-600 mb-2">{job_location}</p>
                <p className="font-semibold mb-2">{salary_range}</p>
                <p className="text-gray-600 mb-4">{required_experience}</p>
                <div className="flex justify-between">
                    <a
                        href={`tel:${company_phone}`}
                        className="text-blue-500 hover:underline hover:text-blue-700"
                    >
                        Call Now
                    </a>
                    <a
                        href={`mailto:${company_email}`}
                        className="text-blue-500 hover:underline hover:text-blue-700"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JobCard;