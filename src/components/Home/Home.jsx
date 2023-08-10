import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import JobCard from '../JobCard/JobCard';
import { addToDb, getappliedJobs } from '../../utilities/fakedb';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [displayedJobs, setDisplayedJobs] = useState([]);
    const [numDisplayedJobs, setNumDisplayedJobs] = useState(6);

    const [applied, setApplied] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            try {
                const response = await fetch('/jobs.json');
                const data = await response.json();
                setJobs(data);
                setDisplayedJobs(data.slice(0, numDisplayedJobs));

            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }

        fetchJobs();
    }, [numDisplayedJobs]);

    const loadMoreJobs = () => {
        setDisplayedJobs(jobs.slice(0, numDisplayedJobs + 6));
        setNumDisplayedJobs(prevCount => prevCount + 6);
    }
    useEffect(() => {
        const storedJobs = getappliedJobs();
        const savedJobs = [];

        for (const id in storedJobs) {
            const appliedJobs = jobs.find(job => job.id === id);
            if (appliedJobs) {
                savedJobs.push(appliedJobs);
            }
        }
        setApplied(savedJobs);
    }, [jobs]);

    const handleApplyJob = (appliedJob) => {
        let newAppliedJobs = [];
        const exists = applied.find(job => job.id === appliedJob.id);
        if (!exists) {
            newAppliedJobs = [...applied, appliedJob];

        }
        else {
            const rest = applied.filter(job => job.id !== appliedJob);
            newAppliedJobs = [...rest, appliedJob];

        }

        setApplied(newAppliedJobs);
        addToDb(appliedJob.id)

    }

    return (
        <div className='pb-16 bg-gray-100 min-h-scree w-auto'>
            <div className='home-container'>
                <div className='container mx-auto lg:grid lg:grid-cols-2 justify-between items-center'>
                    <div>
                        <h1 className='lg:leading-relaxed text-5xl md:text-7xl font-bold p-5'>One Step <br /> CLOOSER To Your <br /><span className='text-purple-600 font-extrabold'>DREAM JOB</span></h1>
                        <p className='p-4 md:p-5 text-xl md:text-2xl'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Link to='/jobs'><button className=' mr-10 rounded-md bg-sky-500 hover:bg-purple-600 px-5 m-5 py-2 font-medium text-white'> Get Started</button></Link>
                    </div>
                    <div>
                        <img className='' src="assets/images/P3OLGJ1 copy 1.png" alt="" />
                    </div>
                </div>

            </div>

            <div className='container mx-auto my-20'>
                <h3 className=' text-4xl md:text-5xl text-black mb-5 font-bold text-center'>Job Category List</h3>
                <p className='text-center text-xl mb-16'> Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className=' grid lg:grid-cols-4 justify-center gap-5 '>
                    <div className='home-container p-10 w-80 h-60 rounded-md hover:bg-blue-100'>
                        <img className='w-20 bg-purple-100 p-2 rounded-md' src="assets/Icons/accounts 1.png" alt="" />
                        <h4 className='text-2xl font-medium my-4'>Account & Finance</h4>
                        <p className='text-gray-500'>300 Jobs Available</p>
                    </div>
                    <div className='home-container p-10 w-80 h-60 rounded-md hover:bg-blue-100'>
                        <img className='w-20 bg-purple-100 p-2 rounded-md' src="assets/Icons/business 1.png" alt="" />
                        <h4 className='text-2xl font-medium my-4'>Creative Design</h4>
                        <p className='text-gray-500'>100+ Jobs Available</p>
                    </div>
                    <div className='home-container p-10 w-80 h-60 rounded-md hover:bg-blue-100'>
                        <img className='w-20 bg-purple-100 p-2 rounded-md' src="assets/Icons/social-media 1.png" alt="" />
                        <h4 className='text-2xl font-medium my-4'>Marketing & Sales</h4>
                        <p className='text-gray-500'>150 Jobs Available</p>
                    </div>
                    <div className='home-container p-10 w-80 h-60 rounded-md hover:bg-blue-100'>
                        <img className='w-20 bg-purple-100 p-2 rounded-md' src="assets/Icons/chip 1.png" alt="" />
                        <h4 className='text-2xl font-medium my-4'>Engineering Job</h4>
                        <p className='text-gray-500'>224 Jobs Available</p>
                    </div>

                </div>
            </div>
            <div className=''>
                <h3 className=' text-4xl md:text-5xl text-black mb-5 font-bold text-center'>Featured Jobs</h3>
                <p className='text-center text-xl mb-16'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid lg:grid-cols-2 container mx-auto gap-10'>

                    {
                        displayedJobs.map(job => <JobCard
                            key={job.id}
                            job={job}
                            handleApplyJob={handleApplyJob}
                        ></JobCard>)
                    }

                </div>
            </div>
            <div className='flex mt-10 justify-center'>
                {numDisplayedJobs < jobs.length && (
                    <button className=' mr-10 rounded-md bg-sky-500 hover:bg-purple-600 px-5 m-5 py-2 font-medium text-white' onClick={loadMoreJobs}>Load More Jobs</button>
                )}
            </div>
            <Toaster />
        </div>
    );
};

export default Home;