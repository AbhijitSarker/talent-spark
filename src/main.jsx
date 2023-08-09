import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Jobs from './components/Jobs/Jobs';
import Applied from './components/Applied/Applied';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import Job from './components/Job/Job';
import jobLoader from './Loader/jobLooader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/public/jobs.json')
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>,
        loader: jobLoader
      },
      {
        path: '/job/:jobId',
        element: <Job></Job>,
        // loader: async ({ params }) => {
        //   const response = await fetch('/jobs.json');
        //   const data = await response.json();
        //   const job = data.find(job => job.id === parseInt(params.jobId));
        //   return job;
        // }
      },
      {
        path: '/applied',
        element: <Applied></Applied>,
        loader: jobLoader
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
