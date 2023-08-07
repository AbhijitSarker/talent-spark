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


const JobComponent = () => {
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
        <div>
            <div className="bg-gray-100 min-h-screen py-10">
                <div className="max-w-4xl mx-auto px-4">
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
            </div>
        </div>
    );
};

export default JobComponent;