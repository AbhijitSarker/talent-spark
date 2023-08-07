import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-purple-50 sticky top-0  pt-2'>
            <nav className=' container mx-auto pt-2 pb-5 flex  h-16 justify-between items-center'>

                <img className='h-10 md:h-16 lg:h-20' src="/src//assets/logo/logo.png" alt="" />
                <div>
                    <div className={`md:flex  absolute md:static duration-500 mb-2   ${open ? 'top-20' : ' top-20 -top-48'}`}>
                        <Link className='mr-10  text-purple-600 hover:text-blue-500 font-medium  block' to='/'>Home</Link>
                        <Link className='mr-10 text-purple-600 hover:text-blue-500 font-medium block' to='/jobs'>Jobs</Link>
                        <Link className='mr-10 text-purple-600 hover:text-blue-500 font-medium block' to='/applied'>Applied</Link>
                        <Link className='mr-10 text-purple-600 hover:text-blue-500 font-medium block' to='/blogs'>Blogs</Link>
                        <Link className='mr-10 text-purple-600 hover:text-blue-500 font-medium block' to='/contact'>Contact</Link>
                        <Link className='mr-10 text-purple-600 hover:text-blue-500 font-medium block' to='/about'>About</Link>

                    </div>
                    <div className=''>

                        <div onClick={() => setOpen(!open)} className="md:hidden">
                            <span>
                                {open === true ?

                                    <FontAwesomeIcon className='h-8 float-right ' icon={faXmark} />
                                    : <FontAwesomeIcon className='h-8 float-right ' icon={faBars} />
                                }
                            </span>
                        </div>
                        <button className='float-right md:mr-10 lg:mr-10 rounded-md bg-sky-500 hover:bg-purple-600 px-4 py-1 font-medium text-white'> Apply</button>

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;