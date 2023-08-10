
import { getappliedJobs } from "../utilities/fakedb";

const jobLoader = async () => {
    const loadedJobs = await fetch('/jobs.json');
    const jobs = await loadedJobs.json();


    const storedJob = getappliedJobs();
    const savedJob = [];

    for (const id in storedJob) {
        const appliedJob = jobs.find(job => job.id === id);
        if (appliedJob) {
            savedJob.push(appliedJob);
        }
    }
    return savedJob;
}

export default jobLoader;