import React from 'react';
import './About.css'
const About = () => {
    return (

        <div className="bg-gray-100 min-h-screen py-16">
            <div className="container mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-8">

                    <div className='background-image mb-20'>
                        <div className=' text-center py-10 lg:py-40 bg-color	container mx-auto'>
                            <h2 className='text-7xl font-bold bg-color text-white'>About Us</h2>
                            <p className='text-2xl font-medium bg-color text-white'>Connecting Careers, Empowering Lives</p>
                            <p className='px-5 md:px-52 bg-color text-white'> Welcome to TALENT SPARK, your go-to destination for all things career-related. We understand that finding the perfect job or the ideal candidate can be a daunting task. That's why we're here - to bridge the gap between talented professionals and thriving companies, creating meaningful connections that lead to fulfilling careers.</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
                    <p>At TALENT SPARK, our mission is clear and unwavering: to revolutionize the way people discover, pursue, and excel in their careers. We're dedicated to providing a seamless and efficient platform that empowers job seekers and employers alike, fostering an environment where talent meets opportunity.</p>

                    <h2 className="text-xl font-semibold mt-6">Why Choose Us?</h2>
                    <ul className="list-disc list-inside pl-4">
                        <li>User-Centric Approach: We put our users at the heart of everything we do. Our user-friendly interface, intuitive navigation, and personalized features ensure that your experience with us is smooth and enjoyable.</li>
                        <li>Vast Network: With an extensive network of reputable companies and thousands of job listings across various industries, TALENT SPARK opens doors to countless possibilities.</li>
                        <li>Cutting-Edge Technology: Our advanced algorithms match job seekers with positions that align with their skills, experiences, and aspirations. For employers, our technology ensures you find candidates that perfectly fit your requirements.</li>
                        <li>Expertise: Backed by a team of industry experts, we offer valuable insights, resources, and guidance to help both job seekers and employers make informed decisions.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">For Job Seekers:</h3>
                            <ul className="list-disc list-inside pl-4">
                                <li> <span className='font-bold'>Job Search:</span> Explore a wide array of job listings that cater to different skill sets, industries, and locations. Refine your search with filters to discover opportunities tailored to your preferences.</li>
                                <li> <span className='font-bold'>Profile Creation:</span> Build a comprehensive and standout profile that showcases your skills, achievements, and career goals. Our profile recommendations help you put your best foot forward.</li>
                                <li> <span className='font-bold'>Resume Building:</span> Craft a compelling resume using our customizable templates, ensuring you make a lasting impression on potential employers.</li>
                                <li> <span className='font-bold'>Career Resources:</span> Access a rich repository of articles, guides, and tips that cover various aspects of career development, interview preparation, and more.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">For Employers:</h3>
                            <ul className="list-disc list-inside pl-4">
                                <li> <span className='font-bold'>Job Posting:</span> Advertise your job openings to a diverse pool of qualified candidates. Our user-friendly interface makes it easy to create detailed job listings that attract top talent.</li>
                                <li> <span className='font-bold'>Candidate Matching:</span> Our intelligent algorithms analyze job seeker profiles and match them with your job requirements, saving you time and effort in the hiring process.</li>
                                <li> <span className='font-bold'>Company Branding:</span> Showcase your company's culture, values, and achievements to attract candidates who resonate with your organization's ethos.</li>
                                <li> <span className='font-bold'>Recruitment Insights:</span> Gain access to data-driven insights that help you make informed hiring decisions, streamline your recruitment process, and optimize your workforce.</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mt-6">Our Commitment</h2>
                    <p>TALENT SPARK is committed to fostering an environment of equal opportunity, diversity, and inclusion. We believe that every individual deserves a chance to shine, and every company can benefit from a diverse workforce. We are dedicated to facilitating connections that promote growth, success, and a brighter future for all.</p>

                    <p>Join us on this journey to transform careers and elevate businesses. Let's shape the future together!</p>

                    <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
                    <p>Got a question or feedback? We'd love to hear from you. Reach out to our dedicated support team at [contact email/phone number]. Follow us on [social media links] to stay updated on the latest news and trends in the job market.</p>
                </div>
            </div>
        </div>
    );
};

export default About;