import React, { createContext, useContext, useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';



const ClickHandlerContext = createContext();

export function useClickHandler() {
    return useContext(ClickHandlerContext);
}

const Main = () => {
    const [applied, setApplied] = useState([]);

    const handleApplyJob = (appliedJob) => {
        let newAppliedJobs = [];
        const exists = applied.find(job => job.id === appliedJob.id);
        if (!exists) {
            newAppliedJobs = [...applied, appliedJob];
            toast('Successfully Applied')
        }
        else {
            const rest = applied.filter(job => job.id !== appliedJob);
            newAppliedJobs = [...rest, appliedJob];
            toast('Already Applied')
        }

        setApplied(newAppliedJobs);
        addToDb(appliedJob.id)
    }

    return (
        <ClickHandlerContext.Provider value={{ handleApplyJob }}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </ClickHandlerContext.Provider >

    );
};

export default Main;