import { useLoaderData } from 'react-router-dom';
import './Applied.css'
import AppliedJob from '../AppliedJob/AppliedJob';

const Applied = () => {
    const applied = useLoaderData();
    return (
        <div className='bg-gray-100 min-h-screen py-16'>
            <div className=' container mx-auto '>
                {
                    applied.map(job => <AppliedJob
                        key={job.id}
                        job={job}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default Applied;