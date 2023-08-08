// use local storage to manage cart data
const addToDb = id => {
    let appliedJobs = getappliedJobs();
    // add quantity
    const quantity = appliedJobs[id];
    if (!quantity) {
        appliedJobs[id] = 1;
    }
    // else {
    //     const newQuantity = quantity + 1;
    //     appliedJobs[id] = newQuantity;
    // }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

const removeFromDb = id => {
    const appliedJobs = getappliedJobs();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
    }
}

const getappliedJobs = () => {
    let appliedJobs = {};

    //get the shopping cart from local storage
    const storedJobs = localStorage.getItem('applied-jobs');
    if (storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

const deleteappliedJobs = () => {
    localStorage.removeItem('applied-jobs');
}

export {
    addToDb,
    removeFromDb,
    getappliedJobs,
    deleteappliedJobs
}