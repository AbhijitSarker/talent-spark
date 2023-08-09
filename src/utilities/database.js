const addJob = (id) => {
    let jobs = getJob();

    const storedJobs = localStorage.getItem('applied-jobs');

    if (storedJobs) {
        jobs = JSON.parse(storedJobs);
    }

    const quantity = jobs[id];
    if (!quantity) {
        jobs[id] = 1;
    }


    localStorage.setItem('applied-jobs', JSON.stringify(jobs));
}

const getJob = () => {
    let jobs = {};

    const storedJobs = localStorage.getItem('applied-jobs');

    if (storedJobs) {
        jobs = JSON.parse(storedJobs);
    }

    return jobs;
}


const getstoredJobs = () => {

    let jobs = getJob();

    const storedJobs = localStorage.getItem('applied-jobs');

    if (storedJobs) {
        jobs = JSON.parse(storedJobs);
    }

    return jobs;
}


// const addTime = (id) => {
//     let totalTime = getTime();

//     const storedTime = localStorage.getItem('time');

//     if (storedTime) {
//         totalTime = JSON.parse(storedTime);
//     }

//     const quantity = totalTime[id];
//     if (!quantity) {
//         totalTime[id] = 1;
//     }
//     // else {
//     //     const newQuantity = quantity + 1;
//     //     bookmarks[id] = newQuantity;
//     // }

//     localStorage.setItem('time', JSON.stringify(totalTime));
// }

// const getTime = () => {
//     let totalTime = {};

//     const storedTime = localStorage.getItem('time');

//     if (storedTime) {
//         totalTime = JSON.parse(storedTime);
//     }

//     return totalTime;
// }

// const getStoredTime = () => {

//     let totalTime = getTime();

//     const storedTime = localStorage.getItem('time');

//     if (storedTime) {
//         totalTime = JSON.parse(storedTime);
//     }

//     return totalTime;
// }


export {
    addJob,
    getJob,
    getstoredJobs
}