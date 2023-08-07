import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container'>
            <div className='container mx-auto lg:grid lg:grid-cols-2	justify-between items-center'>
                <div>
                    <h1 className='lg:leading-relaxed text-7xl font-bold p-5'>One Step <br /> CLOOSER To Your <br /><span className='text-purple-600 font-extrabold'>DREAM JOB</span></h1>
                    <p className='p-5 text-2xl'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className=' mr-10 rounded-md bg-sky-500 hover:bg-purple-600 px-5 m-5 py-2 font-medium text-white'> Get Started</button>

                </div>
                <div>
                    <img className='float-right' src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;