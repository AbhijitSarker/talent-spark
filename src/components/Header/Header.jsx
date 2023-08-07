import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg sticky top-0  pt-2'>
            <nav className=' container mx-auto pt-2 pb-5 flex  h-16 justify-between items-center'>

                <img className='h-10 h-16' src="/src//assets/logo/logo.png" alt="" />
                <div>
                    <div className={`md:flex  absolute md:static duration-500 mb-2   ${open ? 'top-20' : ' top-20 -top-48'}`}>
                        <ActiveLink className='mr-10  text-purple-600 hover:text-blue-500 font-medium  block' to='/'>Home</ActiveLink>
                        <ActiveLink className='mr-10 text-purple-600 hover:text-blue-500 font-medium block' to='/jobs'>Jobs</ActiveLink>
                        <ActiveLink className='mr-10 text-purple-600 hover:text-blue-500 font-medium block' to='/applied'>Applied</ActiveLink>
                        <ActiveLink className='mr-10 text-purple-600 hover:text-blue-500 font-medium block' to='/blogs'>Blogs</ActiveLink>
                        <ActiveLink className='mr-10 text-purple-600 hover:text-blue-500 font-medium block' to='/contact'>Contact</ActiveLink>
                        <ActiveLink className='mr-10 text-purple-600 hover:text-blue-500 font-medium block' to='/about'>About</ActiveLink>

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
                        <button className='float-right mr-10 rounded-md bg-sky-500 hover:bg-purple-600 px-4 py-1 font-medium text-white'> Apply</button>

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;