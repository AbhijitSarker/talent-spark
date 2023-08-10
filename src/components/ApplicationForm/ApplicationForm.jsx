import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ApplicationForm = () => {
    const notify = () => { }

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        experience: '',
        salaryExpectation: '',

    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            resume: file,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('jobApplicationFormData', JSON.stringify(formData));
        toast('Successfully Applied')
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full text-purple-600 sm:w-2/3 md:w-1/2 bg-white p-8 shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-6">Job Application Form</h2>
                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block font-semibold mb-1">Full Name:</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-md"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-1">Email:</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border rounded-md"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                    </div>


                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Phone:</label>
                        <input
                            type="tel"
                            className="w-full px-3 py-2 border rounded-md"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Address:</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block font-semibold mb-1">Experience:</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-md"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-semibold mb-1">Salary Expectation:</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-md"
                                name="salaryExpectation"
                                value={formData.salaryExpectation}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Attach Your Resume:</label>
                        <input
                            type="file"
                            className="w-full"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                        />
                    </div>

                    <button onClick={notify} type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Submit
                    </button>
                    <Toaster />

                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;