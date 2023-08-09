import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Applied = () => {
    const applied = useLoaderData();
    console.log(applied);
    return (
        <div>

        </div>
    );
};

export default Applied;