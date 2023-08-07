import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className='container mx-auto'>
            <div className='background-image mb-20'>
                <div className=' text-center py-10 lg:py-40 bg-color	container mx-auto'>
                    <h2 className='text-7xl font-bold bg-color text-white'>About Us</h2>
                    <p className='text-2xl font-medium bg-color text-white'>Connecting Careers, Empowering Lives</p>
                    <p className='px-5 md:px-52 bg-color text-white'> Welcome to TALENT SPARK, your go-to destination for all things career-related. We understand that finding the perfect job or the ideal candidate can be a daunting task. That's why we're here - to bridge the gap between talented professionals and thriving companies, creating meaningful connections that lead to fulfilling careers.</p>
                </div>
            </div>
            <div className="lg:flex mb-20">
                <div>
                    <h2 className='text-left my-5 pl-5 py-5 text-5xl underline text-blue-500 font-bold'>Our Mission</h2>
                    <p className='px-5 text-left'>At TALENT SPARK, our mission is clear and unwavering: to revolutionize the way people discover, pursue, and excel in their careers. We're dedicated to providing a seamless and efficient platform that empowers job seekers and employers alike, fostering an environment where talent meets opportunity.</p>
                </div>
                <div>
                    <h3 className='text-right my-5 pr-5 py-5 text-5xl underline text-blue-500 font-bold'>Our Commitment</h3>
                    <p className='px-5 text-right'>TALENT SPARK is committed to fostering an environment of equal opportunity, diversity, and inclusion. We believe that every individual deserves a chance to shine, and every company can benefit from a diverse workforce. We are dedicated to facilitating connections that promote growth, success, and a brighter future for all. <br />

                        Join us on this journey to transform careers and elevate businesses. Let's shape the future together!TALENT SPARK is committed to fostering an environment of equal opportunity, diversity, and inclusion. We believe that every individual deserves a chance to shine, and every company can benefit from a diverse workforce. We are dedicated to facilitating connections that promote growth, success, and a brighter future for all.</p>
                </div>

            </div>
            <div className='bg-service rounded-lg mb-20'>
                <h2 className='text-center my-5 py-5 text-5xl underline text-blue-500 font-bold'>Our Services</h2>
                <div className='lg:flex justify-between'>
                    <div>
                        <h3 className='text-3xl text-purple-600 font-bold pl-5'>For Job Seekers: </h3>
                        <ol className='p-5 pr-10'>
                            <li>
                                1. <span className='text-purple-600 font-bold text-xl'>Job Search:</span>Explore a wide array of job listings that cater to different skill sets, industries, and locations. Refine your search with filters to discover opportunities tailored to your preferences.
                            </li><br />
                            <li>
                                2. <span className='text-purple-600 font-bold text-xl'>Profile Creation: </span>Build a comprehensive and standout profile that showcases your skills, achievements, and career goals. Our profile recommendations help you put your best foot forward.
                            </li><br />
                            <li>
                                3. <span className='text-purple-600 font-bold text-xl'>Resume Building: </span>Craft a compelling resume using our customizable templates, ensuring you make a lasting impression on potential employers.
                            </li><br />
                            <li>
                                4. <span className='text-purple-600 font-bold text-xl'>Career Resources: </span>Access a rich repository of articles, guides, and tips that cover various aspects of career development, interview preparation, and more.
                            </li>
                        </ol>
                    </div>
                    <div >
                        <h3 className='text-3xl text-purple-600 font-bold pl-5'>For Employers:</h3>
                        <ol className='p-5 pr-10'>
                            <li>
                                1. <span className='text-purple-600 font-bold text-xl'>Job Posting: </span>Advertise your job openings to a diverse pool of qualified candidates. Our user-friendly interface makes it easy to create detailed job listings that attract top talent.
                            </li><br />
                            <li>
                                2. <span className='text-purple-600 font-bold text-xl'>Candidate Matching: </span>Our intelligent algorithms analyze job seeker profiles and match them with your job requirements, saving you time and effort in the hiring process.
                            </li><br />
                            <li>
                                3. <span className='text-purple-600 font-bold text-xl'>Company Branding: </span>Showcase your company's culture, values, and achievements to attract candidates who resonate with your organization's ethos.
                            </li><br />
                            <li>
                                4. <span className='text-purple-600 font-bold text-xl'>Recruitment Insights: </span>Gain access to data-driven insights that help you make informed hiring decisions, streamline your recruitment process, and optimize your workforce.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;